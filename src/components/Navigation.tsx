import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <nav className='w-full flex items-center justify-between px-12 pt-4'>
        <div className='flex items-center'>
            <div className='py-4 mr-4 flex items-center justify-between'>
                <div className='h-8 w-8 flex justify-center items-center bg-[#1967D3] text-white rounded-[10px]'>JS</div>
                <Link href={''} className='px-2 ml-2 font-semibold text-sm'>Jobstack</Link>
            </div>
            <NavLinks />
        </div>
        <div className='flex items-center justify-end text-[#1A67D3]'>
            <div className=''>
                <Link href={'/cv'}>Upload your cv</Link>
            </div>
            <div className='px-6 py-[14px] bg-[#E3EAFA] rounded-[8px] ml-5'>
                <Link href={'/authenication'}>Login / Register</Link>
            </div>
            <div className='px-6 py-[14px] bg-[#1967D3] rounded-[8px] text-white ml-5'>
                <Link href={'/authenication'}>Job Post</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navigation