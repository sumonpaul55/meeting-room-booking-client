import React from 'react';
import { motion } from 'framer-motion';

const OurStory: React.FC = () => {
    return (
        <motion.div
            className="bg-gray-800 text-white py-16 px-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            Roomify was founded with the belief that effective collaboration starts with the right space. Our journey began in 2020, when we recognized the challenges organizations face in managing their meeting spaces efficiently. Over the years, we have evolved from a simple booking tool to a comprehensive solution that integrates seamlessly with modern workplaces.
                        </p>
                        <p>
                            Our platform is built on the principles of simplicity, flexibility, and reliability, making it the go-to choice for businesses around the world. We pride ourselves on our ability to adapt to the unique needs of each client, offering customized solutions that cater to their specific requirements.
                        </p>
                        <p>
                            As we continue to grow, our commitment to providing exceptional service remains unwavering. We envision a future where every meeting space is fully optimized, where teams can collaborate without constraints, and where technology enhances rather than hinders the meeting experience. Join us on this journey as we revolutionize the way the world meets.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="path/to/room-image.jpg" // Replace with the actual image path
                        alt="Our Story Image"
                        className="rounded-lg shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default OurStory;
