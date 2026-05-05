import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center overflow-hidden rounded-[2rem] mt-6">
        <div className="absolute inset-0 bg-[var(--color-primary)]/10">
          <img className="w-full h-full object-cover opacity-20" data-alt="Professional office workspace with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZj-DdDsei8RwLwIE7bXTqtnK4wm7B5ffrJdyx-z-2jflqW3RmjXybHGcT-aFE0m6vlSBwveVVNARGShiScXXVqFCuV1IMZaE-OkmzI_SjAw1Enu1Cftg2cJgeur4iMs2R1ADVOXsxR9ZBm-WUUbnH7I9SuTeoR6Kxrpf49VohVbszSdYuu9TX766mnugHEZrNwYn4JJwtZY4hN3p0IVdLbYhYDF0XlD079_Jzf1rjPrR_iMrFR-fb60GigsbpPyrpNiVoh9Vig" alt="" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-slate-900">Get in touch</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                  <input className="w-full h-14 rounded-xl border border-slate-200 bg-background-light focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none px-4" placeholder="Jane" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                  <input className="w-full h-14 rounded-xl border border-slate-200 bg-background-light focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none px-4" placeholder="Doe" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input className="w-full h-14 rounded-xl border border-slate-200 bg-background-light focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none px-4" placeholder="jane@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <select className="w-full h-14 rounded-xl border border-slate-200 bg-background-light focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none px-4">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Sales & Partnerships</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea className="w-full rounded-xl border border-slate-200 bg-background-light focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none p-4" placeholder="How can we help you?" rows="5"></textarea>
              </div>
              <button className="w-full bg-[var(--color-primary)] text-white h-14 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-primary)]/20" type="submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-8 text-slate-900">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Email Us</h4>
                    <p className="text-slate-600">contact@fabby.co.in</p>
                    <p className="text-slate-600 text-sm mt-1">Support available 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Call Us</h4>
                    <p className="text-slate-600">+91 8591515386</p>
                    <p className="text-slate-600 text-sm mt-1">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Visit Us</h4>
                    <p className="text-slate-600">123 Innovation Way</p>
                    <p className="text-slate-600">San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden border border-slate-200 grayscale hover:grayscale-0 transition-all duration-500">
              <img className="w-full h-full object-cover" data-alt="Map of San Francisco downtown area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCarQE_v2P3sYseuyM4x9gi8hhHnp4rdIxh-q_YTdqF7uhNWhPi3m71UhnXwLSoozB6NttdwgxRT8BwtG8tBzhfPU0m5tZoaFpiWcCY2Jytfnw8IDP6eRb_nQSjjCKhhS4EE4mZpyNO68QNXZ7Of_I7T0cXClxwAELmU8kxpYUultZWClfim7a-hsxZ6-JqniVhq9893VeUjQLqvVfJ0jKdsS-DgWtj-Qgm3tDRduim_oMA0TmGsnJ1Hr2pIXPRcXrMzfY54vg4mw" alt="Map" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[var(--color-primary)] p-2 rounded-full shadow-lg border-2 border-white">
                  <span className="material-symbols-outlined text-white text-sm">push_pin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24 rounded-[3rem] mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600">Find quick answers to common questions about our services.</p>
          </div>
          <div className="space-y-4">
            {/* FAQ Item */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button className="w-full px-6 py-6 flex items-center justify-between text-left group">
                <span className="text-lg font-bold text-slate-900">How quickly do you respond to inquiries?</span>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-[var(--color-primary)] transition-colors">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-slate-600">
                We typically respond to all contact form submissions within 12-24 business hours. For urgent technical matters, our premium support tier offers 2-hour response times.
              </div>
            </div>
            {/* FAQ Item */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button className="w-full px-6 py-6 flex items-center justify-between text-left group">
                <span className="text-lg font-bold text-slate-900">Do you offer 24/7 technical support?</span>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-[var(--color-primary)] transition-colors">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-slate-600">
                Yes, we offer 24/7 monitoring and emergency support for enterprise clients. Standard business support is available Monday through Friday.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
