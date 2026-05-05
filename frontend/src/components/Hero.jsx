import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-hero">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>Trusted Healthcare Partner</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Be Confident. <br /><span className="text-[var(--color-primary)]">Be Happy.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Experience dignity and care with our premium healthcare solutions. Designed for maximum comfort, breathability, and your absolute peace of mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/collection" className="bg-[var(--color-primary)] hover:bg-[#2b5d7d] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[var(--color-primary)]/20 transition-all transform hover:-translate-y-1 text-center">
                Shop Collection
              </Link>
              <Link to="/about" className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative zoom-in">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-accent-blue)] rounded-full blur-3xl opacity-50"></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img className="w-full h-[500px] object-cover" data-alt="Caring senior person smiling in a bright room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJC5tBREioFnlJZqR88DFiPsWHP-ZjEIGT6oHyD8hzz9JxidR0XhkL9zBivzz_sS793tMzSsv1grbzANGLysrTKPcdH-DOyVaGQnyVsInRPnnV4lyWasa4C906MzAdnUXlQlFtwbNBwS8DX5_eyyvaxBtjKCHW4eaVnVuOskhp_8QzuDW7hVId-7I9E4IScLyFtAH3f24UrMhYWdACfQv2oPc8cR4QerHKfW-84aMeyzIWaCnKMgcUUbbEWoJ40XEM_a8lmqwnhQ" alt="Hero presentation" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-[var(--color-accent-green)] p-3 rounded-full">
                  <span className="material-symbols-outlined text-green-600">volunteer_activism</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Dignity First</p>
                  <p className="text-xs text-slate-500">Premium care materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
