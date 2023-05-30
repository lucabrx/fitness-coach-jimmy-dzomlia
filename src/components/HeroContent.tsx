"use client"
import { type FC } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const HeroContent: FC = ({}) => {
  return (
<motion.div 
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 2, ease: 'easeInOut' }}

className='flex flex-col justify-center px-4 w-full space-y-2 pt-[48px] md:pt-[140px]'> 
<h2
className='font-bold text-[32px] leading-[38px] text-heading text-center block md:hidden'>
Push harder <br/>
today if You Want a <br />
<span className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent'>Different Tomorrow</span>
</h2>

<h2 className='font-bold text-[32px] leading-[38px] text-heading text-center hidden md:block lg:text-[62px] lg:leading-[70px]'>
Push harder 
today if You Want a <br />
<span className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent'>Different Tomorrow</span>
</h2>

<p className='text-base text-text text-center md:hidden'>
Health is something we need to care of. <br/>
Exercise is a key for a healthy body.   <br/>
Exercising makes your life happy. 
</p>

<p className='text-base text-text text-center hidden md:block lg:text-lg'>
Health is something we need to care of. <br/>
Exercise is a key for a healthy body.   
Exercising makes your life happy. 
</p>
<div className='w-full justify-center flex'>
<div className='w-[130px] flex justify-center pt-2'>
<Button >
    Join Now
</Button>
</div>
</div>
</motion.div>
)
}

export default HeroContent