import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="border-t border-neutral-800 bg-black/60">
      <div className="container py-10 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-extrabold text-brand text-lg">StaffPro</div>
          <p className="muted mt-2">“Building reliable data & cloud solutions.”</p>
          <div className="mt-3 muted">
            <div>(555) 555-1234</div>
            <div>info@yourcompany.com</div>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <div className="grid grid-cols-2 gap-1 text-neutral-300">
            <Link to="/">Home</Link><Link to="/what-we-do">What We Do</Link>
            <Link to="/services">Services</Link><Link to="/staffing">Staffing</Link>
            <Link to="/careers">Careers</Link><Link to="/contact-us">Contact</Link>
            <Link to="/about-us">About</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">Our Services</div>
          <div className="grid gap-1 text-neutral-300">
            <Link to="/services/data-engineering">Data Engineering</Link>
            <Link to="/services/cloud-services">Cloud Services</Link>
            <Link to="/services/artificial-intelligence">Artificial Intelligence</Link>
            <Link to="/services/software-development">Software Development</Link>
            <Link to="/services/database-management">Database Management</Link>
            <Link to="/services/cyber-security">Cyber Security</Link>
            <Link to="/services/web-development">Web Development</Link>
            <Link to="/services/devops">DevOps & CI/CD</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <div className="grid gap-1 text-neutral-300">
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">X (Twitter)</a>
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-400 pb-6">© 2025 The Logicless</div>
    </footer>
  )
}
