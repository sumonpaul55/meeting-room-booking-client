import AllBooking from "./AllBooking"




const BookingMangement = () => {

    return (
        <div>
            <div className="flex justify-between items-center border p-2 rounded">
                <h3 className="md:text-lg font-semibold xl:text-2xl">All Booking</h3>
                {/* <CreateSlotModal /> */}
            </div>
            <div>
                <AllBooking />
            </div>
        </div>
    )
}

export default BookingMangement