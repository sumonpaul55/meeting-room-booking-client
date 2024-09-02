/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useGetAllSlotsQuery } from '../../../redux/features/roomManagement/slot.api'
import { Table, TableColumnsType, TableProps } from 'antd';
import { DataType } from '../rooms/AllRoomsTable';
import Loading from '../../../components/common/Loading';
import moment from 'moment';

type TSlot = {
    room: string;
    roomNo: string;
    date: string;
    startTime: string;
    endTime: string;
}
const AllslotPage = () => {
    const { data, isLoading, isFetching } = useGetAllSlotsQuery(undefined)


    const slotTableData: TSlot[] = [];
    const transformedProducts = data?.data?.map((slot: any, index: number) => {
        // filterableData.push({ text: product?.name, value: product.name })
        console.log(slot)
        return ({
            ...slot,
            key: slot._id,  // Assuming 'id' is the unique identifier
            no: index + 1
        })
    });

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
            // render: (transformedProducts) => {
            //     return <div className='flex gap-3'>
            //         {/* <EditProduct product={transformedProducts} /> */}
            //         <AddaRoomModal isUpdate={true} transformedProducts={transformedProducts} />
            //         <Button onClick={() => handleDelete(transformedProducts._id)} className='w-fit p-1 h-auto border-0 text-red-600'><TbTrash size={20} /></Button>
            //     </div>
            // }
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
            <div>All available slots</div>
            <div>
                <Table
                    scroll={({ x: 800 })}
                    // onChange={onChange}
                    sticky={true}
                    loading={isFetching}

                    columns={columns}
                    dataSource={transformedProducts}
                />
            </div>
        </>

    )
}

export default AllslotPage