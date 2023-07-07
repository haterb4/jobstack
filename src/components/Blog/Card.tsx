import Image from 'next/image';
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
      <div className='w-full md:w-[380px] min-h-[415px] bg-white p-3 rounded-lg'>
        <div className='w-full h-[195px] rounded-lg bg-zinc-200 relative'>
          <Image
            className='rounded-lg'
            src={'/images/blog/'+article.coverImage}
            alt={article.title+' image'}
            fill
          />
        </div>
        <div>
          <h3 className='flex items-center text-zinc-500 my-4 text-[11px]'>
            <span>{article.postedAt}</span>
            <span className='inline-block w-2 h-2 rounded-full bg-zinc-500 mx-3'/>
            <span>{article.comments} Comment</span>
          </h3>
          <h1 className='text-lg'>{article.title}</h1>
          <p className='text-zinc-500 mt-4 mb-3 text-[13px] leading-5'>{article.intro}</p>
          <Link href={''} className='flex items-center text-blue-600'>
            <span className='mr-4'>Read more</span>
            <HiChevronRight size={20}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card