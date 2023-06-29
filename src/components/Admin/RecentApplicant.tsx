'use client'
import React from 'react'
import ApplicantCard from './ApplicantCard'
import { useWindowSize } from 'usehooks-ts'
import { useAppSelector } from '@/redux/hooks'
import ApplicantSmallCard from './ApplicantSmallCard'

const RecentApplicant = () => {
  const sidebarExtended = useAppSelector((state) => state.sidebarExtended.isExtended)
  const { width } = useWindowSize()
  const applicants = [
    {
      id: '1',
      name: 'Floyd Miles',
      location: 'Yde, emia',
      logo: 'gg',
      post: 'UI Designer',
      postedAt: new Date().toDateString(),
      price: { 
        devise: 'CFA', 
        value: 3000, 
        measure: 'h'
      }, 
      skills: ['App', 'Design', 'Digital']
    },
    {
      id: '2',
      name: 'Floyd Miles',
      location: 'Yde, emia',
      logo: 'gg',
      post: 'UI Designer',
      postedAt: new Date().toDateString(),
      price: { 
        devise: 'CFA', 
        value: 3000, 
        measure: 'h'
      }, 
      skills: ['App', 'Design', 'Digital']
    },
    {
      id: '3',
      name: 'Floyd Miles',
      location: 'Yde, emia',
      logo: 'gg',
      post: 'UI Designer',
      postedAt: new Date().toDateString(),
      price: { 
        devise: 'CFA', 
        value: 3000, 
        measure: 'h'
      }, 
      skills: ['App', 'Design', 'Digital']
    },
    {
      id: '4',
      name: 'Floyd Miles',
      location: 'Yde, emia',
      logo: 'gg',
      post: 'UI Designer',
      postedAt: new Date().toDateString(),
      price: { 
        devise: 'CFA', 
        value: 3000, 
        measure: 'h'
      }, 
      skills: ['App', 'Design', 'Digital']
    },
    {
      id: '5',
      name: 'Floyd Miles',
      location: 'Yde, emia',
      logo: 'gg',
      post: 'UI Designer',
      postedAt: new Date().toDateString(),
      price: { 
        devise: 'CFA', 
        value: 3000, 
        measure: 'h'
      }, 
      skills: ['App', 'Design', 'Digital']
    },
    {
      id: '6',
      name: 'Floyd Miles',
      location: 'Yde, emia',
      logo: 'gg',
      post: 'UI Designer',
      postedAt: new Date().toDateString(),
      price: { 
        devise: 'CFA', 
        value: 3000, 
        measure: 'h'
      }, 
      skills: ['App', 'Design', 'Digital']
    },
  ]
  return (
    <div className='w-full flex flex-col shadow-1 bg-white p-8 mt-8 rounded-lg border'>
        <h1 className='mb-4 text-lg'>Recent Applicants</h1>
        <div className={`w-full grid grid-cols-1 ${sidebarExtended ? 'lg:grid-cols-2 xl:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} gap-x-8 gap-y-8`}>
          {applicants.map((applicant, index) => {
            return (sidebarExtended
              ? <div key={index} className='w-full flex justify-center items-center'>
                {width < 1528 && width >= 1024
                ? <ApplicantSmallCard applicant={applicant} />
                : width < 985 ? <ApplicantSmallCard applicant={applicant} />
                : <ApplicantCard applicant={applicant} />
                }
                </div>
              : <div key={index} className='w-full flex justify-center items-center'><ApplicantSmallCard applicant={applicant} /></div>
            )
          })}
        </div>
      </div>
  )
}

export default RecentApplicant