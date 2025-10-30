import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'

const copy: Record<string,[string,string]> = {
  'data-engineering': ['Pipelines, streaming, and warehousing with quality gates.','https://picsum.photos/seed/data/900/520'],
  'cloud-services': ['Secure, scalable landing zones and migrations.','https://picsum.photos/seed/cloud/900/520'],
  'artificial-intelligence': ['Pragmatic ML/LLM features with evaluation.','https://picsum.photos/seed/ai/900/520'],
  'software-development': ['APIs, microservices, and modern frontends.','https://picsum.photos/seed/software/900/520'],
  'database-management': ['Performance, HA/DR, and cost control.','https://picsum.photos/seed/database/900/520'],
  'cyber-security': ['Zero-trust, IAM, threat detection.','https://picsum.photos/seed/security/900/520'],
  'web-development': ['Fast, accessible, SEO-friendly sites.','https://picsum.photos/seed/web/900/520'],
  'devops': ['CI/CD, infra-as-code, and platform engineering.','https://picsum.photos/seed/devops/900/520']
}

export default function ServiceDetail(){
  const { id } = useParams()
  const data = id ? copy[id] : undefined
  const [text, img] = data ?? ['Service details coming soon.','https://picsum.photos/seed/placeholder/900/520']
  const title = (id ?? '').replaceAll('-',' ').replace(/\b\w/g, s => s.toUpperCase())
  return (
    <div className="container my-10 grid md:grid-cols-2 gap-6">
      <Reveal>
        <div>
          <h1 className="cap">{title}</h1>
          <p className="muted mt-2">{text}</p>
          <Link className="btn mt-3 inline-block" to="/contact-us">Get in Touch</Link>
        </div>
      </Reveal>
      <Reveal><img className="rounded-xl border border-neutral-800" src={img} alt={title} /></Reveal>
    </div>
  )
}
