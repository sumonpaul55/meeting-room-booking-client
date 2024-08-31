
import { motion } from "framer-motion";
import { CheckCircleOutlined, ClockCircleOutlined, CalendarOutlined, PhoneOutlined } from "@ant-design/icons";
import Section from "../../components/common/Section";

const services = [
    {
        icon: <CheckCircleOutlined style={{ fontSize: '3rem', color: '#1DA57A' }} />,
        title: "Real-Time Availability",
        description: "Get up-to-the-minute availability for all our meeting rooms."
    },
    {
        icon: <ClockCircleOutlined style={{ fontSize: '3rem', color: '#1DA57A' }} />,
        title: "Instant Booking",
        description: "Book your room instantly and receive confirmation within seconds."
    },
    {
        icon: <CalendarOutlined style={{ fontSize: '3rem', color: '#1DA57A' }} />,
        title: "Flexible Scheduling",
        description: "Easily adjust your bookings with our flexible scheduling options."
    },
    {
        icon: <PhoneOutlined style={{ fontSize: '3rem', color: '#1DA57A' }} />,
        title: "24/7 Support",
        description: "Our team is here to assist you around the clock, whenever you need it."
    }
];

const ServiceAdvertisement = () => {
    return (
        <Section className="py-20 bg-gray-100 px-2 text-center">
            <div className="container mx-auto ">
                <motion.h2
                    className="text-2xl md:text-4xl font-roboto font-bold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}>
                    Why Choose Roomify?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="flex justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mt-7 mb-3">{service.title}</h3>
                            <p className="text-lightText md:max-w-[80%] mx-auto">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ServiceAdvertisement;
