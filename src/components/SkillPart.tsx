import Image from 'next/image';
import { type FC } from 'react';

interface SkillPartProps {
  
}

const SkillPart: FC<SkillPartProps> = ({}) => {
  return (
<div className='flex justify-center items-center bg-card w-full'> 
<div className='
max-w-[1240px] flex justify-center items-center flex-col px-4 maxXS:px-0
md:flex-row md:flex-wrap md:justify-center maxXS:justify-between gap-4 py-8'>


<div className='
bg-[url("/gym.png")] bg-no-repeat  bg-center bg-cover
flex flex-col justify-center items-center h-full w-[96vw] md:w-auto aspect-square md:min-w-[392px] md:aspect-auto shadow-sm rounded-md'>
<h2 className='text-[36px] font-bold text-heading'>Weight Lifting</h2>
</div>

<div className='
bg-[url("/functional.png")] bg-no-repeat  bg-center bg-cover
flex flex-col justify-center items-center h-full  w-[96vw] md:w-auto aspect-square md:min-w-[392px] md:aspect-auto shadow-sm rounded-md'>
<h2 className='text-3xl md:text-[36px] font-bold text-heading'>Functional Traning</h2>
</div>

<div className='
bg-[url("/cardio.png")] bg-no-repeat  bg-center bg-cover
flex flex-col justify-center items-center h-full  w-[96vw] md:w-auto aspect-square md:min-w-[392px] md:aspect-auto shadow-sm rounded-md'>
<h2 className='text-[36px] font-bold text-heading'>Cardio</h2>
</div>

</div>
</div>
)
}

export default SkillPart