'use client'

import React, { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import {NavLinkLatteral, NavLink} from '@/components'

const ANavLinks = () => {
  const { width, height } = useWindowSize()
  const [isMiddleNav, setIsMiddleNav] = useState(false)

  const links = [
    {
        name: 'Find Jobs',
        href: '/jobs',
        dropdown: true,
        size: 'large',
        sublinks: [
            {
                header: 'Jobs Listing',
                links: [
                    {name: 'About Us', href: '/about', dropdown: true,},
                    {name: 'Contact', href: '/about', dropdown: false,},
                    {name: 'Job Packages', href: '/about', dropdown: true,},
                    {name: 'How It Works', href: '/about', dropdown: true,},
                    {name: "FAQ's", href: '/about', dropdown: false,},
                    {name: "Terms and Conditions", href: '/about', dropdown: false,},
                    {name: "404 page", href: '/about', dropdown: false,},
                ]
            },
            {
                header: 'Jobs Single',
                links: [
                    {name: 'About Us', href: '/about', dropdown: true,},
                    {name: 'Contact', href: '/about', dropdown: false,},
                    {name: 'Job Packages', href: '/about', dropdown: true,},
                    {name: 'How It Works', href: '/about', dropdown: true,},
                    {name: "FAQ's", href: '/about', dropdown: false,},
                    {name: "Terms and Conditions", href: '/about', dropdown: false,},
                    {name: "404 page", href: '/about', dropdown: false,},
                ]
            },
            {
                header: 'Jobs By Types',
                links: [
                    {name: 'About Us', href: '/about', dropdown: true,},
                    {name: 'Contact', href: '/about', dropdown: false,},
                    {name: 'Job Packages', href: '/about', dropdown: true,},
                    {name: 'How It Works', href: '/about', dropdown: true,},
                    {name: "FAQ's", href: '/about', dropdown: false,},
                    {name: "Terms and Conditions", href: '/about', dropdown: false,},
                    {name: "404 page", href: '/about', dropdown: false,},
                ]
            }
            ,
            {
                header: 'Jobs By Cities',
                links: [
                    {name: 'About Us', href: '/about', dropdown: true,},
                    {name: 'Contact', href: '/about', dropdown: false,},
                    {name: 'Job Packages', href: '/about', dropdown: true,},
                    {name: 'How It Works', href: '/about', dropdown: true,},
                    {name: "FAQ's", href: '/about', dropdown: false,},
                    {name: "Terms and Conditions", href: '/about', dropdown: false,},
                    {name: "404 page", href: '/about', dropdown: false,},
                ]
            }
        ]
    },
    {
        name: 'Employers',
        href: '/employers',
        dropdown: false,
    },
    {
        name: 'Candidates',
        href: '/canditates',
        dropdown: false,
    },
    {
        name: 'Blog',
        href: '/blog',
        dropdown: false,
    },
    {
        name: 'Pages',
        href: '/pages',
        dropdown: true,
        size: 'small',
        sublinks: [
            {
                header: 'nothing',
                links: [
                    {name: 'About Us', href: '/about', dropdown: true,},
                    {name: 'Contact', href: '/about', dropdown: false,},
                    {name: 'Job Packages', href: '/about', dropdown: true,},
                    {name: 'How It Works', href: '/about', dropdown: true,},
                    {name: "FAQ's", href: '/about', dropdown: false,},
                    {name: "Terms and Conditions", href: '/about', dropdown: false,},
                    {name: "404 page", href: '/about', dropdown: false,},
                ]
            }
        ]
    },
  ]
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
            <div className={`w-[250px] h-full bg-[rgba(23,23,23,0.8)] flex flex-col`}>
                <button onClick={() => setIsMiddleNav(false)} className='relative z-50 text-white h-8 w-8 border rounded-md ml-2 mt-2 flex justify-center items-center mb-3'>
                    <AiOutlineClose size={24}/>
                </button>
                <div className='h-[calc(100%-44px)] relative text-white latteral-scroolbar overflow-y-scroll'>
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

export default ANavLinks