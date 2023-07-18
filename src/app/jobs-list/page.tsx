import { JobSearchBody, PageLayout, Pagination, Searchbar } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Jobstack | search over million free jobs',
}

const Page = () => {
  
  return (
    <PageLayout nav={{shadow: true}}>
        <main className='w-full overflow-hidden'>
            <header className='w-full flex justify-center items-center bg-gradient-to-r from-[#F2F5FC] to-blue-100 px-8 py-16'>
              <Searchbar />
            </header>
           <JobSearchBody />
           <div className='flex justify-center items-center py-8 mb-8'>
            {/* pagination */}
            <Pagination path='/jobs-list'/>
           </div>
        </main>
    </PageLayout>
  )
}

export default Page