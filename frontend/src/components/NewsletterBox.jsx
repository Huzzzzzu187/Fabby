import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-primary)] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 -skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Expert care advice in your inbox.</h2>
            <p className="text-white/80 text-lg mb-8">Join our community and get education resources, new product alerts, and exclusive discounts.</p>
            <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row gap-4">
              <input className="flex-1 px-6 py-4 rounded-2xl bg-white border-none outline-none focus:ring-4 focus:ring-white/20 text-slate-900" placeholder="Your email address" type="email" required />
              <button className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-lg shadow-white/10">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBox;
