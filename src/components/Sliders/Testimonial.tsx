import Image from 'next/image';
import React from 'react'
import { CgQuote } from 'react-icons/cg'

interface TestimonialProps {
    testimonial: {
        entreprise: string;
        user: {
            name: string;
            poste: string;
            profile: string
        },
        comment: string;
    }
}
const Testimonial: React.FC<TestimonialProps> = ({testimonial}) => {
  return (
    <div className=''>
        <div className='flex flex-col justify-between items-start bg-white px-4 py-8 my-4 rounded-md hover:shadow-lg mx-8 relative'>
            <div className='absolute right-4 top-4 flex justify-center items-center text-zinc-500'>
                <CgQuote size={44}/>
            </div>
            <h3 className='font-[600] text-[15px] py-2'>{testimonial.entreprise}</h3>
            <p className='py-4 mb-4 text-zinc-500'>{testimonial.comment}</p>
            <div className='flex items-center'>
                <div className='h-16 w-16 rounded-full bg-zinc-200 relative'>
                    <Image
                        className='rounded-full'
                        src={'/images/users/'+testimonial.user.profile}
                        alt={testimonial.user.name+' profile'}
                        fill
                    />
                </div>
                <div className='flex flex-col px-4 justify-center'>
                    <h1 className='font-[600] text-[15px]'>{testimonial.user.name}</h1>
                    <h2 className='text-zinc-500 py-2'>{testimonial.user.poste}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial