'use client'
import { NavRight, Sidebar } from '@/components'
import ANavLinks from '@/components/Admin/ANavlinks'
import Logo from '@/components/Logo'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useWindowSize } from 'usehooks-ts'

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isLarge, setIsLarge] = useState<boolean>(true)
  const { width } = useWindowSize()
  return (
    <div className='flex flex-col justify-between items-start min-h-screen h-screen overflow-hidden'>
      <header className='w-full relative z-50'>
        <nav className='w-full h-[80px] bg-white shadow-sm flex justify-between items-center px-10'>
          <div className='p-4 w-[180px] flex'>
            <Logo href='/' box='h-10 w-10 text-lg'/>
          </div>
          <div className={`${width > 580 ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-200px)]'}  flex justify-between items-center`}>
              <div>
                <ANavLinks />
              </div>
              <NavRight />
          </div>
        </nav>
      </header>
      <div className='w-full m-auto mx-0 mt-0 h-[calc(100%-80px)] flex justify-between items-start relative'>
        <button
        onClick={() => {setIsLarge((previous) => !previous) }}
          className={`absolute ${isLarge ? 'left-[272px]' : 'left-[72px]'} z-40 h-8 w-5 bg-white rounded-full flex justify-center items-center top-[calc(50%-16px)] text-neutral-500 hover:text-[#1967D3]`}
        >
          {isLarge ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
        </button>
        <div className={`sideBar ${isLarge ? 'min-w-[280px]' :'w-[80px]'} bg-white h-full shadow-sm overflow-hidden px-2 relative`}>
          <Sidebar large={isLarge}/>
        </div>
        <div className={`bg-[#F6F7FC] h-full ${isLarge ? 'w-[calc(100%-280px)]' : ' w-[calc(100%-80px)]'}`}>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout