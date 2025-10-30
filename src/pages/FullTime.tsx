import React from 'react'
import Reveal from '@/components/Reveal'
export default function FullTime(){
  const jobs = [
    { title:'Data Engineer', location:'Remote/USA', desc:'Spark, Snowflake, Airflow' },
    { title:'Cloud Engineer', location:'Atlanta, GA', desc:'AWS, Terraform, Kubernetes' }
  ]
  return (
    <div className="container my-10 grid md:grid-cols-2 gap-4">
      {jobs.map((j,i)=>(
        <Reveal key={i}><div className="card"><div className="font-semibold">{j.title}</div><div className="muted">{j.location}</div><p>{j.desc}</p></div></Reveal>
      ))}
    </div>
  )
}
