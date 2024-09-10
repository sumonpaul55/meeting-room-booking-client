/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Table, TableColumnsType, Tag, } from "antd";
import Section from "../../components/common/Section"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import moment from "moment";
import NoDataFound from "../../components/common/NoDataFound";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { removeBooking } from "../../redux/features/bookings/bookingSlice";


const CheckOutPage = () => {
    const { booking } = useAppSelector(state => state.booking)
    const dispatch = useAppDispatch()
    let name;
    let email;
    let address;
    const slots: string[] = []

    const tableProps = booking?.map((item, idx) => {
        name = item?.userName;
        email = item?.email;
        address = item?.address
        const eachSlot = item?.slots?.map(item => item.split(",")[0])
        slots.push(`${eachSlot}`)
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
        }, {
            title: "Times",
            dataIndex: "slots",
            render: (slots) => slots?.map((time: string) => {
                return <Tag color="indigo" key={time}>{time.split(",")[1]}</Tag>
            })
        },
        {
            title: "Date",
            dataIndex: "date",
            render: (date) => <p>{moment(date).format("DD/MM/YYYY")}</p>
        },
        {
            title: "Action",
            dataIndex: "room",
            render: (room) => <Button onClick={() => handleRemove(room._id)}>
                Remove
            </Button>
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

    const handleRemove = (id: any) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeBooking(id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <Section className="py-16">
            <h3 className="sm:tex-lg lg:text-xl font-semibold text-center font-roboto">Booking Summary</h3>
            <div className="mt-5">
                {
                    booking?.length ?
                        <div className="flex justify-between flex-col md:flex-row gap-3">
                            <div className="w-full">
                                <Table columns={columns} dataSource={tableProps} pagination={false} />
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