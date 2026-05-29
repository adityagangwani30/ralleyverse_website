'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const inputClass =
  'w-full bg-surface border border-subtle text-primary placeholder:text-muted font-body text-sm px-4 py-3 rounded-md focus:outline-none focus:border-orange transition-colors duration-200'

const selectClass =
  'w-full bg-surface border border-subtle text-primary font-body text-sm px-4 py-3 rounded-md focus:outline-none focus:border-orange transition-colors duration-200 appearance-none cursor-pointer'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skillLevel: '',
    playStyle: '',
    zone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.skillLevel || !formData.zone) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setLoading(false)
    setSubmitted(true)
  }

  const formContent = submitted ? (
    <div className="flex flex-col items-center gap-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange/30 bg-orange/10">
        <CheckCircle size={32} className="text-orange" />
      </div>

      <div>
        <p className="font-display text-[48px] uppercase leading-none text-primary">
          YOU ARE IN.
        </p>
        <p className="mt-4 max-w-[400px] font-body text-base leading-relaxed text-muted">
          We have received your interest. Expect a WhatsApp message from us with tournament details very soon. Get your racket ready.
        </p>
      </div>

      <div className="mt-4 w-full max-w-[360px] rounded-md border border-subtle px-6 py-4 text-left">
        <p className="mb-3 font-body text-xs uppercase tracking-widest text-muted">
          YOUR REGISTRATION SUMMARY
        </p>
        <p className="font-body text-sm text-primary">{formData.name}</p>
        <p className="mt-1 font-body text-sm text-muted">{formData.phone}</p>
        <p className="mt-1 font-body text-sm capitalize text-muted">
          {formData.skillLevel} &middot;{' '}
          {formData.playStyle.replace(/_/g, ' ')}
        </p>
        <p className="mt-1 font-body text-sm capitalize text-muted">
          {formData.zone.replace(/_/g, ' ')} Bangalore
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-6">
      <div>
        <label className="mb-1 block font-body text-sm text-muted">
          Full Name <span className="ml-1 text-orange">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block font-body text-sm text-muted">
          WhatsApp Number <span className="ml-1 text-orange">*</span>
        </label>
        <p className="mb-2 font-body text-[11px] italic text-muted">
          We will send tournament details here.
        </p>
        <input
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block font-body text-sm text-muted">
          Email Address
        </label>
        <p className="mb-2 font-body text-[11px] italic text-muted">
          Optional. For confirmation emails.
        </p>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block font-body text-sm text-muted">
          Your Skill Level <span className="ml-1 text-orange">*</span>
        </label>
        <select
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
          className={selectClass}
        >
          <option value="" disabled>
            Select your level
          </option>
          <option value="beginner">
            Beginner &mdash; I play casually / just starting out
          </option>
          <option value="intermediate">
            Intermediate &mdash; I play regularly and compete sometimes
          </option>
          <option value="advanced">
            Advanced &mdash; I compete seriously / trained player
          </option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-body text-sm text-muted">
          How do you want to play? <span className="ml-1 text-orange">*</span>
        </label>
        <select
          name="playStyle"
          value={formData.playStyle}
          onChange={handleChange}
          className={selectClass}
        >
          <option value="" disabled>
            Select your preference
          </option>
          <option value="mens_singles">Men&apos;s Singles</option>
          <option value="womens_singles">Women&apos;s Singles</option>
          <option value="mens_doubles">Men&apos;s Doubles</option>
          <option value="womens_doubles">Women&apos;s Doubles</option>
          <option value="mixed_doubles">Mixed Doubles</option>
          <option value="open">Open to anything</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-body text-sm text-muted">
          Your Area in Bangalore <span className="ml-1 text-orange">*</span>
        </label>
        <p className="mb-2 font-body text-[11px] italic text-muted">
          Helps us pick a venue central to most players.
        </p>
        <select
          name="zone"
          value={formData.zone}
          onChange={handleChange}
          className={selectClass}
        >
          <option value="" disabled>
            Select your area
          </option>
          <option value="north">North Bangalore</option>
          <option value="south">South Bangalore</option>
          <option value="east">East Bangalore</option>
          <option value="west">West Bangalore</option>
          <option value="central">Central Bangalore</option>
          <option value="whitefield">Whitefield / KR Puram</option>
          <option value="electronic_city">Electronic City / HSR / BTM</option>
          <option value="hebbal">Hebbal / Yelahanka</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-body text-sm text-muted">
          Anything you want us to know?
        </label>
        <textarea
          name="message"
          placeholder="E.g. I want to play doubles with a friend, availability constraints, questions..."
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} h-24 resize-none`}
        />
      </div>

      {error && (
        <p className="font-body text-sm text-orange">{error}</p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        className="group relative w-full overflow-hidden rounded-md bg-brand-gradient py-4 font-body text-sm font-bold tracking-wide text-carbon transition-all duration-200 hover:scale-[1.02] hover:glow-orange active:scale-[0.98]"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-carbon border-t-transparent" />
            <span>Registering...</span>
          </div>
        ) : (
          'I AM IN — REGISTER MY INTEREST'
        )}
      </button>

      <p className="mt-4 text-center font-body text-xs leading-relaxed text-muted">
        No payment required now. We will contact you on WhatsApp with full tournament details before any commitment is needed.
      </p>
    </div>
  )

  return (
    <section id="register" className="border-t border-subtle bg-carbon py-32">
      <div className="mx-auto max-w-[680px] px-6">
        <AnimatedSection>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-orange" />
            <span className="font-body text-[11px] uppercase tracking-widest text-muted">
              TOURNAMENT REGISTRATION
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-5 font-display text-[40px] leading-none uppercase text-primary md:text-[64px]">
            CLAIM YOUR
            <br />
            SPOT.
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-4 mb-12 font-body text-base leading-relaxed text-muted">
            Fill in your details below. We will reach out on WhatsApp with tournament dates, venue, format, and entry fee details. No payment required right now &mdash; just tell us you are in.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>{formContent}</AnimatedSection>
      </div>
    </section>
  )
}
