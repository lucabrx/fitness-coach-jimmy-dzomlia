import { type FC } from 'react';
import PremiumItem from './PremiumItem';
import { CalendarCheck2, DollarSign, Dumbbell, Home, Utensils, Video } from 'lucide-react';
import Button from './Button';

interface PremiumCardProps {
  
}

const PremiumCard: FC<PremiumCardProps> = ({}) => {
  return (
<div className='max-w-[604px] w-full rounded-lg bg-card flex flex-col justify-center items-center p-6'> 
<h2 className='font-bold text-[24px] md:text-[32px] bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent pb-6'>Premium Plan</h2>

<div className='flex flex-col md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-8 justify-start items-start space-y-6 pb-6'>
<div className='flex flex-col space-y-6 justify-start items-start'>
    <PremiumItem title='Weekly Update' icon={CalendarCheck2} />
    <PremiumItem title='Video Calls' icon={Video} />
    <PremiumItem title='19.99$ per month' icon={DollarSign} />
</div>
<div className='flex flex-col space-y-6 justify-start items-start'>
<PremiumItem title='Nutrition Plan' icon={Utensils} />
<PremiumItem title='Gym workout plan' icon={Dumbbell} />
<PremiumItem title='Home workout plan' icon={Home} />
</div>
</div>

<div className='w-full flex items-center justify-center mb-2 bg-blue-500'>
<Button>
    Be Awesome
</Button>
</div>

</div>
)
}

export default PremiumCard