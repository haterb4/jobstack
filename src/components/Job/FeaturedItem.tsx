import React from 'react'
import { MdBusinessCenter } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsBookmark, BsClock } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa'
import Link from 'next/link'
import styles from '@/styles/featureditem.module.css'
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

const FeaturedItem: React.FC<FeatureItemProps> = ({feature}) => {
  return (
    <div className={styles.featureditem +' min-w-[500px] w-full border rounded-md bg-white hover-shadow-1 py-8 flex justify-start items-start px-4 relative'}>
        <button className='w-8 h-8 absolute right-4 top-4 text-neutral-500 hover:bg-neutral-100 rounded-full flex justify-center items-center'><BsBookmark size={12}/></button>
        <div className='w-10 h-10 rounded-lg flex justify-center items-center bg-[#ECEDF2] text-[#1A67D3] hover:bg-blue-600 hover:text-white'>   
        </div>
        <div className='min-w-[calc(500px-44px)] w-[calc(100%-44px)] ml-2 pl-[12px]'>
            <h2 className='text-[12px] font-[700]'>
              <Link href={'/'}>{feature.post}</Link>
            </h2>
            <div className='flex items-center py-2 text-zinc-500 text-[10px]'>
              <div className='flex items-center mr-3 text-[12px]'>
                <MdBusinessCenter size={15}/>
                <span className='ml-[6px]'>{feature.entreprise}</span>
              </div>
              <div className='flex items-center mr-3 text-[12px]'>
                <HiOutlineLocationMarker size={15}/>
                <span className='ml-[6px]'>{feature.location}</span>
              </div>
              <div className='flex items-center mr-3 text-[12px]'>
                <BsClock size={15}/>
                <span className='ml-[6px]'>11 hours ago</span>
              </div>
              <div className='flex items-center mr-3 text-[12px]'>
                <FaMoneyBillWave size={15}/>
                <span className='ml-[6px]'>{feature.price.min} - {feature.price.max}</span>
              </div>
            </div>
            <div className='flex items-center justify-start mt-3'>
              {feature.fulltime && (<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-700 mr-4 pt-1">
                Full Time
              </span>)}
              {feature.private && (<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-200 text-green-700 mr-4 pt-1">
                Private
              </span>)}
              {feature.urgent && (<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-200 text-amber-700 mr-4 pt-1">
                Urgent
              </span>)}
            </div>
            <div className={styles.featureditemDescription + ' w-full text-neutral-500 mt-3 leading-6'}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et minima ratione expedita commodi temporibus sint obcaecati enim, adipisci ducimus soluta non unde illum accusantium reprehenderit delectus iste, ut dolor.</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturedItem