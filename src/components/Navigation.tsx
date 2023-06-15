import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'

const Navigation = () => {
  return (
    <nav className='w-full flex items-center justify-between px-12 pt-4'>
        <div className='flex items-center'>
            <Logo href=''/>
            <NavLinks />
        </div>
        <div className='flex items-center justify-end text-[#1A67D3]'>
            <div className=''>
                <Link href={'/cv'}><span className='w-[93px] block'>Upload your cv</span></Link>
            </div>
            <div className='px-6 py-[14px] bg-[#E3EAFA] rounded-[8px] ml-5'>
                <Link href={'/authenication'}><span className='w-[98px] block'>Login / Register</span></Link>
            </div>
            <div className='px-6 py-[14px] bg-[#1967D3] rounded-[8px] text-white ml-5'>
                <Link href={'/authenication'}><span className='w-[55px] block'>Job Post</span></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navigation