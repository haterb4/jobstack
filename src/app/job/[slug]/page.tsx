import { PageLayout } from '@/components'
import React from 'react'
import { BsBookmark, BsClock } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdBusinessCenter } from 'react-icons/md'

const Page = () => {
  return (
    <PageLayout>
      <main className='full overflow-hidden'>
        <header className='w-full flex justify-center items-center bg-gradient-to-r from-[#F2F5FC] to-blue-100 px-12 py-16'>
            <div className='flex items-center justify-between w-[70%]'>
              <div className='flex items-center'>
                <div className='w-[110px] h-[110px] rounded-[8px] bg-blue-200'></div>
                <div className='ml-4'>
                  <h1 className='text-2xl text-neutral-600'>Product Designer / UI Designer</h1>
                  <div className='flex items-center py-2 text-zinc-500 text-[10px]'>
                    <div className='flex items-center mr-3 text-[12px]'>
                      <MdBusinessCenter size={15}/>
                      <span className='ml-[6px]'>{'inVision'}</span>
                    </div>
                    <div className='flex items-center mr-3 text-[12px]'>
                      <HiOutlineLocationMarker size={15}/>
                      <span className='ml-[6px]'>{'yaoundé, cmr'}</span>
                    </div>
                    <div className='flex items-center mr-3 text-[12px]'>
                      <BsClock size={15}/>
                      <span className='ml-[6px]'>11 hours ago</span>
                    </div>
                    <div className='flex items-center mr-3 text-[12px]'>
                      <FaMoneyBillWave size={15}/>
                      <span className='ml-[6px]'>{'2500'} - {'3000'}</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-start mt-3'>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-700 mr-4 pt-1">
                      Full Time
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-200 text-green-700 mr-4 pt-1">
                      Private
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-200 text-amber-700 mr-4 pt-1">
                      Urgent
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                  <button className='px-10 py-[14px] bg-[#1967D3] rounded-[8px] text-white ml-5'>Apply For Job</button>
                  <button className='w-[55px] h-[55px] flex justify-center items-center text-[#1967D3] rounded-[8px] bg-blue-200 ml-5'>
                    <BsBookmark size={20}/>
                  </button>
              </div>
            </div>
        </header>
      </main>
    </PageLayout>
  )
}

export default Page
