import { Header, PageLayout } from '@/components'
import Categories from '@/components/Job/Categories'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jobstack',
}


export default function Home() {
  return (
    <PageLayout>
      <main className="overflow-hidden">
        <Header />
        <div className='flex flex-col justify-center items-center'>
          <Categories />
        </div>
      </main>
    </PageLayout>
  )
}
