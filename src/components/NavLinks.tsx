import React from 'react'
import NavLink from './NavLink'

const NavLinks = () => {
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
        {links.map((link, index) => {
            return (
                <NavLink link={link} key={index}/>
            )
        })}
    </div>
  )
}

export default NavLinks