"use client"

import React from 'react'
import Socials from './Socials'
import FooterLinks from './FooterLink'
import Link from 'next/link'
import { useWindowSize } from 'usehooks-ts'
import Logo from './Logo'


const Footer = () => {
  const { width, height } = useWindowSize()
  const footerLinks = [
    {
      header: 'For candidate',
      links: [
        {name: 'Browse Jobs', href: '/footer/link'},
        {name: 'Browse Categories', href: '/footer/link'},
        {name: 'Candidate Dashboard', href: '/footer/link'},
        {name: 'Job Alert', href: '/footer/link'},
        {name: 'My Bookmarks', href: '/footer/link'},
      ]
    },
    {
      header: 'For Employer',
      links: [
        {name: 'Browse Candidates', href: '/footer/link'},
        {name: 'Employers dashboard', href: '/footer/link'},
        {name: 'Add Job', href: '/footer/link'},
        {name: 'Job Packages', href: '/footer/link'},
      ]
    },
    {
      header: 'About Us',
      links: [
        {name: 'Job Page', href: '/footer/link'},
        {name: 'Job Page Alternative', href: '/footer/link'},
        {name: 'Resume Page', href: '/footer/link'},
        {name: 'Blog', href: '/footer/link'},
        {name: 'Contact', href: '/footer/link'},
      ]
    },
    {
      header: 'Helpful Ressource',
      links: [
        {name: 'site Map', href: '/footer/link'},
        {name: 'Terms of Use', href: '/footer/link'},
        {name: 'Privacy center', href: '/footer/link'},
        {name: 'Security center', href: '/footer/link'},
        {name: 'Accessibility Center', href: '/footer/link'},
      ]
    },
  ]
  return (
    <footer className='w-full'>
      <div className={`w-full 
        ${width > 406 && width <= 760 && "grid grid-cols-2 px-12 items-center gap-12"}
        ${width <= 406 && "flex flex-col justify-center items-center"} 
        sm:grid sm:grid-cols-2  md:flex md:justify-between md:items-start flex-wrap py-16 border-t gap-12 lg:px-56 md:px-20`
      }>
        <div>
          <Logo href='' box='h-10 w-10' justify='start'/>
          <div className='py-2'>
            <h1 className='font-bold py-2'>Call us</h1>
            <p className='py-2'>+237 695724963</p>
          </div>
          <div className='text-neutral-500'>
            <p className='py-2'>Yaounde Melen carrefour emia face total emia</p>
            <p className='py-2'>hateb2803@gmail.com</p>
          </div>
        </div>
        {footerLinks.map((footerLink, index) => {
          return (
            <div key={index}>
              <h1 className='mb-4'>{footerLink.header}</h1>
              {footerLink.links.map((link, index) => {
                return (
                  <FooterLinks key={index} link={link}/>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className={`w-full ${width <= 760 && "px-12"} flex justify-between items-center py-8 border-t lg:px-56 md:px-20`}>
        <div>&copy; {new Date().getFullYear()} Jobstack. All rights reserved</div>
        <div>{width}</div>
        <div>
          <Socials />
        </div>
      </div>
    </footer>
  )
}

export default Footer