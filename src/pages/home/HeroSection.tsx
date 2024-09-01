
import { Button } from "antd";
import { motion } from "framer-motion";
// import { useGetAllRoomsQuery } from "../../redux/features/roomManagement/room.api";

const HeroSection = () => {
    // const { data: rooms } = useGetAllRoomsQuery(undefined);

    return (
        <div
            className="relative items-center flex md:items-start h-[50vh] sm:h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url('banner.jpg')` }} // Replace with your image path
        >
            <div className="absolute inset-0 overlay"></div> {/* Dark overlay */}

            <div className="container mx-auto">
                <div className="text-left lg:mt-32 sm:mt-16 p-3 md:p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <motion.div
                            className="relative text-white space-y-4 sm:space-y-7 md:px-10"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="sm:text-2xl md:text-4xl font-bold text-left">
                                Seamless Room Bookings, Anytime, Anywhere
                            </h1>
                            <p className="sm:mt-4 text-sm sm:text-base md:text-lg text-left font-roboto text-gray-300">
                                Easily find and reserve the perfect meeting space tailored to your needs. With Roomify, experience a seamless, hassle-free scheduling process that takes the stress out of booking. Whether you're planning a quick meeting or a full-day event, Roomify ensures you have the right space, exactly when you need it.
                            </p>
                            <Button
                                type="primary"
                                className="mt-8"
                                size="large">
                                Book Now
                            </Button>
                            <div>

                            </div>
                        </motion.div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
