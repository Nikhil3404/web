import React from 'react'
import Reveal from '@/components/Reveal'

export default function Home(){
  return (
    <div>
      <div className="bg-hero-youware bg-cover bg-center">
        <div className="container py-24 md:py-36">
          <Reveal>
            <h1 className="leading-tight max-w-2xl">Where Logic ends, creativity begins.</h1>
            <p className="muted mt-3 max-w-xl">because the best ideas aren't logical.</p>
            <p className="muted mt-3 max-w-xl">Data, Cloud, AI and full‑stack staffing—delivered with precision.</p>
            <div className="mt-6 flex gap-3">
              <a href="/services" className="btn">Explore services</a>
              <a href="/contact-us" className="btn-outline">Get in touch</a>
            </div>
          </Reveal>
        </div>
      </div>
  
      <h1> Our Services</h1>
      <div className="container my-10 grid md:grid-cols-3 gap-4">
       
        {['Data Engineering','Cloud Services','Artificial Intelligence'].map((t,i)=>(
          <Reveal key={i}><div className="card"><div className="font-semibold">{t}</div><p className="muted mt-1">From strategy to production with guardrails.</p></div></Reveal>
        ))}
      </div>

     <h1> How we are different</h1>
      <div className="container my-10 grid md:grid-cols-3 gap-4">
       
        {['Data Engineering','Cloud Services','Artificial Intelligence'].map((t,i)=>(
          <Reveal key={i}><div className="card"><div className="font-semibold">{t}</div><p className="muted mt-1">From strategy to production with guardrails.</p></div></Reveal>
        ))}
      </div>
    
      <h1> Innovations</h1> 
    <div className="container my-10 grid md:grid-cols-3 gap-4">
       
        {['Data Engineering','Cloud Services','Artificial Intelligence'].map((t,i)=>(
          <Reveal key={i}><div className="card"><div className="font-semibold">{t}</div><p className="muted mt-1">From strategy to production with guardrails.</p></div></Reveal>
        ))}
      </div>

      
    <h1> Something</h1>
    <div className="container my-10 grid md:grid-cols-3 gap-4">
        
        {['Data Engineering','Cloud Services','Artificial Intelligence'].map((t,i)=>(
          <Reveal key={i}><div className="card"><div className="font-semibold">{t}</div><p className="muted mt-1">From strategy to production with guardrails.</p></div></Reveal>
        ))}
      </div>
     
    
    </div>
  )
}
