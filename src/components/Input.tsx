'use client'

import React, { useState } from 'react'
interface InputProps {
    label: string;
    handler: Function;
    placeholder?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState('')
  return (
    <div className='flex flex-col w-full'>
        <span className='py-2'>{ props.label || 'Username'}</span>
        <div className='w-full bg-blue-50 h-[50px] text-zinc-500 rounded-lg'>
            <input
                type="text"
                value={value}
                onChange={(e) => { setValue(e.target.value); props.handler(value)}}
                className='w-full h-full rounded-lg bg-transparent focus:bg-white focus:border-blue-600 px-3 focus:outline-blue-600'
                placeholder={props.placeholder ||'Enter something'}
            />
        </div>
    </div>
  )
}

export default Input