export default function WhatWeDo() {
  return (
    <section className="bg-carbon py-32">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-20 px-6 md:grid-cols-2 md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-orange" />
            <span className="font-body text-[11px] uppercase tracking-widest text-muted">
              WHY RALLYVERSE
            </span>
          </div>

          <div className="mt-5 font-display text-[64px] leading-none uppercase text-primary">
            <div>TOURNAMENTS</div>
            <div>THAT ACTUALLY</div>
            <div>FEEL LIKE ONE.</div>
          </div>
        </div>

        <div className="font-body text-[17px] leading-[1.85] text-muted">
          <p className="mb-5">
            Too many local badminton tournaments feel like an afterthought. Poorly organised brackets, no atmosphere, courts booked at the last minute.
          </p>
          <p className="mb-5">
            RallyVerse is different. We handle everything &mdash; venue booking, bracket management, match scheduling, and a community of players who are serious about showing up.
          </p>
          <p className="mb-5">
            Every RallyVerse tournament has a clear format, a fair draw, and an energy that makes you want to come back for the next one.
          </p>
          <p className="font-medium text-primary">
            Beginner. Intermediate. Advanced. Singles. Doubles. Mixed. There is a bracket for you.
          </p>
        </div>
      </div>
    </section>
  )
}
