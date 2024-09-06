/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button, Flex, Modal } from 'antd';
import { DatePicker, Form, Input } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
import RoomForm from '../../components/forms/RoomForm';
import RoomInputNumber from '../../components/forms/RoomNumberInput';
import { TRoomData } from '../../types/roomtype';
import { useGetOneUserQuery } from '../../redux/features/auth/auth.api';
import { useGetAllSlotsQuery } from '../../redux/features/roomManagement/slot.api';
import dayjs from 'dayjs';
import { Tsolts } from '../Dashboard/slots/slotType';
import { RangePickerProps } from 'antd/es/date-picker';
import RoomSelect from '../../components/forms/RoomSelelct';


const BookingModal = ({ room }: { room: TRoomData }) => {
    const [selectedDate, setSelectedDate] = useState<any>()
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

    const onSubmit = async (data) => {
        const bookingData = {
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
                        <Form.Item label="Available Date">
                            <DatePicker disabledDate={disabledDate} onChange={(value) => setSelectedDate(value)} />
                        </Form.Item>

                        <RoomInputNumber name='phone' className='w-full' label="Phone" defaultValue={user?.phone} />
                    </Flex>
                    <RoomSelect mode='multiple' options={availableSlotsbySelectedDate} name='slots' label='Availalbe Slots' placeholder="Select Slots" disabled={!availableSlotsbySelectedDate.length} />

                </RoomForm>
            </Modal>
        </>
    );
};

export default BookingModal;