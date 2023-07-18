'use client'

import React, { useState } from 'react'
import JobFilter from './JobFilter'
import SearchResults from './SearchResults'
import { useWindowSize } from 'usehooks-ts'

const JobSearchBody = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const {width} = useWindowSize()
  return (
    <div className='w-full flex justify-start md:justify-center items-start py-12 px-8'>
       {(width >= 768 || filterIsOpen) && (<div className='md:w-[300px]'>
            <JobFilter />
        </div>)}
        <div className={`w-full md:w-[675px] xl:w-[950px] ${(filterIsOpen || width >= 768) ? 'pl-10' : 'flex justify-center'}`}>
            <SearchResults toggle={setFilterIsOpen}/>
        </div>
    </div>
  )
}

export default JobSearchBody
