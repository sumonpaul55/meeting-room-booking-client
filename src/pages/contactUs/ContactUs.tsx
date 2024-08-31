import React from 'react';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const ContactUs: React.FC = () => {
    return (
        <div className='min-h-screen'>
            <div className='py-20' style={{ background: 'url(contact.jpg)', backgroundAttachment: "fixed", backgroundSize: "100%", backgroundPosition: "center" }}>
                <div className="flex items-center justify-center contact">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        <ContactInformation />
                        <ContactForm />
                    </div>
                </div>
                <div className="container mx-auto bg-white bg-opacity-90 backdrop-blur mt-16 py-16 rounded-lg shadow-lg ">
                    <div className="mt-5 p-4 text-center">
                        <h2 className="text-xl lg:text-5xl font-bold mb-6 text-blue-600">Follow Us</h2>
                        <div className="flex justify-center space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-5xl hover:text-blue-800">
                                <FacebookOutlined />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-5xl hover:text-blue-600">
                                <TwitterOutlined />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-5xl hover:text-blue-900">
                                <LinkedinOutlined />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-5xl hover:text-pink-700">
                                <InstagramOutlined />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
