import React from 'react'
interface StatProps {
    title: string;
    description: string;
}

const Stat: React.FC<StatProps> = ({title, description}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-4xl font-[700px]'>{title}</h1>
        <h2 className='text-center text-zinc-500 py-2'>{description}</h2>
    </div>
  )
}

export default Stat