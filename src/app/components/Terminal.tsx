import React from 'react'
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";

const HeroTerminal = () => {
  return (
    <Terminal className='my-10'>
      <TypingAnimation className='text-dark'>warp create api sentiment --model openai:gpt-4o-mini</TypingAnimation>
      <AnimatedSpan className='text-green-600'>✔ Created API "sentiment"</AnimatedSpan>
      <AnimatedSpan className='text-dark/70'>- endpoint: POST /v1/sentiment</AnimatedSpan>

      <TypingAnimation className='text-dark mt-2'>warp deploy sentiment --region us-east</TypingAnimation>
      <AnimatedSpan className='text-dark/70'>Deploying...</AnimatedSpan>
      <AnimatedSpan className='text-green-600'>✔ Deployed</AnimatedSpan>
      <AnimatedSpan className='text-dark/70'>URL: https://api.warp.dev/v1/sentiment</AnimatedSpan>

      <TypingAnimation className='text-dark mt-2'>{"curl -X POST https://api.warp.dev/v1/sentiment -H \"Authorization: Bearer sk_live_***\" -H \"Content-Type: application/json\" -d '{\\\"text\\\":\\\"I love this product!\\\"}'"}</TypingAnimation>
      <AnimatedSpan className='text-emerald-700'>{`{`}</AnimatedSpan>
      <AnimatedSpan className='text-emerald-700'>  "sentiment": "positive",</AnimatedSpan>
      <AnimatedSpan className='text-emerald-700'>  "score": 0.97,</AnimatedSpan>
      <AnimatedSpan className='text-emerald-700'>  "model": "openai:gpt-4o-mini",</AnimatedSpan>
      <AnimatedSpan className='text-emerald-700'>  "latency_ms": 182</AnimatedSpan>
      <AnimatedSpan className='text-emerald-700'>{`}`}</AnimatedSpan>
    </Terminal>
  )
}

export default HeroTerminal