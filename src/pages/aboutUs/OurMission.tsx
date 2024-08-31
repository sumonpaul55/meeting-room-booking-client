import React from 'react';
import { motion } from 'framer-motion';

const OurMission: React.FC = () => {
    return (
        <motion.div
            className="bg-blue-500 text-white py-16 px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                    At Roomify, our mission is to provide seamless and efficient meeting room booking solutions that empower teams to collaborate effectively. We aim to create a flexible, user-friendly platform that adapts to the unique needs of every organization.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    We believe in the power of collaboration and innovation. Our goal is to make every meeting a productive and enjoyable experience by offering top-notch amenities, intuitive interfaces, and a robust backend that guarantees reliability. We are committed to continuous improvement, ensuring that our platform evolves alongside the ever-changing needs of modern workplaces.
                </p>
            </div>
        </motion.div>
    );
};

export default OurMission;
