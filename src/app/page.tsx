import { PageLayout } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jobstack',
}


export default function Home() {
  return (
    <PageLayout>
      <main className="overflow-hidden">
        home
      </main>
    </PageLayout>
  )
}
