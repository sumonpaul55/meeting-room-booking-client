import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadphones, FaWifi, FaMapMarkerAlt, FaCogs, FaCalendarAlt, FaCouch } from 'react-icons/fa';
import Section from '../../components/common/Section';

const WhyChooseUs: React.FC = () => {
    const features = [
        {
            icon: <FaCalendarAlt className="text-blue-500 text-4xl mb-2" />,
            title: "Flexible Booking Options",
            description: "Book rooms by the hour, day, or week with flexible options that suit your needs.",
        },
        {
            icon: <FaHeadphones className="text-blue-500 text-4xl mb-2" />,
            title: "Customer Support",
            description: "Our 24/7 customer support ensures that all your queries and issues are resolved promptly.",
        },
        {
            icon: <FaWifi className="text-blue-500 text-4xl mb-2" />,
            title: "High-Speed Internet",
            description: "Stay connected with high-speed Wi-Fi in all our meeting rooms.",
        },
        {
            icon: <FaMapMarkerAlt className="text-blue-500 text-4xl mb-2" />,
            title: "Central Location",
            description: "Conveniently located in the heart of the city, our meeting rooms are easily accessible.",
        },
        {
            icon: <FaCouch className="text-blue-500 text-4xl mb-2" />,
            title: "Modern Amenities",
            description: "Our rooms are equipped with modern amenities like ergonomic chairs, large screens, and more.",
        },
        {
            icon: <FaCogs className="text-blue-500 text-4xl mb-2" />,
            title: "Customizable Layouts",
            description: "Choose from a variety of room layouts that can be customized to fit your event's needs.",
        }
    ];

    return (
        <Section className='py-20 px-3 md:px-0'>
            <div className="mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold mb-8 text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Why Choose Us?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-200 rounded-lg shadow-lg p-6 w-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col items-center">
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;
