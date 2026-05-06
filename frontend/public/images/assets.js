// ─── Product Images: Adult Diapers (Tape Style) ──────────────────────────────
import adultdiaper1 from './adultdiaper (1).png'
import adultdiaper2 from './adultdiaper (2).png'
import adultdiaper3 from './adultdiaper (3).png'

// ─── Product Images: Adult Diapers Second Style (Pants) ──────────────────────
import adultdiaperSecond1 from './adultdiaper-second (1).png'
import adultdiaperSecond2 from './adultdiaper-second (2).png'
import adultdiaperSecond3 from './adultdiaper-second (3).png'

// ─── Product Images: Baby / Hygiene Wipes ────────────────────────────────────
import babywipes1 from './babywipes (1).png'
import babywipes2 from './babywipes (2).png'
import babywipes3 from './babywipes (3).png'
import babywipes4 from './babywipes (4).png'

// ─── Product Images: Body / Anti-bacterial Wipes ─────────────────────────────
import bodywipes1 from './bodywipes (1).png'
import bodywipes2 from './bodywipes (2).png'

// ─── Product Images: Underpads ───────────────────────────────────────────────
import underpads1 from './underpads (1).png'
import underpads2 from './underpads (2).png'
import underpads3 from './underpads (3).png'
import underpads4 from './underpads (4).png'

// ─── Logos ───────────────────────────────────────────────────────────────────
// PNG = background-free (transparent), JPEG = with background
import logo_main from './logo-main.png'
import logo_main_bg from './logo-main.jpeg'
import logo_second from './logo-second.png'
import logo_second_bg from './logo-second.jpeg'

// ─── UI Icons & Misc ─────────────────────────────────────────────────────────
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import contact_img from './contact_img.png'

export const assets = {
    // Logos  (use logo_main for navbar/header, logo_second for partner badge)
    logo: logo_main,
    logo_main,
    logo_main_bg,
    logo_second,
    logo_second_bg,

    // UI
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    contact_img,
}

export const products = [
    {
        _id: "hyg01",
        name: "Fabby Premium Adult Diapers (Tape Style)",
        description: "Dermatologically tested tape-style diapers with 2L absorption capacity. Designed for maximum protection and comfort, perfect for overnight use and bedridden patients.",
        price: 850,
        image: [adultdiaper1, adultdiaper2, adultdiaper3],
        category: "Diapers",
        subcategory: "High Absorbency",
        date: 1716634345448,
        bestseller: true,
        features: ["2L Absorption", "Anti-bacterial", "Wetness Indicator"]
    },
    {
        _id: "hyg02",
        name: "Fabby Active Diaper Pants",
        description: "Pull-up style diaper pants offering a secure, underwear-like fit. Ideal for active seniors, ensuring dignity and confidence throughout the day with a skin-friendly pH.",
        price: 950,
        image: [adultdiaperSecond1, adultdiaperSecond2, adultdiaperSecond3],
        category: "Pants",
        subcategory: "Everyday",
        date: 1716621345448,
        bestseller: true,
        features: ["Seamless Fit", "Odour Lock", "Skin-friendly pH"]
    },
    {
        _id: "hyg03",
        name: "Fabby Ultra-Soft Underpads (10 Pack)",
        description: "Highly absorbent underpads providing hospital-grade protection for beds, chairs, and surfaces. Features a waterproof backing and soft top layer for patient comfort.",
        price: 450,
        image: [underpads1, underpads2, underpads3, underpads4],
        category: "Underpads",
        subcategory: "Everyday",
        date: 1716234545448,
        bestseller: false,
        features: ["Waterproof", "Super Absorbent", "Tear-resistant"]
    },
    {
        _id: "hyg04",
        name: "Fabby Aloe Vera Hygiene Wipes",
        description: "Extra-large, thick wipes enriched with Aloe Vera and Vitamin E. Perfect for gentle cleansing of sensitive adult skin. Alcohol-free and anti-bacterial.",
        price: 220,
        image: [babywipes1, babywipes2, babywipes3, babywipes4],
        category: "Wipes",
        subcategory: "Sensitive",
        date: 1716621345448,
        bestseller: true,
        features: ["Aloe Vera Enriched", "Extra Large", "Alcohol-free"]
    },
    {
        _id: "hyg05",
        name: "Fabby Overnight Plus Diapers",
        description: "Maximum absorbency tape-style diapers designed for heavy incontinence. Features dual core technology for locking in moisture and preventing leaks for up to 12 hours.",
        price: 1150,
        image: [adultdiaper1, adultdiaper2, adultdiaper3],
        category: "Diapers",
        subcategory: "High Absorbency",
        date: 1716622345448,
        bestseller: false,
        features: ["Dual Core Tech", "12-Hour Protection", "Leak Guards"]
    },
    {
        _id: "hyg06",
        name: "Fabby Daily Comfort Pants",
        description: "Lightweight, breathable diaper pants for moderate incontinence. Soft elastic waistband provides a comfortable fit without leaving marks.",
        price: 880,
        image: [adultdiaperSecond1, adultdiaperSecond2, adultdiaperSecond3],
        category: "Pants",
        subcategory: "Everyday",
        date: 1716623423448,
        bestseller: false,
        features: ["Breathable Material", "Soft Elastic", "Moderate Absorbency"]
    },
    {
        _id: "hyg07",
        name: "Fabby Heavy Duty Underpads (L)",
        description: "Large size heavy-duty underpads with superior liquid retention. Ideal for post-surgery care or severe incontinence management.",
        price: 550,
        image: [underpads1, underpads2, underpads3, underpads4],
        category: "Underpads",
        subcategory: "High Absorbency",
        date: 1716621542448,
        bestseller: false,
        features: ["Large Size", "High Liquid Retention", "Hospital Grade"]
    },
    {
        _id: "hyg08",
        name: "Fabby Anti-bacterial Cleansing Wipes",
        description: "Medical-grade cleansing wipes with chlorhexidine to eliminate 99.9% of germs. Essential for safe caregiver practices and maintaining patient hygiene.",
        price: 280,
        image: [bodywipes1, bodywipes2],
        category: "Wipes",
        subcategory: "Anti-bacterial",
        date: 1716622345448,
        bestseller: false,
        features: ["Medical Grade", "Kills 99.9% Germs", "Chlorhexidine"]
    },
    {
        _id: "hyg09",
        name: "Fabby Comfort Plus Diapers (M)",
        description: "Medium-sized tape diapers with refasten-able tapes and a cotton-like soft cover. Provides a snug, comfortable fit while preventing skin irritation.",
        price: 820,
        image: [adultdiaper1, adultdiaper2, adultdiaper3],
        category: "Diapers",
        subcategory: "Sensitive",
        date: 1716621235448,
        bestseller: false,
        features: ["Refasten-able Tapes", "Cotton-like Cover", "Medium Size"]
    },
    {
        _id: "hyg10",
        name: "Fabby Nighttime Pants (XL)",
        description: "Extra-large pull-up pants optimized for nighttime use. Features enhanced leak barriers and an extended absorbent core for undisrupted sleep.",
        price: 1050,
        image: [adultdiaperSecond1, adultdiaperSecond2, adultdiaperSecond3],
        category: "Pants",
        subcategory: "High Absorbency",
        date: 1716622235448,
        bestseller: true,
        features: ["Extra Large", "Enhanced Leak Barriers", "Nighttime Optimized"]
    }
]