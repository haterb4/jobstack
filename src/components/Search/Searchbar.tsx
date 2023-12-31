'use client'

import React, { FormEvent } from 'react'
import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { MdOutlineBusinessCenter } from 'react-icons/md'

const Searchbar = () => {
  const onSearch = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <form className='w-full lg:w-[975px] xl:w-[1250px] border md:flex px-4 lg:items-center bg-white my-4 py-2 rounded-lg' onSubmit={onSearch}>
        <SearchInput icon={CiSearch} placeholder='Job title, keyword, or company' sep/>
        <SearchInput icon={HiOutlineMapPin} placeholder='City or postcode' sep/>
        <SearchSelect icon={MdOutlineBusinessCenter} placeholder='category'/>
        <div className='my-2 w-full lg:w-[200px]'>
            <button type='submit' className='bg-[#1967D3] text-white rounded-lg w-full flex justify-center items-center px-8 pt-1 h-[40px] outline-none'><span className='w-[70px]'>Find Jobs</span></button>
        </div>
    </form>
  )
}

export default Searchbar