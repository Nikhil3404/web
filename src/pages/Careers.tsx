import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
export default function Careers(){
  return (
    <div className="container my-10">
      <Reveal><h1>Careers</h1></Reveal>
      <Reveal>
        <div className="flex gap-3 mt-4">
          <Link to="/careers/full-time" className="btn">Full-time</Link>
          <Link to="/careers/contract" className="btn-outline">Contract</Link>
        </div>
      </Reveal>
    </div>
  )
}
