/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Form, Input } from 'antd';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RoomForm from '../../components/forms/RoomForm';
import RoomInput from '../../components/forms/RoomInput';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import RoomTextArea from '../../components/forms/RoomTextArea';
import { ReagistrationSCema } from '../../schemaValidation/LoginRegistrationValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '../../redux/features/auth/auth.api';
import { TResponse } from '../../types/ResponseType';
import { toast } from 'sonner';
import { useAppDispatch } from '../../redux/hooks';
import { verifiyToken } from '../../utils/VerifyToken';
import { setUser } from '../../redux/features/auth/authSlice';

const { Title } = Typography;

const Registration = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [profileImage, setProfileImage] = useState<any>()
  const [registration] = useRegisterMutation()
  const location = useLocation()
  const dynamiNaviGateLink = location?.state?.from?.pathname || "/"


  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const formData = new FormData()
    const id = toast.loading("Regitering...");

    formData.append("data", JSON.stringify(values));
    formData.append("image", profileImage);

    try {
      const res = await registration(formData) as TResponse<any>
      if (res?.data?.success) {
        const token = res?.data?.data?.token
        const user = verifiyToken(token)
        dispatch(setUser({ user, token }))
        navigate(dynamiNaviGateLink, { replace: true })
        toast.success(res?.data?.message, { id })
      }
      else {
        toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message, { id })
      }
    } catch (error: any) {
      toast.error(error?.message, { id })
    }
  };

  return (
    <div className="py-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-primary bg-opacity-20">
      <motion.div
        className="p-8 bg-white shadow-lg rounded-lg w-full max-w-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <Title level={2} className="text-center mb-6 text-blue-600">
          Register
        </Title>
        <RoomForm onSubmit={onSubmit} resolver={zodResolver(ReagistrationSCema)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <RoomInput name='name' label='Name' placeholder='Name' />

            <div className='relative text-primary h-[85px]'>
              <RoomInput name='password' label='Password' placeholder='Password' type={showPassword ? "text" : "password"} />
              <span onClick={() => setShowPassword(!showPassword)} className='absolute right-2 bottom-[20px] cursor-pointer'>
                {
                  showPassword ?
                    <FaEye size={20} className='text-primary' />
                    : <FaEyeSlash size={20} className='text-primary' />
                }
              </span>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <RoomInput name='email' label='Email' placeholder='Email' />
            <RoomInput name='phone' label='Phone Number' type="number" placeholder='Phone Number' className='remove-control' />
          </div>
          <RoomTextArea name='address' label='Address' placeholder='Address'></RoomTextArea>
          <Form.Item label="Profile Image">
            <Input type='file' className='cursor-pointer' onChange={(e: any) => setProfileImage(e.target.files[0])} />
          </Form.Item>
          <Button type="primary" htmlType="submit" disabled={!profileImage} className='md:w-1/2 mx-auto' >
            Register
          </Button>
        </RoomForm>
        <div className='mt-7 flex-wrap flex sm:gap-6'>
          <p>Don't You have Account?</p>
          <Link to="/login" className='text-pink-600 font-semibold'>Please Login</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Registration;
