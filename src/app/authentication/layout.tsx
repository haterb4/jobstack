import { Button, PageLayout } from '@/components'
import Logo from '@/components/Logo'
import Paper from '@/components/animation/Clouds'
import React from 'react'

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='w-full h-screen flex items-center overflow-hidden'>
      <div className='w-[40%] h-full bg-blue-600 relative'>
        <div className='w-full flex px-8'>
          <div>
            <Logo href='/' justify='center' box='h-12 w-12 !bg-white !text-blue-600 !font-fold'/>
          </div>
        </div>
        <div className='w-full flex justify-start items-center'>
          <Paper />
        </div>
      </div>
      <div className='w-[60%] h-full flex flex-col items-center justify-between py-6 px-8'>
        <div className='w-full flex justify-end items-center gap-4'>
          <Button text='Login / Register' containerClass='!bg-blue-100 !text-blue-500' />
          <Button text='Job Post' />
        </div>
        <div className='w-full h-[calc(100%-150px)] m-auto mt-0 mx-0 flex justify-center items-center'>{children}</div>
      </div>
    </div>
  )
}

export default layout
