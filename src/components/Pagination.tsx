'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react'
import Paginator from './Paginator';

const Pagination = () => {
  const searchParams = useSearchParams()
  
  const activePage = searchParams.get('page')
  const currentPage = activePage? Number(activePage) : 1
  return (
    <Paginator active={currentPage} plage={{start: 1, end: 3, all: 495}} path='/search'/>
  )
}

export default Pagination
