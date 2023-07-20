'use client'

import { Input } from '@/components'
import Link from 'next/link'
import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { FaGoogle } from 'react-icons/fa'

const Page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full xl:w-[500px]'>
        <div className='w-full py-2'>
          <Input handler={(value: string) => null} label='Username'/>
        </div>
        <div className='w-full py-2'>
          <Input handler={(value: string) => null} label='Username'/>
        </div>
        <div className='w-full flex justify-between items-center mt-4'>
          <div className='flex items-center gap-2'>
            <input type="checkbox"  name="" id="" className='h-4 w-4 border-neutral-500'/>
            <span className='text-neutral-500'>Remember me</span>
          </div>
          <span className=''>Forgot your password</span>
        </div>
        <div className='w-full mt-6 flex flex-col items-center justify-center'>
          <button className='py-3 w-full pt-4 rounded-md bg-blue-600 text-white'>Log In</button>
          <div className='mt-3'><span className='text-neutral-500'>{"Don't have an account?"}</span> <Link href={'/authentication/inscription'}>Signup</Link></div>
        </div>
        <div className='w-full relative mt-6 flex justify-center items-center'>
          <span className='px-3 bg-white text-neutral-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>or</span>
          <hr className='w-full mt-1'/>
        </div>
        <div className='mt-6 flex justify-between items-center gap-4'>
          <button className='py-3 w-1/2 flex justify-center items-center pt-4 rounded-lg text-blue-600 border border-blue-600'>
            <GrFacebookOption />
            <span className='px-4'>Log In via Facebook</span>
          </button>
          <button className='py-3 w-1/2 flex justify-center items-center pt-4 rounded-lg text-red-600 border border-red-600'>
            <FaGoogle />
            <span className='px-4'>Log In via Google+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
