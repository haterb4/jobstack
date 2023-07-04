'use client'
import React from 'react'
import SectionHeader from './SectionHeader'
import { BlogCard } from '.';
import Slider from 'react-slick';
import { useWindowSize } from 'usehooks-ts'

const LatesArticles = () => {
  const { width, height } = useWindowSize()
  const articles = [
    {
      title: 'Attract sales and profits',
      coverImage: 'Great quality',
      intro: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite...",
      comments: 12,
      postedAt: 'August 31, 2021'
    },
    {
      title: 'Attract sales and profits',
      coverImage: 'Great quality',
      intro: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite...",
      comments: 12,
      postedAt: 'August 31, 2021'
    },
    {
      title: 'Attract sales and profits',
      coverImage: 'Great quality',
      intro: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite...",
      comments: 12,
      postedAt: 'August 31, 2021'
    },
  ]
  return (
    <div className='py-12 w-full'>
        <SectionHeader title='Recent News Articles' slogan='Fresh news Related news Content posted each day'/>
        <div className={`mt-12 w-full ${ width < 650 ? 'px-8' : 'px-32'} flex justify-center items-center flex-wrap`}>
            <div className={`grid ${width > 1434 ? 'grid-cols-3' : width > 1062 ? 'grid-cols-2' : 'grid-cols-1'} gap-8`}>
              {articles.map((article, index) => {
                  return (<BlogCard article={article} key={index}/>)
              })}
            </div>
        </div>
    </div>
  )
}

export default LatesArticles