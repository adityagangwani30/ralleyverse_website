'use client'

import { MapPin, Calendar } from 'lucide-react'

export default function FirstEvent() {
  const scrollToRegister = () => {
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="first-event" className="bg-carbon py-32">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-5 font-body text-[11px] uppercase tracking-widest text-muted">
            FIRST WAVE &middot; BANGALORE &middot; 2025
          </p>

          <div className="font-display text-[88px] leading-none uppercase text-primary md:text-[100px]">
            RALLY SERIES
            <br />
            #01
          </div>
          <div className="mt-1 font-display text-[36px] uppercase text-orange">
            BADMINTON TOURNAMENTS
          </div>

          <div className="mt-7 space-y-5 font-body text-base leading-[1.85] text-muted">
            <p>
              We are launching a series of small-scale, competitive badminton tournaments across Bangalore &mdash; starting with a focused first event and building from there.
            </p>
            <p>
              Men&apos;s singles. Women&apos;s singles. Doubles. Multiple skill levels. Whether you play recreationally or train seriously, there is a bracket for you.
            </p>
            <p>
              Spots are limited to keep each tournament tight, well-run, and worth your time.
            </p>
          </div>

          <div className="mt-9">
            <button
              type="button"
              onClick={scrollToRegister}
              className="rounded-md bg-orange px-8 py-3 font-body text-sm font-bold text-carbon transition-all duration-200 hover:brightness-110"
            >
              Register Your Spot
            </button>
          </div>
        </div>

        <div>
          <div className="flex aspect-[3/4] w-full items-center justify-center rounded-xl border border-subtle bg-surface">
            <span className="font-display text-lg tracking-wider text-subtle">
              EVENT PHOTO COMING SOON
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin size={14} color="#F97316" />
              <span className="font-body text-sm text-muted">Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} color="#F97316" />
              <span className="font-body text-sm text-muted">Date TBA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
