'use client'

import React, { use, useState } from 'react'
import ToggleSwitch from '../ToggleSwitch'
import RadioInput from '../RadioInput'
import RadioFilter from './RadioFilter'

const Filter = () => {
  const [isFreelanceToggled, setIsFreelanceToggled] = useState(true)
  const [isFullTimeToggled, setIsFullTimeToggled] = useState(false)
  const [isInternshipToggled, setIsInternshipToggled] = useState(false)
  const [isPartTimeToggled, setIsPartTimeToggled] = useState(false)
  const [isTemporaryToggled, setIsTemporaryToggled] = useState(false)
  const [isLastHourToggled, setIsLastHourToggled] = useState(false)
  const [isLast24HourToggled, setIsLast24HourToggled] = useState(true)
  const [isLast7DaysToggled, setIsLast7DaysToggled] = useState(false)
  const [isLast14DaysToggled, setIsLast14DaysToggled] = useState(false)
  const [isLast30DaysToggled, setIsLast30DaysToggled] = useState(false)
  const [activeDateIndex, setActiveDateIndex] = useState(1)
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
  
  return (
    <div className='w-full bg-[#F6F7FC] rounded-lg p-4'>
        <div className='w-full'>
            <h1 className='text-xl'>Job type</h1>
            <div className='py-3 text-neutral-500'>
                
                <div className='flex items-center my-4'>
                    <ToggleSwitch isToggled={isFullTimeToggled} onToggle={() => setIsFullTimeToggled((previous) => !previous)}/>
                    <h2 className='capitalize ml-3'>Full time</h2>
                </div>
                <div className='flex items-center my-4'>
                    <ToggleSwitch isToggled={isInternshipToggled} onToggle={() => setIsInternshipToggled((previous) => !previous)}/>
                    <h2 className='capitalize ml-3'>Internship</h2>
                </div>
                <div className='flex items-center my-4'>
                    <ToggleSwitch isToggled={isPartTimeToggled} onToggle={() => setIsPartTimeToggled((previous) => !previous)}/>
                    <h2 className='capitalize ml-3'>Part time</h2>
                </div>
                <div className='flex items-center my-4'>
                    <ToggleSwitch isToggled={isTemporaryToggled} onToggle={() => setIsTemporaryToggled((previous) => !previous)}/>
                    <h2 className='capitalize ml-3'>Temporary</h2>
                </div>
            </div>
        </div>
        <div className='w-full mt-6'>
            <h1 className='text-xl'>Date Posted</h1>
            <div className='py-3 text-neutral-500'>
                {datePostedFilter.map((filter, index) => {
                    return (<RadioFilter key={index} filter={filter} index={index} active={index === activeDateIndex} onChange={(index: number) => {setActiveDateIndex(index)}}/>)
                })}
            </div>
        </div>
    </div>
  )
}

export default Filter