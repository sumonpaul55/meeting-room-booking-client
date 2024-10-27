
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserShield } from 'react-icons/fa';
import { useAppSelector } from '../../../redux/hooks';

const MyProfile = () => {
    const { user } = useAppSelector(state => state.auth)

    return (
        <div className="container mx-auto p-2 md:p-6 space-y-8">
            {/* User MyProfile Card */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex flex-col md:flex-row items-center bg-gradient-to-r  from-[#001529] to-gray-600 text-white p-4 md:p-7 rounded-lg shadow-lg">
                <img
                    src={user?.profileImage}
                    alt={user?.name}
                    className="w-40 h-40 rounded-full border-4 border-white shadow-md mr-6"
                />
                <div className='mt-4 md:mt-0'>
                    <h1 className="text-3xl font-semibold capitalize mb-2">{user?.name}</h1>
                    <p className="text-lg">Role: <span className='font-semibold'>{user?.role}</span></p>
                </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaEnvelope className="text-indigo-500 text-4xl mr-4" />
                    <div>
                        <h4 className="text-lg font-semibold">Email</h4>
                        <p className="text-gray-600 md:text-lg font-semibold">{user?.email}</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaPhone className="text-indigo-500 text-4xl mr-4" />
                    <div>
                        <h4 className="text-lg font-semibold">Phone</h4>
                        <p className="text-gray-600 md:text-lg font-semibold">{user?.phone}</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaMapMarkerAlt className="text-indigo-500 text-4xl mr-4" />
                    <div>
                        <h4 className="text-lg font-semibold">Address</h4>
                        <p className="text-gray-600 md:text-lg font-semibold">{user?.address}</p>
                    </div>
                </div>

                {/* Role */}
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaUserShield className="text-indigo-500 text-4xl mr-4" />
                    <div>
                        <h4 className="text-lg font-semibold">Role</h4>
                        <p className="text-gray-600 md:text-lg font-semibold">{user?.role}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default MyProfile;
