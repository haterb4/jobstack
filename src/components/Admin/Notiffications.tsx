'use client'
import React from 'react'
import NotificationCard from './NotificationCard'
import { useWindowSize } from 'usehooks-ts'

const Notiffications = () => {
  const { width } = useWindowSize()
  return (
    <div className={`min-w-[300px]  md:w-[48%] xl:w-[35%] ${ width < 1478 && 'w-full'} max-h-[420px] bg-white p-4 border rounded-lg`}>
        <h1 className='text-lg py-2'>Notifications</h1>
        <div className='w-full h-[342px] overflow-hidden mt-2'>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
    </div>
  )
}

export default Notiffications