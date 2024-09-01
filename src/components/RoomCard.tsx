import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

interface RoomCardProps {
    name: string;
    roomNo: number;
    floorNo: number;
    capacity: number;
    pricePerSlot: number;
    amenities: string[];
    roomImg: string[];
    _id: string
}

const RoomCard: React.FC<RoomCardProps> = ({
    name,
    roomNo,
    floorNo,
    capacity,
    pricePerSlot,
    amenities,
    roomImg,
    _id
}) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <motion.div
            className="rounded-lg overflow-hidden shadow-lg bg-white h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}>
            <Slider {...sliderSettings} className="room-img-slider">
                {roomImg?.map((img, index) => (
                    <div key={index}>
                        <img className="w-full h-64 object-cover" src={img} alt={`Room ${name}`} />
                    </div>
                ))}
            </Slider>
            <div className="px-3 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="px-2 text-base flex justify-around">
                    <Tag className='p-1 px-2 font-semibold font-roboto' color='blue'>Room No: {roomNo}</Tag>
                    <Tag className='p-1 px-2 font-semibold font-roboto' color='blue'>Floor No: {floorNo}</Tag>
                    <Tag className='p-1 px-2 font-semibold font-roboto' color='blue'> Capacity: {capacity}</Tag>
                    <Tag className='p-1 px-2 font-semibold font-roboto' color='blue'> Price: ${pricePerSlot} per slot</Tag>
                </div>
                <div className="mt-4 md:px-10">
                    <h4 className="font-semibold text-gray-800">Amenities:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                        {amenities?.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="px-6 pt-4 pb-10">
                <Link to={`/room-details/${_id}`}>
                    <motion.button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}>
                        See Details
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default RoomCard;
