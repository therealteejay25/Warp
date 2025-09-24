import Image from 'next/image'
import React from 'react'

type CardTypes = {
    src: string,
    head: string,
    par: string,
}

const AboutCard = ({ src, head, par } :  CardTypes) => {
  return (
    <div className='p-5 sm:p-6 relative mx-0 sm:mx-2 overflow-hidden flex items-center justify-center flex-col gap-4 sm:gap-6 bg-light shadow-lg shadow-dark/5 rounded-2xl border-4 border-dark/5 backdrop-blur-2xl w-full'>
        <Image className='z-10' src={src} alt='Logo' height={36} width={36} />
        <div className='z-10'>
            <h1 className='text-center text-2xl my-3'>{head}</h1>
            <p className='text-center text-lg text-dark/50'>{par}</p>
        </div>
        <div className='w-full h-12 bg-base/30 blur-3xl absolute bottom-0'></div>
    </div>
  )
}

export default AboutCard