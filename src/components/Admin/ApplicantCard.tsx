import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCheckLg, BsClock, BsTrash3 } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'
import { IoCloseCircleOutline, IoTrashOutline } from 'react-icons/io5'
export interface FeatureItemProps {
  applicant: {
    id: string;
    name: string;
    post: string;
    logo: string;
    location: string;
    postedAt: string;
    price: {
        value: number;
        measure: string;
        devise: string;
    },
    skills?: string[]
  }
}

const ApplicantCard: React.FC<FeatureItemProps> = ({applicant}) => {
  return (
    <div className='w-[100%] min-w-[540px] border rounded-md bg-white hover-shadow-1 px-3 py-4 flex justify-between items-center'>
        <div className='w-[80px] h-[80px] rounded-full flex justify-center items-center bg-[#ECEDF2] text-[#1A67D3] hover:bg-blue-600 hover:text-white'>   
        </div>
        <div className='min-w-[calc(528px-90px)] w-[calc(100%-90px)] pl-[12px]'>
            <h2 className='text-[12px] font-[700]'>{applicant.name}</h2>
            <div className='flex items-center justify-between'>
              <div className='flex items-center py-2 text-zinc-500 text-[10px]'>
                <div className='flex items-center mr-3 text-[12px]'>
                    <span className=''>{applicant.post}</span>
                </div>
                <div className='flex items-center mr-3 text-[12px]'>
                    <HiOutlineLocationMarker size={15}/>
                    <span className='ml-[6px]'>{applicant.location}</span>
                </div>
                <div className='flex items-center mr-3 text-[12px]'>
                    <FaMoneyBillWave size={15}/>
                    <span className='ml-[6px]'>{applicant.price.devise === '$' && '$'}{applicant.price.value} {applicant.price.devise === 'CFA' && 'CFA'} / {applicant.price.measure}</span>
                </div>
              </div>
              <div className='flex justify-end items-center'>
                <button className='w-[25px] h-[25px] text-[#175FC0] hover:text-white bg-neutral-100 ml-[8px] hover:bg-[#175FC0] flex justify-center items-center rounded-md'>
                    <AiOutlineEye size={14}/>
                </button>
                <button className='w-[25px] h-[25px] text-[#175FC0] hover:text-white bg-neutral-100 ml-[8px] hover:bg-[#175FC0] flex justify-center items-center rounded-md'>
                    <BsCheckLg size={14}/>
                </button>
                <button className='w-[25px] h-[25px] text-[#175FC0] hover:text-white bg-neutral-100 ml-[8px] hover:bg-[#175FC0] flex justify-center items-center rounded-md'>
                    <IoCloseCircleOutline size={14}/>
                </button>
                <button className='w-[25px] h-[25px] text-[#175FC0] hover:text-white bg-neutral-100 ml-[8px] hover:bg-[#175FC0] flex justify-center items-center rounded-md'>
                    <IoTrashOutline size={14}/>
                </button>
              </div>
            </div>
            <div className='flex items-center justify-start mt-3'>
              {applicant.skills &&
                applicant.skills.map((tag, index) => {
                  return (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-500 hover:bg-blue-700 hover:text-white mr-4 pt-[2px] hover:cursor-pointer">
                      {tag}
                    </span>
                  )
              })}
            </div>
        </div>
    </div>
  )
}

export default ApplicantCard