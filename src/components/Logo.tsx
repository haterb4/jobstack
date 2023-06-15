import Link from 'next/link'
import React from 'react'

const Logo = ({href, justify, box}: {href: string; justify?: string; box?: string}) => {
  return (
    <div className={`py-4 mr-4 flex items-center justify-${justify ? justify : 'between'}`}>
        <div className={`${box ? box : "h-8 w-8"} flex justify-center items-center bg-[#1967D3] text-white rounded-[10px]`}>JoS</div>
        <Link href={href} className='px-2 ml-2 font-bold text-sm'>Jobstack</Link>
    </div>
  )
}

export default Logo