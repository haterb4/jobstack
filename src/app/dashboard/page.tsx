/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { setActivePage } from '@/redux/features/dashboard/activePageSlice'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { ApplicantCard, ProfileViewChart, QuickStat } from '@/components'
import { VscNote } from 'react-icons/vsc'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import RecentApplicant from '@/components/Admin/RecentApplicant'
import Notiffications from '@/components/Admin/Notiffications'
import { useWindowSize } from 'usehooks-ts'

const Home = () => {
  const { width } = useWindowSize()
  const dispatch = useAppDispatch()
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  const sidebarExtended = useAppSelector((state) => state.sidebarExtended.isExtended)
  useEffect(()=> { 
   const updateActivePage = () => {
    dispatch(setActivePage('dashboard')) 
   }
   updateActivePage()
  }, [])
  return (
    <main className='dashboard-container w-full h-full flex flex-col items-center justify-start py-12 px-12 overflow-y-scroll overflow-x-hidden'>
      <div className='w-full '>
        <h1 className='font-semibold text-3xl leading-[3.5rem]'>Howdy, invision!</h1>
        <h2 className='text-neutral-500'>Ready to jump back in?</h2>
      </div>
      <div className={`w-full mt-12 grid grid-cols-1 ${sidebarExtended ? 'md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4' :'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} items-center gap-8`}>
        <QuickStat title='Posted jobs' value={22} fg='text-[#175FC0]' bg='bg-[#E8F0FB]' icon={MdOutlineBusinessCenter}/>
        <QuickStat title='Application' value={9382} fg='text-[#DA2F25]' bg='bg-[#FCEAEA]' icon={VscNote}/>
        <QuickStat title='Messages' value={74} fg='text-[#F8B520]' bg='bg-[#FEF2DA]' icon={BiMessageRoundedDots}/>
        <QuickStat title='Shortlist' value={32} fg='text-[#33A752]' bg='bg-[#E0F2E4]' icon={BsBookmark}/>
      </div>
      <div className='w-full mt-6 flex justify-between items-start flex-wrap gap-4'>
        <ProfileViewChart />
        <Notiffications />
      </div>
      <RecentApplicant />
      <div className='w-full text-center mt-12 py-4 text-neutral-500'>
        <p>&copy; {new Date().toDateString()} jobstack. All rights reserved</p>
      </div>
    </main>
  )
}

export default Home