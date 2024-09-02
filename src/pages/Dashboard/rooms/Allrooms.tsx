import { useGetAllRoomsQuery } from "../../../redux/features/roomManagement/room.api"
import AddaRoomModal from "./AddRoomModal"
import AllRoomsTable from "./AllRoomsTable";



const Allrooms = () => {
    const { data: allrooms } = useGetAllRoomsQuery({})
    const room = allrooms?.data;
    console.log(room)
    return (
        <div>
            <div className="flex justify-between items-center border p-2 rounded">
                <h3 className="md:text-lg font-semibold xl:text-2xl">all rooms</h3>
                <AddaRoomModal />
            </div>
            <div>
                <AllRoomsTable />
            </div>
        </div>
    )
}

export default Allrooms