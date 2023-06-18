'use client'

import React from 'react'
import SectionHeader from '../SectionHeader'
import FeaturedItem from './FeaturedItem'
import Button from '../Button'
import { useWindowSize } from 'usehooks-ts'
import JobCard from './Card'

const Features = () => {
  const { width, height } = useWindowSize()
  const categories = [
        {
          entreprise: 'Segment',
          post: 'Software Engineer (Android), Libraries',
          logo: '',
          offer: 2,
          location: 'Yaounde, Cmr',
          postedAt: '25-3-2023 15:55:10',
          price: {
            min: 3500,
            max: 5000,
            devise: 'FCFA'
          },
          fulltime: false,
          private: true,
          urgent: false,
          skills: ['App', 'Design', 'Digital', 'Code']
        },
        {
          entreprise: 'Segment',
          post: 'Software Engineer (Android), Libraries',
          logo: '',
          offer: 2,
          location: 'Yaounde, Cmr',
          postedAt: '25-3-2023 15:55:10',
          price: {
            min: 3500,
            max: 5000,
            devise: 'FCFA'
          },
          fulltime: false,
          private: true,
          urgent: true,
          skills: ['App', 'Digital', 'Code']
        },
        {
          entreprise: 'Segment',
          post: 'Software Engineer (Android), Libraries',
          logo: '',
          offer: 2,
          location: 'Yaounde, Cmr',
          postedAt: '25-3-2023 15:55:10',
          price: {
            min: 3500,
            max: 5000,
            devise: 'FCFA'
          },
          fulltime: true,
          private: false,
          urgent: false,
          skills: ['App', 'Design', 'Digital']
        },
        {
          entreprise: 'Segment',
          post: 'Software Engineer (Android), Libraries',
          logo: '',
          offer: 2,
          location: 'Yaounde, Cmr',
          postedAt: '25-3-2023 15:55:10',
          price: {
            min: 3500,
            max: 5000,
            devise: 'FCFA'
          },
          fulltime: true,
          private: true,
          urgent: true,
          skills: ['App', 'Design', 'Code']
        },
        {
          entreprise: 'Segment',
          post: 'Software Engineer (Android), Libraries',
          logo: '',
          offer: 2,
          location: 'Yaounde, Cmr',
          postedAt: '25-3-2023 15:55:10',
          price: {
            min: 3500,
            max: 5000,
            devise: 'FCFA'
          },
          fulltime: true,
          private: false,
          urgent: false,
          skills: ['App', 'Code']
        },
        {
          entreprise: 'Segment',
          post: 'Software Engineer (Android), Libraries',
          logo: '',
          offer: 2,
          location: 'Yaounde, Cmr',
          postedAt: '25-3-2023 15:55:10',
          price: {
            min: 3500,
            max: 5000,
            devise: 'FCFA'
          },
          fulltime: true,
          private: true,
          urgent: true,
          skills: ['App']
        },
  ]
  return (
    <div className='py-12 bg-white'>
        <SectionHeader title='Featured Job' slogan='Knew your worth and find the job that qualify your life'/>
        <div className={`grid ${width < 710 ? 'grid-cols-1' : 'grid-cols-2'} gap-8 py-12`}>
          {width > 1100 && categories.map((item, index) => {
            return <FeaturedItem key={index} feature={item}/>
          })}
          {width <= 1100 && categories.map((item, index) => {
            return <JobCard key={index} feature={item}/>
          })}
        </div>
        <div className='w-full flex justify-center items-center'>
          <Button text='load more listing'/>
        </div>
    </div>
  )
}

export default Features