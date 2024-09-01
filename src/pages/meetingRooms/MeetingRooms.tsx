/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { useGetAllRoomsQuery } from "../../redux/features/roomManagement/room.api"
import Loading from "../../components/common/Loading"
import { Input, Form, Select, SelectProps, Button } from "antd"
import { RoomData } from "../../types/roomtype"
import { FaBars } from "react-icons/fa"
import RoomCard from "../../components/RoomCard"
import { useDebounce } from "../../useHooks/useDebounce"


const MeetingRooms = () => {
    const [sideOpen, setSideOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [range, setRange] = useState<string | undefined>()
    const [capacity, setCapacity] = useState("")
    // const [searchParams, setSearchParams] = useState<[] | undefined>(undefined)
    const srcDebounce = useDebounce(search, 1000)

    const { data, isLoading } = useGetAllRoomsQuery({ search: srcDebounce, range, capacity });
    const rooms = data?.data;

    if (isLoading) {
        return <Loading />
    }
    const capaCityOptions: SelectProps['options'] = []

    // Remove duplicates based on 'value'
    const uniqueArray = rooms?.filter((item: RoomData, index: number, self: RoomData[]) =>
        index === self.findIndex((t: any) => t.capacity === item.capacity)
    );
    uniqueArray?.map((item: RoomData) => {
        capaCityOptions.push({
            value: item.capacity,
            label: item.capacity
        })
    })


    let maxValue = 0
    rooms?.forEach((item: any) => {
        if (maxValue < item?.pricePerSlot) {
            maxValue = item.pricePerSlot
        }
    })
    const priceFilter: SelectProps['options'] = [
        {
            value: `0-5000`,
            label: `0-5000`,
        },
        {
            value: `5000-10000`,
            label: `5000-10000`,
        },
        {
            value: `10000-20000`,
            label: `10000-20000`,
        },
        {
            value: `20000-30000`,
            label: `20000-30000`,
        },
        {
            value: `30000+`,
            label: `30000+`,
        },
    ];



    // handle reset
    // const handleReset = () => {
    //     setBrand({})
    //     setSearch("")
    //     setRange(undefined)
    //     setSelectItem([])
    //     setsort("")
    //     setSortByRang("Sort By Price")
    // }
    return (
        <>
            <section className="px-4 sm:px-10 md:px-20">
                <div className={`text-end mt-2 fixed z-50 bg-transparent backdrop:blur-sm top-12 ${sideOpen ? "left-0" : ""}`}>
                    <Button className="" onClick={() => setSideOpen(!sideOpen)}><FaBars /></Button>
                </div>
                <div className="gap-8 relative min-h-screen ">
                    <div className={`bg-white md:w-[20%] absolute h-full duration-300 z-30 ${sideOpen ? "-left-full" : null} border p-3`}>
                        <div className="py-1 grid grid-cols-1 md:gap-4 mt-10">
                            <Form.Item label="Search" layout="vertical" className="font-bold">
                                <Input onChange={(e) => setSearch(e.target.value)} placeholder="Search Room Name & amenities" />
                            </Form.Item>
                            <Form.Item label="Capacity" layout="vertical" className="font-bold">
                                <Select options={capaCityOptions} placeholder="Filter by capacity" onChange={(value) => setCapacity(value)} />
                            </Form.Item>
                            <Form.Item label="Price Range" layout="vertical" className="font-bold">
                                <Select onChange={(value) => setRange(value)} options={priceFilter} placeholder="Search By Room Name" />
                            </Form.Item>
                            <Form.Item label="Price Range" layout="vertical" className="font-bold">
                                <Select options={[{ value: "pricePerSlot", label: "Low To High" }, { value: "-pricePerSlot", label: "High to Low" }]} placeholder="Search By Room Name" />
                            </Form.Item>
                            <Form.Item label="Reset" layout="vertical" className="font-bold">
                                <Button>Reset All</Button>
                            </Form.Item>
                        </div>
                    </div>
                    <div className={`absolute overflow-y-scroll h-full right-0 top-0 w-full border duration-300 p-4 bg-slate-50 ${sideOpen ? "w-[100%]" : "md:w-[80%]"}`}>
                        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-7 ${sideOpen ? "xl:grid-cols-4" : "xl:grid-cols-3"}`}>
                            {
                                rooms?.map((item: RoomData, idx: number) => (
                                    <div key={idx}>
                                        <RoomCard pageName="meetingRoom" _id={item._id} name={item.name} amenities={item.amenities} capacity={item.capacity} floorNo={item.floorNo} pricePerSlot={item.pricePerSlot} roomImg={item.roomImg} roomNo={item.roomNo} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* <Section>
                <div>Meeting rrom</div>
            </Section > */}
        </>
    )
}

export default MeetingRooms