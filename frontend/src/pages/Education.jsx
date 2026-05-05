import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const articles = [
    {
        id: 1,
        title: "How to Choose Adult Diapers",
        category: "Product Guide",
        readTime: "5 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGrMPoFOozCrH9ncP86XgdGCXEgHnfF4wxStBPv0lXof5U0ae_bYHYsXOmN1SBq9N3FZWR2rLcldOy3uLwCLjd9zykESAb_AcGSmQWTugX5vkRBLYEf4jZFcXrMZSGMYetH839T310M2Ao-l_QINPMgH20whlrAX2Fq9Nl713GqGC0qDOYdvhJXYrsVrmv3Z2tLRlf08og5h46B0At5jl_dShPc4pEVZovyBXecZbnPcEEFu6W-MrniNhR0d3_MPSzwrUDXaQvrw",
        summary: "Finding the right fit and absorbency for comfort and skin health is essential for quality care.",
        content: "Selecting the correct adult diaper involves understanding two main factors: fit and absorbency. A diaper that is too loose will leak, while one that is too tight can cause skin irritation and pressure sores. Always measure the waist and hips to find the manufacturer's recommended size. Absorbency levels range from light for occasional leaks to 'overnight' for heavy incontinence. For active users, 'pull-up' styles offer more independence, while 'tab-style' briefs are better for those with limited mobility or for caregivers assisting with changes. Don't forget to look for features like breathable side panels and wetness indicators to maintain skin integrity."
    },
    {
        id: 2,
        title: "Essential Nutrition for Seniors",
        category: "Nutrition",
        readTime: "6 min read",
        image: "/education/nutrition.png",
        summary: "A balanced diet is the cornerstone of elderly health. Discover the top foods for vitality.",
        content: "As we age, our nutritional needs change. Caloric requirements may decrease, but the need for specific nutrients like protein, calcium, and vitamin D increases. Protein is vital for maintaining muscle mass and preventing frailty. Aim for lean meats, beans, and Greek yogurt. Fiber is equally important to maintain digestive health and stabilize blood sugar levels. Hydration is a common challenge for seniors as the sensation of thirst weakens; always keep water or herbal teas accessible. Incorporating colorful vegetables ensures a wide spectrum of antioxidants to support cognitive function and immune health."
    },
    {
        id: 3,
        title: "Supporting Caregiver Mental Wellness",
        category: "Mental Health",
        readTime: "10 min read",
        image: "/education/mental_health.png",
        summary: "Practical mindfulness techniques to manage stress while providing dedicated care.",
        content: "Caregiving is a journey of love, but it can also be emotionally taxing. Caregiver burnout is a real state of physical, emotional, and mental exhaustion. To prevent this, setting boundaries is essential. It is not selfish to ask for help or to take 'respite' time for yourself. Mindfulness practices, even just 10 minutes of controlled breathing or a short walk, can significantly lower cortisol levels. Connect with support groups where you can share experiences with others in similar situations. Remember, you cannot pour from an empty cup—taking care of your own mental health is the best way to ensure you can continue providing quality care to your loved one."
    },
    {
        id: 4,
        title: "Active Aging Exercise Guide",
        category: "Physical Activity",
        readTime: "7 min read",
        image: "/education/exercise.png",
        summary: "Gentle movements and stretching routines designed specifically for seniors to improve mobility.",
        content: "Regular physical activity is one of the most important things seniors can do for their health. It can prevent many of the health problems that seem to come with age. Low-impact aerobic activities like walking or swimming strengthen the heart and lungs. Strength training with light weights or resistance bands helps maintain bone density and muscle strength, which are critical for preventing falls. Balance exercises, such as Tai Chi or simple leg stands, improve stability. Consistency is key—even 15 to 30 minutes of gentle movement most days of the week can make a massive difference in maintaining independent living."
    },
    {
        id: 5,
        title: "Dignity in Personal Hygiene",
        category: "Hygiene",
        readTime: "6 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVIpumVKPSZFiR2BG7Bmfp73xDutdNrQJN59p2w5IyN6OROT-F9cqLV4u8P12ev-ebEMw2PrAsoN96FW4feh3m6a9Jrfj4Lpv72ltziTvzH-tY7FlWlgNbb3i2bedL46BPVLY0l52xi73f4JWf8w_mvFkAsegTyQR_C8_Fqy7gIapBO3a5YzqiCFrjrMVRs23u08Uw5U0KLdAYQuxTvP2YR6dNss8btC_NbBNsrYm28FEieXMMmlGRW0BrOFKOcIrNq-qH-EGDUg",
        summary: "Professional tips for managing delicate hygiene needs with respect and efficiency.",
        content: "Maintaining personal hygiene is not just about cleanliness; it's about dignity. When assisting with bathing or dressing, always explain what you are doing before you do it to keep the individual involved and comfortable. Use lukewarm water and mild, pH-balanced soaps to protect aging skin, which is often thinner and more prone to tearing. For incontinence care, timely changes are the best defense against skin breakdown. Use barrier creams and soft wipes instead of harsh scrubbing. Creating a calm, private environment during hygiene routines helps reduce anxiety and preserves the person's sense of self-respect."
    },
    {
        id: 6,
        title: "Caregiver Daily Routines",
        category: "Daily Life",
        readTime: "8 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbgkS6DBP3rboAIjCpSbRg2OtC_CEYOL4niF8YP7VvhxzAugIq0fQCevjWhdb3C1dHMAz6BbSHN2DjfSrxBpmKL5p50a6-noDFzoRn9i8iaVlOIwjN24gI9QuCPj36wKsdRzFb-A2Fav1UHoApfWtXOpE-wC2aRufG5LXZzvV6j5iJkyvyRrsd8db31U-LrL-T7pKvmF1KsGbPqi8aBdWSU7y92z8Brcupr6UM9wvl7-3-_sPZt3C2OY7_OnJn6W0BaPdngfierQ",
        summary: "Structuring your day effectively can help maintain balance and prevent caregiver burnout.",
        content: "A well-structured routine provides a sense of security for both the senior and the caregiver. Start the day with a predictable morning routine: medication, hydration, and a healthy breakfast. Schedule the most demanding tasks, like bathing or doctor visits, during the times of day when your loved one has the most energy. Don't forget to build in 'quiet time' for reading or listening to music to keep the environment calm. As a caregiver, your routine must also include self-care slots—dedicated time for your own meals, exercise, and social connection. A routine isn't a cage; it's a framework that allows you to manage the unexpected with more grace."
    }
];

const Education = () => {
    const [readingArticle, setReadingArticle] = useState(null);

    return (
        <div className="flex-1">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-6 lg:px-20 py-12">
                <div className="max-w-2xl space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">Education & <br /><span className="text-[var(--color-primary)]">Caregiver Guides</span></h1>
                    <p className="text-lg text-slate-600 max-w-lg">Expert resources, compassionate advice, and practical tips designed to support your daily caregiving journey.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 bg-slate-100 px-5 py-2.5 rounded-xl font-bold text-sm border border-slate-200 hover:border-[var(--color-primary)] transition-all">
                        <span className="material-symbols-outlined text-[var(--color-primary)]">filter_list</span>
                        All Resources
                    </button>
                    <button className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[var(--color-primary)]/20 transition-all">
                        View All Guides
                    </button>
                </div>
            </section>

            {/* Category Pills */}
            <div className="flex gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar px-6 lg:px-20">
                <button className="bg-[var(--color-primary)] text-white whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold">Popular</button>
                <button className="bg-white border border-slate-200 whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold hover:border-[var(--color-primary)] transition-colors">Hygiene</button>
                <button className="bg-white border border-slate-200 whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold hover:border-[var(--color-primary)] transition-colors">Daily Care</button>
                <button className="bg-white border border-slate-200 whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold hover:border-[var(--color-primary)] transition-colors">Mental Health</button>
                <button className="bg-white border border-slate-200 whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold hover:border-[var(--color-primary)] transition-colors">Product Guides</button>
                <button className="bg-white border border-slate-200 whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold hover:border-[var(--color-primary)] transition-colors">Mobility</button>
            </div>

            {/* Featured Section */}
            <div className="px-6 lg:px-20 pb-20">
                <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-2 text-slate-900">
                    <span className="w-2 h-8 bg-[var(--color-primary)] rounded-full"></span>
                    Featured Articles & Resources
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map((article) => (
                        <article 
                            key={article.id} 
                            onClick={() => setReadingArticle(article)}
                            className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)]/5 transition-colors duration-300"></div>
                                <img 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    src={article.image} 
                                    alt={article.title} 
                                />
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[var(--color-primary)] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                                    {article.category}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                    {article.summary}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded">
                                        {article.readTime}
                                    </span>
                                    <span className="text-[var(--color-primary)] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Article Modal */}
            {readingArticle && (
                <div className="fixed inset-0 z-[100] flex justify-center items-start bg-slate-900/60 backdrop-blur-sm p-4 md:p-10 overflow-y-auto" onClick={() => setReadingArticle(null)}>
                    <div 
                        className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setReadingArticle(null)}
                            className="absolute top-6 right-6 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors z-20"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        
                        <div className="aspect-[21/9] w-full overflow-hidden rounded-t-[2.5rem]">
                            <img className="w-full h-full object-cover" src={readingArticle.image} alt="" />
                        </div>
                        
                        <div className="p-8 md:p-16">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    {readingArticle.category}
                                </span>
                                <span className="text-slate-400 text-sm font-medium">{readingArticle.readTime}</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                {readingArticle.title}
                            </h2>
                            
                            <div className="prose prose-slate max-w-none">
                                <p className="text-xl text-slate-700 leading-relaxed font-semibold mb-10 italic border-l-8 border-[var(--color-primary)] pl-6 bg-slate-50 py-4 rounded-r-2xl">
                                    {readingArticle.summary}
                                </p>
                                <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line space-y-6">
                                    {readingArticle.content}
                                </div>
                            </div>
                            
                            <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold">F</div>
                                    <div>
                                        <p className="text-slate-900 font-bold">Fabby Editorial Team</p>
                                        <p className="text-slate-400 text-xs text-uppercase">Healthcare & Aging Experts</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setReadingArticle(null)}
                                    className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                                >
                                    Finish Reading
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Education;
