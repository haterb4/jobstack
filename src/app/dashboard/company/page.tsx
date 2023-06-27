/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { setActivePage } from '@/redux/features/dashboard/activePageSlice'

const Home = () => {
  const dispatch = useAppDispatch()
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  useEffect(()=> { 
   const updateActivePage = () => {
    dispatch(setActivePage('company profile')) 
   }
   updateActivePage()
  }, [])
  return (
    <div>page</div>
  )
}

export default Home