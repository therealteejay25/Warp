"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const features = [
    {
      title: 'No Proxy Headaches',
      desc: 'Deploys 98% of APIs, including complex endpoints and AI-generated routes.',
      icon: '/file.svg',
    },
    {
      title: '1‑Click Deploys',
      desc: 'Ship from idea to endpoint in minutes with zero-config regions, scaling, and rollbacks.',
      icon: '/file.svg',
    },
    {
      title: 'AI Native',
      desc: 'Plug into top models and tools with consistent APIs, observability, and guardrails.',
      icon: '/file.svg',
    },
    {
      title: 'Blazing Performance',
      desc: 'Edge-accelerated routing and smart caching deliver sub‑200ms P95 latencies.',
      icon: '/file.svg',
    },
  ]

  return (
    <section id='services' className='relative w-full py-16 px-6'>
      {/* <div className='pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-base/20 blur-3xl'></div> */}
      <div className='mx-auto max-w-6xl'>
        <div className='flex md:flex-row-reverse flex-col my-10 justify-between items-center md:items-start'>
          <Image src='/serviceshead.svg' alt='Services' height={160} width={160} className='my-3' />
          <div>
            <h1 className='md:text-5xl text-4xl text-dark my-3 md:text-left text-center'>Core principles, <br /><span className='text-base'> proven performance.</span></h1>
            <p className='text-dark/50 text-lg max-w-xl md:text-left text-center'>Enhance your apps with industry leading web APIs and shipping capabilities.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24, rotate: -0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 * idx, ease: 'easeOut' }}
              whileHover={{ y: -6, rotate: -0.25, scale: 1.02 }}
              className='group relative rounded-2xl'
            >
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-base/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative rounded-2xl border border-dark/10 bg-light p-[1px]'>
                <div className='rounded-2xl bg-light p-5 shadow-sm hover:shadow-md transition-shadow duration-300'>
                  <div className='flex items-center gap-2 text-xl text-dark/60'>
                    <Image src={f.icon} alt='' height={28} width={28} className='opacity-60' />
                    <span className='text-dark'>{f.title}</span>
                  </div>
                  <p className='mt-2 text-dark/70 leading-relaxed'>
                    <span className='text-dark'>{idx === 0 ? 'Lightning-fast. ' : ''}</span>{f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services