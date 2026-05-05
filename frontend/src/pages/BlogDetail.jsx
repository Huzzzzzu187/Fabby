import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const blogsData = [
  {
    id: 1,
    title: "How to Care for Bedridden Patients",
    category: "Care Tips",
    description: "A complete guide for caregivers to ensure comfort and hygiene.",
    content: `
      Caring for a bedridden patient requires patience, compassion, and a focus on maintaining both physical health and emotional dignity. Whether you are a family member or a professional caregiver, establishing a routine is crucial.
      
      First and foremost, hygiene is paramount. Daily sponge baths and regular changes of clothing and bedding prevent skin breakdown and infections. Using high-quality adult diapers and changing them promptly is essential for preventing diaper rash and maintaining comfort.
      
      Nutrition and hydration must also be carefully monitored. Ensure the patient is receiving adequate fluids to prevent dehydration, which can lead to urinary tract infections and confusion.
      
      Lastly, emotional support is just as important as physical care. Engage the patient in conversation, read to them, or simply sit together. Maintaining dignity is about treating the person with the utmost respect, acknowledging their feelings, and ensuring they feel valued.
    `,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    date: "May 10, 2026",
    author: "Dr. Sarah Jenkins"
  },
  {
    id: 2,
    title: "Choosing the Right Adult Diapers",
    category: "Product Guides",
    description: "Understand the different types and features to make the best choice for your loved ones.",
    content: `Choosing the right adult diapers is crucial for comfort, skin health, and dignity. There are many factors to consider, including absorbency, fit, and material. Let's explore the key aspects to look for.\n\nFirst, assess the level of absorbency needed. For light incontinence, pull-up styles might be sufficient, while heavy incontinence requires highly absorbent briefs with leak guards. Size is equally important; a diaper that is too small will be uncomfortable and cause skin irritation, while one that is too large will leak. Always measure the waist and hips to find the correct size according to the manufacturer's guidelines.\n\nConsider the material as well. Breathable, cloth-like materials reduce the risk of skin irritation compared to plastic-backed diapers. Many modern diapers also feature wetness indicators, making it easier for caregivers to know when a change is needed without unnecessary disruption.`,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop",
    date: "May 12, 2026",
    author: "Fabby Care Team"
  },
  {
    id: 3,
    title: "Maintaining Dignity in Elder Care",
    category: "Health Guides",
    description: "Essential practices for caregivers to maintain respect and dignity for the elderly.",
    content: `Dignity is a fundamental human right. In elder care, it involves respecting privacy, allowing for personal choices, and communicating with respect. Here are practical ways to ensure dignity in daily care routines.\n\nAlways explain what you are doing before you do it, especially during personal care tasks. Ask for their preferences when it comes to clothing, meals, and activities, even if those choices seem small. Small gestures of independence can significantly improve a senior's quality of life.\n\nWhen assisting with hygiene, use a gentle touch and maintain eye contact. Address them by their preferred name, and avoid using overly simplified language or baby talk. Remember, aging does not diminish a person's worth, and acknowledging their life experiences fosters a respectful and trusting caregiving environment.`,
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?q=80&w=2070&auto=format&fit=crop",
    date: "May 15, 2026",
    author: "Dr. Alan Smith"
  },
  {
    id: 4,
    title: "Skin Integrity for Seniors",
    category: "Care Tips",
    description: "Preventing bedsores and maintaining healthy skin for individuals with limited mobility.",
    content: `Skin becomes fragile with age. For seniors with limited mobility, the risk of pressure ulcers (bedsores) increases significantly. Proper skin care, frequent repositioning, and using the right hygiene products are essential.\n\nMoisturizing daily helps maintain the skin's natural barrier. However, avoid applying thick creams between toes or in skin folds, as this can trap moisture and lead to fungal infections. When bathing, use mild, pH-balanced soaps and pat the skin dry instead of rubbing it.\n\nFor those who are bedridden or wheelchair-bound, repositioning every two hours is critical to relieve pressure on vulnerable areas like the heels, tailbone, and hips. Specialized pressure-relieving mattresses and cushions can also provide significant benefits. Keep an eye out for early signs of skin breakdown, such as persistent redness, and consult a healthcare professional immediately if noticed.`,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    date: "May 18, 2026",
    author: "Nurse Kelly Adams"
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Article Not Found</h2>
        <Link to="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
        {/* Cover Image */}
        <div className="relative h-72 md:h-96 w-full">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6">
            <span className="inline-block px-3 py-1 mb-4 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-12">
          {/* Meta Info */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-500">edit</span>
              <span className="font-medium text-slate-700">{blog.author || 'Fabby Care Team'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400">calendar_today</span>
              <span>{blog.date}</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed mb-12">
            {blog.content.split('\\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index} className="mb-6">{paragraph.trim()}</p>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="bg-blue-50 rounded-2xl p-8 mt-12 border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Looking for Quality Healthcare Products?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore our range of premium adult care products designed for comfort and dignity, or contact us for hospital bulk orders.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/collection" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">shopping_bag</span>
                Buy Products
              </Link>
              <Link to="/bulk-orders" className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-700 border-2 border-blue-200 font-semibold rounded-full hover:border-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">apartment</span>
                Contact for Bulk Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
