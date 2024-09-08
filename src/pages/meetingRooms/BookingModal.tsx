/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button, Col, Flex, InputNumber, Modal, Select } from 'antd';
import { DatePicker, Form, Input } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { logOut, selectCurrentUser } from '../../redux/features/auth/authSlice';
import RoomForm from '../../components/forms/RoomForm';
import RoomInputNumber from '../../components/forms/RoomNumberInput';
import { TRoomData } from '../../types/roomtype';
import { useGetOneUserQuery } from '../../redux/features/auth/auth.api';
import { useGetAllSlotsQuery } from '../../redux/features/roomManagement/slot.api';
import dayjs from 'dayjs';
import { Tsolts } from '../Dashboard/slots/slotType';
import { RangePickerProps } from 'antd/es/date-picker';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useValidUser } from '../../useHooks/useValidUser';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const BookingModal = ({ room }: { room: TRoomData }) => {
    const [selectedDate, setSelectedDate] = useState<any>()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const localUser = useAppSelector(selectCurrentUser)
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
                title: "You are unauthorized",
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

    const selectedSlotsForBookings: string[] = []

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const bookingData = {
            ...data, roomId: room._id, user: user?._id, date: selectedDate
        }
        console.log(bookingData)
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

    // handle selected slots 
    const handleSelectedSlots = (value: string) => {
        selectedSlotsForBookings.concat(value)
    }

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
                <RoomForm onSubmit={onSubmit}>
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
                        <Form.Item label="Available Date" className='mt-2'>
                            <DatePicker size='large' disabledDate={disabledDate} onChange={(value) => setSelectedDate(value)} />
                        </Form.Item>
                        <RoomInputNumber name='phone' className='w-full' label="Phone" defaultValue={user?.phone} />

                    </Flex>
                    <Flex align='center' gap={5}>
                        <Col flex={1}>
                            <Form.Item label='Availalbe Slots'>
                                <Select mode='multiple' options={availableSlotsbySelectedDate} placeholder="Select Slots" size='large' disabled={!availableSlotsbySelectedDate.length} onChange={(value) => handleSelectedSlots(value)} />
                            </Form.Item>
                        </Col>
                        <Form.Item label="Price" className=''>
                            <InputNumber size='large' disabled value={"৳" + Number(room?.pricePerSlot) * Number(selectedSlotsForBookings?.length)} />
                        </Form.Item>
                    </Flex>
                    <div>
                        <Button htmlType='submit'>
                            Confirm Booking
                        </Button>
                    </div>
                </RoomForm>
            </Modal>
        </>
    );
};

export default BookingModal;