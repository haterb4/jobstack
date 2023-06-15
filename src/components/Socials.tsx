import Link from 'next/link'
import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineTwitter } from 'react-icons/ai'
import Social from './Social'

const Socials = () => {
  const socials = [
    {
        href: '/social',
        icon: GrFacebookOption
    },
    {
        href: '/social',
        icon: AiOutlineTwitter
    },
    {
        href: '/social',
        icon: AiOutlineInstagram
    },
    {
        href: '/social',
        icon: RiLinkedinFill
    },
  ]
  return (
    <div className='flex justify-between items-center'>
        {socials.map((social, index) => {
            return (
                <Social social={social} key={index}/>
            )
        })}
    </div>
  )
}

export default Socials