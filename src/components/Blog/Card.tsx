import Link from 'next/link';
import React from 'react'
import { HiChevronRight } from 'react-icons/hi';
interface CardProps {
  article: {
    title: string;
    coverImage: string;
    intro: string;
    comments: number;
    postedAt: string;
    id?: string
  };
}
const Card: React.FC<CardProps> = ({article}) => {
  return (
    <div className='my-8'>
      <div className='w-[380px] h-[400px] bg-white p-3 rounded-lg'>
        <div className='w-full h-[195px] rounded-lg bg-zinc-200'></div>
        <div>
          <h3 className='flex items-center text-zinc-500 my-4 text-[11px]'>
            <span>{article.postedAt}</span>
            <span className='inline-block w-2 h-2 rounded-full bg-zinc-500 mx-3'/>
            <span>{article.comments} Comment</span>
          </h3>
          <h1>{article.title}</h1>
          <p className='text-zinc-500 mt-4 mb-3 text-[11px] leading-5'>{article.intro}</p>
          <Link href={''} className='flex items-center text-blue-600'>
            <span className='mr-4'>Read more</span>
            <HiChevronRight size={24}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card