import Image from 'next/image';
import { type FC } from 'react';

interface ExpertCardProps {
  img: string;
  title: string;
}

const ExpertCard: FC<ExpertCardProps> = ({img,title}) => {
  return (

<div className="w-full max-w-[420px] md:max-w-[390px] mx-auto rounded-sm shadow-sm text-center">
  <div className="relative">
    <img
      className="w-full h-auto rounded-lg"
      src={img}
      alt={title}
    />
    <h2 className="absolute inset-0 flex justify-center items-center font-bold text-3xl text-heading">
      {title}
    </h2>
  </div>
</div>
)
}

export default ExpertCard