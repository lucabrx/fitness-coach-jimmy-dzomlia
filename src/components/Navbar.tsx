"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, type FC } from 'react';
import Button from './Button';
import NavbarLinks from './navbar/NavbarLinks';
import useLoginModal from '@/hooks/useLoginModal';
import { User } from '@prisma/client';
import ShouldRender from './ShouldRender';
import { signOut } from 'next-auth/react';
import useLockOverflow from '@/hooks/useLockOverflow';
import IconContainer from './IconContainer';

interface NavbarProps {
  session: User | null
}

const Navbar: FC<NavbarProps> = ({session}) => {
  const [isOpen, setIsOpen] = useState(false)
  const loginModal = useLoginModal()
  useLockOverflow(isOpen)

  function login() {
    setIsOpen(false)
    loginModal.onOpen()
  
  }
  function logout() {
    setIsOpen(false)
    signOut()
  }
  return (
<div className='w-full justify-center flex'>
    <div className='max-w-[1240px] w-full flex justify-between items-center px-4 py-2'>
        <Link href="/" className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent font-bold text-[32px] md:text-[36px]'>JD</Link>
        <button 
        onClick={() => setIsOpen(true)}
        className='p-2 hover:p-2 rounded-md hover:bg-zinc-400/30'>
        <NavbarLinks />
        
       
        <Menu size={24} className='text-heading md:hidden' />
        </button>
        <ShouldRender if={isOpen}>
          <div className='fixed top-0 left-0 w-full h-full bg-card z-50 flex justify-start items-center flex-col px-4 space-y-2 pt-10'>
            <IconContainer
            onClick={() => setIsOpen(false)}
            >
              <X size={24}  className='text-heading' />
            </IconContainer>
            <Link onClick={() => setIsOpen(false)} href="/" className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent font-bold text-[32px] md:text-[36px]'>Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/about" className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent font-bold text-[32px] md:text-[36px]'>About</Link>
            <Link onClick={() => setIsOpen(false)} href="/blog" className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent font-bold text-[32px] md:text-[36px]'>Blog</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent font-bold text-[32px] md:text-[36px]'>Contact</Link>
           <div>
           <ShouldRender if={!session}>
            <Button
            onClick={login}
            >
            Sign Up
            </Button>
            </ShouldRender>
            <ShouldRender if={session}>
              <Button
              onClick={logout}
              >
                Logout
              </Button>
            </ShouldRender>
           </div>
          </div>
        </ShouldRender>
       
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