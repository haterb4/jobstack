import Image from 'next/image';
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

interface FeatureItemProps {
    feature: {
        entreprise: string;
        post: string;
        logo: string;
        offer: number;
        location: string;
        postedAt: string;
        price: {
            min: number;
            max: number;
            devise: string;
        },
        fulltime: boolean;
        private: boolean;
        urgent: boolean;
        skills?: string[]
    }
}

const JobCard: React.FC<FeatureItemProps> = ({feature}) => {
  return (
    <div className='border w-[300px] h-[280px] flex flex-col justify-center items-center px-4 relative'>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-20 h-20 rounded-full flex justify-center items-center relative' >
            <Image
                src={'/images/companies/'+feature.logo}
                alt={feature.entreprise+' logo'}
                fill
            />
            </div>
            <div className='w-full flex justify-center items-center mr-3 text-[12px] text-center py-2'>
                <span className='text-center text-green-500'>{feature.entreprise}</span>
            </div>
        </div>
        <h2 className='text-[12px] font-[700] text-center'>{feature.post}</h2>
        <div className='flex items-center mr-3 text-[12px] py-2 text-zinc-500'>
            <HiOutlineLocationMarker size={15}/>
            <span className='ml-2'>{feature.location}</span>
        </div>
        <div className='flex items-center justify-start mt-1'>
            {feature.skills?.map((skill, index) => {
                if (index < 3) {
                    return (
                    <span key={index} className="inline-flex items-center px-3.5 py-0.5 rounded-lg text-[9px] font-medium bg-zinc-200 text-zinc-600 mr-4 pt-1">
                        {skill}
                    </span>
                 )
                }
            })}
            {feature.skills && feature.skills?.length > 3 && (<span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-green-400 text-white mr-4 pt-1">
                +{feature.skills?.length-3}
            </span>)}
        </div>
        {(feature.fulltime || feature.private) && (<div className='absolute left-0 top-0 flex flex-col items-start justify-start'>
            {feature.fulltime && (<span className="inline-flex items-center px-2.5 py-0.5 rounded-r-full text-xs font-medium bg-blue-200 text-blue-700 mr-4 mt-4 pt-1">
                Full Time
            </span>)}
            {feature.private && (<span className="inline-flex items-center px-2.5 py-0.5 rounded-r-full text-xs font-medium bg-green-200 text-green-700 mr-4 mt-4 pt-1">
                Private
            </span>)}
        </div>)}
        {feature.urgent && (<div className='absolute right-0 top-0'>
            <span className="inline-flex items-center px-3.5 py-0.5 rounded-full text-[10px] font-medium bg-orange-200 text-amber-700 mr-4 mt-4 pt-1">
             Urgent
            </span>
        </div>)}
    </div>
  )
}

export default JobCard