"use client"
import { NavigationLink } from '@/types/Navlink';
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { useOnClickOutside } from 'usehooks-ts'

const NavLink = ({link}: {link: NavigationLink;}) => {
  const [isClosed, setIsClosed] = useState<boolean>(true)
  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    setIsClosed(true)
  }
  useOnClickOutside(ref, handleClickOutside)
  return (
    <div className='px-6 py-4 flex flex-col relative'>
        <button ref={ref} onClick={() => setIsClosed(!isClosed)} className='w-full flex justify-between items-center hover:text-[#1967D3]'>{link.name} {link.dropdown && <IoChevronDown className='ml-3'/>}</button>
        {link.dropdown &&(
        <div className={`absolute ${isClosed && 'hidden'} top-[50px] left-0`}>
            <div className='w-full relative z-50'>
                <div className='w-[12px] h-[12px] rotate-45 absolute top-[-4px] left-5 bg-[#1967D3]'></div>
                <div className='w-full h-[3px] bg-[#1967D3] z-20 relative'></div>
                <div className='px-[0.5px] z-[999] relative bg-white'>
                    <div className='w-full flex justify-between relative py-4 border-t-0 border rounded-b'>
                        {link.sublinks && link.sublinks.map((sublink, index) => {
                            return (
                                <div key={index} className='px-4 w-full'>
                                    {sublink.links.map((endlink, index) => {
                                        return (
                                            <div key={index} className='py-2 w-[150px]'>
                                                <Link href={endlink?.href} className='flex justify-between items-center hover:text-[#1967D3] text-neutral-500'>
                                                    {endlink?.name} {endlink.dropdown && <IoChevronDown className='ml-3'/>}
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default NavLink