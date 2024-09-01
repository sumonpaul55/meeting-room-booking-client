/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import Section from "../../components/common/Section"
import { useGetAllRoomsQuery } from "../../redux/features/roomManagement/room.api"
import Loading from "../../components/common/Loading"
import { Input, Form, Select, SelectProps } from "antd"
import { RoomData } from "../../types/roomtype"


const MeetingRooms = () => {
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


    return (
        <>
            <Section className="min-h-[calc(100vh-405px)]">
                <div>
                    <div className="py-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
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
                    </div>
                </div>
            </Section>
            {/* <Section>
                <div>Meeting rrom</div>
            </Section > */}
        </>
    )
}

export default MeetingRooms