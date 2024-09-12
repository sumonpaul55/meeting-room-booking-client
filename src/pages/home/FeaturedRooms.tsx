
import { Button } from 'antd'
import Section from '../../components/common/Section'
import RoomCard from '../../components/RoomCard'
import { TRoomData } from '../../types/roomtype'
import { Link } from 'react-router-dom'
import Loading from '../../components/common/Loading'
import { useGetAllRoomsQuery } from '../../redux/api/roomManagement/room.api'

const FeaturedRooms = () => {
    const { data: rooms, isLoading } = useGetAllRoomsQuery({ limit: 6 })
    const allRoom = rooms?.data?.result


    return (
        <Section className='py-16 md:py-32 px-4 md:px-0'>
            <h2 className="text-2xl md:text-4xl font-roboto font-bold mb-12 featuredRooms text-white border-b md:pl-10 pl-3 pb-4 after:w-[80%] md:after:w-[60%] xl:after:w-[30%]">Our Featured Rooms</h2>
            {isLoading ? <Loading /> :
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 lg:gap-10 xl:gap-14'>
                        {
                            allRoom?.map((item: TRoomData, idx: number) => (
                                <div key={idx}>
                                    <RoomCard _id={item._id!} name={item.name} amenities={item.amenities} capacity={item.capacity} floorNo={item.floorNo} pricePerSlot={item.pricePerSlot} roomImg={item.roomImg!} roomNo={item.roomNo} />
                                </div>
                            ))
                        }
                    </div>
                    {
                        allRoom?.length > 6 &&
                        <div className='text-center mt-20'>
                            <Link to="/meeting-rooms">
                                <Button className='bg-primary text-white py-5 px-6 md:px-10 lg:px-14 md:text-xl font-roboto font-semibold'>See All</Button>
                            </Link>
                        </div>
                    }

                </div>
            }
        </Section>
    )
}

export default FeaturedRooms