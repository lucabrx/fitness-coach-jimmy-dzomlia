import AboutPart from '@/components/AboutPart'
import ExpertCard from '@/components/ExpertCard'
import ExpertContainer from '@/components/ExpertContainer'
import Footer from '@/components/Footer'
import HeroContent from '@/components/HeroContent'
import Navbar from '@/components/Navbar'
import PremiumCard from '@/components/PremiumCard'
import ReviewsContainer from '@/components/ReviewsContainer'
import SubscriptionsContainer from '@/components/SubscriptionsContainer'
import getCurrentUser from '@/utils/getSession'
import Image from 'next/image'

export default async function Home() {
  const session = await getCurrentUser()

  
  return (
    <div className='w-full items-center flex-col flex bg-bg'>
      <div className=' bg-[url("/home1.png")] bg-no-repeat  bg-center bg-cover h-[580px] lg:h-[880px] w-full '>
        <Navbar session={session} />
        <div className='xl:mt-20 xxl:mt-28'>
          <HeroContent />
        </div>
        </div>
      <ReviewsContainer />
      <AboutPart />
      <ExpertContainer />
      <SubscriptionsContainer /> 
      <Footer />
    </div>
  )
}