import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import { DatePicker, Select, Form, Input } from 'antd';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';

const BookingModal: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useAppSelector(selectCurrentUser)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleDateChange = (date: any) => {
        setSelectedDate(date.format('YYYY-MM-DD'));
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Book Now
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form layout="vertical">
                    {/* Date Picker */}
                    <Form.Item label="Booking Date">
                        <DatePicker onChange={handleDateChange} />
                    </Form.Item>

                    {/* Time Slot Selection */}
                    <Form.Item label="Available Time Slots">
                        <Select placeholder="Select a time slot">
                            {availableSlots.map(slot => (
                                <Select.Option key={slot.id} value={slot.time}>
                                    {slot.time}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    {/* User Information Form */}
                    <Form.Item label="Name">
                        <Input defaultValue={user?.name} disabled />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input defaultValue={user?.email} disabled />
                    </Form.Item>
                    <Form.Item label="Contact Number">
                        <Input defaultValue={user?.phone} disabled />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default BookingModal;