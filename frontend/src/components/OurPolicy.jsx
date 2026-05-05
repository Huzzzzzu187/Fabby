import React from 'react';

const OurPolicy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Fabby?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Medical-grade standards designed to ensure your skin stays healthy and you stay confident throughout the day.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-2xl bg-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/50 hover:border-[var(--color-primary)] transition-all group">
            <span className="material-symbols-outlined text-4xl text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform">shield</span>
            <h3 className="text-xl font-bold mb-3">Dermatologically Tested</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Hypoallergenic materials safe for all skin types, even the most sensitive.</p>
          </div>
          <div className="p-8 rounded-2xl bg-[var(--color-accent-green)] border border-[var(--color-accent-green)]/50 hover:border-green-600 transition-all group">
            <span className="material-symbols-outlined text-4xl text-green-600 mb-6 group-hover:scale-110 transition-transform">microbiology</span>
            <h3 className="text-xl font-bold mb-3">Anti-bacterial</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Advanced odor-neutralizing technology and infection prevention.</p>
          </div>
          <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-400 transition-all group">
            <span className="material-symbols-outlined text-4xl text-blue-500 mb-6 group-hover:scale-110 transition-transform">water_drop</span>
            <h3 className="text-xl font-bold mb-3">2L Absorption</h3>
            <p className="text-sm text-slate-600 leading-relaxed">High capacity core for long-lasting protection and dryness.</p>
          </div>
          <div className="p-8 rounded-2xl bg-orange-50 border border-orange-100 hover:border-orange-400 transition-all group">
            <span className="material-symbols-outlined text-4xl text-orange-500 mb-6 group-hover:scale-110 transition-transform">eco</span>
            <h3 className="text-xl font-bold mb-3">Skin-friendly pH</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Maintains natural skin balance to prevent irritation and rashes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
