import { Filter, PageLayout, Pagination, SearchResults, Searchbar } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Jobstack | search over million free jobs',
}

const Page = () => {
  
  return (
    <PageLayout>
        <main className='full overflow-hidden'>
            <header className='w-full flex justify-center items-center bg-gradient-to-r from-[#F2F5FC] to-blue-100 px-12 py-16'>
                <Searchbar />
            </header>
           <div className='w-full flex justify-center items-start py-12'>
            <div className='w-[300px]'>
                <Filter />
            </div>
            <div className='w-[675px] pl-10'>
              <SearchResults />
            </div>
           </div>
           <div className='flex justify-center items-center py-8 mb-8'>
            {/* pagination */}
            <Pagination />
           </div>
        </main>
    </PageLayout>
  )
}

export default Page