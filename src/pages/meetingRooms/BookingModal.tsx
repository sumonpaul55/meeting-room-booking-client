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

const BookingModal = ({ room }: { room: TRoomData }) => {



    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const localUser = useAppSelector(selectCurrentUser)
    const { data } = useGetOneUserQuery(localUser?.email)
    const user = data?.data

    // get all available slot and date with a specific rooms
    const { data: slots } = useGetAllSlotsQuery({ roomId: room?._id })
    console.log(slots)

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
    return (
        <>
            <Button type="primary" size="large" onClick={showModal} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
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
                        <RoomDatePicker name="date" label="Available Date" />
                        <RoomInputNumber name='phone' className='w-full' label="Phone" defaultValue={user?.phone} />
                    </Flex>

                </RoomForm>
            </Modal>
        </>
    );
};

export default BookingModal;