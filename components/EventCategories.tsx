import { Swords, Mountain, Timer, Bike } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const categories = [
  {
    icon: Swords,
    name: 'BADMINTON',
    desc: 'Competitive tournaments for all levels',
  },
  {
    icon: Mountain,
    name: 'TREKS',
    desc: 'Curated trail experiences with your community',
  },
  {
    icon: Timer,
    name: 'MARATHONS',
    desc: 'From 5K fun runs to half marathons',
  },
  {
    icon: Bike,
    name: 'CYCLING',
    desc: 'Group rides and timed cycling events',
  },
]

export default function EventCategories() {
  return (
    <section className="border-y border-subtle bg-surface py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-3">
            <div className="h-px w-10 bg-orange" />
            <span className="font-body text-[11px] uppercase tracking-widest text-muted">
              WHAT WE ORGANIZE
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <AnimatedSection key={cat.name} delay={i * 0.1}>
                <div className="group flex flex-col items-center text-center">
                  <Icon size={32} className="mb-4 text-orange transition-all duration-300 group-hover:text-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
                  <div className="font-display text-[28px] uppercase text-primary transition-colors duration-300 group-hover:text-orange">
                    {cat.name}
                  </div>
                  <p className="mt-2 max-w-[160px] font-body text-[13px] leading-relaxed text-muted">
                    {cat.desc}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
