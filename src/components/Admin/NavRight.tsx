'use client'
import React from 'react'
import { BsBell, BsChevronDown, BsHeart } from 'react-icons/bs'
import { useWindowSize } from 'usehooks-ts'

const NavRight = () => {
    const { width } = useWindowSize()
  return (
    <div className='flex items-center justify-end'>
        <div className='flex justify-between items-center w-24 mx-8'>
            <button className='w-8 h-8 relative flex justify-center items-center rounded'>
                <BsHeart size={20} />
                <div className='absolute -right-[10px] -top-0 text-[8.5px] font-bold h-[18px] w-[18px] flex justify-center items-center bg-[#1967D3] text-white rounded-full'>16</div>
            </button>
            <button className='w-8 h-8 relative flex justify-center items-center rounded'>
                <BsBell size={20} />
            </button>
        </div>
        <div className='flex items-center'>
            <div className='flex justify-center items-center h-10 w-10 rounded-full bg-pink-600 text-white'>in</div>
            {width >= 1024 && (<button className='px-4 flex items-center capitalize'>
                <span className='mr-4'>My Account</span>
                <BsChevronDown />
            </button>)}
        </div>
    </div>
  )
}

export default NavRight