'use client'

import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-carbon px-6 text-center">
      <AnimatedSection>
        <p className="mb-6 font-body text-xs uppercase tracking-widest text-muted">
          Bangalore &middot; Badminton &middot; 2026
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mb-8 flex flex-col items-center gap-0">
          <div className="font-display text-[64px] uppercase leading-none text-primary md:text-[120px]">
            PLAY.
          </div>
          <div className="font-display text-[64px] uppercase leading-none text-primary md:text-[120px]">
            COMPETE.
          </div>
          <div className="font-display text-[64px] uppercase leading-none text-brand-gradient md:text-[120px]">
            RALLY.
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mb-10 max-w-[480px] text-center font-body text-base leading-relaxed text-muted">
          Bangalore&apos;s newest badminton tournament series. Competitive brackets. Real courts. A community that shows up and plays hard.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <button
          type="button"
          onClick={() => router.push('/register')}
          className="group relative overflow-hidden rounded-md border border-orange bg-transparent px-8 py-3 font-body text-sm font-semibold text-orange transition-all duration-200 hover:scale-105 hover:glow-orange active:scale-95"
        >
          <span className="relative z-10 transition-colors duration-200 group-hover:text-carbon">
            Register for a Tournament
          </span>
          <span className="absolute inset-0 -translate-x-full bg-brand-gradient transition-transform duration-300 group-hover:translate-x-0" />
        </button>
      </AnimatedSection>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1">
        <div className="mx-auto h-10 w-px bg-subtle" />
        <ChevronDown size={16} className="text-muted" />
      </div>
    </section>
  )
}
