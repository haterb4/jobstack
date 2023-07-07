import { Button, GetStarted, Header, LatesArticles, PageLayout, Testimonials } from '@/components'
import Categories from '@/components/Job/Categories'
import Features from '@/components/Job/Features'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jobstack',
}


export default function Home() {
  return (
    <PageLayout nav={{bg: 'bg-gradient-to-r from-[#F2F5FC] to-blue-50'}}>
      <main className="full overflow-hidden">
        <Header />
        <div className='w-full flex flex-col justify-center items-center border-b'>
          <Categories />
        </div>
        <div className='w-full flex flex-col justify-center items-center py-12'>
          <Features />
        </div>
        <div className='w-full flex flex-col justify-center items-center py-12 bg-[#F0F5F8]'>
          <Testimonials />
        </div>
        <div className='w-full flex flex-col justify-center items-center py-12'>
          <GetStarted />
        </div>
        <div className='w-full flex flex-col justify-center items-center py-12 bg-[#F0F5F8]'>
          <LatesArticles />
        </div>
      </main>
    </PageLayout>
  )
}
