'use client'

import React, { useState } from 'react'
import NavLink from './NavLink'
import { useWindowSize } from 'usehooks-ts'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import NavLinkLatteral from './NavLinkLatteral'
import links from '@/data/navigation'

const NavLinks = () => {
  const { width, height } = useWindowSize()
  const [isMiddleNav, setIsMiddleNav] = useState(false)

  return (
    <div className='flex items-center'>
        {width > 1200 && links.map((link, index) => {
            return (
                <NavLink link={link} key={index}/>
            )
        })}
        {width > 750 && width <= 1200 &&(
        <div>
            <button onClick={() => setIsMiddleNav((prev) => !prev )} className='w-full flex justify-between items-center hover:text-[#1967D3]'>Menu</button>
        </div>)}
        {width > 750 && width <= 1200 && isMiddleNav && 
        (<div className='flex flex-col fixed  top-0 left-0 w-full h-screen bg-[rgba(23,23,23,0.7)] z-50'>
            <div className={`w-[250px] h-full bg-[#101010] flex flex-col`}>
                <button onClick={() => setIsMiddleNav(false)} className='relative z-50 text-white h-10 w-10 border rounded-md ml-2 mt-2 flex justify-center items-center mb-3'>
                    <AiOutlineClose size={26}/>
                </button>
                <div className='h-[calc(100%-44px)] relative text-white border  overflow-y-scroll'>
                    {links.map((link, index) => {
                        return (
                            <div className='w-full relative' key={index}>
                                {link.dropdown && (<NavLinkLatteral link={link} />)}
                                {!link.dropdown && (
                                    <div className='w-full border-b border-transparent hover:border-zinc-300 py-3 px-2'>
                                        <Link href={link.href} className='py-2 w-full'>{link.name}</Link>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>)}
    </div>
  )
}

export default NavLinks