import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const PageLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className='overflow-hidden min-h-screen flex flex-col justify-between items-center flex-1'>
        {/* header */}
        <div className='w-full relative'>
          <Navigation />
        </div>
        <main>{children}</main>
        <Footer />
        {/* footer */}
    </div>
  )
}

export default PageLayout