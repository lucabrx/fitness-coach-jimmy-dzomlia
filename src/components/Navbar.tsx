import { Menu } from 'lucide-react';
import Link from 'next/link';
import { type FC } from 'react';
import Button from './Button';
import NavbarLinks from './navbar/NavbarLinks';

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
<div className='w-full justify-center flex'>
    <div className='max-w-[1240px] w-full flex justify-between items-center px-4 py-2'>
        <Link href="/" className='bg-clip-text bg-gradient-to-br from-s-gradiant to-e-gradiant text-transparent font-bold text-[32px] md:text-[36px]'>JD</Link>
        <Menu size={24} className='text-heading md:hidden' />


        <NavbarLinks />

        <div className='hidden md:block'>
        <Button>
        Login
        </Button>
        </div>
    </div>
</div>
)
}

export default Navbar