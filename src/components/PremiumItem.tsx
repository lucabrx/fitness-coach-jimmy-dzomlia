import { Icon } from 'lucide-react';
import { type FC } from 'react';

interface PremiumItemProps {
  icon: Icon;
    title: string;
}

const PremiumItem: FC<PremiumItemProps> = ({
    title,
    icon: Icon,
}) => {
  return (
<div className='flex justify-center items-center gap-6'> 
<div className='w-9 h-9 rounded-md bg-gradient-to-br from-s-gradiant to-e-gradiant flex justify-center items-center '>
<Icon className='text-heading' />
</div>

<h3 className='text-lg text-heading'>{title}</h3>
</div>
)
}

export default PremiumItem