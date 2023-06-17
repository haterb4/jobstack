import React from 'react'
import SectionHeader from '../SectionHeader'
import FeaturedItem from './FeaturedItem'

const Features = () => {
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
          fulltime: true,
          private: true,
          urgent: true
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
          urgent: true
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
          urgent: true
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
          urgent: true
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
          urgent: true
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
          urgent: true
        },
    ]
  return (
    <div className='py-12 bg-white'>
        <SectionHeader title='Featured Job' slogan='Knew your worth and find the job that qualify your life'/>
        <div className='grid grid-cols-2 gap-8 py-12'>
          {categories.map((item, index) => {
            return <FeaturedItem key={index} feature={item}/>
          })}
        </div>
    </div>
  )
}

export default Features