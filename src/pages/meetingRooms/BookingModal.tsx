/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button, Flex, Modal } from 'antd';
import { DatePicker, Select, Form, Input } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
import RoomForm from '../../components/forms/RoomForm';
import RoomInputNumber from '../../components/forms/RoomNumberInput';
import { TRoomData } from '../../types/roomtype';
import { useGetOneUserQuery } from '../../redux/features/auth/auth.api';
import RoomDatePicker from '../../components/forms/RoomDatePicker';
import { useGetAllSlotsQuery } from '../../redux/features/roomManagement/slot.api';
import dayjs from 'dayjs';
import { Tsolts } from '../Dashboard/slots/slotType';
import { RangePickerProps } from 'antd/es/date-picker';
const BookingModal = ({ room }: { room: TRoomData }) => {



    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const localUser = useAppSelector(selectCurrentUser)
    const { data } = useGetOneUserQuery(localUser?.email)
    const user = data?.data

    // get all available slot and date with a specific rooms
    const { data: RoomwiseSlot } = useGetAllSlotsQuery({ roomId: room?._id })
    const slots = RoomwiseSlot?.data;

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleDateChange = (date: any) => {
        setSelectedDate(date.format('YYYY-MM-DD'));
    };
    const onSubmit = async (data) => {
        const bookingData = {
        }
    }


    const availableDates: any[] = []; // Dates to enable

    slots?.map((date: Tsolts) => {
        const formattedDate = dayjs(date?.date).format('YYYY-MM-DD'); // Ensure consistent formatting
        if (!availableDates.includes(formattedDate)) {
            availableDates.push(formattedDate);
        }
    });

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        const formattedCurrentDate = dayjs(current).format('YYYY-MM-DD'); // Format the current date to match availableDates
        // Disable all dates except for the availableDates and prevent selecting past dates
        return current && (
            current < dayjs().endOf('day') || !availableDates.includes(formattedCurrentDate)
        );
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
                        <RoomDatePicker name="date" label="Available Date" disabledDate={disabledDate} />

                        <RoomInputNumber name='phone' className='w-full' label="Phone" defaultValue={user?.phone} />
                    </Flex>

                </RoomForm>
            </Modal>
        </>
    );
};

export default BookingModal;