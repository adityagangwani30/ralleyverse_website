'use client'

export default function Navbar() {
  const scrollToRegister = () => {
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[60px] border-b border-subtle bg-carbon">
      <div className="flex h-full items-center justify-between px-6 md:px-12">
        <p className="font-display text-2xl">
          <span className="text-primary">Rally</span>
          <span className="text-orange">Verse</span>
        </p>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={scrollToRegister}
            className="hidden font-body text-sm text-muted md:block"
          >
            Register Now
          </button>
          <button
            type="button"
            onClick={scrollToRegister}
            className="rounded-md bg-orange px-4 py-2 text-sm font-semibold text-carbon transition-all duration-200 hover:brightness-110"
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  )
}
