'use client'

import React, { use, useState } from 'react'
import ToggleSwitch from '../ToggleSwitch'
import RadioInput from '../RadioInput'
import RadioFilter from './RadioFilter'
import ToggleFilter from './ToggleFilter'
import CheckBoxFilter from './CheckBoxFilter'

const Filter = () => {
  const [toggleFilters, setToggleFilters] = useState(['Free Lance'])
  const [activeDateIndex, setActiveDateIndex] = useState(1)
  const filters = [
    {
        label: 'freelance',
        active: true
    },
    {
        label: 'Full Time',
        active: true
    },
    {
        label: 'Internship',
        active: true
    },
    {
        label: 'Part Time',
        active: true
    },
    {
        label: 'Temporary',
        active: true
    },
  ]
  const toggleSwitchFilters = (index: number) =>{
    console.log(index)
    if (index >= 0 && index < filters.length){
        const tmp = toggleFilters
        if (toggleFilters.includes(filters[index].label)){
            const indexOfItem = tmp.indexOf(filters[index].label)
            if (indexOfItem !== - 1) tmp.splice(indexOfItem, 1); setToggleFilters(tmp);
        }
        else {
            tmp.push(filters[index].label)
        }
    }
  }
  const datePostedFilter = [
    {
        title: 'Last Hour',
        id: 'LastHour'
    },
    {
        title: 'Last 24 Hours',
        id: 'Last24Hours'
    },
    {
        title: 'Last 7 Days',
        id: 'Las7Days'
    },
    {
        title: 'Last 14 Days',
        id: 'Las14Days'
    },
    {
        title: 'Last 30 Days',
        id: 'Las30Days'
    },
    {
        title: 'All',
        id: 'AllDays'
    },
  ]
  const experienceLevelFilter = [
    {
        title: 'All',
        id: 'AllLevels'
    },
    {
        title: 'Internship2',
        id: 'Internship2'
    },
    {
        title: 'Entry Level',
        id: 'Entry'
    },
    {
        title: 'Associate2',
        id: 'Associate2'
    },
    {
        title: 'Mid-Senior level4',
        id: 'MidSenior4'
    },
  ]
  
  return (
    <div className='w-full bg-[#F6F7FC] rounded-lg p-4'>
        <div className='w-full'>
            <h1 className='text-lg'>Job type</h1>
            <div className='py-3 text-neutral-500'>
                {filters.map((filter, index) => {
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
            <h1 className='text-lg'>Experience Leve</h1>
            <div className='py-3 text-neutral-500'>
                {experienceLevelFilter.map((filter, index) => {
                    return (<CheckBoxFilter key={index} filter={filter} index={index} active={index === activeDateIndex} onChange={(index: number) => {() => null}}/>)
                })}
            </div>
        </div>
    </div>
  )
}

export default Filter