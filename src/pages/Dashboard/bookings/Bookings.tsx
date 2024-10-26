/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, Table, Tag } from "antd";
import moment from "moment";
import Section from "../../../components/common/Section";
import { useGetMyBookingsQuery } from "../../../redux/api/roomManagement/booking.api";
import Loading from "../../../components/common/Loading";
import NoDataFound from "../../../components/common/NoDataFound";

const Bookings = () => {
    const { data, isFetching, isLoading } = useGetMyBookingsQuery({})
    const bookingData = data?.data?.map((booking: any, idx: number) => {
        return { ...booking, key: idx, no: idx + 1 }
    })
    const Tablecolumn = [
        {
            title: "No",
            dataIndex: "no",
            render: (no: number) => <p className="font-semibold">{no}</p>
        },

        {
            title: "Room Name",
            dataIndex: "room",
            render: ((room: any) => {
                return room?.map((item: { _id: { name: string | number | boolean | undefined } }, idx: number) => {
                    return <p key={idx} className="font-semibold">{item?._id?.name}</p>
                })
            })
        }, {
            title: "Image",
            dataIndex: "room",
            render: ((room: any) => {
                return room?.map((item: {
                    _id: {
                        roomImg: any; name: string | number | boolean | undefined
                    }
                }, idx: number) => {
                    console.log(item)
                    return <Image key={idx} className="max-w-20" src={item?._id?.roomImg[0]} />
                })
            })
        },
        {
            title: "Date",
            dataIndex: "room",
            render: ((room: any) => {
                return room?.map((item: any, idx: number) => {
                    return <p key={idx} className="font-semibold">{moment(item?.date).format("DD-MMM-YYYY")}</p>
                })
            })
        },
        {
            title: "Slots Time",
            dataIndex: "room",
            render: ((room: any) => {
                return room?.map((item: any) => {
                    const slots = item?.slots;

                    return slots?.map((item: any, idx: number) => {
                        return <p key={idx}>{`${item?.startTime}-${item?.endTime}`}</p>
                    })
                })
            })
        },
        {
            title: "Status",
            dataIndex: "isConfirmed",
            render: (isConfirmed: string) => <Tag color={isConfirmed === "unconfirmed" ? "blue" : isConfirmed === "confirmed" ? "indigo" : "pink"}>{isConfirmed}</Tag>
        },

    ]

    if (isLoading) {
        return <Loading />
    }
    return (
        <Section className="py-7">
            <h1 className="mb-4 font-semibold text-lg md:text-xl">My Bookings</h1>
            {
                bookingData?.length ?
                    <Table loading={isFetching} dataSource={bookingData} columns={Tablecolumn} /> :
                    <NoDataFound />
            }
        </Section>
    )
}

export default Bookings