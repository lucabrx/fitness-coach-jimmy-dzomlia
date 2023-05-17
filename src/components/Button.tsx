import { type ReactNode, type FC, type HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({children}) => {
  return (
<button className='bg-gradient-to-br from-s-gradiant to-e-gradiant h-[40px] px-5 py-1.5 rounded-md text-heading'> 
{children}
</button>
)
}

export default Button