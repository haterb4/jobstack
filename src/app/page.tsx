import { Header, PageLayout } from '@/components'
import Categories from '@/components/Job/Categories'
import Features from '@/components/Job/Features'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jobstack',
}


export default function Home() {
  return (
    <PageLayout>
      <main className="full overflow-hidden">
        <Header />
        <div className='w-full flex flex-col justify-center items-center border-b'>
          <Categories />
        </div>
        <div className='w-full flex flex-col justify-center items-center border-b py-12'>
          <Features />
        </div>
      </main>
    </PageLayout>
  )
}
