/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form"
import RoomForm from "../../../components/forms/RoomForm"
import RoomInput from "../../../components/forms/RoomInput"
import { Button, Col, Flex } from "antd"
import { useState } from "react"
import SelectSingleOrMultiImg from "../../../components/forms/RoomImage"
import { zodResolver } from "@hookform/resolvers/zod"
import RoomSelect from "../../../components/forms/RoomSelelct"
import createRoomValidation from "../../../schemaValidation/createRoomValidation"
import { uploadImageToCloudinary } from "../../../utils/uploadImagetoCloudinary"
import { toast } from "sonner"
import { useCreateRoomMutation } from "../../../redux/features/roomManagement/room.api"
import { TResponse } from "../../../types/ResponseType"
import { useNavigate } from "react-router-dom"

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


const Addroom = () => {
    const [file, setFile] = useState([])
    const [addRoom] = useCreateRoomMutation()
    // console.log(file)
    const navigate = useNavigate()
    // const [file]
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
            navigate("/admin/dashboard/all-rooms")
        }
    }
    return (
        <div>
            <h1 className="md:text-xl font-bold font-roboto xl:text-2xl">Add Rooms</h1>
            <Flex justify="center">
                <Col span={23} md={{ span: 14 }}>
                    <RoomForm onSubmit={handleSubmit} resolver={(zodResolver(createRoomValidation))}>
                        <RoomInput name="name" placeholder="Room Name" label="Room Name" />
                        <RoomInput type="number" className="remove-control" name="roomNo" placeholder="Room No" label="Room No" />
                        <RoomInput type="number" className="remove-control" name="floorNo" placeholder="Floor No" label="Floor No" />
                        <RoomInput type="number" className="remove-control" name="capacity" placeholder="Capacity" label="Capacity" />
                        <RoomInput type="number" className="remove-control" name="pricePerSlot" placeholder="Price Per Slot" label="Price Per Slot" />

                        <RoomSelect options={amenitiesOptions} mode="multiple" name="amenities" placeholder="Select amenities" label="Amenities" />

                        <SelectSingleOrMultiImg file={file} setFile={setFile} multiple={true} title="Image" label="Room Image" />

                        <Button htmlType="submit" disabled={!file} className="md:px-7 mb-5">Submit</Button>

                    </RoomForm>

                </Col>
            </Flex>
        </div >
    )
}

export default Addroom