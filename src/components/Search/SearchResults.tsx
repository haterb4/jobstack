'use client'

import React, { useState } from 'react'
import Select from '../Select'
import FeaturedItem from '../Job/FeaturedItem'
import { featuredJobs } from '@/data/features'

const SearchResults = () => {
  const [jobTime, setJobTime] = useState('New job')
  const [itemsNumber, setItemsNumber] = useState(10)
  const jobTimeTable = ['New jobs', 'Recent Jobs', 'Old Jobs']
  const itemsNumberTable = [10, 25, 40]
  return (
    <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
            <p>Showing <strong>41-60</strong> of <strong>944</strong> jobs</p>
            <div className='flex gap-x-4'>
                <Select items={jobTimeTable} onChange={(value: string) => setJobTime(value)}/>
                <Select items={itemsNumberTable} onChange={(value: number) => setItemsNumber(value)}/>
            </div>
        </div>
        <div className='flex flex-col items-center gap-y-8 mt-8'>
            {featuredJobs.map((item, index) => {
                return (
                <div key={index} className='w-full'>
                    <FeaturedItem  feature={item}/>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default SearchResults
