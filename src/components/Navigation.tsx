import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import NavActions from './NavActions'

const Navigation = () => {
  return (
    <nav className='w-full flex items-center justify-between px-12 pt-4 relative shadow-sm bg-transparent'>
        <div className='flex items-center'>
            <Logo href=''/>
            <NavLinks />
        </div>
        <NavActions />
    </nav>
  )
}

export default Navigation