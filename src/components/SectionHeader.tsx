import React from 'react'

interface HeaderProps {
    title: string;
    slogan: string;
}

const SectionHeader: React.FC<HeaderProps> = ({title, slogan}) => {
  return (
    <div className='flex flex-col item-center justify-center text-center'>
        <h1 className='text-3xl font-semibold'>{title}</h1>
        <p className='text-base text-zinc-600 mt-3'>{slogan}</p>
    </div>
  )
}

export default SectionHeader