import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/common/Section';

const faqs = [
    {
        question: 'How do I book a meeting room?',
        answer: 'Booking a meeting room is simple. Just select the room you want, choose your preferred time slot, and confirm your booking. You’ll receive an email confirmation with all the details.',
    },
    {
        question: 'Can I cancel or modify a booking?',
        answer: 'Yes, you can cancel or modify your booking up to 24 hours before the scheduled time. Simply log in to your account, go to "My Bookings," and select the option to cancel or modify.',
    },
    {
        question: 'What amenities are included in the meeting rooms?',
        answer: 'Our meeting rooms come equipped with a variety of amenities, including high-speed Wi-Fi, projectors, whiteboards, and conference call facilities. Some rooms may offer additional features, which are listed in the room details.',
    },
    {
        question: 'How do I know if a room is available?',
        answer: 'You can check room availability in real-time on our platform. Simply navigate to the room you’re interested in, and the available time slots will be displayed.',
    },
    {
        question: 'Is there a minimum booking time?',
        answer: 'The minimum booking time for most rooms is one hour. However, some rooms may have different minimum requirements, which will be clearly indicated when you make a booking.',
    },
    {
        question: 'What is the pricing structure?',
        answer: 'Pricing varies depending on the room and the amenities provided. You can see the price per slot when you select a room. We also offer discounts for bulk bookings and long-term usage.',
    },
];

const Faq: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Section className='py-20 px-4 md:px-0n bg-gray-100'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                    <div className="">
                        <div className="container mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-lg"
                                        onClick={() => toggleFAQ(index)}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <h3 className="text-xl font-semibold cursor-pointer flex justify-between items-center">
                                            {faq.question}
                                            <span>{activeIndex === index ? '-' : '+'}</span>
                                        </h3>
                                        {activeIndex === index && (
                                            <motion.p
                                                className="mt-4 text-gray-700"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        img
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Faq;
