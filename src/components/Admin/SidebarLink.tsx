import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons'
interface SidebarLinkProps {
    icon: IconType;
    text: string;
    href: string;
    active?: boolean;
    large?: boolean;
}

const SidebarLink = (props: SidebarLinkProps) => {
  return (
    <div className={`w-full flex justify-center items-center px-4`}>
        <Link
            href={props.href}
            className={`${props.large ? 'w-[186px]' : 'w-[50px]'} flex justify-start items-center ${props.active ? 'text-[#3479D8] bg-[#E8F0FB]' : 'text-neutral-500'}  hover:bg-[#E8F0FB] hover:text-[#3479D8] p-3 rounded`}
        >
            <props.icon size={20}/>
           {props.large && (<span className='capitalize px-2 ml-2'>{props.text}</span>)}
        </Link>
    </div>
  )
}

export default SidebarLink