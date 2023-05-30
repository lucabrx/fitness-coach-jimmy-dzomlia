import { type ReactNode, type FC, type HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({children,disabled,...props}) => {
  return (
<button
disabled={disabled}
{...props}
className='bg-gradient-to-br from-s-gradiant to-e-gradiant px-6 py-2 h-[40px] rounded-md text-heading font-medium w-full hover:from-s-gradiant/80 hover:to-e-gradiant/80 transition-all duration-300'> 
{children}
</button>
)
}

export default Button