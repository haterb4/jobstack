import React from 'react'
import { IconType } from 'react-icons'
interface QuickStatProps {
    icon: IconType;
    value: number;
    title: string;
    fg: string;
    bg: string;
}
const QuickStat = (props: QuickStatProps) => {
  return (
    <div className={`min-w-[269px] w-full h-[110px] flex justify-between items-center px-8 shadow-1 border rounded bg-white ${props.fg}`}>
        <div className={`w-16 h-16 rounded-lg flex justify-center items-center ${props.bg}`}>
            <props.icon size={28}/>
        </div>
        <div className='w-32 flex flex-col items-end justify-start'>
            <h1 className='text-3xl leading-[3rem]'>{props.value}</h1>
            <p className='text-black'>{props.title}</p>
        </div>
    </div>
  )
}

export default QuickStat