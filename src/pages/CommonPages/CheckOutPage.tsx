/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Table, TableColumnsType, TableProps, Tag } from "antd";
import Section from "../../components/common/Section"
import { useAppSelector } from "../../redux/hooks"
import moment from "moment";
import NoDataFound from "../../components/common/NoDataFound";
import { useGetRoomsForBookingsQuery } from "../../redux/api/roomManagement/room.api";
import { useEffect } from "react";


const CheckOutPage = () => {

    const { booking } = useAppSelector(state => state.booking)
    console.log(booking)

    let name;
    let email;
    let address;
    const tableProps = booking?.map((item, idx) => {
        name = item?.userName;
        email = item?.email;
        address = item?.address

        return {
            key: idx + 1,
            ...item, no: idx + 1,
        }
    })
    const columns: TableColumnsType = [
        {
            title: "No",
            dataIndex: 'no'
        },
        {
            title: "Room Name",
            dataIndex: "room",
            render: (room) => <p>{room?.name}</p>
        },
        {
            title: "Date",
            dataIndex: "date",
            render: (date) => <p>{moment(date).format("DD/MM/YYYY")}</p>
        }
    ]


    useEffect(() => {
        if (booking?.length) {
            window.onbeforeunload = () => true;
        }
        return () => {
            window.onbeforeunload = null;
        };
    }, [booking]);

    return (
        <Section className="py-16">
            <h3 className="sm:tex-lg lg:text-xl font-semibold text-center font-roboto">Booking Summary</h3>
            <div className="mt-5">
                {
                    booking?.length ?
                        <div className="flex justify-between flex-col md:flex-row">
                            <div className="w-full">
                                <Table columns={columns} dataSource={tableProps} />
                            </div>
                            <div className="my-1 p-2 md:p-4 md:min-w-[400px] text-left shadow">
                                <h2 className="font-bold font-poppins text-lg md:text-xl border-b pb-2">User Info</h2>
                                <h2 className="py-1 font-roboto font-semibold mt-4 text-lightText">Name: {name}</h2>
                                <h2 className="py-1 font-roboto font-semibold mt-4 text-lightText">Email: {email}</h2>
                                <h2 className="py-1 font-roboto font-semibold mt-4 text-lightText">Address: {address}</h2>
                            </div>
                        </div> :
                        <NoDataFound />

                }
            </div>
        </Section>
    )
}

export default CheckOutPage