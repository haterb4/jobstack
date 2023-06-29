"use client"
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
import { useWindowSize } from 'usehooks-ts'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const ProfileViewChart = () => {
  const { width } = useWindowSize()
  const data = {
    labels: ['June 1', 'June 2', 'June 3', 'June 4', 'June 5', 'June 6', 'June 7', 'June 8', 'June 9', 'June 10', 'June 11', 'June 12',],
    datasets: [{
      data: [1, 100, 159, 20, 100, 94, 120, 35, 90, 79, 105, 120],
      backgroundColor: 'transparent',
      borderColor: '#175FC0',
      pointBorderWidth: 2,
      tension: 0.5
    }]
  }
  const options = {
    plugin: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: 0,
        max: 180,
        ticks: {
          stepSize: 8,
          callback: (value: any) => value + 'K'
        },
        
      }
    }
  }
  return (
    <div className={`min-w-[300px] md:w-[48%] xl:w-[62%] ${ width < 1478 && 'w-full'} max-h-[420px] shadow-1 bg-white p-4 border rounded-lg`}>
        <div className='w-full flex justify-between items-center'>
          <h1 className='text-lg'>Your profile views</h1>
          <div className='bg-neutral-100 text-neutral-500 px-3 py-2 rounded-lg'>
              <select name="" id="" className='w-[120px] bg-transparent outline-none'>
              <option value="1">This month</option>
              <option value="1">Last 6 months</option>
              <option value="1">Last 4 months</option>
              <option value="1">Last 3 months</option>
              <option value="1">Last 2 months</option>
              </select>
          </div>
        </div>
        <div className='w-full h-[342px] mt-2'>
          <Line data={data} options={options} />
        </div>
    </div>
  )
}

export default ProfileViewChart