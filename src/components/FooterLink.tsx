"use client"

import { NavigationLink } from '@/types/Navlink'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { useHover } from 'usehooks-ts'

const FooterLinks = ({link}: {link: NavigationLink}) => {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  return (
    <div className='py-2 text-neutral-500 flex items-center' ref={hoverRef}>
      {isHover && <div className='w-[10px] h-[2px] bg-neutral-500 mr-2'></div>}<Link href={link.href} className='hover:text-[#1967D3]'>{link.name}</Link>
    </div>
  )
}

export default FooterLinks