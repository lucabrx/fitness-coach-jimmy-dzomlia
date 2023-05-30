"use client"
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { type FC } from 'react';
import Button from './Button';
import NavbarLinks from './navbar/NavbarLinks';
import useLoginModal from '@/hooks/useLoginModal';
import { User } from '@prisma/client';
import ShouldRender from './ShouldRender';
import { signOut } from 'next-auth/react';

interface NavbarProps {
  session: User | null
}

const Navbar: FC<NavbarProps> = ({session}) => {
  const loginModal = useLoginModal()
  
  return (
<div className='w-full justify-center flex'>
    <div className='max-w-[1240px] w-full flex justify-between items-center px-4 py-2'>
        <Link href="/" className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent font-bold text-[32px] md:text-[36px]'>JD</Link>
        <Menu size={24} className='text-heading md:hidden' />


        <NavbarLinks />

        <div className='hidden md:block'>
        <ShouldRender if={!session}>
        <Button
        onClick={loginModal.onOpen}
        >
        Sign Up
        </Button>
        </ShouldRender>
        <ShouldRender if={session}>
          <Button 
          onClick={() => signOut()}>
            Logout
          </Button>
        </ShouldRender>
        </div>
    </div>
</div>
)
}

export default Navbar