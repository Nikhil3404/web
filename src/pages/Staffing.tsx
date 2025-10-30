import React from 'react'
import Reveal from '@/components/Reveal'
export default function Staffing(){
  return (
    <div className="container my-10 grid md:grid-cols-2 gap-4 items-start">
      <Reveal>
        <div className="card">
          <div className="font-semibold">Our playbook</div>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Profile polish & role mapping</li>
            <li>Targeted submissions & interview prep</li>
            <li>Offer closure & onboarding support</li>
          </ol>
        </div>
      </Reveal>
      <Reveal>
        <img className="rounded-xl border border-neutral-800" src="https://picsum.photos/seed/staffing/900/520" alt="Staffing" />
      </Reveal>
    </div>
  )
}
