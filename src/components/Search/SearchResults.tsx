'use client'

import React, { useState } from 'react'
import Select from '../Select'
import FeaturedItem from '../Job/FeaturedItem'
import { featuredJobs } from '@/data/features'
import JobCard from '../Job/Card'
import { CgMenuLeft } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'
interface Props {
    toggle?: Function
}

const SearchResults: React.FC<Props> = (props) => {
  const [jobTime, setJobTime] = useState('New job')
  const [itemsNumber, setItemsNumber] = useState(10)
  const jobTimeTable = ['New jobs', 'Recent Jobs', 'Old Jobs']
  const itemsNumberTable = [10, 25, 40]
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  return (
    <div className='w-full'>
        <div className='w-full md:flex  md:justify-between items-center'>
            <div className='flex items-center'>
                <button
                    onClick={() => {setIsFilterOpen((prev) => !prev); props?.toggle && props?.toggle(isFilterOpen)}}
                    className='md:hidden flex justify-center items-center h-8 w-8 mr-3 border bg-blue-500 rounded-md text-white'
                >
                    {isFilterOpen ? <CgMenuLeft size={20}/> : <AiOutlineClose size={20}/>}
                </button>
                <p>Showing <strong>41-60</strong> of <strong>944</strong> jobs</p>
            </div>
            <div className='flex gap-x-4 mt-4 md:mt-0'>
                <Select items={jobTimeTable} onChange={(value: string) => setJobTime(value)}/>
                <Select items={itemsNumberTable} onChange={(value: number) => setItemsNumber(value)}/>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-8 mt-8'>
            {featuredJobs.map((item, index) => {
                return (
                <div key={index} className='w-full'>
                    <div className='w-full hidden md:block'>
                    <FeaturedItem  feature={item}/>
                    </div>
                    <div className='w-full md:hidden flex justify-center'>
                        <JobCard key={index} feature={item}/>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default SearchResults
