"use client"
import { useEffect, type FC } from 'react';
import ExpertCard from './ExpertCard';
import { useAnimation,motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExpertContainerProps {
  
}

const ExpertContainer: FC<ExpertContainerProps> = ({}) => {
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
 ref={ref}
 initial="hidden"
 animate={controls}
 variants={{
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
 }}
 transition={{ duration: 2, ease: 'easeInOut' }}
className='bg-card w-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center flex-wrrap md:flex-row maxXS:justify-between px-4 maxXS:px-0  py-8 gap-6 max-w-[1240px]'>
        <ExpertCard
        title="Weight Lifting"
        img='/gym.png'
        />
        <ExpertCard
        title="Functional Training"
        img='/functional.png'
        />
        <ExpertCard 
        title="Cardio"
        img='/cardio.png'
        />
      </div>
      </motion.div>
)
}

export default ExpertContainer