
import AddaRoomModal from "./AddRoomModal"
import AllRoomsTable from "./AllRoomsTable";



const Allrooms = () => {

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