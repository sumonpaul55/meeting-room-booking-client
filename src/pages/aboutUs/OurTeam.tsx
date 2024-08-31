import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Alice Johnson',
        role: 'CEO',
        imageUrl: 'path/to/image1.jpg',
        bio: 'Alice is a visionary leader with a deep passion for fostering innovation. With over 15 years in the tech industry, she has a proven track record of driving growth and success. Her strategic thinking and empathetic leadership style make her a pillar of Roomify.',
    },
    {
        name: 'Bob Smith',
        role: 'CTO',
        imageUrl: 'path/to/image2.jpg',
        bio: 'Bob is the tech genius behind Roomify, ensuring our platform runs smoothly and efficiently. With a background in software engineering and AI, he is constantly pushing the boundaries of what technology can achieve. Bob’s innovative solutions keep Roomify ahead of the curve.',
    },
    {
        name: 'Clara Davis',
        role: 'Chief Marketing Officer',
        imageUrl: 'path/to/image3.jpg',
        bio: 'Clara is the creative force driving our brand’s presence in the market. She has a knack for storytelling and a passion for building strong customer relationships. With her expertise in digital marketing, Clara ensures that Roomify’s message reaches the right audience.',
    },
    {
        name: 'David Lee',
        role: 'Chief Operations Officer',
        imageUrl: 'path/to/image4.jpg',
        bio: 'David oversees the daily operations at Roomify, ensuring that everything runs like clockwork. His attention to detail and process-oriented mindset have been key in scaling our operations. David’s ability to solve complex logistical challenges is unmatched.',
    },
    {
        name: 'Emily Brown',
        role: 'Head of Customer Support',
        imageUrl: 'path/to/image5.jpg',
        bio: 'Emily is dedicated to making sure every Roomify user has a seamless experience. With a background in customer service and support, she leads a team committed to solving problems and delivering exceptional service. Emily’s focus on customer satisfaction drives our success.',
    },
    {
        name: 'Frank Green',
        role: 'Chief Product Officer',
        imageUrl: 'path/to/image6.jpg',
        bio: 'Frank is the mastermind behind Roomify’s innovative features and products. He combines his deep understanding of user needs with a keen eye for design. Frank’s leadership in product development ensures that Roomify continues to evolve and meet market demands.',
    },
];


const MeetTheTeam: React.FC = () => {
    return (
        <div className="py-16 px-8 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-blue-500 mb-2">{member.role}</p>
                            <p className="text-gray-700">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;
