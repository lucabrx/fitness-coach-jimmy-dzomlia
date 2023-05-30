"use client"
import ReviewCard from './ReviewCard';
import React, { type FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ReviewsContainer: FC = ({}) => {
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
    className='flex w-full justify-center'>
    <div className='grid grid-cols-1 px-4 md:grid-cols-2 gap-4  lg:grid-cols-3 xl:grid-cols-4 max-w-[1240px] justify-center items-center relative -top-24 lg:-top-36'>
   
    <ReviewCard 
    name='Rokas Pusktas'
    image='/person2.jpg'
    desc='Very good trainer, helped me to achieve my goals, thank u mister Jimmy a lot. I am very happy with the results'
    title='Amazing!!!'
    />
   
    <ReviewCard 
    name='Milena Dravic'
    image='/person4.jpg'
    desc='I cant find a word how to describe amazing work of mister Jimmy he is just great motivatior and he can achive your goals'
    title='5 stars'
    />
   
    <ReviewCard 
    name="Michael O'Connel"
    image='/person3.jpg'
    desc='I am very happy with the results, I have lost 10kg in 2 months, I am very happy with the results, I have lost 10kg in 2 months'
    title='Very good'
    />
   
    <div className='lg:hidden xl:block'>
    <ReviewCard
    name="Anna Lopes"
    image='/person1.png'
    desc='I am very happy with the results, I train hard and I enjoyed a lot this is amazing. U need to try it'
    title='Just WOOW!!!'
    />
  </div>
    
  </div>
  </motion.div>
)
}

export default ReviewsContainer