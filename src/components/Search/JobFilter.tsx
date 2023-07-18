'use client'

import React, { use, useState } from 'react'
import RadioFilter from './RadioFilter'
import ToggleFilter from './ToggleFilter'
import CheckBoxFilter from './CheckBoxFilter'
import { jobFilters, datePostedFilter, experienceLevelFilter } from '@/data/filters/jobfilter'

const JobFilter = () => {
  const [toggleFilters, setToggleFilters] = useState(['Free Lance'])
  const [activeDateIndex, setActiveDateIndex] = useState(1)
  const toggleSwitchFilters = (index: number) =>{
    console.log(index)
    if (index >= 0 && index < jobFilters.length){
        const tmp = toggleFilters
        if (toggleFilters.includes(jobFilters[index].label)){
            const indexOfItem = tmp.indexOf(jobFilters[index].label)
            if (indexOfItem !== - 1) tmp.splice(indexOfItem, 1); setToggleFilters(tmp);
        }
        else {
            tmp.push(jobFilters[index].label)
        }
    }
  }
  
  return (
    <div className='w-full bg-[#F6F7FC] rounded-lg p-4'>
        <div className='w-full'>
            <h1 className='text-lg'>Job type</h1>
            <div className='py-3 text-neutral-500'>
                {jobFilters.map((filter, index) => {
                    return (<ToggleFilter key={index} active={toggleFilters.includes(filter.label)} label={filter.label} toggler={toggleSwitchFilters} index={index}/>)
                })}
            </div>
        </div>
        <div className='w-full mt-6'>
            <h1 className='text-lg'>Date Posted</h1>
            <div className='py-3 text-neutral-500'>
                {datePostedFilter.map((filter, index) => {
                    return (<RadioFilter key={index} filter={filter} index={index} active={index === activeDateIndex} onChange={(index: number) => {setActiveDateIndex(index)}}/>)
                })}
            </div>
        </div>
        <div className='w-full mt-6'>
            <h1 className='text-lg'>Experience Level</h1>
            <div className='py-3 text-neutral-500'>
                {experienceLevelFilter.map((filter, index) => {
                    return (<CheckBoxFilter key={index} filter={filter} index={index} active={index === activeDateIndex} onChange={(index: number) => {() => null}}/>)
                })}
            </div>
        </div>
    </div>
  )
}

export default JobFilter