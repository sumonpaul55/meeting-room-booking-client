/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table, Tag } from "antd";
import { useConfirmationBookingMutation, useGetAllBookingQuery } from "../../../redux/api/roomManagement/booking.api"
import moment from "moment";
import { toast } from "sonner";
import { TResponse } from "../../../types/ResponseType";

const AllBooking = () => {
    const { data } = useGetAllBookingQuery({})
    const [confirmBooking] = useConfirmationBookingMutation()
    const bookingData = data?.data?.map((booking: any, idx: number) => {
        return { ...booking, key: idx, no: idx + 1 }
    })
    const Tablecolumn = [
        {
            title: "No",
            dataIndex: "no",
            render: (no: number) => <p className="font-semibold">{no}</p>
        },
        {
            title: "User",
            dataIndex: ["user", "name"],
            render: (name: string) => <p className="font-roboto font-semibold">{name}</p>

        },
        {
            title: "Room Name",
            dataIndex: "room",
            render: ((room: any) => {
                return room?.map((item: { _id: { name: string | number | boolean | undefined } }, idx: number) => {
                    return <p key={idx} className="font-semibold">{item?._id?.name}</p>
                })
            })
        },
        {
            title: "Date",
            dataIndex: "room",
            render: ((room: any) => {
                return room?.map((item: any, idx: number) => {
                    return <p key={idx} className="font-semibold">{moment(item?.date).format("DD-MMM-YYYY")}</p>
                })
            })
        },
        {
            title: "Slots Time",
            dataIndex: "room",
            render: ((room: any) => {
                return room?.map((item: any) => {
                    const slots = item?.slots;

                    return slots?.map((item: any, idx: number) => {
                        return <p key={idx}>{`${item?.startTime}-${item?.endTime}`}</p>
                    })
                })
            })
        },
        {
            title: "Status",
            dataIndex: "isConfirmed",
            render: (isConfirmed: string) => <Tag color={isConfirmed === "unconfirmed" ? "blue" : isConfirmed === "confirmed" ? "indigo" : "pink"}>{isConfirmed}</Tag>
        },
        {
            title: "Action",
            render: (allData: any) => {

                return <>
                    {
                        allData?.isConfirmed === "unconfirmed" && <div className="flex gap-1 items-center">
                            <Button className="bg-primary text-white" onClick={() => handleConfirm(allData?._id, allData?.isConfirmed)}>Confirm</Button>
                            <Button className="bg-danger text-white">Reject</Button>
                        </div>
                    }
                </>
            }
        }
    ]
    // handle confirm
    const handleConfirm = async (id: string, status: string) => {
        const newStatus = status === "unconfirmed" ? "confirmed" : status === "confirmed" ? "unconfirmed" : "canceled";

        const toastId = toast.loading("Changing...");
        const res = await confirmBooking({ id: id, status: newStatus }) as TResponse<any>;
        console.log(res?.data?.message)
        if (res.data) {
            toast.success(res?.data?.message, { id: toastId })
        }
        else {
            toast.error(res?.error?.message || res?.error?.data?.message, { id: toastId })
        }
    }

    return (
        <>
            <Table dataSource={bookingData} columns={Tablecolumn} />
        </>
    )
}

export default AllBooking