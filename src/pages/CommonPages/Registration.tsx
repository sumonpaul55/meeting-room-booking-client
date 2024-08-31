/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from 'antd';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RoomForm from '../../components/forms/RoomForm';
import RoomInput from '../../components/forms/RoomInput';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import RoomTextArea from '../../components/forms/RoomTextArea';
import { ReagistrationSCema } from '../../schemaValidation/LoginRegistrationValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '../../redux/features/auth/auth.api';
import { TResponse } from '../../types/ResponseType';
import { toast } from 'sonner';
import { regiResponse } from '../../types/registerResponse';

const { Title } = Typography;

const Registration = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [registration] = useRegisterMutation()
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const id = toast.loading("Regitering...")
    try {
      const res = await registration(values) as TResponse<regiResponse>
      if (res.error) {
        toast.error(res.error?.data?.message, { id })
      } else {
        toast.success(res?.data?.message, { id, duration: 5000 })
        navigate("/login")
      }
    } catch (error: any) {
      toast.error(error?.message)
    }

    // Add your registration logic here
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
          <RoomInput name='name' label='Name' placeholder='Name' />

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
          <RoomInput name='email' label='Email' placeholder='Email' />
          <RoomInput name='phone' label='Phone Number' type="number" placeholder='Phone Number' className='remove-control' />
          <RoomTextArea name='address' label='Address' placeholder='Address'></RoomTextArea>
          <Button type="primary" htmlType="submit" block>
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
