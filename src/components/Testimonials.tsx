"use client"

import React from 'react'
import SectionHeader from './SectionHeader'
import Slider from "react-slick";

const Testimonials = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true
    };
    return (
        <div className='py-12 w-full'>
            <SectionHeader title='Testimonials From Our Customers' slogan='They try it once and they adopt. Try it and find your dream work'/>
            <div className='mt-12'>
                <Slider {...settings}>
                    <div className='px-1 mx-2'>
                        <div className='flex flex-col justify-between items-start bg-white px-4 py-8 my-4 rounded-md hover:shadow-lg mx-8'>
                            <h3 className='font-[600] text-[15px] py-2'>Great quality</h3>
                            <p className='py-4 mb-4 text-zinc-500'>{"Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"}</p>
                            <div className='flex items-center'>
                                <div className='h-16 w-16 rounded-full bg-zinc-200'></div>
                                <div className='flex flex-col px-4 justify-center'>
                                    <h1 className='font-[600] text-[15px]'>Gabriel Nolan</h1>
                                    <h2 className='text-zinc-500 py-2'>Consultant</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1 mx-2'>
                        <div className='flex flex-col justify-between items-start bg-white px-4 py-8 my-4 rounded-md hover:shadow-lg mx-8'>
                            <h3 className='font-[600] text-[15px] py-2'>Great quality</h3>
                            <p className='py-4 mb-4 text-zinc-500'>{"Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"}</p>
                            <div className='flex items-center'>
                                <div className='h-16 w-16 rounded-full bg-zinc-200'></div>
                                <div className='flex flex-col px-4 justify-center'>
                                    <h1 className='font-[600] text-[15px]'>Gabriel Nolan</h1>
                                    <h2 className='text-zinc-500 py-2'>Consultant</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1 mx-2'>
                        <div className='flex flex-col justify-between items-start bg-white px-4 py-8 my-4 rounded-md hover:shadow-lg mx-8'>
                            <h3 className='font-[600] text-[15px] py-2'>Great quality</h3>
                            <p className='py-4 mb-4 text-zinc-500'>{"Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"}</p>
                            <div className='flex items-center'>
                                <div className='h-16 w-16 rounded-full bg-zinc-200'></div>
                                <div className='flex flex-col px-4 justify-center'>
                                    <h1 className='font-[600] text-[15px]'>Gabriel Nolan</h1>
                                    <h2 className='text-zinc-500 py-2'>Consultant</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1 mx-2'>
                        <div className='flex flex-col justify-between items-start bg-white px-4 py-8 my-4 rounded-md hover:shadow-lg mx-8'>
                            <h3 className='font-[600] text-[15px] py-2'>Great quality</h3>
                            <p className='py-4 mb-4 text-zinc-500'>{"Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"}</p>
                            <div className='flex items-center'>
                                <div className='h-16 w-16 rounded-full bg-zinc-200'></div>
                                <div className='flex flex-col px-4 justify-center'>
                                    <h1 className='font-[600] text-[15px]'>Gabriel Nolan</h1>
                                    <h2 className='text-zinc-500 py-2'>Consultant</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1 mx-2'>
                        <div className='flex flex-col justify-between items-start bg-white px-4 py-8 my-4 rounded-md hover:shadow-lg mx-8'>
                            <h3 className='font-[600] text-[15px] py-2'>Great quality</h3>
                            <p className='py-4 mb-4 text-zinc-500'>{"Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"}</p>
                            <div className='flex items-center'>
                                <div className='h-16 w-16 rounded-full bg-zinc-200'></div>
                                <div className='flex flex-col px-4 justify-center'>
                                    <h1 className='font-[600] text-[15px]'>Gabriel Nolan</h1>
                                    <h2 className='text-zinc-500 py-2'>Consultant</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1 mx-2'>
                        <div className='flex flex-col justify-between items-start bg-white px-4 py-8 my-4 rounded-md hover:shadow-lg mx-8'>
                            <h3 className='font-[600] text-[15px] py-2'>Great quality</h3>
                            <p className='py-4 mb-4 text-zinc-500'>{"Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"}</p>
                            <div className='flex items-center'>
                                <div className='h-16 w-16 rounded-full bg-zinc-200'></div>
                                <div className='flex flex-col px-4 justify-center'>
                                    <h1 className='font-[600] text-[15px]'>Gabriel Nolan</h1>
                                    <h2 className='text-zinc-500 py-2'>Consultant</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1 mx-2'>
                        <div className='flex flex-col justify-between items-start bg-white px-4 py-8 my-4 rounded-md hover:shadow-lg mx-8'>
                            <h3 className='font-[600] text-[15px] py-2'>Great quality</h3>
                            <p className='py-4 mb-4 text-zinc-500'>{"Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"}</p>
                            <div className='flex items-center'>
                                <div className='h-16 w-16 rounded-full bg-zinc-200'></div>
                                <div className='flex flex-col px-4 justify-center'>
                                    <h1 className='font-[600] text-[15px]'>Gabriel Nolan</h1>
                                    <h2 className='text-zinc-500 py-2'>Consultant</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials