import AddaRoomModal from "./addRoomModal"



const Allrooms = () => {
    return (
        <div className="flex justify-between items-center border p-2 rounded">
            <h3 className="md:text-lg font-semibold xl:text-2xl">all rooms</h3>
            <AddaRoomModal />
        </div>
    )
}

export default Allrooms