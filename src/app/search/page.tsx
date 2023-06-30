import { Filter, PageLayout, Searchbar } from '@/components'
import React from 'react'

const page = () => {
  return (
    <PageLayout>
        <main className='full overflow-hidden'>
            <header className='w-full flex justify-center items-center bg-gradient-to-r from-[#F2F5FC] to-blue-100 px-12 py-16'>
                <Searchbar />
            </header>
           <div className='w-full flex justify-between items-start py-12 px-32'>
            <div className='w-[300px]'>
                <Filter />
            </div>
            <div></div>
           </div>
        </main>
    </PageLayout>
  )
}

export default page