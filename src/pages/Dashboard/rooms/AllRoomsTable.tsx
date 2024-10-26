/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Divider, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
// import { useDeleteProductMutation, useGetAllProductQuery } from '../../../redux/features/products/productApi';
import { TbTrash } from 'react-icons/tb';
// import EditProduct from '../addProduct.tsx/editProduct/EditProductModal';
// import { toast } from 'sonner';
// import Swal from 'sweetalert2';

import Swal from 'sweetalert2';
import { toast } from 'sonner';
import AddaRoomModal from './AddRoomModal';
import { useDeleteRoomMutation, useGetAllRoomsQuery } from '../../../redux/api/roomManagement/room.api';

export interface DataType {
    key: React.Key;
    image: string;
    name: string;
    brand: string;
    availableQuantity: number;
    price: number;
    rating: number;
    description: string;
    delete?: boolean | undefined;
}

const AllRoomsTable: React.FC = () => {
    const [search, setSearch] = useState("")
    const { data, isLoading, isFetching } = useGetAllRoomsQuery({ search, limit: 10 })
    const rooms = data?.data?.result;
    const filterableData: { text: string, value: string }[] = [];
    const transformedProducts = rooms?.map((product: any, index: number) => {
        filterableData.push({ text: product?.name, value: product.name })
        return ({
            ...product,
            key: product._id,  // Assuming 'id' is the unique identifier
            no: index + 1
        })
    });

    // handle delete product
    const [deleteProduct] = useDeleteRoomMutation()

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
                const res = await deleteProduct(id)
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
            title: "Name",
            dataIndex: "name",
            render: (text: string) => <a className='md:font-semibold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
            filters: filterableData,
            // onFilter: (value, record) => record.address.indexOf(value as string) === 0,
        },
        {
            title: 'Room No',
            dataIndex: 'roomNo',
            // render: (text: string) => <a className='md:font-bold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
        },
        {
            title: 'Eminitirs',
            dataIndex: 'amenities',
            render: (amenities) => {
                return <div className='flex flex-wrap gap-0 md:gap-1 justify-center'>
                    {
                        amenities?.map((item: string) => <p key={item}>{item},</p>)
                    }
                </div>
            },
        },
        {
            title: 'Slot Price',
            dataIndex: 'pricePerSlot',
        },
        {
            title: 'Capcity',
            dataIndex: 'capacity',
        },
        {
            title: 'Room No',
            dataIndex: 'roomNo',
        },
        {
            title: 'Action',
            render: (transformedProducts) => {
                return <div className='flex gap-3'>
                    {/* <EditProduct product={transformedProducts} /> */}
                    <AddaRoomModal isUpdate={true} transformedProducts={transformedProducts} />
                    <Button onClick={() => handleDelete(transformedProducts._id)} className='w-fit p-1 h-auto border-0 text-red-600'><TbTrash size={20} /></Button>
                </div>
            }
        },
    ];


    if (isLoading) {
        return <h3 className='text-center font-bold text-xl md:text-base'>Loading...</h3>
    }

    const onChange: TableProps<DataType>['onChange'] = (_pagination, filters, _sorter, extra) => {

        if (extra?.action === "filter") {
            filters?.name?.forEach(item => setSearch(`${item}`))
        }

    };

    return (
        <div>
            {/* <h1 className='font-bold md:text-lg'>All Products</h1> */}
            <Divider className='py-0 my-3' />
            <Table
                scroll={({ x: 800 })}
                onChange={onChange}
                sticky={true}
                loading={isFetching}
                columns={columns}
                dataSource={transformedProducts}
            />
        </div>
    );
};

export default AllRoomsTable;