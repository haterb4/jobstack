'use client'

import React, { useState } from 'react'
import Button from './Button'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useWindowSize } from 'usehooks-ts'
import Link from 'next/link'

const Header = () => {
  const { width, height } = useWindowSize()
  const [jobTitle, setJobTitle] = useState('')
  const [postCode, setPostCode] = useState('')
  return (
    <div className={`h-[550px] bg-neutral-100 w-full flex flex-col justify-center ${width < 900 ? 'items-center px-12' : 'items-start px-[17%]'}`}>
      <div className={`${width < 650 ? 'w-full' : 'w-[600px]'}`}>
        <h1 className='text-5xl leading-[4rem]'>The are 93,178 Posting here for you! </h1>
        <p className='text-neutral-400 mt-3'>Find jobs, Employement & Career Opportunities</p>
        <div className='mt-12 w-full'>
          <div className={`${width < 650 ? 'w-full flex-col px-4' : 'w-[600px] h-[80px] justify-between'} border flex items-center py-3 bg-white px-4 rounded-md shadow-md`}>
            <div className={`flex items-center justify-start py-2 ${width > 650 ? 'w-[230px]' : 'w-full'}`}>
              <div className='flex justify-center items-center mr-3'>
                <CiSearch size={28}/>
              </div>
              <div className={`${width > 650 ? 'w-[200px]' : 'w-full'}`}>
                <input
                  type="text"
                  className='h-[40px] w-full outline-none'
                  value={jobTitle} placeholder='Job title, keywords, or company'
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
            </div>
            {width > 650 && (<div className='w-[1px] h-[30px] bg-neutral-400 mx-4'></div>)}
            <div className={`flex items-center py-2 ${width > 650 ? 'w-[180px]' : 'w-full'}`}>
              <div className='flex justify-center items-center mr-3'>
                <HiOutlineLocationMarker size={28}/>
              </div>
              <div className={`${width > 650 && 'w-full'}`}>
                <input
                  type="text"
                  className='h-[40px] w-full outline-none'
                  value={postCode}
                  placeholder='City or postcode'
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </div>
            </div>
            <div className='flex justify-center items-center w-[150px]'>
              <Link href={`/search/?jobt-tile=${jobTitle}&post-code=${postCode}`} className="px-8 py-3 pt-4 rounded-md bg-blue-600 text-white capitalize">
                Find jobs
              </Link>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-4'>
          <h2>Popular searches :</h2>
          <p className='ml-5 text-neutral-500'> Designer, Developper, Web, IOS, PHP, Senior, Egineer</p>
        </div>
      </div>
    </div>
  )
}

export default Header