/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

import { Button, Card, } from "antd";
import { toast } from "sonner";
import { useAddBookingMutation } from "../../redux/api/roomManagement/booking.api";
import { useState } from "react";
import Success from "./Success";


export type TBookingInfo = {
    phone: string | undefined;
    email: string | undefined;
    room: { _id: string; date: string, slots: string[] | any }[];
    totalAmount: number;
    user: string;
}


const CheckoutForm = ({ bookingInfo, total }: { bookingInfo: TBookingInfo; total: number }) => {

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [addbooking] = useAddBookingMutation()
    const [paymentId, setPaymentId] = useState("")
    const stripe = useStripe();
    const elements = useElements()

    let slotNumber = 0;
    bookingInfo?.room?.map(item => {
        slotNumber = slotNumber + item.slots.length;
    })




    const handleSubmit = async (event: React.FormEvent) => {
        const toastId = toast.loading("Data Proccessing...")
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement!
        });
        if (error) {
            toast.error(error.message, { id: toastId, duration: 4000 })
        } else {
            // send response to the server
            const response = await fetch("http://localhost:5000/api/confirm-payment", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ paymentId: paymentMethod.id, total })
            })
            const paymentResult = await response.json()

            if (paymentResult.success) {
                toast.success(paymentResult.message, { id: toastId })
                setPaymentId(paymentResult?.data?.id)
                const newBookingInfo = {
                    ...bookingInfo, paymentId: paymentResult?.data?.id, paymentTime: paymentResult?.data?.created, isConfirmed: "unconfirmed"
                }

                const res: any = await addbooking(newBookingInfo)
                if (res?.error) {
                    toast.error(res?.error?.message || res?.error?.data?.message, { id: toastId, duration: 4000 })
                } else {
                    toast.success(res?.date?.message, { id: toastId, duration: 4000 });

                    setIsSuccessModalOpen(true)
                }

            } else if (!paymentResult.success) {
                toast.error(paymentResult?.message, { id: toastId, duration: 4000 })
            }
            else {
                toast.error(paymentResult?.error?.message, { id: toastId, duration: 4000 })
            }
        }
    }
    return (
        <>
            <Card className="p-6 text-center bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <CardElement />
                    <Button type="primary"
                        size="large"
                        htmlType="submit"
                        disabled={!stripe}
                        className="w-full mt-4">Pay and Confirm</Button>
                </form>

            </Card>
            <Success id={paymentId} total={bookingInfo?.totalAmount} isSuccessModalOpen={isSuccessModalOpen} setIsSuccessModalOpen={setIsSuccessModalOpen} totalRoom={bookingInfo?.room?.length} totalSlot={slotNumber} />
        </>
    )
}

export default CheckoutForm