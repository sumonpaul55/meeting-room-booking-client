/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from 'antd';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RoomForm from '../../components/forms/RoomForm';
import RoomInput from '../../components/forms/RoomInput';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLogInMutation } from '../../redux/features/auth/auth.api';
import { toast } from 'sonner';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/features/auth/authSlice';
import { verifiyToken } from '../../utils/VerifyToken';
import { zodResolver } from '@hookform/resolvers/zod';
import { logiValidationSchema } from '../../schemaValidation/LoginRegistrationValidation';

const { Title } = Typography;

const Login = () => {
    const [loginUser] = useLogInMutation()
    const dispatch = useAppDispatch()
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const dynamiNaviGateLink = location?.state?.from?.pathname || "/"


    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        const toastId = toast.loading("Logining...")
        try {
            const res: any = await loginUser(values)

            if (res?.data?.success) {
                const token = res?.data?.token
                const user = verifiyToken(token)
                dispatch(setUser({ user, token }))
                navigate(dynamiNaviGateLink, { replace: true })
                toast.success(res?.data?.message, { id: toastId })
            }
            if (res.error) {
                toast.error(res?.error?.message || res?.error?.data?.message, { id: toastId })
            }
        } catch (error: any) {
            toast.error(error)
        }

    };

    return (
        <div className="md:h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-primary bg-opacity-20">
            <motion.div
                className="p-8 bg-white shadow-lg rounded-lg w-full max-w-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <Title level={2} className="text-center mb-6 text-blue-600 font-poppins">
                    Login
                </Title>
                <RoomForm onSubmit={onSubmit} resolver={(zodResolver(logiValidationSchema))}>
                    <RoomInput name='email' label='Email' placeholder='Email' className="text-primary font-semibold text-base" />
                    <div className='relative text-primary h-[85px]'>
                        <RoomInput name='password' label='Password' placeholder='Password' type={showPassword ? "text" : "password"} />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute right-2 bottom-[30px] cursor-pointer'>
                            {
                                showPassword ?
                                    <FaEye size={20} className='text-primary' />
                                    : <FaEyeSlash size={20} className='text-primary' />
                            }
                        </span>
                    </div>
                    <Button type="primary" htmlType="submit" className='mt-6'>
                        Register
                    </Button>
                </RoomForm>
                <div className='mt-7 flex-wrap flex sm:gap-6'>
                    <p>Don't You have Account?</p>
                    <Link to="/register" className='text-pink-600 font-semibold'>Please Register</Link>
                </div>
                <div className='mt-5'>
                    <h3 className='font-semibold mb-3'>Admin Cadentials:</h3>
                    <p>Email: paul@gmail.com</p>
                    <p>pass: 654321</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
