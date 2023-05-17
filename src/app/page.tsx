import HeroContent from '@/components/HeroContent'
import Navbar from '@/components/Navbar'
import ReviewCard from '@/components/ReviewCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full justify-center flex'>
      <div className=' bg-[url("/home1.png")] bg-no-repeat bg-fixed bg-center bg-cover h-[580px] lg:h-[880px] w-full'>
        <Navbar />
        <div>
          <HeroContent />
        </div>
        <div className='px-10'>
        <ReviewCard />

        </div>
      </div>
      
    </div>
  )
}