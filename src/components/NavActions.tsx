'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { CgMenuLeft } from 'react-icons/cg'
import { useWindowSize } from 'usehooks-ts'
import NavLinkLatteral from './NavLinkLatteral'

const NavActions = () => {
  const { width, height } = useWindowSize()
  const [mobileNav, setMobileNav] = useState(false)

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
    <div className='flex items-center justify-end text-[#1A67D3]'>
        {width > 750 &&(
        <div className='w-full flex items-center justify-end'>
            <div className=''>
                <Link href={'/cv'}><span className='w-[93px] block'>Upload your cv</span></Link>
            </div>
            <div className='px-6 py-[14px] bg-[#E3EAFA] rounded-[8px] ml-5'>
                <Link href={'/authenication'}><span className='w-[98px] block'>Login / Register</span></Link>
            </div>
            <div className='px-6 py-[14px] bg-[#1967D3] rounded-[8px] text-white ml-5'>
                <Link href={'/authenication'}><span className='w-[55px] block'>Job Post</span></Link>
            </div>
        </div>)}
        {width < 750 && (<div className='flex items-center justify-end text-black'>
            <button className='h-12 w-12 flex justify-center items-center mr-3'>
                <AiOutlineUser size={32}/>
            </button>
            <button onClick={() => setMobileNav(!mobileNav)} className='h-12 w-12 flex justify-center items-center'>
                <CgMenuLeft size={32}/>
            </button>
        </div>)}
        {width < 750 && mobileNav && (<div className='flex flex-col absolute  top-[80px] left-0 w-full bg-[rgba(23,23,23,0.7)] z-50'>
            <div className={`w-full h-full  flex flex-col text-white`}>
                <div className='h-[calc(100%-44px)] relative text-white '>
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

export default NavActions