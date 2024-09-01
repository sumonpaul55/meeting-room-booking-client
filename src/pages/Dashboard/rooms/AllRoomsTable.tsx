/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Divider, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
// import { useDeleteProductMutation, useGetAllProductQuery } from '../../../redux/features/products/productApi';
import { TbTrash } from 'react-icons/tb';
// import EditProduct from '../addProduct.tsx/editProduct/EditProductModal';
// import { toast } from 'sonner';
// import Swal from 'sweetalert2';
import { useDeleteRoomMutation, useGetAllRoomsQuery } from '../../../redux/features/roomManagement/room.api';
import { BiEdit } from 'react-icons/bi';
import { TQueryParams } from '../../../types/ResponseType';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

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
    const [queryParams, setQueryParams] = useState<TQueryParams[] | undefined>(undefined)
    const { data: rooms, isLoading, isFetching } = useGetAllRoomsQuery(queryParams)


    const filterableData: { text: string, value: string }[] = [];
    const transformedProducts = rooms?.data?.map((product: any, index: number) => {
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
        console.log(id)
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
                return <div className='flex flex-wrap gap-2'>
                    {
                        amenities?.map((item: string) => <p key={item}>{item}</p>)
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
            render: (transformedProducts) => (<div className='flex gap-3'>
                {/* <EditProduct product={transformedProducts} /> */}
                <Button onClick={() => handleDelete(transformedProducts._id)} className='w-fit p-1 h-auto border-0 text-red-600'><TbTrash size={20} /></Button>
                <Button onClick={() => handleDelete(transformedProducts._id)} className='w-fit p-1 h-auto border-0 text-red-600'><BiEdit size={20} /></Button>
            </div>)
        },
    ];


    if (isLoading) {
        return <h3 className='text-center font-bold text-xl md:text-base'>Loading...</h3>
    }

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        const querynameParams: TQueryParams[] = []
        if (extra?.action === "filter") {
            filters?.name?.forEach(item => querynameParams.push({ name: "name", value: item }))
        }
        setQueryParams(querynameParams)
    };

    return (
        <div>
            {/* <h1 className='font-bold md:text-lg'>All Products</h1> */}
            <Divider className='py-0 my-3' />
            <Table
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