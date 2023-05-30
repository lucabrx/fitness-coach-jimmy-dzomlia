"use client"
import { useRef, type FC, use } from 'react';
import axios from "axios";
import { useCallback,useState } from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import useRegisterModal from '@/hooks/useRegisterModal';
import Modal from '../Modal';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { UserRegisterSchema, type UserRegisterType } from '@/schema/user.schema';
import RegisterInput from '../RegisterInput';
import { signIn } from 'next-auth/react';
import useLoginModal from '@/hooks/useLoginModal';
import { useClickOutside } from '@/hooks/useClickOutside';
import useLockOverflow from '@/hooks/useLockOverflow';





const RegisterModal: FC = ({}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const registerModalRef = useRef<HTMLDivElement>(null);
    const {register,handleSubmit,formState:{errors}, reset} = useForm<UserRegisterType>({
        resolver: zodResolver(UserRegisterSchema)

    })
    
    const onSubmit: SubmitHandler<UserRegisterType> = (data) => {
        setIsLoading(true);
        axios.post("/api/user/register", data)
        .then(() => {
            toast.success("Account created")
            reset()
            registerModal.onClose();
            loginModal.onOpen();

        })
        .catch(() => {
            toast.error("Something went wrong")
        }
        )
        .finally(() => setIsLoading(false))
    }

    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
        }, [loginModal, registerModal])

        useClickOutside(registerModalRef, registerModal.onClose)
        useLockOverflow(registerModal.isOpen)

    const bodyContent = (
        <div className="flex flex-col space-y-4">
       
        <RegisterInput 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        placeholder='johndoe@example.com'
        errors={errors}
        required
        />
          <RegisterInput 
        id="name"
        label="Name"
        disabled={isLoading}
        placeholder='John Doe'
        register={register}
        errors={errors}
        required
        />
          <RegisterInput 
        id="password"
        label="Password"
        disabled={isLoading}
        placeholder='********'
        type="password"
        register={register}
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
                <p>Already have an account?</p>
                <button
                onClick={toggle}
                className='text-heading cursor-pointer hover:underline font-medium'>Login</button>
                </div>
            </div>
        </div>

        
    )
  return (
<Modal
ref={registerModalRef}
disabled={isLoading}
isOpen={registerModal.isOpen}
onClose={registerModal.onClose}
onSubmit={handleSubmit(onSubmit)}
title="Register"
actionLabel="Register"
body={bodyContent}
footer={footerContent}
/> 

)
}

export default RegisterModal