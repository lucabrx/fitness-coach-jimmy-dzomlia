import { type ReactNode, type FC, type HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({children}) => {
  return (
<button className='bg-gradient-to-br from-s-gradiant to-e-gradiant px-6 py-2 h-[44px] rounded-md text-heading font-medium w-full'> 
{children}
</button>
)
}

export default Button