// pages/StatisticsDashboard.jsx

import { FaUser, FaUserShield, FaDoorClosed, FaCalendarAlt, FaBook, FaList, FaUsers, FaHotel } from 'react-icons/fa';

const StatisticsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center p-6 rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-500 to-purple-600">
                <FaUser className="text-5xl mr-4 opacity-90" />
                <div>
                    <h4 className="text-xl font-semibold">Total Users</h4>
                    <p className="text-3xl font-bold mt-1">120</p>
                </div>
            </div>

            <div className="flex items-center p-6 rounded-lg shadow-lg text-white bg-gradient-to-r from-pink-500 to-red-500">
                <FaUserShield className="text-5xl mr-4 opacity-90" />
                <div>
                    <h4 className="text-xl font-semibold">Total Admins</h4>
                    <p className="text-3xl font-bold mt-1">5</p>
                </div>
            </div>

            <div className="flex items-center p-6 rounded-lg shadow-lg text-white bg-gradient-to-r from-green-400 to-blue-500">
                <FaHotel className="text-5xl mr-4 opacity-90" />
                <div>
                    <h4 className="text-xl font-semibold">Total Rooms</h4>
                    <p className="text-3xl font-bold mt-1">45</p>
                </div>
            </div>

            <div className="flex items-center p-6 rounded-lg shadow-lg text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                <FaList className="text-5xl mr-4 opacity-90" />
                <div>
                    <h4 className="text-xl font-semibold">Total Slots</h4>
                    <p className="text-3xl font-bold mt-1">150</p>
                </div>
            </div>

            <div className="flex items-center p-6 rounded-lg shadow-lg text-white bg-gradient-to-r from-purple-500 to-pink-500">
                <FaBook className="text-5xl mr-4 opacity-90" />
                <div>
                    <h4 className="text-xl font-semibold">Total Booked Rooms</h4>
                    <p className="text-3xl font-bold mt-1">78</p>
                </div>
            </div>

            <div className="flex items-center p-6 rounded-lg shadow-lg text-white bg-gradient-to-r from-teal-400 to-green-500">
                <FaCalendarAlt className="text-5xl mr-4 opacity-90" />
                <div>
                    <h4 className="text-xl font-semibold">Available Slots</h4>
                    <p className="text-3xl font-bold mt-1">72</p>
                </div>
            </div>

            <div className="flex items-center p-6 rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-500 to-indigo-500">
                <FaUsers className="text-5xl mr-4 opacity-90" />
                <div>
                    <h4 className="text-xl font-semibold">Active Users</h4>
                    <p className="text-3xl font-bold mt-1">80</p>
                </div>
            </div>

            <div className="flex items-center p-6 rounded-lg shadow-lg text-white bg-gradient-to-r from-orange-500 to-red-500">
                <FaDoorClosed className="text-5xl mr-4 opacity-90" />
                <div>
                    <h4 className="text-xl font-semibold">Rooms Occupied</h4>
                    <p className="text-3xl font-bold mt-1">30</p>
                </div>
            </div>
        </div>
    );
};

export default StatisticsCard;
