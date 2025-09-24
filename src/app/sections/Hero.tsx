import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import HeroTerminal from '../components/Terminal'

const Hero = () => {
  return (
    <div id='hero' className='w-full overflow-hidden px-6 md:pt-14 pt-24'>
        <div className='mx-auto max-w-6xl flex flex-col justify-center items-center'>
            <div className='border flex md:gap-3 gap-1 items-center px-4 py-2 text-dark/75 border-dark/7 rounded-full'>
            <span>AI powered APIs for warp speed</span>
            <Image src='/chevronleft.svg' alt='Logo' height={26} width={26} />
            </div>
            <div>
                <div>
                    <h1 className='text-dark tracking-tighter text-center my-4 mt-6 text-4xl sm:text-5xl md:text-6xl'><span className='text-base'>Ship APIs faster. </span> <br />
                    Deploy AI models in 1 click.</h1>
                    <p className='text-dark/50 sm:text-lg mt-3 max-w-2xl w-full mx-auto text-center'>From idea to endpoint in minutes. Automate, optimize, and deploy APIs faster than ever, no bottlenecks, no headaches.</p>
                </div>
                <HeroTerminal />
            </div>
        </div>
    </div>
  )
}

export default Hero