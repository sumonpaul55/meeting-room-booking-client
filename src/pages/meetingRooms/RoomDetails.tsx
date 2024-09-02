
import { Carousel } from 'antd'; // Ant Design's Carousel component
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from 'antd';
import { useGetAroomsQuery } from '../../redux/features/roomManagement/room.api';
import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import Section from '../../components/common/Section';

// interface RoomDetailsProps {
//     name: string;
//     roomNo: number;
//     floorNo: number;
//     capacity: number;
//     pricePerSlot: number;
//     amenities: string[];
//     roomImg: string[];
// }

const RoomDetails = () => {
    const params = useParams()
    const { data, isLoading, isFetching } = useGetAroomsQuery(params?.id)
    const room = data?.data;


    if (isLoading || isFetching) {
        return <Loading />
    }
    return (
        <Section className='py-20'>

            <div className="container mx-auto p-4">
                <div className="bg-white shadow-lg rounded-lg">
                    {/* Image Carousel */}
                    <div className="w-full">
                        <Carousel autoplay arrows={true}>
                            {room?.roomImg.map((imgUrl: string, index: number) => (
                                <div key={index}>
                                    <img
                                        src={imgUrl}
                                        alt={`Room Image ${index + 1}`}
                                        className="w-full mx-auto rounded-md max-h-[600px] object-cover"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Room Information */}
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{room?.name}</h1>
                        <p className="text-gray-600 mb-2">Room No: {room?.roomNo} | Floor: {room?.floorNo}</p>
                        <p className="text-gray-600 mb-2">Capacity: {room?.capacity} people</p>
                        <p className="text-2xl font-semibold text-gray-800 mb-6">Price Per Slot: ${room?.pricePerSlot}</p>

                        {/* Amenities */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Amenities</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {room?.amenities.map((amenity: string, index: number) => (
                                    <li key={index} className="flex items-center">
                                        <FaCheckCircle className="text-blue-500 mr-2" />
                                        <span className="text-gray-600">{amenity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="flex justify-start">
                            <Button
                                type="primary"
                                size="large"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default RoomDetails;
