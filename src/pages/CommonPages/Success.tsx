/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Card, Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { clearBookingSlice } from '../../redux/features/bookings/bookingSlice';
const Success = ({ isSuccessModalOpen, setIsSuccessModalOpen, id, total, totalRoom, totalSlot }: { isSuccessModalOpen: boolean, setIsSuccessModalOpen: any, id: string, total: number, totalRoom: number, totalSlot: number }) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const handleViewBookings = () => {
        navigate('/myBookings');
    };
    const handleGoHome = () => {
        navigate('/');
        dispatch(clearBookingSlice())
    };
    const handleOk = () => {
        setIsSuccessModalOpen(false);
        dispatch(clearBookingSlice())
    };

    const handleCancel = () => {
        setIsSuccessModalOpen(false);
        dispatch(clearBookingSlice())
    };
    return (
        <>
            <Modal title="Basic Modal" open={isSuccessModalOpen} onOk={handleOk} onCancel={handleCancel} className='0'>
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
                    <Confetti style={{ maxWidth: "100%", height: "50%" }} numberOfPieces={200} opacity={.7} />
                    <Card
                        className="p-1 sm:p-5 text-center bg-white"
                        style={{ maxWidth: '700px', width: '100%' }}
                    >
                        <CheckCircleOutlined className="text-green-500 text-5xl mb-4" />
                        <h1 className="text-lg sm:text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h1>
                        <p className="md:text-lg text-gray-600 mb-8">
                            Thank you for booking with Roomify. Your room has been successfully reserved.
                        </p>
                        <div className='flex flex-col items-start pb-4 gap-2'>
                            <p className='font-semibold md:text-lg'>ID: {id}</p>
                            <p className='font-semibold md:text-lg'>Total Cost: {total}</p>
                            <p className='font-semibold md:text-lg'>Total Room: {totalRoom}</p>
                            <p className='font-semibold md:text-lg'>Total slots: {totalSlot}</p>

                        </div>
                        <div className="flex gap-4 items-center flex-col sm:flex-row">
                            <Button
                                type="primary"
                                size="large"
                                className="w-full"
                                onClick={handleViewBookings}
                            >
                                View My Bookings
                            </Button>
                            <Button
                                size="large"
                                className="w-full bg-gray-200"
                                onClick={handleGoHome}
                            >
                                Back to Home
                            </Button>
                        </div>
                    </Card>
                </div>
            </Modal>
        </>


    );
};

export default Success;
