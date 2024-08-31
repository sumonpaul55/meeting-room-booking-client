import React from 'react';
import { Form, Input, Button } from 'antd';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-black text-white shadow-lg rounded-lg bg-opacity-80 backdrop-blur"
        >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <Form layout="vertical">
                <Form.Item label="Name" name="name">
                    <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type="email" placeholder="Your Email" />
                </Form.Item>
                <Form.Item label="Subject" name="subject">
                    <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item label="Message" name="message">
                    <Input.TextArea rows={4} placeholder="Your Message" />
                </Form.Item>
                <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white">
                    Send Message
                </Button>
            </Form>
        </motion.div>
    );
};

export default ContactForm;
