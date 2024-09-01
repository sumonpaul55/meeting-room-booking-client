/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Col, Flex, Modal } from 'antd';
import RoomForm from '../../../components/forms/RoomForm';
import RoomInput from '../../../components/forms/RoomInput';
import RoomSelect from '../../../components/forms/RoomSelelct';
import SelectSingleOrMultiImg from '../../../components/forms/RoomImage';
import { toast } from 'sonner';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { uploadImageToCloudinary } from '../../../utils/uploadImagetoCloudinary';
import { useCreateRoomMutation } from '../../../redux/features/roomManagement/room.api';
import { TResponse } from '../../../types/ResponseType';
import { zodResolver } from '@hookform/resolvers/zod';
import createRoomValidation from '../../../schemaValidation/createRoomValidation';



const amenitiesOptions = [
    { value: "whiteboard", label: "Whiteboard" },
    { value: "projector", label: "Projector" },
    { value: "videoConferencing", label: "Video Conferencing" },
    { value: "soundSystem", label: "Sound System" },
    { value: "airConditioning", label: "Air Conditioning" },
    { value: "wifi", label: "High-Speed WiFi" },
    { value: "television", label: "Television" },
    { value: "coffeeMachine", label: "Coffee Machine" },
    { value: "printer", label: "Printer" },
    { value: "flipChart", label: "Flip Chart" },
    { value: "loungeArea", label: "Lounge Area" },
    { value: "naturalLight", label: "Natural Light" },
    { value: "catering", label: "Catering Service" },
    { value: "reception", label: "Reception Desk" },
    { value: "parking", label: "Parking Space" },
];
const AddaRoomModal: React.FC = () => {
    const [file, setFile] = useState([])
    const [addRoom] = useCreateRoomMutation()
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
        const id = toast.loading("Uploading....")
        const imageUrl = [];
        // send data to cloudinary
        for (let i = 0; i < file.length; i++) {
            const image = file[i];
            const imgurl = await uploadImageToCloudinary(image)
            imageUrl.push(imgurl)
            if (i === file.length - 1) {
                toast.success("Image uploaded", { id })
            }
        }
        const roomData = {
            ...data,
            roomImg: imageUrl,
        };
        const res = await addRoom(roomData) as TResponse<any>
        if (res.error) {
            toast.error(res?.error?.data?.message, { id })
        } else {
            toast.success(res?.data?.message, { id });
            setIsModalOpen(false);
        }
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add New Rooms
            </Button>
            <Modal title="Add New Rooms" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Flex justify="center">
                    <Col span={24}>
                        <RoomForm onSubmit={handleSubmit} resolver={(zodResolver(createRoomValidation))}>
                            <RoomInput name="name" placeholder="Room Name" label="Room Name" />
                            <Flex justify='space-between' gap={2}>
                                <RoomInput type="number" className="remove-control" name="roomNo" placeholder="Room No" label="Room No" />
                                <RoomInput type="number" className="remove-control" name="floorNo" placeholder="Floor No" label="Floor No" />
                            </Flex>
                            <Flex justify='space-between' gap={2}>
                                <RoomInput type="number" className="remove-control" name="capacity" placeholder="Capacity" label="Capacity" />
                                <RoomInput type="number" className="remove-control" name="pricePerSlot" placeholder="Price Per Slot" label="Price Per Slot" />

                            </Flex>
                            <RoomSelect options={amenitiesOptions} mode="multiple" name="amenities" placeholder="Select amenities" label="Amenities" />

                            <SelectSingleOrMultiImg file={file} setFile={setFile} multiple={true} title="Image" label="Room Image" />

                            <Button htmlType="submit" disabled={!file} className="md:px-7 mb-5">Submit</Button>

                        </RoomForm>

                    </Col>
                </Flex>
            </Modal>
        </>
    );
};

export default AddaRoomModal;