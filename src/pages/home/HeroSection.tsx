
import { Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGetAllRoomsQuery } from "../../redux/api/roomManagement/room.api";
import { TRoomData } from "../../types/roomtype";
// import { useGetAllRoomsQuery } from "../../redux/features/roomManagement/room.api";

const HeroSection = () => {
    // const { data: rooms } = useGetAllRoomsQuery(undefined);
    const { data } = useGetAllRoomsQuery({ limit: 4 })
    const rooms = data?.data?.result
    return (
        <div
            className="relative items-center flex md:items-center h-full md:h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url('banner.jpg')` }} // Replace with your image path
        >
            <div className="absolute inset-0 overlay"></div> {/* Dark overlay */}
            <div className="container mx-auto">
                <div className="p-3">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                            {
                                rooms?.length &&
                                rooms?.map((item: TRoomData, idx: number) => {

                                    return <div key={idx} className="p-4 md:p-6 bg-blue-800 bg-opacity-70 backdrop-blur-[3px] text-white rounded-md">
                                        <Link to={`/room-details/${item?._id}`}>
                                            <div className="space-y-3">
                                                <h1 className="font-semibold md:text-lg font-poppins">Name: <span>{item?.name}</span></h1>
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
                                                    <div>
                                                        <h3 className="font-medium font-roboto text-sm">Room No: <span>{item?.roomNo}</span></h3>
                                                        <h3 className="font-medium font-roboto text-sm">Floor No: <span>{item?.floorNo}</span></h3>
                                                        <h3 className="font-medium font-roboto text-sm">Capacity: <span>{item?.capacity}</span></h3>
                                                    </div>
                                                    <div>
                                                        <img src={item?.roomImg[0]} alt={item?.name} className="rounded" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                        <motion.div
                            className="relative text-white space-y-4 sm:space-y-7 md:px-10 text-right"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="sm:text-2xl md:text-4xl font-bold text-right">
                                Seamless Room Bookings, Anytime, Anywhere
                            </h1>
                            <p className="sm:mt-4 text-sm sm:text-base md:text-lg text-right font-roboto text-gray-300">
                                Easily find and reserve the perfect meeting space tailored to your needs. With Roomify, experience a seamless, hassle-free scheduling process that takes the stress out of booking. Whether you're planning a quick meeting or a full-day.
                            </p>
                            <Link to="/meeting-rooms">
                                <Button
                                    type="primary"
                                    className="mt-8"
                                    size="large">
                                    Book Now
                                </Button>
                            </Link>
                            <div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
