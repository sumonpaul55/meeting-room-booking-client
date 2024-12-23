/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, Table, } from "antd"
import { useGetMyBookingsQuery } from "../../../redux/api/roomManagement/booking.api"
import Section from "../../../components/common/Section"
import NoDataFound from "../../../components/common/NoDataFound"
import moment from "moment"
import Loading from "../../../components/common/Loading"
import { useAppSelector } from "../../../redux/hooks"

const MypayMentHistory = () => {
    const { user } = useAppSelector(state => state.auth)
    const { data, isFetching, isLoading } = useGetMyBookingsQuery({ email: user?.email })
    // const bookingData = data?.data;



    const bookingData = data?.data?.map((booking: any, idx: number) => {
        console.log(booking)
        return { ...booking, key: idx, no: idx + 1 }
    })

    // console.log(bookingData)

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
            title: "PaymentId",
            dataIndex: "paymentId",
            render: ((paymentId: any) => {
                return <p>{paymentId}</p>
            })
        },
        {
            title: "Total",
            dataIndex: "totalAmount",
            render: (totalAmount: string) => {
                return <p>$ {totalAmount}</p>
            }
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

export default MypayMentHistory