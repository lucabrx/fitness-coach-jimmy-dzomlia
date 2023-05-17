import Image from 'next/image';
import { type FC } from 'react';

interface ExpertCardProps {
  
}

const ExpertCard: FC<ExpertCardProps> = ({}) => {
  return (
<div className='relative  w-full max-w-[392px] rounded-lg flex justify-center items-center'> 
<Image
className='absolute inset-0 rounded-lg'
src='/cardio.png'
fill 
alt="cardio"

/>
<h2 className='font-bold text-[36px] text-heading z-10'>Cardio</h2>
</div>
)
}

export default ExpertCard