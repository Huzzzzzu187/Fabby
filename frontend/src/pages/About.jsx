import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import factoryImg from '../assets/factory-workshop-interior-machines-glass-production-background.jpg.jpeg';

const About = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden rounded-[2rem] mt-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img alt="Comfort and Care" className="w-full h-full object-cover" data-alt="Gentle hands of a caregiver holding an elderly hand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPB8-hubqAtn1wY4jvt170C01KOLP77_0DQUOYgwUuDPklmzquKDQew8ijfcdisrLwCG79NQ66TR89JsA7FvRcAQudE6QcJUYGkY_CIjmdD9tUmHIzu3ypJDq61kq2ud0lEekShRY8hp3eguUNzotfk7mcGZrYD-jQbkFq75Xf_JOTw-415FHp3rrilU51St-PiruIUnxuB5FmBMfLRgC92enNRLF3WgH_GAfgUSxJsMDd3eTYvsjeiksSVqbBJmsGR_Jf01lhuA" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Dignity in Every Detail
          </h1>
          <p className="text-white text-lg md:text-xl font-light leading-relaxed mb-8 max-w-2xl mx-auto opacity-90">
            At Fabby, we believe that high-quality essentials are more than just products—they are a commitment to comfort, respect, and the human spirit.
          </p>
          <div className="flex gap-4 justify-center">
            <span className="material-symbols-outlined text-white text-4xl animate-bounce">keyboard_double_arrow_down</span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Fabby was born from a moment of reckoning
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            In the aftermath of COVID-19, we witnessed patients in palliative care and families stretched thin — doing their best with whatever they could find. The gap between what people needed and what they could afford was painfully clear. We knew we had to act.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            So in 2021, Fabby was founded with one deeply felt purpose: to make genuinely high-quality hygiene and healthcare products available to every household — without making families choose between quality and affordability.
          </p>
          <div className="pt-6 border-t border-slate-200 mt-6">
            <p className="text-2xl font-medium italic text-[var(--color-primary)] text-center">
              “Care is not a luxury. It is dignity.”
            </p>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-[var(--color-primary)]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform"></div>
          <img alt="Quality Care" className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover" data-alt="Soft high-quality textile textures in sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAydZMq2uJWqb1VAMP14fusqvJd-PZqkGx0YhTLjglQCSj7icywOd80ah9BWrbSk4urkD6r3cQNMIbGFibsJjxL37eXIHesHxLRKpoHX8nFC6IcLCWwIfG6Xam7AbrYqouUGeHoNRSK3DVvullF8Zh-yfubr1VEDl9rTGajniszH1lCZTD02OX5Zx8DWInF1UZ7ej5CMBXuTw3WiRmFSJ64kJBpu3Tfj43JNNXqjmnkWHL9umkLqJa2Sbhwyw8oNDRJ4_yq8ngxEw" />
        </div>
      </section>

      {/* What We Offer & Our Journey */}
      <section className="py-24 bg-[var(--color-accent-blue)]/30 rounded-[3rem] px-6 my-10 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* What We Offer */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-[var(--color-primary)] mb-4">What We Offer</h2>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-center">
              <p>
                Our range — premium adult diapers, highly absorbent underpads, gentle baby wipes, and personal hygiene essentials — is thoughtfully developed for infants, adults, caregivers and healthcare professionals.
              </p>
              <p>
                Every Fabby product is made with skin-friendly materials, breathable fabrics and advanced absorbency technology to ensure dryness, rash protection and long-lasting comfort — whether at home, in hospitals or while travelling.
              </p>
            </div>
          </div>

          {/* Our Journey */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-[var(--color-primary)] mb-4">Our Journey</h2>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-center">
              <p>
                Over four years, Fabby has grown from a single conviction into a brand trusted across Maharashtra, Gujarat, Karnataka, Kerala, Andhra Pradesh and beyond. But our measure of success has never been geography — it is the caregiver who sleeps a little easier, the patient who feels a little more comfortable, the family that feels a little less burdened.
              </p>
              <p>
                We continue to listen, improve and innovate — because the people who trust us deserve nothing less.
              </p>
            </div>

            <div className="mt-16 bg-white p-10 rounded-3xl shadow-sm text-center border-t-4 border-[var(--color-primary)]">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
                Better Care. Better Comfort. Better Living.
              </h3>
              <p className="text-xl text-slate-600 font-medium italic">
                "When you choose Fabby you choose confidence, security, and care that truly understands you."
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Factory Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={factoryImg}
              alt="Fabby Manufacturing Facility"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm text-slate-800 shadow-sm flex items-center gap-2">
              Made in India 🇮🇳
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 leading-tight">
              Built with Care. Backed by Quality.
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              At Fabby, every product is manufactured in a controlled facility using advanced technology and strict quality standards. Our commitment ensures safety, comfort, and reliability for every individual — whether at home, in hospitals, or in care facilities.
            </p>

            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--color-primary)]">check_circle</span>
                Advanced manufacturing technology
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--color-primary)]">check_circle</span>
                Strict quality control protocols
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--color-primary)]">check_circle</span>
                Trusted by hospitals and caregivers
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--color-primary)]">check_circle</span>
                Consistent and scalable supply
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[var(--color-primary)] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Bring Comfort Home Today</h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto relative z-10">
            Explore our curated collection of essentials designed to nurture, protect, and empower.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <Link to="/collection" className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
              View Our Products
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
