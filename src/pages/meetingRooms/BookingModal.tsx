/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button, Col, Flex, FormProps, InputNumber, Modal, Select } from 'antd';
import { DatePicker, Form, Input } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { logOut, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { TRoomData } from '../../types/roomtype';
import { useGetOneUserQuery } from '../../redux/features/auth/auth.api';
import { useCreateSlotsMutation, useGetAllSlotsQuery } from '../../redux/features/roomManagement/slot.api';
import dayjs from 'dayjs';
import { Tsolts } from '../Dashboard/slots/slotType';
import { RangePickerProps } from 'antd/es/date-picker';
import Swal from 'sweetalert2';
import { useValidUser } from '../../useHooks/useValidUser';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TbookingForm, TResponse } from '../../types/ResponseType';
import { toast } from 'sonner';


const BookingModal = ({ room }: { room: TRoomData }) => {
    const [createSlot] = useCreateSlotsMutation()

    const [selectedDate, setSelectedDate] = useState<any>()
    const [userAddress, setUserAddress] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const localUser = useAppSelector(selectCurrentUser)
    const [selectedSlots, setSelectedSlots] = useState<string[]>([])
    const { data } = useGetOneUserQuery(localUser?.email)
    const user = data?.data
    const dispatch = useDispatch()
    // get all available slot and date with a specific rooms

    const { data: RoomwiseSlot } = useGetAllSlotsQuery({ roomId: room?._id })
    const slots = RoomwiseSlot?.data;
    const validUser = useValidUser()
    const navigate = useNavigate()
    const showModal = () => {
        if (validUser) {
            setIsModalOpen(true);
        } else {
            dispatch(logOut())
            Swal.fire({
                title: "Please Login and Register first",
                showDenyButton: true,
                confirmButtonText: "Login",
                denyButtonText: `Go Home`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate("/login")
                } else if (result.isDenied) {
                    navigate("/")
                }
            });
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // submit form
    const onFinish: FormProps<TbookingForm>['onFinish'] = async (data) => {


        const bookingData = {
            ...data, room: room._id, user: user?._id, date: selectedDate, slots: selectedSlots, address: userAddress || user?.address
        }
        const res = await createSlot(bookingData) as TResponse<any>
        console.log(res)
        if (res.error) {
            toast.error(res?.error?.message || res?.error?.data?.message)
        } else {
            toast.success(res?.data?.message)
        }
    }

    const availableDates: any[] = []; // Dates to enable
    const availableSlotsbySelectedDate: { label: string, value: string }[] = []

    slots?.map((slots: Tsolts) => {
        const formattedSelectedDate = dayjs(selectedDate).format('YYYY-MM-DD'); // Ensure consistent formatting
        const formattedAvailableDate = dayjs(slots?.date).format('YYYY-MM-DD'); // Ensure consistent formatting
        // console.log(formattedAvailableDate)
        if (!availableDates.includes(formattedAvailableDate)) {
            availableDates.push(formattedAvailableDate);
        }
        if (formattedSelectedDate === formattedAvailableDate && slots?.isBooked === false) {
            availableSlotsbySelectedDate.push({
                label: `${slots?.startTime} - ${slots?.endTime}`,
                value: slots?._id
            })
            // set the total price of 
        }
    });

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        const formattedCurrentDate = dayjs(current).format('YYYY-MM-DD'); // Format the current date to match availableDates
        // Disable all dates except for the availableDates and prevent selecting past dates
        return !availableDates.includes(formattedCurrentDate)
    };
    return (
        <>
            <Button type="primary" onClick={showModal} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full px-4 md:px-6 py-0 rounded-lg">
                Book Now
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
                <Form onFinish={onFinish} layout='vertical' initialValues={{
                    phone: `${user?.phone}`,
                    address: `${user?.address}`,
                }}>
                    {/* Date Picker */}
                    <Flex gap={5} justify='space-between'>
                        <Form.Item label="Name" className='w-full'>
                            <Input defaultValue={localUser?.name} disabled />
                        </Form.Item>
                        <Form.Item label="Email" className='w-full'>
                            <Input defaultValue={localUser?.email} disabled />
                        </Form.Item>
                    </Flex>
                    <Flex gap={5} justify='space-between' align='center'>
                        <Form.Item label="Available Date" className='mt-2' rules={[{ required: true, message: "Pick a date" }]} name="date">
                            <DatePicker size='large' disabledDate={disabledDate} onChange={(value) => setSelectedDate(value)} />
                        </Form.Item>
                        <Form.Item label="Phone" rules={[{ required: true, message: "Enter Phone" }]} name='phone'>
                            <InputNumber className='w-full' placeholder='Phone' />
                        </Form.Item>
                    </Flex>
                    <Flex align='center' gap={5}>
                        <Col flex={1}>
                            <Form.Item label='Availalbe Slots' rules={[{ required: true, message: 'Please select slots!' }]} name="selectedSlots">
                                <Select mode='multiple' options={availableSlotsbySelectedDate} placeholder="Select Slots" size='large' disabled={!availableSlotsbySelectedDate.length} onChange={(value) => setSelectedSlots(value)} />
                            </Form.Item>
                        </Col>
                        <Form.Item label="Price" name="total">
                            <h3 className='border p-2 rounded min-w-[100px]'>${Number(room?.pricePerSlot) * Number(selectedSlots?.length)}</h3>
                        </Form.Item>
                    </Flex>
                    <Form.Item name="address" label="Address">
                        <Input placeholder='Enter Your Address' />
                    </Form.Item>

                    <div>
                        <Button htmlType='submit'>
                            Confirm Booking
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default BookingModal;