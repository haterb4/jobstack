'use client'
import { NavigationLink } from '@/types/Navlink';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5';

const NavLinkLatteral = ({link}: {link: NavigationLink;}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex flex-col justify-start items-start w-full'>
        <button onClick={() => setIsOpen(!isOpen)} className='w-full py-3 px-2 border-b border-transparent hover:border-zinc-300 flex justify-between items-center'>{link.name} <IoChevronDown /></button>
        {isOpen && (<div className='overflow-hidden w-full'>
            {link.sublinks && link.sublinks.map((sublink, index) => {
                return (
                    <div key={index} className='w-full'>
                        {sublink.header && <h3 className='mb-3 py-2 px-3 underline'>{sublink.header}</h3>}
                        {sublink.links.map((leaf, index) => {
                            return (
                                <div key={index} className='w-full py-3'>
                                    <Link href={leaf.href} className='py-2 px-4'>{leaf.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>)}
    </div>
  )
}

export default NavLinkLatteral