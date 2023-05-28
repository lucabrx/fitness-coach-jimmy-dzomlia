import AboutPart from '@/components/AboutPart'
import ExpertCard from '@/components/ExpertCard'
import HeroContent from '@/components/HeroContent'
import Navbar from '@/components/Navbar'
import ReviewCard from '@/components/ReviewCard'
import SkillPart from '@/components/SkillPart'

export default function Home() {
  return (
    <div className='w-full items-center flex-col flex bg-bg'>
      <div className=' bg-[url("/home1.png")] bg-no-repeat  bg-center bg-cover h-[580px] lg:h-[880px] w-full '>
        <Navbar />
        <div className='xl:mt-20 xxl:mt-28'>
          <HeroContent />
        </div>
        </div>
        <div className='flex w-full justify-center'>
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
      </div>
     <AboutPart />
      
      <div className='bg-card w-full flex justify-center items-center'>
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
      </div>
     

      
    </div>
  )
}