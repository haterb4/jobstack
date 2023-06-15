import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

const Social = ({social}: {social: {
    href: string;
    icon: IconType;
}}) => {
  return (
    <div className='p-4 flex justify-between items-center'>
        <Link href={social.href}>
            <social.icon />
        </Link>
    </div>
  )
}

export default Social