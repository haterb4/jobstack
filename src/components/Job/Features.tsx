'use client'

import React from 'react'
import SectionHeader from '../SectionHeader'
import FeaturedItem from './FeaturedItem'
import Button from '../Button'
import { useWindowSize } from 'usehooks-ts'
import JobCard from './Card'
import { featuredJobs } from '@/data/features'
const Features = () => {
  const { width, height } = useWindowSize()
  
  return (
    <div className='py-12 bg-white'>
        <SectionHeader title='Featured Job' slogan='Knew your worth and find the job that qualify your life'/>
        <div className={`grid ${width < 710 ? 'grid-cols-1' : 'grid-cols-2'} gap-8 py-12`}>
          {featuredJobs.map((item, index) => {
            return (
              width > 1100 
              ?(<FeaturedItem key={index} feature={item}/>)
              :(<JobCard key={index} feature={item}/>)
           )
          })}
        </div>
        <div className='w-full flex justify-center items-center'>
          <Button text='load more listing'/>
        </div>
    </div>
  )
}

export default Features