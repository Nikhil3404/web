import React from 'react'
import Reveal from '@/components/Reveal'

export default function WhatWeDo(){
  const items = [
    { t: 'Stay current', d: 'Cloud-native patterns, modern data stacks, AI evaluation.' },
    { t: 'Build right', d: 'Guardrails for quality, security, and cost control.' },
    { t: 'Grow people', d: 'Mentorship and career paths to hit employee goals.' }
  ]
  return (
    <div className="container my-10 grid md:grid-cols-2 gap-6">
      <Reveal>
        <div>
          <h1>What We Do</h1>
          <p className="muted mt-2">We help clients adopt cloud, build reliable data platforms, and ship AI features—safely.</p>
          <div className="grid gap-3 mt-4">
            {items.map((x,i)=>(
              <div key={i} className="card">
                <div className="font-semibold">{x.t}</div>
                <p className="muted">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <img className="rounded-xl border border-neutral-800" src="https://picsum.photos/seed/whatwedo2/900/520" alt="What we do" />
      </Reveal>
    </div>
  )
}
