"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Plan = {
  name: string
  price: string
  tagline: string
  credits: string
  features: string[]
  cta: string
  highlight?: boolean
}

const plans: Plan[] = [
  {
    name: 'Free Plan',
    price: '$0',
    tagline: 'A lightweight way to try scraping. No cost, no card, no hassle.',
    credits: '500 credits',
    features: [
      'Generate up to 15 endpoints',
      '2 concurrent requests',
      'Low rate limits',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '$83',
    tagline: 'Perfect for scaling with less effort. Simple, solid, dependable.',
    credits: '10,000 credits',
    features: [
      'Generate up to 200 endpoints',
      '5 concurrent requests',
      'Standard Support',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$333',
    tagline: 'Built for high volume and speed. Warp at full force.',
    credits: 'Unlimited credits',
    features: [
      'Generate unlimited endpoints',
      '100 concurrent requests',
      'Priority Support',
    ],
    cta: 'Get Started',
  },
]

const Pricing = () => {
  return (
    <section id='pricing' className='relative w-full py-20 px-6'>
      <div className='mx-auto max-w-6xl'>
      <div className='flex flex-col my-10 justify-center items-center'>
        <Image src='/pricing.svg' alt='Logo' height={160} width={160} className='my-3' />
        <h1 className='md:text-5xl text-4xl text-dark my-3 text-center'>Flexible <span className='text-base'>Pricing</span></h1>
        <p className='text-dark/50 text-lg text-center max-w-md w-full mx-auto'>Explore transparent pricing built for real-world scraping. Start for free, then scale as you grow.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12'
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay: 0.08 * idx }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`rounded-3xl border p-6 md:p-8 bg-light shadow-sm hover:shadow-lg transition-all ${plan.highlight ? 'border-base/40 shadow-base/10' : 'border-dark/10'}`}
            >
              <div className='text-5xl sm:text-6xl md:text-7xl text-dark'>{plan.price}</div>
              <div className='mt-2 text-lg sm:text-xl text-dark'>{plan.name}</div>
              <p className='mt-2 text-dark/60 text-sm sm:text-base max-w-sm'>{plan.tagline}</p>

              <div className='mt-5 flex items-center gap-2 text-base text-base'>
                <span className='h-5 w-5 inline-flex items-center justify-center rounded-full border border-base/30 text-base'>◎</span>
                {plan.credits}
              </div>

              <ul className='mt-4 space-y-3'>
                {plan.features.map((f) => (
                  <li key={f} className='flex items-center gap-2 text-dark/70'>
                    <span className='h-5 w-5 inline-flex items-center justify-center rounded-full border border-dark/15'>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`mt-6 w-full rounded-xl py-3 text-center transition-colors ${plan.highlight ? 'bg-base text-white hover:brightness-110' : 'bg-dark/5 text-dark hover:bg-dark/10'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing


