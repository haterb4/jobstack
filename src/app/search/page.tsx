'use client'

import { Filter, PageLayout, Pagination, Searchbar, Select } from '@/components'
import FeaturedItem from '@/components/Job/FeaturedItem'
import { featuredJobs } from '@/data/features'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const Page = () => {
  const searchParams = useSearchParams()
  const [jobTime, setJobTime] = useState('New job')
  const [itemsNumber, setItemsNumber] = useState(10)
  const jobTimeTable = ['New jobs', 'Recent Jobs', 'Old Jobs']
  const itemsNumberTable = [10, 25, 40]
  const activePage = searchParams.get('page')
  const currentPage = activePage? Number(activePage) : 1
  return (
    <PageLayout>
        <main className='full overflow-hidden'>
            <header className='w-full flex justify-center items-center bg-gradient-to-r from-[#F2F5FC] to-blue-100 px-12 py-16'>
                <Searchbar />
            </header>
           <div className='w-full flex justify-center items-start py-12'>
            <div className='w-[300px]'>
                <Filter />
            </div>
            <div className='w-[675px] pl-10'>
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
                {/* pagination */}
                <Pagination active={currentPage} plage={{start: 1, end: 3, all: 495}} path='/search'/>
              </div>
            </div>
           </div>
        </main>
    </PageLayout>
  )
}

export default Page