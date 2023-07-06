import React from 'react'
import { IconType } from 'react-icons'
interface OverviewItemProps{
    icon: IconType;
    title: string;
    text: string;
}

const OverviewItem: React.FC<OverviewItemProps> = (props) => {
  return (
    <div className='flex items-start my-4 py-2'>
        <div className='w-12 h-12 text-[#1967D3] flex justify-start items-center'>
        <props.icon size={30}/>
        </div>
        <div>
        <h2 className='text-lg'>{props.title}</h2>
        <p className='text-neutral-500'>{props.text}</p>
        </div>
    </div>
  )
}

export default OverviewItem
