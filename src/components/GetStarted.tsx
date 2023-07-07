'use client'

import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import Button from './Button'
import { useWindowSize } from 'usehooks-ts'
import Stat from './Stat'

const GetStarted = () => {
    const { width, height } = useWindowSize()
  return (
    <div className={`w-full`}>
        <div className='py-8 mb border-b mb-20'></div>
        <div className={`w-full flex  justify-center ${width < 1100 ? 'flex-col-reverse items-center' : 'items-start'}`}>
            <div className='w-[450px] h-[480px] border rounded-md bg-[url(/images/features/find.jpg)] bg-cover bg-center bg-no-repeat relative my-4'>
                <div className={`w-[250px] h-[120px] absolute ${width < 1100 ? 'top-[280px] right-[100px]': '-right-36 -bottom-9'}   border rounded-md`}>
                    <div className='bg-white w-full h-full relative rounded-md'>
                        <div className='w-14 h-14 rounded-full flex justify-center items-center text-white bg-blue-600 absolute -top-6 -left-5'>
                            <AiOutlineCheck size={32}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[480px] ml-16 px-4 my-4'>
                <h1 className='text-3xl font-bold'>Millions of Jobs. Find the one that suits you.</h1>
                <p className='py-4 pr-8 text-zinc-400  leading-6'>Seach all the open position on the web. Get your own personalized salary estimate. Read reviews of 600,000 compagnies worldwide</p>
                <ul>
                    <li className='flex items-center py-3'><AiOutlineCheck/> <span className='px-3'>Bring to the table win-win survival</span></li>
                    <li className='flex items-center py-3'><AiOutlineCheck/> <span className='px-3'>Capitalize on low hanging fruit to identify</span></li>
                    <li className='flex items-center py-3'><AiOutlineCheck/> <span className='px-3'>But i must explain to you how all this</span></li>
                </ul>
                <div className='pt-4'>
                    <Button text='Get Started'/>
                </div>
            </div>
        </div>
        <div className='w-full py-8 px-[25%] mb flex justify-center items-center mt-20'>
            <div className={`w-full flex ${width < 1100 ? 'flex-col justify-center  gap-8' : 'justify-between'} items-center`}>
                <Stat title='4M' description='4 million daily active users'/>
                <Stat title='12k' description='Over 12k open job positions'/>
                <Stat title='20M' description='Over 20 million stories shared'/>
            </div>
        </div>
    </div>
  )
}

export default GetStarted