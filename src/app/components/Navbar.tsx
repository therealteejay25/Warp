"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='fixed top-4 z-50 flex items-center justify-between md:w-[97%] w-[88%] p-4 md:p-5 border-4 rounded-2xl border-dark/3 backdrop-blur-md shadow-xl shadow-black/5 bg-light/70'>
        {/* Logo */}
        <a href="#hero" className='inline-flex items-center gap-2'>
          <Image src='/Warp..svg' alt='Logo' height={52} width={52} />
        </a>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-8'>
          <a className='text-dark/50 hover:text-base transition-all duration-300' href="#about">About</a>
          <a className='text-dark/50 hover:text-base transition-all duration-300' href="#services">Services</a>
          <a className='text-dark/50 hover:text-base transition-all duration-300' href="#testimonials">Testimonials</a>
          <a className='text-dark/50 hover:text-base transition-all duration-300' href="#pricing">Pricing</a>
        </div>

        {/* Right Section */}
        <div className='flex gap-4 md:gap-5 items-center'>
          {/* GitHub + Sign Up only visible on md+ */}
          <div className='hidden md:flex gap-4 md:gap-5 items-center'>
            <div className='text-dark/50 cursor-pointer text-lg gap-1 flex justify-center items-center'>
              <Image src='/github.svg' alt='Github Icon' height={28} width={28} className='opacity-50' />
              67.7K
            </div>
            <button className='text-dark/65 bg-dark/5 rounded-lg py-2 px-5 hover:bg-dark/10 transition'>Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden inline-flex items-center justify-center rounded-md p-2 text-dark/70 hover:bg-dark/5 transition'
            onClick={() => setOpen(!open)}
            aria-label='Menu'
          >
            <svg
              className='h-6 w-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='3' y1='6' x2='21' y2='6' />
              <line x1='3' y1='12' x2='21' y2='12' />
              <line x1='3' y1='18' x2='21' y2='18' />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='md:hidden fixed top-[80px] left-0 w-[88%] mx-6 mt-4 rounded-2xl border-4 border-dark/3 bg-light/90 p-5 backdrop-blur-md shadow-xl flex flex-col gap-4 z-40'
          >
            <a className='text-dark/80 hover:text-base transition' href="#about" onClick={() => setOpen(false)}>Product</a>
            <a className='text-dark/80 hover:text-base transition' href="#services" onClick={() => setOpen(false)}>Docs</a>
            <a className='text-dark/80 hover:text-base transition' href="#testimonials" onClick={() => setOpen(false)}>Resources</a>
            <a className='text-dark/80 hover:text-base transition' href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
