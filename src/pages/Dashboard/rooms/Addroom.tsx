import { FieldValues, SubmitHandler } from "react-hook-form"
import RoomForm from "../../../components/forms/RoomForm"
import RoomInput from "../../../components/forms/RoomInput"
// import RoomImage from "../../../components/forms/RoomImage"
import { Button } from "antd"
import { useState } from "react"
import SelectSingleOrMultiImg from "../../../components/forms/RoomImage"


const Addroom = () => {
    const [file, setFile] = useState()
    // const [file]
    console.log(file)
    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (
        <RoomForm onSubmit={handleSubmit}>
            <RoomInput name="name" />
            <RoomInput type="number" className="remove-control" name="roomNo" placeholder="Room No" />
            <RoomInput type="number" className="remove-control" name="floorNo" placeholder="Floor No" />
            <RoomInput type="number" className="remove-control" name="capacity" placeholder="Capacity" />
            <RoomInput type="number" className="remove-control" name="pricePerSlot" placeholder="Price Per Slot" />
            <SelectSingleOrMultiImg file={file} setFile={setFile} multiple={true} title="Image" />
            <Button htmlType="submit" disabled={!file} className="md:px-7">Submit</Button>
        </RoomForm>
    )
}

export default Addroom