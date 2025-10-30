import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/60 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="font-extrabold text-brand text-xl">
          The Logicless
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="only-mobile text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/what-we-do">What We Do</Link>

          {/* Services Dropdown */}
          <div className="dropdown group/menu relative">
            <span
              className="dropdown-trigger"
              onMouseDown={(e) => e.preventDefault()}
            >
              
              Services ▾
            </span>

            <div className="dropdown-menu min-w-[240px] rounded-xl border border-neutral-800 bg-[var(--card)] p-2 shadow-lg">
              <Link
                to="/services/data-engineering"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Data Engineering
              </Link>
              <Link
                to="/services/cloud-services"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Cloud Services
              </Link>
              <Link
                to="/services/artificial-intelligence"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Artificial Intelligence
              </Link>
              <Link
                to="/services/software-development"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Software Development
              </Link>
              <Link
                to="/services/database-management"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Database Management
              </Link>
              <Link
                to="/services/cyber-security"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Cyber Security
              </Link>
              <Link
                to="/services/web-development"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Web Development
              </Link>
              <Link
                to="/services/devops"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                DevOps & CI/CD
              </Link>

              <div className="my-1 border-t border-neutral-800" />
              <Link
                to="/services"
                className="block px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800"
              >
                All Services
              </Link>
            </div>
          </div>

          <Link to="/staffing">Staffing</Link>

          {/* Careers Dropdown */}
          <div className="dropdown group/menu relative">
            <span
              className="dropdown-trigger"
              onMouseDown={(e) => e.preventDefault()}
            >
              Careers ▾
            </span>

            <div className="dropdown-menu min-w-[220px] rounded-xl border border-neutral-800 bg-[var(--card)] p-2 shadow-lg">
              <Link
                to="/careers/full-time"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Full-time
              </Link>
              <Link
                to="/careers/contract"
                className="block px-3 py-2 hover:bg-neutral-800 rounded-lg"
              >
                Contract
              </Link>
              <div className="my-1 border-t border-neutral-800" />
              <Link
                to="/careers"
                className="block px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800"
              >
                Careers Home
              </Link>
            </div>
          </div>

          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
        </nav>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="md:hidden absolute left-0 right-0 top-full border-b border-neutral-800 bg-black/95">
            <div className="container py-3 grid gap-2">
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/what-we-do" onClick={() => setOpen(false)}>
                What We Do
              </Link>
              <Link to="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link to="/staffing" onClick={() => setOpen(false)}>
                Staffing
              </Link>
              <Link to="/careers/full-time" onClick={() => setOpen(false)}>
                Careers — Full-time
              </Link>
              <Link to="/careers/contract" onClick={() => setOpen(false)}>
                Careers — Contract
              </Link>
              <Link to="/contact-us" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
              <Link to="/about-us" onClick={() => setOpen(false)}>
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
