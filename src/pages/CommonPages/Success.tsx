import React from 'react';
import { Button, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const Success: React.FC = () => {
    const navigate = useNavigate();

    const handleViewBookings = () => {
        navigate('/myBookings');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
            <Confetti style={{ maxWidth: "100%" }} />
            <Card
                className="p-6 text-center bg-white rounded-lg shadow-lg"
                style={{ maxWidth: '600px', width: '100%' }}
            >
                <CheckCircleOutlined className="text-green-500 text-6xl mb-4" />
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Thank you for booking with Roomify. Your room has been successfully reserved.
                </p>

                <div className="space-y-4">
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
    );
};

export default Success;
