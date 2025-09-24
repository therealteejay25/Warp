import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative flex flex-col justify-center items-center w-full mt-20'>
      {/* Glow effect */}
      <div className='pointer-events-none absolute -top-6 left-1/2 h-12 w-[90%] -translate-x-1/2 rounded-full bg-base/10 blur-2xl'></div>

      <div className='mx-auto max-w-6xl px-6'>
        <div className='rounded-3xl border border-dark/10 bg-light p-6 shadow-sm flex flex-col gap-8'>
          
          {/* Top Section */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6'>
            
            {/* Logo */}
            <div className='md:flex items-center gap-3'>
              <Image src='/Warp..svg' alt='Warp' height={60} width={60} />
              <div>
                <p className='text-dark/60 text-sm'>AI powered APIs for warp speed.</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className='flex flex-wrap sm:flex-row text-center gap-3 sm:gap-6 text-dark/70 text-sm'>
              <a href="#" className='hover:text-base transition-colors'>Products</a>
              <a href="#" className='hover:text-base transition-colors'>Docs</a>
              <a href="#" className='hover:text-base transition-colors'>Pricing</a>
              <a href="#" className='hover:text-base transition-colors'>Resources</a>
            </nav>

            {/* Social + CTA */}
            <div className='md:flex items-center gap-3 mt-4 sm:mt-0'>
              <a
                href="#"
                aria-label='GitHub'
                className='inline-flex w-full my-3 md:my-0 p-1 h-9 md:w-9 items-center justify-center rounded-full border border-dark/10 hover:border-base/40 transition-colors'
              >
                <Image src='/github.svg' alt='GitHub' height={18} width={18} className='opacity-60' />
              </a>
              <button className='rounded-lg bg-dark/5 text-dark hover:bg-dark/10 py-2 px-4 transition-colors w-full sm:w-auto'>
                Get Started
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className='h-px w-full bg-gradient-to-r from-transparent via-dark/10 to-transparent'></div>

          {/* Bottom Section */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-dark/60'>
            <p>© {new Date().getFullYear()} Warp, Inc. All rights reserved.</p>
            <div className='flex flex-wrap w-full justify-between gap-4'>
              <a href="#" className='hover:text-base transition-colors'>Privacy</a>
              <a href="#" className='hover:text-base transition-colors'>Terms</a>
              <a href="#" className='hover:text-base transition-colors'>Status</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
