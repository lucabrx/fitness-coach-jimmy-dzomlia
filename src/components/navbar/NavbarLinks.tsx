import Link from 'next/link';
import { type FC } from 'react';

interface NavbarLinksProps {
  
}

const NavbarLinks: FC<NavbarLinksProps> = ({}) => {
  return (
<div className='hidden md:flex gap-5'>
        <Link className='text-[18px] font-medium text-heading' href='/'>About</Link>
        <Link className='text-[18px] font-medium text-heading' href='/'>Programms</Link>
        <Link className='text-[18px] font-medium text-heading' href='/'>Gallery</Link>
        <Link className='text-[18px] font-medium text-heading' href='/'>Contact</Link>
        </div>
)
}

export default NavbarLinks