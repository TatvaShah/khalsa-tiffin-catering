import type { SiteConfig } from "@/lib/types";

const N = "Khalsa Tiffin & Catering";

export const site: SiteConfig = {
  name: N,
  tagline: "Homemade Punjabi tiffin and catering, delivered across the GTA.",
  category: "Punjabi tiffin and catering",
  schemaType: "FoodEstablishment",
  area: "GTA, ON",
  siteUrl: "https://khalsa-tiffin-catering.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#606020" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Punjabi tiffin across the GTA",
    headline: "Ghar da swaad, at your door",
    subhead: "Daily homemade Punjabi meals cooked with desi ghee, plus catering trays for your gatherings. Call or DM to start your tiffin.",
    images: [
      { src: "/images/post-4.jpg", alt: "Fresh homemade dal packed for delivery" },
      { src: "/images/post-2.jpg", alt: "Tempting dals and vegetables" },
      { src: "/images/post-1.jpg", alt: "Catering trays and Diwali specials" },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "#order" },
    secondaryCta: { label: "Call (289) 544-4800", href: "tel:+12895444800" },
  },

  highlights: [
    "Homemade Punjabi tiffin",
    "Cooked with desi ghee",
    "Delivery across the GTA",
    "Order by phone or DM",
  ],

  about: {
    title: "Home comfort at your doorstep",
    body: [
      "We bring homemade Punjabi food to your door across the GTA. Daily tiffin meals, dals and vegetables cooked with care, and catering trays when you are feeding a crowd.",
      "Our commitment is simple: quality and satisfaction. Meals are freshly prepared, hygienic, and made with pure desi ghee for that ghar wala swaad. Monday to Saturday service, with delivery available across the GTA including Brampton and Malton.",
    ],
    image: { src: "/images/post-10.jpg", alt: "Homemade Punjabi meals ready to enjoy" },
  },

  menu: {
    title: "What we make",
    intro: "Daily tiffin meals and catering trays. Ask us about the current menu and meal plans.",
    variant: "list",
    showPrices: false,
    priceNote: "Call or DM us for tiffin plans, catering trays, and current specials.",
    groups: [
      {
        title: "Daily tiffin",
        items: [
          { name: "Daily Punjabi tiffin meals", description: "Homemade comfort food, freshly cooked.", veg: true },
          { name: "Homemade dals and vegetables", description: "Tempting dals and sabzi, packed with love.", veg: true },
          { name: "Desi ghee cooking", description: "Authentic ghar wala swaad with pure desi ghee.", veg: true },
        ],
      },
      {
        title: "Catering and specials",
        items: [
          { name: "Catering trays", description: "Punjabi trays for gatherings and celebrations." },
          { name: "Diwali special deals", description: "Seasonal packages when posted. Call or DM to lock one in." },
        ],
      },
    ],
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/post-4.jpg", width: 1136, height: 1515, alt: "Freshly prepared dal", caption: "Ghar da swaad, delivered", href: "https://www.instagram.com/p/De7VQC4SNDy/" },
      { src: "/images/post-2.jpg", width: 1045, height: 1045, alt: "Dals and vegetables", caption: "Tempting dals and vegetables", href: "https://www.instagram.com/p/De9pGsuy_eT/" },
      { src: "/images/post-1.jpg", width: 940, height: 788, alt: "Diwali offers", caption: "Diwali specials", href: "https://www.instagram.com/p/DfOniyLS_HT/" },
      { src: "/images/post-6.jpg", width: 1350, height: 1688, alt: "Festive Punjabi spread", caption: "Happy Dussehra", href: "https://www.instagram.com/p/Detd9FCSQZJ/" },
      { src: "/images/post-10.jpg", width: 1402, height: 1122, alt: "Homestyle Punjabi meals", caption: "Ghar da swaad, har roz", href: "https://www.instagram.com/p/DcOn4x2yNVG/" },
      { src: "/images/post-11.jpg", width: 1440, height: 1899, alt: "Meal plan options", caption: "Choose your meal plan", href: "https://www.instagram.com/p/DYdyFiKtmW7/" },
      { src: "/images/post-9.jpg", width: 1002, height: 1002, alt: "Happy customers", caption: "Happy customers", href: "https://www.instagram.com/p/Dd3ezlSkmAS/" },
      { src: "/images/post-3.jpg", width: 480, height: 852, alt: "Order your tiffin", caption: "Order your tiffin today", href: "https://www.instagram.com/reel/De9o0wZyDwl/" },
    ],
  },

  instagram: {
    handle: "khalsatiffin_n_catering",
    embeds: [
      "https://www.instagram.com/p/De7VQC4SNDy/",
      "https://www.instagram.com/p/De9pGsuy_eT/",
      "https://www.instagram.com/p/DfOniyLS_HT/",
    ],
    embedsTitle: "Lately on Instagram",
  },

  order: {
    title: "Order your tiffin",
    intro: "Call us at (289) 544-4800 or send an Instagram DM. Tell us your start date, area, and how many meals you need.",
    dmMessage: "Hi Khalsa Tiffin & Catering! I would like to order a tiffin.\nStart date:\nNumber of meals or servings:\nDelivery area:\nCatering idea (if any):",
    links: [{ label: "Call (289) 544-4800", href: "tel:+12895444800" }],
    note: "Monday to Saturday. Delivery available across the GTA, including Brampton and Malton. Free delivery on select orders.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Call (289) 544-4800 or send us an Instagram DM with your start date, area, and how many meals you need." },
    { q: "Where do you deliver?", a: "We deliver across the GTA, including Brampton and Malton. Message us with your area." },
    { q: "Which days do you cook?", a: "Monday to Saturday. Meals are freshly cooked daily." },
    { q: "Do you do catering?", a: "Yes. We prepare catering trays for gatherings and seasonal specials. Call or DM to plan yours." },
  ],

  contact: {
    area: "GTA, Ontario",
    phone: "(289) 544-4800",
    socials: [
      { label: "TikTok", href: "https://www.tiktok.com/@khalsatiffinservice" },
    ],
  },

  seo: {
    title: "Khalsa Tiffin & Catering | Punjabi tiffin in the GTA",
    description: "Homemade Punjabi tiffin and catering delivered across the GTA. Cooked with desi ghee. Order by phone at (289) 544-4800 or Instagram DM.",
    keywords: ["Punjabi tiffin GTA", "tiffin service Brampton", "homemade Punjabi food delivery", "Punjabi catering GTA"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
