import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const PageLayout = ({
    children,
    nav
}: {
    children: React.ReactNode;
    nav?: {
      bg?: string;
      shadow?: boolean
    };
}) => {
  return (
    <div className='overflow-hidden min-h-screen w-full flex flex-col justify-between items-center'>
        {/* header */}
        <div className={`w-full relative ${nav && nav?.bg} ${nav?.shadow && 'shadow-md'}`}>
          <Navigation />
        </div>
        <main className='w-full h-full overflow-x-hidden m-auto mt-0 mx-0'>{children}</main>
        <Footer />
        {/* footer */}
    </div>
  )
}

export default PageLayout