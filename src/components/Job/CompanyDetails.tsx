import Link from 'next/link'
import React from 'react'
import Socials from '../Socials';
import Image from 'next/image';
export interface Company {
    name: string;
    id: string;
    logo: string;
    criteria: {
        label: string;
        value: string  | number;
    }[];
    socials: {
        link: string;
        media: string;
    }[];
    website?: string;
}
interface CompanyDetailsProps {
    company: Company;
}
const CompanyDetails: React.FC<CompanyDetailsProps> = (props) => {
  return (
    <div className='w-full'>
        <header className='flex items-center'>
            <div className='w-20 h-20 rounded-lg bg-green-200 flex justify-center items-center relative'>
                <Image
                    src={'/images/companies/'+props.company.logo}
                    alt={'invision logo'}
                    fill
                />
            </div>
            <div className='px-4'>
                <h1>{props.company.name}</h1>
                <Link href={'/company/'+props.company.id} className='text-[#1967D3]'>View company profile</Link>
            </div>
        </header>
        <main className='w-full py-3'>
            {props.company.criteria.map((criteria, index) => {
                return (
                    <div key={index} className='my-3 flex justify-between items-center py-2'>
                        <strong className='text-lg'>{criteria.label}:</strong>
                        <span className='text-zinc-400'>{criteria.value}</span>
                    </div>
                )
            })}
            <div className='flex justify-between items-center'>
                <strong>Social media:</strong>
                <div>
                    <Socials />
                </div>
            </div>
        </main>
        <footer className='pb-3'>
            <a
                href={props.company.website}
                target="_blank" rel="noopener noreferrer"
                className='py-3 flex justify-center items-center text-[#1967D3] bg-blue-200 rounded-lg'
            >{props.company.website}</a>
        </footer>
    </div>
  )
}

export default CompanyDetails
