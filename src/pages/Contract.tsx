import React from 'react'
import Reveal from '@/components/Reveal'
export default function Contract(){
  const jobs = [{ title:'DevOps Consultant', location:'Remote/USA', desc:'GitLab CI/CD, Docker, EKS' }]
  return (
    <div className="container my-10 grid md:grid-cols-2 gap-4">
      {jobs.map((j,i)=>(
        <Reveal key={i}><div className="card"><div className="font-semibold">{j.title}</div><div className="muted">{j.location}</div><p>{j.desc}</p></div></Reveal>
      ))}
    </div>
  )
}
