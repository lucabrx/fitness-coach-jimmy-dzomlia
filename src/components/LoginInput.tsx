"use client"
import {  UserLoginType } from '@/schema/user.schema';
import { type FC } from 'react';
import { FieldErrors,  UseFormRegister } from 'react-hook-form';

interface InputProps {
    id: "email"  | "password";
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: string;
    required?: boolean;
    register: UseFormRegister<UserLoginType>,
    errors: FieldErrors;
    placeholder?: string;
}

const RegisterInput: FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    required,
    register,
    errors,
    placeholder
}) => {
  return (
<div className='w-full relative'> 
<label className="text-heading text-lg">{label}</label>

<input 
id={id}
disabled={disabled}
{...register(id, { required })}
placeholder={placeholder}
type={type}
className={`
w-full py-1.5 rounded-md px-4 focus:ring-2 focus:ring-s-gradiant outline-none
${errors[id] ? "border-rose-500" : "border-neutral-300/20"} 
${errors[id] ? "focus:border-rose-500" : "focus:border-t-s-gradiant/70"}
`}
/>
</div>
)
}

export default RegisterInput