'use client'
import React, { useRef, useState } from 'react'
import { SearchInputProps } from './SearchInput'
import { FiChevronDown } from 'react-icons/fi'
import { useOnClickOutside } from 'usehooks-ts'

const SearchSelect: React.FC<SearchInputProps> = (props) => {
  const [isDown, setIsDown] = useState(false)
  const [value, setValue] = useState('')
  const ref = useRef(null)

  const handleClickOutside = () => {
    setIsDown(false)
  }
  useOnClickOutside(ref, handleClickOutside)
  return (
    <div className='w-full flex justify-start items-center my-2 text-neutral-500' ref={ref}>
        <div className='h-8 w-8 flex justify-center items-center ml-2'>
            <props.icon size={24}/>
        </div>
        <div className='w-[calc(100%-50px)] relative'>
            <div className='flex justify-between items-center'>
              <input
                type="text"
                className='w-[calc(100%-40px)] px-2 h-9 outline-none'
                placeholder={props.placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                type='button'
                onClick={() => setIsDown((previous) => !previous)}
                className='h-10 w-10 flex justify-center items-center '
              >
                  <FiChevronDown size={18}/>
              </button>
            </div>
            {isDown && (<div className='w-full bg-white max-h[120px] absolute left-0 top-8 border z-20'>
              {props?.datasource ?
              props?.datasource.map((data, index) => {
                return (
                  <button onClick={() => setValue(data)} key={index} className='w-full p-2'>
                    {data}
                  </button>
                )
              })
              :
              <div className='w-full p-2'>
                empty content
              </div>
            }
            </div>)}
        </div>
    </div>
  )
}

export default SearchSelect