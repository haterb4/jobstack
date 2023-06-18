"use client"
import React from 'react'
import SectionHeader from './SectionHeader'
import Slider from "react-slick";
import Testimonial from './Sliders/Testimonial';

const Testimonials = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const testimonials = [
        {
            entreprise: 'Great quality',
            user: {
                name: 'Gabriel Nolan',
                poste: 'Consultant'
            },
            comment: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"
        },
        {
            entreprise: 'Great quality',
            user: {
                name: 'Gabriel Nolan',
                poste: 'Consultant'
            },
            comment: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"
        },
        {
            entreprise: 'Great quality',
            user: {
                name: 'Gabriel Nolan',
                poste: 'Consultant'
            },
            comment: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"
        },
        {
            entreprise: 'Great quality',
            user: {
                name: 'Gabriel Nolan',
                poste: 'Consultant'
            },
            comment: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"
        },
        {
            entreprise: 'Great quality',
            user: {
                name: 'Gabriel Nolan',
                poste: 'Consultant'
            },
            comment: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"
        },
        {
            entreprise: 'Great quality',
            user: {
                name: 'Gabriel Nolan',
                poste: 'Consultant'
            },
            comment: "Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality"
        },
    ]
    return (
        <div className='py-12 w-full'>
            <SectionHeader title='Testimonials From Our Customers' slogan='They try it once and they adopt. Try it and find your dream work'/>
            <div className='mt-12'>
                <Slider {...settings}>
                    {testimonials.map((tesimonial, index) => {
                        return (<Testimonial testimonial={tesimonial} key={index}/>)
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials