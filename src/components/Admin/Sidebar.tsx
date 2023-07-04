"use client"
import React from 'react'
import SidebarLink from './SidebarLink'
import { sideLinks } from '@/data/dashboard/sidebar'
import { useAppSelector } from '@/redux/hooks'

const Sidebar = ({large}: {large?: boolean;}) => {
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  return (
    <div className='dashboard-scroolbar w-full h-full flex flex-col justify-start items-center py-12 overflow-y-scroll'>
      {sideLinks.map((link, index) => {
        return (
          <SidebarLink 
            key={index} 
            text={link.name} 
            icon={link.icon} 
            href={link.path}
            large={large} 
            active={activeDashboardPage === link.name ? true : false} 
          />
        )
      })}
    </div>
  )
}

export default Sidebar