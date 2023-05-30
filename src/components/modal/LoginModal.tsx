"use client"
import { useCallback, type FC, useRef } from 'react';
import axios from "axios";

import { useState } from 'react';
import {useForm, SubmitHandler, type FieldValues, set} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Modal from '../Modal';

import {signIn} from "next-auth/react"
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { UserLoginSchema, type UserLoginType } from '@/schema/user.schema';
import useLoginModal from '@/hooks/useLoginModal';
import LoginInput from '../LoginInput';
import { useRouter } from 'next/navigation';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLockOverflow from '@/hooks/useLockOverflow';
import { useClickOutside } from '@/hooks/useClickOutside';




const LoginModal: FC = ({}) => {
    const router = useRouter()
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const loginModalRef= useRef<HTMLDivElement>(null);

    const {register,handleSubmit,formState:{errors},reset} = useForm<UserLoginType>({
        resolver: zodResolver(UserLoginSchema)
    })
    
    const onSubmit: SubmitHandler<UserLoginType> = (data) => {
        setIsLoading(true)
       signIn('credentials', {
              email: data.email,
              password: data.password,
              redirect: false
       })
       .then((res) => {
        setIsLoading(false)

        if(res?.ok) {
            toast.success('Logged in');
            reset()
            router.refresh();
            loginModal.onClose(); 
        }
        if (res?.error) {
            toast.error(res.error)
        }
       })
    }

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    useLockOverflow(loginModal.isOpen)
    useClickOutside(loginModalRef, loginModal.onClose)

    const bodyContent = (
        <div className="flex flex-col space-y-4">
        <LoginInput 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        placeholder="johndoe@gmail.com"
        errors={errors}
        required
        />
          <LoginInput 
        id="password"
        label="Password"
        placeholder="********"
        disabled={isLoading}
        register={register}
        type="password"
        errors={errors}
        required
        />
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
            onClick={() => signIn("google")}>
            <span>Continue with Google  </span>  
            </Button>
            <Button
            onClick={() => signIn("github")}>
            <span>Continue with Github  </span>  
            </Button>
            <div className='text-heading/80 text-center mt-4 font-light'>
                <div className='flex flex-row items-center gap-2 justify-center'>
                <p>Still not amazing?</p>
                <button
                onClick={toggle}
                className='text-heading cursor-pointer hover:underline font-medium'>Register</button>
                </div>
            </div>
        </div>

        
    )
  return (
<Modal
ref={loginModalRef}
disabled={isLoading}
isOpen={loginModal.isOpen}
onClose={loginModal.onClose}
onSubmit={handleSubmit(onSubmit)}
title="Login"
actionLabel="Login"
body={bodyContent}
footer={footerContent}
/> 

)
}

export default LoginModal