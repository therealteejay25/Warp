import Image from 'next/image'
import React from 'react'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <div id='about' className='min-h-screen flex-flex-col justify-center w-full px-6 py-12'>
        <div className='flex flex-col my-6 md:my-10 justify-center items-center'>
        <Image src='/abouthead.svg' alt='Logo' height={160} width={160} className='my-3' />
        <h1 className='text-4xl md:text-5xl text-dark text-center my-3'>Start <span className='text-base'>Shipping</span> Today</h1>
        <p className='text-dark/50 text-base md:text-lg text-center max-w-2xl w-full mx-auto'>Enhance your apps with industry leading web APIs and shipping capabilities.</p>
        </div>
        <div className='mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 items-stretch'>
            <AboutCard src='/ai.svg' head='AI Powered Endpoints' par='Turn your specs into fully functional endpoints automatically. Focus on logic.' />
            <AboutCard src='/rocket.svg' head='Instant Deployments' par='Deploy your APIs with zero friction. Cloud-ready endpoints in seconds, not hours.' />
            <AboutCard src='/chart.svg' head='Real Time Analytics' par='Know exactly how your APIs perform. Insights delivered instantly to optimize performance.' />
        </div>
        {/* <div className='mx-auto max-w-6xl'>
          <Image src='/banner.svg' alt='Logo' height={1000} width={1000} className='my-12 md:my-16 w-full h-auto rounded-2xl' />
        </div> */}
    </div>
  )
}

export default About