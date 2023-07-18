'use client'

import React, { useState } from 'react'
import { IconType } from 'react-icons'

export interface SearchInputProps {
    icon: IconType;
    placeholder?: string;
    controller?: Function;
    sep?: boolean;
    datasource?: string[]
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const [value, setValue] = useState('')
  return (
    <div className={`w-full flex justify-start items-center my-2 text-neutral-500 ${props?.sep && 'lg:border-r-2'}`}>
        <div className='h-8 w-8 flex justify-center items-center lg:ml-2'>
            <props.icon size={24}/>
        </div>
        <div className='w-[calc(100%-50px)]'>
            <input
              type="text"
              className='w-full px-2 h-9 outline-none '
              placeholder={props.placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
        </div>
    </div>
  )
}

export default SearchInput