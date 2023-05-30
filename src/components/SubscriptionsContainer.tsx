"use client"
import Image from 'next/image';
import { useEffect, type FC } from 'react';
import PremiumCard from './PremiumCard';
import { useAnimation,motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const SubscriptionsContainer: FC = ({}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true, // trigger only once
      rootMargin: '-100px 0px', 
    });

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);
     
  return (
    <motion.div 
    id="subscription"
    ref={ref}
 initial="hidden"
 animate={controls}
 variants={{
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
 }}
 transition={{ duration: 2, ease: 'easeInOut' }}
    className='pt-4 px-4 max-w-[1240px] md:pt-6 '>
    <h2 className='font-bold text-[28px] leading-[38px] text-heading text-left md:text-center pb-2 md:pb-4'>
    Join now and be better <span className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent'>Tomorrow</span>
    </h2>

    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 md:items-start '>
       <PremiumCard />
      
      <div className='h-full w-full md:max-h-[340px] pt-1'>
      <Image
        src='/subscription.png'
        alt='home2'
        width={700}
        height={700}
        className='object-cover aspect-video'
        />
        </div>
       </div>
    </motion.div>
)
}

export default SubscriptionsContainer