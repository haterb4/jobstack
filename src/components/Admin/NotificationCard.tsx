import React from 'react'
import { MdOutlineBusinessCenter } from 'react-icons/md'

const NotificationCard = () => {
  return (
    <div className='w-full py-2 flex items-center my-1'>
        <div className='w-8 h-8 rounded-full bg-[#E8F0FB] text-[#175FC0] flex justify-center items-center'>
            <MdOutlineBusinessCenter size={18}/>
        </div>
        <div className='px-2'>
            <p className='text-neutral-500'><span className='text-black'>Wade Waren</span> applied for a job <span className='text-[#175FC0]'>Web Developper</span></p>
        </div>
    </div>
  )
}

export default NotificationCard