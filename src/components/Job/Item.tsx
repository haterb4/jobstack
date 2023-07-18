import React from 'react'
import { IconType } from 'react-icons';

interface ItemInterface {
  categorie: {
    icon: IconType;
    title: string;
    position: number
  }
}

const Item: React.FC<ItemInterface>  = ({categorie}) => {
  return (
    <div className='w-full md:w-[310px] p-3 border rounded-lg flex justify-between items-center hover:shadow-md'>
      <div className='w-16 h-16 rounded-lg flex justify-center items-center bg-zinc-50 text-[#1A67D3] hover:bg-blue-600 hover:text-white'>
        <categorie.icon size={32}/>
      </div>
      <div className='w-[calc(310px-64px)] px-4'>
        <h2 className='text-lg font-[700]'>{categorie.title}</h2>
        <p className='mt-[8px] text-zinc-500'>({categorie.position} {`opened position${categorie.position > 1 && 's'}`})</p>
      </div>
    </div>
  )
}

export default Item