'use client'

import React, { use, useState } from 'react'
import RadioFilter from './RadioFilter'
import CheckBoxFilter from './CheckBoxFilter'
import { datePostedFilter, experienceLevelFilter } from '@/data/filters/jobfilter'
import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineBusinessCenter } from 'react-icons/md'

const EmployerFilter = () => {
  const [toggleFilters, setToggleFilters] = useState(['Free Lance'])
  const [activeDateIndex, setActiveDateIndex] = useState(1)
  const companySizes = [
    '1-100 Members',
    '100-500 Members',
    '500-100 Members',
    '1000-* Members'
  ]
  
  return (
    <div className='w-full bg-[#F6F7FC] rounded-lg p-4'>
        <div className='w-full'>
            <h1 className='text-lg'>Search by keywords</h1>
            <div className='border bg-white rounded-md mt-3'>
                <SearchInput icon={CiSearch} placeholder='Company title, keywords'/>
            </div>
        </div>
        <div className='w-full mt-6'>
            <h1 className='text-lg'>Location</h1>
            <div className='border bg-white rounded-md mt-3'>
                <SearchInput icon={CiSearch} placeholder='City or postcode...'/>
            </div>
        </div>
        <div className='w-full mt-6'>
            <h1 className='text-lg'>Category</h1>
            <div className='border bg-white rounded-md mt-3'>
                <SearchSelect icon={MdOutlineBusinessCenter} placeholder='Choose category...' datasource={companySizes}/>
            </div>
        </div>
        <div className='w-full mt-6'>
            <h1 className='text-lg'>Company size</h1>
            <div className='border bg-white rounded-md mt-3'>
                <SearchSelect icon={MdOutlineBusinessCenter} placeholder={companySizes[0]} datasource={companySizes}/>
            </div>
        </div>
    </div>
  )
}

export default EmployerFilter