
import { Button } from "antd";
import { motion } from "framer-motion";

const HeroSection = () => {
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
                            className="relative text-center text-white space-y-4 sm:space-y-7"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="sm:text-2xl md:text-4xl font-bold text-left">
                                Seamless Room Bookings, Anytime, Anywhere
                            </h1>
                            <p className="sm:mt-4 text-sm sm:text-lg md:text-xl text-left">
                                Find and reserve the perfect meeting space with ease. Experience hassle-free scheduling with Roomify.
                            </p>
                            <Button
                                type="primary"
                                className="mt-8"
                                size="large"
                                style={{ backgroundColor: "#1DA57A", borderColor: "#1DA57A" }}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
