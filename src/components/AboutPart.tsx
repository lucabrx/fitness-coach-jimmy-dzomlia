import Image from 'next/image';
import { type FC } from 'react';

interface AboutPartProps {
  
}

const AboutPart: FC<AboutPartProps> = ({}) => {
  return (
<div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between  -mt-20 px-4 max-w-[1240px] '> 
<div className='flex flex-col space-y-4 md:w-[50%] md:mt-6'>
    <h2 className='font-bold text-2xl text-heading w-full text-left'>Meet your coach?</h2>
    <p className='text-text'>As a dedicated fitness coach, my mission is to empower individuals to achieve their health and wellness goals through personalized training, guidance, and support.
    </p>

    <p className='text-text mt-2'>
    With 20 years of experience in the fitness industry, I have had the privilege of working with clients of all ages and fitness levels, helping them transform their lives and reach new heights of physical fitness.
    </p>

    <p className='text-text mt-2 hidden md:block'>
    By combining various training methodologies, including strength training, cardiovascular exercises, flexibility work, and functional movements, I aim to provide a well-rounded fitness experience that promotes overall health and longevity.</p> 

    <p className='text-text mt-2 hidden md:block'>
    I strongly believe in taking a holistic approach to fitness, focusing not only on physical strength and endurance but also on mental well-being. I work closely with my clients to create tailored workout programs that address their specific needs, preferences, and goals.
    </p>
</div>

<Image 
    src='/about.png'
    alt='about'
    width={498}
    height={548}
    className='mt-4'
    />
</div>
)
}

export default AboutPart