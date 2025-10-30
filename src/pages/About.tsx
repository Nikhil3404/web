import React from 'react'
import Reveal from '@/components/Reveal'

export default function About(){
  const steps = [
    { title: 'Discover', text: 'Intake, role shaping, and success criteria.' },
    { title: 'Design',   text: 'Sourcing plan, screening matrix, timeline.' },
    { title: 'Deliver',  text: 'Submissions, interviews, closure & onboarding.' },
    { title: 'Improve',  text: 'Feedback loops and ongoing success metrics.' }
  ]
  return (
    <div className="container my-10 grid md:grid-cols-2 gap-6 items-start">
      <Reveal>
        <div className="card">
          <div className="font-semibold text-xl">About our company</div>
          <p className="muted mt-2">
            We deliver Cloud, Data, AI, and full-stack staffing with a focus on reliability, security, and outcomes.
          </p>
          <div className="font-semibold mt-4">How IT staffing works</div>
          <p className="muted">We partner end-to-end—from sourcing & screening to interview prep and onboarding.</p>
          <div className="font-semibold mt-4">How we’re different</div>
          <ul className="list-disc ml-6 muted">
            <li>Hands-on cloud/data expertise</li>
            <li>Transparent process & measurable metrics</li>
            <li>Mentorship-driven culture</li>
          </ul>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid gap-4">
          <img className="rounded-xl border border-neutral-800" src="https://picsum.photos/seed/aboutA/900/520" alt="About visual" />
          <div className="grid md:grid-cols-2 gap-3">
            {steps.map((s,i)=>(
              <div key={i} className="card">
                <div className="font-semibold">{s.title}</div>
                <p className="muted mt-1">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
