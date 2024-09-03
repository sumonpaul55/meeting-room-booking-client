/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDeleteSlotMutation, useGetAllSlotsQuery } from '../../../redux/features/roomManagement/slot.api'
import { Button, Table, TableColumnsType } from 'antd';
import { DataType } from '../rooms/AllRoomsTable';
import Loading from '../../../components/common/Loading';
import moment from 'moment';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import { TbTrash } from 'react-icons/tb';
import UpdateslotModal from './UpdateSlotModal';

// type TSlot = {
//     room: string;
//     roomNo: string;
//     date: string;
//     startTime: string;
//     endTime: string;
// }
const AllslotPage = () => {
    const { data, isLoading, isFetching } = useGetAllSlotsQuery({})
    const [deleteSlot] = useDeleteSlotMutation()

    // const slotTableData: TSlot[] = [];

    const transformSlot = data?.data?.map((slot: any, index: number) => {
        // filterableData.push({ text: product?.name, value: product.name })
        return ({
            ...slot,
            key: slot._id,  // Assuming 'id' is the unique identifier
            no: index + 1
        })
    });

    // handle Delete slot
    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteSlot(id)
                if (res.data.success) {
                    toast.success(res.data.message)
                } else {
                    toast.error("Something went wrong")
                }
            }
        });
    }


    const columns: TableColumnsType<DataType> = [
        {
            title: 'No',
            dataIndex: "no",
            render: (text: string) => <a className='md:font-semibold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
        },
        {
            title: "Room Name",
            dataIndex: ["room", "name"],
            render: (text: string) => <a className='md:font-semibold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
            // filters: filterableData,
            // onFilter: (value, record) => record.address.indexOf(value as string) === 0,
        },
        {
            title: 'Room No',
            dataIndex: ["room", "roomNo"],
            // render: (text: string) => <a className='md:font-bold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
        },
        {
            title: 'Date',
            dataIndex: "date",
            render: (date) => <p>{moment(date).format("MMM Do YY")}</p>
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
        },

        {
            title: 'Action',
            render: (transformSlot) => {
                return <div className='flex gap-3'>
                    {/* <EditProduct product={transformedProducts} /> */}

                    <Button onClick={() => handleDelete(transformSlot._id)} className='w-fit p-1 h-auto border-0 text-red-600'><TbTrash size={20} />
                    </Button>
                    <UpdateslotModal slotData={transformSlot} />
                </div>
            }
        },
    ];

    // const onChange: TableProps<DataType>['onChange'] = (_pagination, filters, _sorter, extra) => {
    //     if (extra?.action === "filter") {
    //         filters?.name?.forEach(item => setSearch(`${item}`))
    //     }

    // };



    if (isLoading) {
        return <Loading />
    }
    return (
        <>

            <div>
                <Table
                    scroll={({ x: 800 })}
                    // onChange={onChange}
                    sticky={true}
                    loading={isFetching}

                    columns={columns}
                    dataSource={transformSlot}
                />
            </div>
        </>

    )
}

export default AllslotPage