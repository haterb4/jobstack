import React from 'react'
import SectionHeader from '../SectionHeader'
import { JobCategorieItem } from '..'
import { GiHealthNormal } from 'react-icons/gi'
import { AiFillCar} from 'react-icons/ai'
import { LuFigma} from 'react-icons/lu'
import { BiCodeBlock} from 'react-icons/bi'
import { RiCustomerService2Fill} from 'react-icons/ri'
import { BsPeopleFill} from 'react-icons/bs'
import { FaProjectDiagram } from 'react-icons/fa'
import { HiSpeakerphone } from 'react-icons/hi'
import { GiTakeMyMoney } from 'react-icons/gi'

const Categories = () => {
  const categories = [
    {
      icon: GiTakeMyMoney,
      title: 'Accounting / Finance',
      position: 2
    },
    {
      icon: HiSpeakerphone,
      title: 'Marketting',
      position: 86
    },
    {
      icon: LuFigma,
      title: 'Design',
      position: 43
    },
    {
      icon: BiCodeBlock,
      title: 'Development',
      position: 12
    },
    {
      icon: BsPeopleFill,
      title: 'Human Ressource',
      position: 55
    },
    {
      icon: FaProjectDiagram,
      title: 'Project Management',
      position: 19
    },
    {
      icon: RiCustomerService2Fill,
      title: 'Customer service',
      position: 72
    },
    {
      icon: GiHealthNormal,
      title: 'Healt and Care',
      position: 25
    },
    {
      icon: AiFillCar,
      title: 'Automotive Jobs',
      position: 92
    },
  ]
  return (
    <div className='py-12 bg-white'>
        <SectionHeader title='Popular Job Categories' slogan='2023 jobs live -293 added today.'/>
        <div className='grid grid-cols-3 gap-8 py-12'>
          {categories.map((item, index) => {
            return <JobCategorieItem key={index} categorie={item}/>
          })}
        </div>
    </div>
  )
}

export default Categories