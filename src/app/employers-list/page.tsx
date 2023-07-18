import { EmployerSearchBody, PageLayout, Pagination, Searchbar } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Jobstack | search over million free jobs',
}

const Page = () => {
  
  return (
    <PageLayout nav={{shadow: true}}>
        <main className='w-full overflow-hidden'>
            <header className='w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#F2F5FC] to-blue-100 px-12 py-16'>
                <h1 className='text-3xl'>Companies</h1>
                <h2 className='text-zinc-500 mt-4'>Home / Companies</h2>
            </header>
           <EmployerSearchBody />
           <div className='flex justify-center items-center py-8 mb-8'>
            {/* pagination */}
            <Pagination path='/employers-list'/>
           </div>
        </main>
    </PageLayout>
  )
}

export default Page

