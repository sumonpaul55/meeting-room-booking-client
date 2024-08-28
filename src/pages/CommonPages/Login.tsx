
import { Button } from 'antd';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RoomForm from '../../components/forms/RoomForm';
import RoomInput from '../../components/forms/RoomInput';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const onSubmit: SubmitHandler<FieldValues> = (values) => {
        console.log('Success:', values);
        // Add your registration logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-primary bg-opacity-20">
            <motion.div
                className="p-8 bg-white shadow-lg rounded-lg w-full max-w-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <Title level={2} className="text-center mb-6 text-blue-600 font-poppins">
                    Login
                </Title>
                <RoomForm onSubmit={onSubmit}>
                    <RoomInput name='email' label='Email' placeholder='Email' className="text-primary font-semibold text-base" />
                    <div className='relative text-primary'>
                        <RoomInput name='password' label='Password' placeholder='Password' type={showPassword ? "text" : "password"} />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute right-2 bottom-[5px] cursor-pointer'>
                            {
                                showPassword ?
                                    <FaEye size={20} className='text-primary' />
                                    : <FaEyeSlash size={20} className='text-primary' />
                            }
                        </span>
                    </div>

                    <Button type="primary" htmlType="submit" block>
                        Register
                    </Button>
                </RoomForm>
                <div className='mt-7 flex-wrap flex sm:gap-6'>
                    <p>Don't You have Account?</p>
                    <Link to="/register" className='text-pink-600 font-semibold'>Please Register</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
