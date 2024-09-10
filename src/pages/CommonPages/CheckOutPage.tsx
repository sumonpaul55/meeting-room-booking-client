/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Table, TableColumnsType, Tag } from "antd";
import Section from "../../components/common/Section"
import { useAppSelector } from "../../redux/hooks"
import { TbTrash } from "react-icons/tb";
import { DataType } from "../Dashboard/rooms/AllRoomsTable";
import moment from "moment";
import NoDataFound from "../../components/common/NoDataFound";
import { useGetRoomsForBookingsQuery } from "../../redux/api/roomManagement/room.api";


const CheckOutPage = () => {

    const { booking } = useAppSelector(state => state.booking)

    // const columns: TableColumnsType<DataType> = [
    //     {
    //         title: 'No',
    //         dataIndex: "no",
    //         render: (text: string) => <a className='md:font-semibold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
    //     },
    //     {
    //         title: "Room Name",
    //         dataIndex: ["room", "name"],
    //         render: (text: string) => <a className='md:font-semibold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
    //         // filters: filterableData,
    //         // onFilter: (value, record) => record.address.indexOf(value as string) === 0,
    //     },
    //     {
    //         title: 'Room No',
    //         dataIndex: ["room", "roomNo"],
    //         // render: (text: string) => <a className='md:font-bold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
    //     },
    //     {
    //         title: 'Date',
    //         dataIndex: "date",
    //         render: (date) => <p>{moment(date).format("MMM Do YY")}</p>
    //     },
    //     {
    //         title: 'Start Time',
    //         dataIndex: 'startTime',
    //     },
    //     {
    //         title: 'End Time',
    //         dataIndex: 'endTime',
    //     },
    //     {
    //         title: "Status",
    //         dataIndex: "isBooked",
    //         render: (isBooked: boolean) => {
    //             return <Tag color={`${isBooked ? "yellow" : "blue"}`}>{!isBooked ? "Available" : "Booked"}</Tag>
    //         }
    //     },
    //     {
    //         title: 'Action',
    //         render: (transData) => {
    //             // console.log(transformSlot?.isBooked)
    //             return <div className='flex gap-3'>
    //                 {/* <EditProduct product={transformedProducts} /> */}

    //                 <Button className='w-fit p-1 h-auto border-0 text-red-600'>
    //                     <TbTrash size={20} />
    //                 </Button>

    //             </div>
    //         }
    //     },
    // ];
    return (
        <Section className="py-16">
            <h3 className="sm:tex-lg lg:text-xl font-semibold text-center">Booking Summary</h3>
            {/* {
                transData?.length ?
                    <div>
                        <Table
                            scroll={({ x: 800 })}
                            // onChange={onChange}
                            sticky={true}
                            loading={isFetching}

                            columns={columns}
                            dataSource={transData}
                        />
                    </div> :
                    <NoDataFound />

            } */}
        </Section>
    )
}

export default CheckOutPage