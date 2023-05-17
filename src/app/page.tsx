import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full justify-center flex'>
      <div className=' bg-[url("/home1.png")] bg-no-repeat bg-fixed bg-center bg-cover h-[580px] lg:h-[880px] w-full'>
        <Navbar />
      </div>
      
    </div>
  )
}