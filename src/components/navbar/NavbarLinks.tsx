import Link from 'next/link';
import { type FC } from 'react';

interface NavbarLinksProps {
  
}

const NavbarLinks: FC<NavbarLinksProps> = ({}) => {
  return (
<div className='hidden md:flex gap-5'>
        <Link className='text-[18px] font-medium text-heading' href='/'>Home</Link>
        <Link className='text-[18px] font-medium text-heading' href='#about'>About</Link>
        <Link className='text-[18px] font-medium text-heading' href='#subscription'>Subscription</Link>
        </div>
)
}

export default NavbarLinks