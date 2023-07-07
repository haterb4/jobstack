import Link from 'next/link';
import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
interface PaginationProps {
    active: number;
    plage: {
        start: number;
        end: number;
        all: number;
    };
    path: string;
}

const Paginator: React.FC<PaginationProps> = (props) => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='flex justify-center items-center'>
            {props.active > 1 && (<Link href={{pathname: props.path, query: {page: props.active-1}}} className='w-10 h-10 rounded-full hover:bg-[#1967D3] hover:text-white flex justify-center items-center text-neutral-500 mx-2'>
                <FiArrowLeft />
            </Link>)}
            {Array(props.plage.end).fill(0).map((page, index) => {
                return (
                    <Link href={{pathname: props.path, query: {page: index+props.plage.start}}} key={index} className={`w-10 h-10 rounded-full hover:bg-[#1967D3] hover:text-white ${index+props.plage.start===props.active && 'bg-[#1967D3] text-white'} flex justify-center items-center text-neutral-500 mx-2`}>
                        {index+props.plage.start}
                    </Link>
                )
            })}
            
            {props.plage.end < props.plage.all && props.active < props.plage.all && (<Link href={{pathname: props.path, query: {page: props.active+1}}} className='w-10 h-10 rounded-full hover:bg-[#1967D3] hover:text-white flex justify-center items-center text-neutral-500 mx-2'>
                <FiArrowRight />
            </Link>)}
        </div>
    </div>
  )
}

export default Paginator
