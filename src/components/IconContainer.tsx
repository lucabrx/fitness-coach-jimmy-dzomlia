import { ReactNode, type FC, HTMLAttributes } from 'react';



interface IconContainerProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick: () => void;
}

const IconContainer: FC<IconContainerProps> = ({children,onClick}) => {
  return (
<div 
onClick={onClick}
className="bg-transparent transition-all duration-300  hover:bg-zinc-400/30 absolute top-4 right-4 cursor-pointer rounded-md p-1.5"
> 
{children}
</div>
)
}

export default IconContainer