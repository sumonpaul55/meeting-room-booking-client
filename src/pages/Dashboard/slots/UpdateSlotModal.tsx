/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button, Col, Flex, Form, Modal, TimePicker } from 'antd';
import RoomForm from '../../../components/forms/RoomForm';
import RoomSelect from '../../../components/forms/RoomSelelct';
import { toast } from 'sonner';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RoomDatePicker from '../../../components/forms/RoomDatePicker';
import { useGetAllRoomsQuery } from '../../../redux/features/roomManagement/room.api';
import { TResponse } from '../../../types/ResponseType';
import { FaEdit } from 'react-icons/fa';
import { Tsolts } from './slotType';
import { useUpdateSlotMutation } from '../../../redux/features/roomManagement/slot.api';

import dayjs from 'dayjs';


const UpdateslotModal = (slotData: Tsolts) => {
    const { slotData: slots }: any = slotData;
    const [startTime, setStarttime] = useState("")
    const [endTime, setEndtime] = useState("")
    const [updateSlote] = useUpdateSlotMutation()
    const { data, isLoading } = useGetAllRoomsQuery({})
    const allrooms = data?.data?.result;


    const roomsOptions: { label: string; value: string }[] = []
    allrooms?.forEach((item: { name: string, _id: string }) => {

        roomsOptions.push({
            value: item?._id,
            label: `${item?.name}`,
        })
    })

    // console.log(file)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        // console.log(data)
        const updateSlotData = {
            ...data, endTime, startTime
        }
        const id = toast.loading("Creating....")


        const res = await updateSlote({ id: slots?._id, updateSlotData }) as TResponse<any>
        if (res.error) {
            toast.error(res?.error?.data?.message, { id })
        } else {
            toast.success(res?.data?.message, { id });
            setIsModalOpen(false);
        }
    }

    const handleChange: any = (_time: string, timeString: string) => {
        setStarttime(timeString[0])
        setEndtime(timeString[1])
    };
    const defaultDate = dayjs(slots?.date);
    const defaultStartTime = dayjs(slots?.startTime, "HH:mm");
    const defaultEndTime = dayjs(slots?.endTime, "HH:mm");
    return (
        <>
            <Button type="primary" onClick={showModal}>
                <FaEdit />
            </Button>
            <Modal title="Add New Rooms" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Flex justify="center">
                    <Col span={24}>
                        <RoomForm onSubmit={handleSubmit}>
                            <RoomSelect defaultOpen={true} disabled={isLoading} options={roomsOptions} name="room" label="Select Rooms" defaultValue={[{ label: slots?.room?.name, value: slots?.room?._id }]} />

                            <RoomDatePicker label='Select Date' name='date' defaultValue={defaultDate} format="YYYY-MM-DD" />

                            <Form.Item label="Start Time and End Time" rules={[{ required: true, message: "Please Select Time" }]}>
                                <TimePicker.RangePicker format="HH:mm" className='w-full' onChange={handleChange} defaultValue={[defaultStartTime, defaultEndTime]} />
                            </Form.Item>

                            <Button htmlType="submit" className="md:px-7 mb-5">Submit</Button>
                        </RoomForm>

                    </Col>
                </Flex>
            </Modal>
        </>
    );
};

export default UpdateslotModal;