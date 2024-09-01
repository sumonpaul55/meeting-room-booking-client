/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import Section from "../../components/common/Section"
import { useGetAllRoomsQuery } from "../../redux/features/roomManagement/room.api"
import Loading from "../../components/common/Loading"
import { Input, Form, Select, SelectProps, Button } from "antd"
import { RoomData } from "../../types/roomtype"
import { FaBars } from "react-icons/fa"


const MeetingRooms = () => {
    const [sideOpen, setSideOpen] = useState(false)
    const [searchParams, setSearchParams] = useState<[] | undefined>(undefined)
    const { data, isLoading, isFetching } = useGetAllRoomsQuery(searchParams);
    const rooms = data?.data;

    if (isLoading) {
        return <Loading />
    }
    const capaCityOptions: SelectProps['options'] = []


    // Remove duplicates based on 'value'
    const uniqueArray = rooms.filter((item: RoomData, index: number, self: RoomData[]) =>
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
            value: `0 - ${Math.ceil((maxValue / 5) * 1)}`,
            label: `0 - ${Math.ceil((maxValue / 5) * 1)}`,
        },
        {
            value: `${Math.ceil((maxValue / 5) * 1)} - ${Math.ceil((maxValue / 5) * 2)}`,
            label: `${Math.ceil((maxValue / 5) * 1)} - ${Math.ceil((maxValue / 5) * 2)}`,
        },
        {
            value: `${Math.ceil((maxValue / 5) * 2)} - ${Math.ceil((maxValue / 5) * 3)}`,
            label: `${Math.ceil((maxValue / 5) * 2)} - ${Math.ceil((maxValue / 5) * 3)}`,
        },
        {
            value: `${Math.ceil((maxValue / 5) * 3)} - ${Math.ceil((maxValue / 5) * 4)}`,
            label: `${Math.ceil((maxValue / 5) * 3)} - ${Math.ceil((maxValue / 5) * 4)}`,
        },
        {
            value: `${Math.ceil((maxValue / 5) * 4)} - ${Math.ceil((maxValue / 5) * 5)}`,
            label: `${Math.ceil((maxValue / 5) * 4)} - ${Math.ceil((maxValue / 5) * 5)}`,
        },
    ];
    const handleSidbar = () => {
        setSideOpen(!sideOpen)
    }

    return (
        <>
            <section className="px-4 sm:px-10 md:px-20">
                <div className={`text-end mt-2 fixed z-50 bg-transparent backdrop:blur-sm top-12 ${sideOpen ? "left-0" : ""}`}>
                    <Button className="" onClick={handleSidbar}><FaBars /></Button>
                </div>
                <div className="gap-8 relative min-h-screen ">
                    <div className={`bg-white md:w-[20%] absolute h-full duration-300 z-30 ${sideOpen ? "-left-full" : null} border p-3`}>
                        <div className="py-1 grid grid-cols-1 md:gap-4 mt-10">
                            <Form.Item label="Search" layout="vertical" className="font-bold">
                                <Input placeholder="Search By Room Name" />
                            </Form.Item>
                            <Form.Item label="Capacity" layout="vertical" className="font-bold">
                                <Select options={capaCityOptions} placeholder="Search By Room Name" />
                            </Form.Item>
                            <Form.Item label="Price Range" layout="vertical" className="font-bold">
                                <Select options={priceFilter} placeholder="Search By Room Name" />
                            </Form.Item>
                            <Form.Item label="Price Range" layout="vertical" className="font-bold">
                                <Select options={[{ value: "pricePerSlot", label: "Low To High" }, { value: "-pricePerSlot", label: "High to Low" }]} placeholder="Search By Room Name" />
                            </Form.Item>
                            <Form.Item label="Reset" layout="vertical" className="font-bold">
                                <Button>Reset All</Button>
                            </Form.Item>
                        </div>
                    </div>
                    <div className={`absolute h-full right-0 top-0 w-full border duration-300 p-4 bg-slate-50 ${sideOpen ? "w-[100%]" : "md:w-[80%]"}`}>

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