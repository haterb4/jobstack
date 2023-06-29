import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FeatureItemProps } from './ApplicantCard'


const ApplicantSmallCard: React.FC<FeatureItemProps> = ({applicant}) => {
  return (
    <div className='border w-[300px] h-[280px] flex flex-col justify-center items-center px-4 relative'>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-20 h-20 rounded-full flex justify-center items-center bg-[#ECEDF2] text-[#1A67D3] hover:bg-blue-600 hover:text-white' />
            <div className='w-full flex justify-center items-center mr-3 text-[12px] text-center py-2'>
                <span className='text-center text-green-500'>{applicant.name}</span>
            </div>
        </div>
        <h2 className='text-[12px] font-[700] text-center'>{applicant.post}</h2>
        <div className='flex items-center mr-3 text-[12px] py-2 text-zinc-500'>
            <HiOutlineLocationMarker size={15}/>
            <span className='ml-2'>{applicant.location}</span>
        </div>
        <div className='flex items-center justify-start mt-1'>
            {applicant.skills?.map((skill, index) => {
                if (index < 3) {
                    return (
                    <span key={index} className="inline-flex items-center px-3.5 py-0.5 rounded-lg text-[9px] font-medium bg-zinc-200 text-zinc-600 mr-4 pt-1">
                        {skill}
                    </span>
                 )
                }
            })}
            {applicant.skills && applicant.skills?.length > 3 && (<span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-green-400 text-white mr-4 pt-1">
                +{applicant.skills?.length-3}
            </span>)}
        </div>
    </div>
  )
}

export default ApplicantSmallCard