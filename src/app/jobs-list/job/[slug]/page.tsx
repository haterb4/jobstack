import { CompanyDetails, OverviewItem, PageLayout } from '@/components'
import FeaturedItem from '@/components/Job/FeaturedItem'
import { devCompany } from '@/data/company'
import { featuredJobs } from '@/data/features'
import { jobDescription } from '@/data/job'
import Image from 'next/image'
import React from 'react'
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai'
import { BsBookmark, BsClock } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa'
import { GiDuration, GiTakeMyMoney } from 'react-icons/gi'
import { GiCoins } from 'react-icons/gi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { MdBusinessCenter, MdOutlineAccessTime } from 'react-icons/md'

const Page = () => {
  const job = {
    skills: ['app', 'administraive', 'android', 'wordpress', 'design', 'react']
  }
  return (
    <PageLayout>
      <main className='full overflow-hidden'>
        <header className='w-full flex justify-center items-center bg-gradient-to-r from-[#F2F5FC] to-blue-100 px-12 py-16'>
            <div className='flex items-center justify-start lg:justify-between w-[70%] flex-wrap gap-y-12'>
              <div className='flex items-center flex-wrap gap-y-4'>
                <div className='w-[110px] min-w-[110px] h-[110px] min-h-[110px] rounded-[8px] bg-blue-200 relative'>
                  <Image
                    src={'/images/companies/invision-logo.svg'}
                    alt={'invision logo'}
                    fill
                  />
                </div>
                <div className='ml-4'>
                  <h1 className='text-2xl text-neutral-600'>Product Designer / UI Designer</h1>
                  <div className='flex items-center py-2 text-zinc-500 text-[10px] flex-wrap gap-x-3'>
                    <div className='flex items-center text-[12px]'>
                      <MdBusinessCenter size={15}/>
                      <span className='ml-[6px]'>{'inVision'}</span>
                    </div>
                    <div className='flex items-center text-[12px]'>
                      <HiOutlineLocationMarker size={15}/>
                      <span className='ml-[6px]'>{'yaoundé, cmr'}</span>
                    </div>
                    <div className='flex items-center text-[12px]'>
                      <BsClock size={15}/>
                      <span className='ml-[6px]'>11 hours ago</span>
                    </div>
                    <div className='flex items-center text-[12px]'>
                      <FaMoneyBillWave size={15}/>
                      <span className='ml-[6px]'>{'2500'} - {'3000'}</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-start mt-3 flex-wrap gap-4'>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-700 mr-4 pt-1">
                      Full Time
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-200 text-green-700 mr-4 pt-1">
                      Private
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-200 text-amber-700 mr-4 pt-1">
                      Urgent
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                  <button className='px-10 py-[14px] bg-[#1967D3] rounded-[8px] text-white'>Apply For Job</button>
                  <button className='w-[55px] h-[55px] flex justify-center items-center text-[#1967D3] rounded-[8px] bg-blue-200 ml-5'>
                    <BsBookmark size={20}/>
                  </button>
              </div>
            </div>
        </header>
        <div className='w-full py-12 flex flex-col items-center justify-center px-8 lg:px-0'>
          <div className='w-full lg:w-[90%] xl:w-[70%] flex justify-center lg:justify-between items-start flex-wrap-reverse lg:flex-nowrap gap-12'>
            <div className='w-full lg:w-[calc(100%-400px)] lg:max-w-[calc(100%-400px)] pr-8'>
              <div className='w-full text-base text-zinc-500'>
                <div>
                  <h1 className='text-black text-xl my-4'>Job Description</h1>
                  <p className='leading-8'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Earum facere aspernatur repellat incidunt suscipit necessitatibus, 
                    similique magnam voluptatum quibusdam quia, libero sunt fuga! Corrupti 
                    ipsam id eveniet unde, quas est! 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ab quidem accusantium fuga eum? Necessitatibus dolore eaque corrupti 
                    ipsum voluptatum quisquam, ducimus saepe vero facilis 
                    nobis eius nemo dignissimos libero natus!
                  </p>
                </div>
                <div className='mt-8 w-full'>
                  <h1 className='text-black text-xl my-4'>Key Responsibilities</h1>
                  <div className='pl-5'>
                    <ul className='list-disc'>
                      <li className='my-5 py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt possimus enim laboriosam</li>
                      <li className='my-5 py-2'> dolores rem, in reprehenderit perspiciatis harum ducimus quaerat Iusto.</li>
                      <li className='my-5 py-2'> iusto molestias quibusdam, dolores rem, in reprehenderit perspiciatis harum ducimus .</li>
                      <li className='my-5 py-2'> molestias quibusdam, dolores rem, in reprehenderit perspiciatis harum ducimus quaerat .</li>
                      <li className='my-5 py-2'> quibusdam, dolores rem, in reprehenderit perspiciatis harum ducimus quaerat voluptas.</li>
                      <li className='my-5 py-2'> ducimus, dolores rem, in reprehenderit voluptas perspiciatis harum ducimus.</li>
                    </ul>
                  </div>
                </div>
                <div className='mt-8 w-full'>
                  <h1 className='text-black text-xl my-4'>Skills & Experience</h1>
                  <div className='pl-5'>
                    <ul className='list-disc'>
                      <li className='my-5 py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt possimus enim laboriosam</li>
                      <li className='my-5 py-2'> dolores rem, in reprehenderit perspiciatis harum ducimus quaerat Iusto.</li>
                      <li className='my-5 py-2'> iusto molestias quibusdam, dolores rem, in reprehenderit perspiciatis harum ducimus .</li>
                      <li className='my-5 py-2'> molestias quibusdam, dolores rem, in reprehenderit perspiciatis harum ducimus quaerat .</li>
                      <li className='my-5 py-2'> quibusdam, dolores rem, in reprehenderit perspiciatis harum ducimus quaerat voluptas.</li>
                      <li className='my-5 py-2'> ducimus, dolores rem, in reprehenderit voluptas perspiciatis harum ducimus.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-full flex items-center flex-wrap'>
                <p>Share this job</p>
                <div className='flex gap-4 ml-3 my-8 flex-wrap'>
                  <a
                    href={'/'}
                    target="_blank" rel="noopener noreferrer"
                    className='py-3 px-12 flex justify-center items-center text-white bg-[#1967D3] rounded-lg'
                  >
                    Facebook
                  </a>
                  <a
                    href={'/'}
                    target="_blank" rel="noopener noreferrer"
                    className='py-3 px-12 flex justify-center items-center text-white bg-violet-300 rounded-lg'
                  >
                    Twitter
                  </a>
                  <a
                    href={'/'}
                    target="_blank" rel="noopener noreferrer"
                    className='py-3 px-12 flex justify-center items-center text-white bg-red-500 rounded-lg'
                  >
                    Google +
                  </a>
                </div>
              </div>
              <footer className='w-full'>
                <div className='w-full'>
                  <h1 className='text-xl font-bold'>Related jobs</h1>
                  <p className='text- text-zinc-400 px-3'>2023 jobs live - 255 added today.</p>
                </div>
                <div className='w-full px-3 flex flex-col gap-y-8 mt-5'>
                  {featuredJobs.slice(1, 4).map((job, index) => {
                    return (
                      <div key={index} className='w-full'>
                        <FeaturedItem feature={job}/>
                      </div>
                    )
                  })}
                </div>
              </footer>
            </div>
            <div>
              <div className='w-full lg:w-[380px] bg-[#f5f7fb] rounded-lg py-5 px-6'>
                <div className='w-full'>
                  <h1 className='text-xl mb-4'>Job Overview</h1>
                  <div className='w-full'>
                    <OverviewItem icon={AiOutlineCalendar} title='Date Posted:' text='Posted 1 hours ago'/>
                    <OverviewItem icon={GiDuration} title='Expiration Date:' text='April 06, 2021'/>
                    <OverviewItem icon={HiOutlineMapPin} title='Location:' text='Yaoundé, cmr'/>
                    <OverviewItem icon={AiOutlineUser} title='Job title:' text='Designer'/>
                    <OverviewItem icon={MdOutlineAccessTime} title='Hours:' text='50h / week'/>
                    <OverviewItem icon={GiCoins} title='Rate:' text='2500-300 XAF / hour'/>
                    <OverviewItem icon={GiTakeMyMoney} title='Salary:' text='50k-75k'/>
                  </div>
                </div>
                <div className='w-full'>
                  <h1 className='text-xl mb-4'>Job Location</h1>
                  <div className='w-full px-6 py-4'>
                    <div className='w-full h-[200px] rounded-lg bg-zinc-300'>

                    </div>
                  </div>
                </div>
                <div className='w-full'>
                  <h1 className='text-xl mb-4'>Job Skills</h1>
                  <div className='w-full flex items-center gap-4 flex-wrap'>
                    {job.skills.map((skills, index) => {
                      return (
                        <div key={index} className='px-4 pb-2 pt-3 flex justify-center items-center rounded-[8px] bg-white text-neutral-500'>{skills}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-[380px] bg-[#f5f7fb] rounded-lg py-5 px-6 mt-8'>
                <CompanyDetails company={devCompany}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

export default Page
