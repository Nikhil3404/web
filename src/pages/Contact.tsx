import React from 'react'
import Reveal from '@/components/Reveal'

export default function Contact(){
  return (
    <div className="container my-10 grid md:grid-cols-2 gap-6 items-start">
      <Reveal>
        <div>
          <h1>Do you have any questions?</h1>
          <p className="muted">Fill out the form and we’ll respond shortly.</p>
          <form action="https://formspree.io/f/mayplqyn" method="POST" className="card grid gap-3 mt-4">
            <input className="rounded-lg border border-neutral-700 bg-transparent px-3 py-2" name="name" placeholder="Your name" required />
            <input className="rounded-lg border border-neutral-700 bg-transparent px-3 py-2" name="phone" placeholder="Phone number" />
            <input className="rounded-lg border border-neutral-700 bg-transparent px-3 py-2" type="email" name="email" placeholder="Email" required />
            <input className="rounded-lg border border-neutral-700 bg-transparent px-3 py-2" name="subject" placeholder="Subject" />
            <textarea className="rounded-lg border border-neutral-700 bg-transparent px-3 py-2" rows={5} name="message" placeholder="Message" required />
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid gap-4">
          <div className="card">
            <div className="font-semibold">Company</div>
            <div className="muted">info@thelogicless.com</div>
            <div className="muted">(555) 555-1234</div>
            <div className="muted">212 N. 2ND ST. STE 100, RICHMOND KY 40475</div>
          </div>
          <div className="card">
            <iframe
              title="Map"
              width="100%"
              height="280"
              style={{ border: 0, borderRadius: 12 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=212+N+2nd+St,+Richmond,+KY+40475&output=embed">
            </iframe>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
