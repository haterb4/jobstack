import Link from 'next/link'
import React from 'react'
interface LogoProps {
  href: string; 
  justify?: string;
  box?: string;
  container?: string;
}
const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link href={props.href} className={`py-4 mr-4 flex items-center justify-${props?.justify ? props?.justify : 'between'} ${props?.container}`}>
        <div className={`${props?.box ? props?.box : "h-8 w-8"} flex justify-center items-center bg-[#1967D3] text-white rounded-[10px]`}>JoS</div>
        <span className='px-2 ml-2 font-bold text-sm'>Jobstack</span>
    </Link>
  )
}

export default Logo