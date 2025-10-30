import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
const items: [string,string][] = [
  ['data-engineering','Data Engineering'],
  ['cloud-services','Cloud Services'],
  ['artificial-intelligence','Artificial Intelligence'],
  ['software-development','Software Development'],
  ['database-management','Database Management'],
  ['cyber-security','Cyber Security'],
  ['web-development','Web Development'],
  ['devops','DevOps & CI/CD']
]
export default function Services(){
  return (
    <div className="container my-10">
      <h1>Services</h1>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {items.map(([slug,label],i)=> (
          <Reveal key={slug}><Link to={`/services/${slug}`} className="card block">
            <div className="font-semibold">{label}</div>
            <p className="muted">Learn more</p>
          </Link></Reveal>
        ))}
      </div>
    </div>
  )
}
