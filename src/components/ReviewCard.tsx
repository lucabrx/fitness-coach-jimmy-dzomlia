import Image from 'next/image';
import { type FC } from 'react';

interface ReviewCardProps {
    title: string;
    desc: string;
    name: string; 
    image: string;
}

const ReviewCard: FC<ReviewCardProps> = ({title,desc,name,image}) => {
  return (
<div className='xl:w-[286px] w-full h-[250px] rounded-lg bg-card p-6 flex flex-col justify-between'> 
<h2 className='text-xl font-medium text-heading'>{title}</h2>

<p className='text-base text-text'>
{desc}
</p>

<div className='w-full flex gap-4'>
    <div className='relative w-[42px] h-[42px] flex'>
        <Image 
        src={image}
        alt="person"
        fill
        className='rounded-full  object-center'
        />
    </div>

    <div className='flex-col justify-start items-start flex'>
        <p className='text-base text-heading'>{name}</p>

        <div className='flex gap-2 items-center justify-center'>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0.5L11.0206 6.71885H17.5595L12.2694 10.5623L14.2901 16.7812L9 12.9377L3.70993 16.7812L5.73056 10.5623L0.440492 6.71885H6.97937L9 0.5Z" fill="#A99A17"/>
        </svg>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0.5L11.0206 6.71885H17.5595L12.2694 10.5623L14.2901 16.7812L9 12.9377L3.70993 16.7812L5.73056 10.5623L0.440492 6.71885H6.97937L9 0.5Z" fill="#A99A17"/>
        </svg>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0.5L11.0206 6.71885H17.5595L12.2694 10.5623L14.2901 16.7812L9 12.9377L3.70993 16.7812L5.73056 10.5623L0.440492 6.71885H6.97937L9 0.5Z" fill="#A99A17"/>
        </svg>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0.5L11.0206 6.71885H17.5595L12.2694 10.5623L14.2901 16.7812L9 12.9377L3.70993 16.7812L5.73056 10.5623L0.440492 6.71885H6.97937L9 0.5Z" fill="#A99A17"/>
        </svg>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0.5L11.0206 6.71885H17.5595L12.2694 10.5623L14.2901 16.7812L9 12.9377L3.70993 16.7812L5.73056 10.5623L0.440492 6.71885H6.97937L9 0.5Z" fill="#A99A17"/>
        </svg>
        </div>
    </div>
</div>
</div>
)
}

export default ReviewCard