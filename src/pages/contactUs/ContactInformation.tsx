import React from 'react';
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
const ContactInformation: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 bg-opacity-70 backdrop-blur bg-black text-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="flex items-center mb-4">
                <MailOutlined className="text-blue-500 mr-3" />
                <p className="text-lg">email@example.com</p>
            </div>
            <div className="flex items-center mb-4">
                <PhoneOutlined className="text-blue-500 mr-3" />
                <p className="text-lg">+123 456 7890</p>
            </div>
            <div className="flex items-center">
                <HomeOutlined className="text-blue-500 mr-3" />
                <p className="text-lg">123 Office Address, City, Country</p>
            </div>
        </motion.div>
    );
};

export default ContactInformation;
