const portfolioImage = (path: string) =>
  new URL(`../assets/portfolio/${path}`, import.meta.url).href;

export type PortfolioCategoryKey =
  | "webDevelopment"
  | "ecommerceWebsites"
  | "appDevelopment"
  | "ai"
  | "blockchain"
  | "chatbot"
  | "gameDevelopment"
  | "saas";

export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  technologies?: string[];
  subcategory?: string;
  iosLink?: string;
  androidLink?: string;
  type?: string;
};

export const portfolioData: Record<PortfolioCategoryKey, PortfolioItem[]> = {
  webDevelopment: [
    // {
    //   id: 1,
    //   title: "Cold Creek Capital",
    //   description:
    //     "Financial services and investment platform with a minimalist design, sharp typography, and detailed service breakdowns",
    //   image: portfolioImage("web-development/cold-creekcap.webp"),
    //   link: "https://www.coldcreekcap.com",
    //   category: "Web Development",
    // },
    {
      id: 2,
      title: "ThinkRealty",
      description:
        "Premium property portal for the UAE market with advanced property filtering, project highlights, and multilingual support",
      image: portfolioImage("web-development/think-reality.webp"),
      link: "https://thinkrealty.ae",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Akash Mega Mart",
      description:
        "E-commerce platform for retail products with seamless checkout and product filtering",
      image: portfolioImage("web-development/akash-mega-mart.webp"),
      link: "https://akashmegamart.com/",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Midwam",
      description:
        "Creative technology and innovation company combining immersive visuals with clean interface for exhibitions, VR, AR, and live experiences",
      image: portfolioImage("web-development/midwam.webp"),
      link: "https://www.midwam.com/en/about",
      category: "Web Development",
    },
    {
      id: 5,
      title: "5G High Speed Internet",
      description:
        "Promotional website for broadband service provider with plan comparisons, service availability checkers, and inquiry forms",
      image: portfolioImage("web-development/5ghomes.webp"),
      link: "#",
      category: "Web Development",
    },
    {
      id: 6,
      title: "Autopilot",
      description:
        "Marketing automation platform allowing businesses to automate customer journeys using visual flowcharts with modern animations",
      image: portfolioImage("web-development/Autopilot.png"),
      link: "https://autopilot.com",
      category: "Web Development",
    },
    {
      id: 7,
      title: "Gigzio",
      description:
        "Powerful job search engine for blue-collar and gig workers with location-based job discovery and mobile-optimized layout",
      image: portfolioImage("web-development/Gigzio.png"),
      link: "https://gigzio.com",
      category: "Web Development",
    },
    {
      id: 8,
      title: "FE Group",
      description:
        "Global industrial solutions provider with multilingual support, animation-driven UI, and structured service flows",
      image: portfolioImage("web-development/FE Group.png"),
      link: "#",
      category: "Web Development",
    },
    {
      id: 9,
      title: "The Ladders",
      description:
        "Executive-level job opportunities platform balancing editorial content, career advice, and job listings",
      image: portfolioImage("web-development/The Ladders.png"),
      link: "https://theladders.com",
      category: "Web Development",
    },
    {
      id: 10,
      title: "Huge Inc",
      description:
        "Creative agency portfolio showcasing digital experiences with storytelling, micro-interactions, and parallax visuals",
      image: portfolioImage("web-development/Huge Inc.png"),
      link: "https://hugeinc.com",
      category: "Web Development",
    },
    {
      id: 11,
      title: "CodeHelp",
      description:
        "Learning platform offering coding tutorials, mentorship, and job prep with community focus and structured courses",
      image: portfolioImage("web-development/CodeHelp.png"),
      link: "https://codehelp.in",
      category: "Web Development",
    },
    {
      id: 12,
      title: "Spray (Bluestar)",
      description:
        "AI-powered spray product showcase with slick transitions, 3D mockups, and dark theme for maximum visual impact",
      image: portfolioImage("web-development/Spray (Bluestar).png"),
      link: "https://spray.com",
      category: "Web Development",
    },
    {
      id: 13,
      title: "Arcane Mirage",
      description:
        "Game studio and creative agency with atmospheric design elements, immersive animations, and character visuals",
      image: portfolioImage("web-development/Arcane Mirage.png"),
      link: "https://arcanemirage.com",
      category: "Web Development",
    },
    {
      id: 14,
      title: "MasterShala",
      description:
        "WordPress-based EdTech platform offering online courses, video lectures, and certification programs",
      image: portfolioImage("web-development/MasterShala.png"),
      link: "https://mastershala.com",
      category: "Web Development",
    },
    {
      id: 15,
      title: "Mantra Dhwani",
      description:
        "Cultural learning platform promoting Indian Vedic chants and spiritual mantras with guided audio and video content",
      image: portfolioImage("web-development/Mantra Dhwani.png"),
      link: "https://mantradhwani.com",
      category: "Web Development",
    },
    {
      id: 16,
      title: "Educateast",
      description:
        "Educational services platform providing structured programs and resources for regional educational development",
      image: portfolioImage("web-development/Educateast.png"),
      link: "#",
      category: "Web Development",
    },
    {
      id: 17,
      title: "Guyariv",
      description:
        "EdTech platform focused on self-improvement and career-building courses with interactive modules and clean UI",
      image: portfolioImage("web-development/Guyariv.png"),
      link: "https://guyariv.com",
      category: "Web Development",
    },
    {
      id: 18,
      title: "Backstage English RC",
      description:
        "English language training platform for IELTS, TOEFL, and spoken English courses with mobile-optimized learning",
      image: portfolioImage("web-development/Backstage English RC.png"),
      link: "#",
      category: "Web Development",
    },
    {
      id: 19,
      title: "Of Course TN",
      description:
        "Tamil Nadu-based online education platform for government schemes, competitive exams, and digital skilling",
      image: portfolioImage("web-development/Of Course TN.png"),
      link: "https://ofcoursetn.com",
      category: "Web Development",
    },
    {
      id: 20,
      title: "Messina's Catering",
      description:
        "New Orleans-based catering company website with online event booking, gallery sliders, and elegant menu sections",
      image: portfolioImage("web-development/Messina’s Catering.png"),
      link: "https://messinascatering.com",
      category: "Web Development",
    },
    {
      id: 21,
      title: "CoffeeLavka Express Track",
      description:
        "Real-Time Coffee Order Tracking Platform with location-based services and mobile-first layout",
      image: portfolioImage(
        "web-development/CoffeeLavka Express Track – Real-Time Coffee Order Tracking Platform.jpg",
      ),
      link: "#",
      category: "Web Development",
    },
    {
      id: 22,
      title: "Crave Kitchen",
      description:
        "Digital Food Hall Platform with online food ordering, menu exploration, and delivery integration",
      image: portfolioImage(
        "web-development/Crave Kitchen – Digital Food Hall Platform.png",
      ),
      link: "https://cravekitchen.com",
      category: "Web Development",
    },
    {
      id: 23,
      title: "Fashion Journey Navigator",
      description:
        "Personalized Style Discovery Platform with product galleries and lookbook-style pages",
      image: portfolioImage(
        "web-development/Fashion Journey Navigator – Personalized Style Discovery Platform.jpg",
      ),
      link: "#",
      category: "Web Development",
    },
    {
      id: 24,
      title: "Interview Pro",
      description:
        "Professional Interview Scheduling & Management Platform with structured service flows",
      image: portfolioImage(
        "web-development/Interview Pro – Professional Interview Scheduling & Management Platform.jpg",
      ),
      link: "#",
      category: "Web Development",
    },
    {
      id: 25,
      title: "Mediverse Connect AI",
      description:
        "AI-Powered Healthcare Networking Platform with telemedicine and digital health solutions",
      image: portfolioImage(
        "web-development/Mediverse Connect AI – AI-Powered Healthcare Networking Platform.jpg",
      ),
      link: "#",
      category: "Web Development",
    },
    {
      id: 26,
      title: "StreamVerse",
      description:
        "Smart Rental Management Platform with virtual tours, smart contracts, and predictive analytics",
      image: portfolioImage(
        "web-development/StreamVerse – Smart Rental Management Platform.jpg",
      ),
      link: "#",
      category: "Web Development",
    },
    {
      id: 27,
      title: "UPSC Aids",
      description:
        "Personalized Mentorship & UPSC Preparation Dashboard with structured learning programs",
      image: portfolioImage(
        "web-development/UPSC Aids – Personalized Mentorship & UPSC Preparation Dashboard.jpg",
      ),
      link: "#",
      category: "Web Development",
    },
  ],
  ecommerceWebsites: [
    {
      id: 1,
      title: "Alfa China",
      description:
        "B2B import/export platform focused on Chinese products with real-time product listings and supplier directories",
      image: portfolioImage("ecommerce-websites/Alfa China.png"),
      link: "#",
      category: "E-commerce Websites",
    },
    {
      id: 2,
      title: "Bhola Factory",
      description:
        "Premium Indian ethnic wear brand with full-scale WooCommerce backend and custom category pages",
      image: portfolioImage("ecommerce-websites/Bhola Factory.png"),
      link: "https://bholafactory.com",
      category: "E-commerce Websites",
    },
    {
      id: 3,
      title: "Davis Grill",
      description:
        "Restaurant e-commerce with online food ordering, menu exploration, and delivery integration",
      image: portfolioImage("ecommerce-websites/Davis Grill.png"),
      link: "#",
      category: "E-commerce Websites",
    },
    {
      id: 4,
      title: "Mucon Factory",
      description:
        "Industrial product catalog and inquiry platform for components and machinery with technical filtering",
      image: portfolioImage("ecommerce-websites/Mucon Factory.png"),
      link: "https://muconfactory.com",
      category: "E-commerce Websites",
    },
    {
      id: 5,
      title: "MyTe Fashion",
      description:
        "Youthful, vibrant shopping experience with product galleries and lookbook-style pages",
      image: portfolioImage("ecommerce-websites/MyTe Fashion.png"),
      link: "https://mytefashion.com",
      category: "E-commerce Websites",
    },
    {
      id: 6,
      title: "Banjaaran",
      description:
        "High-end footwear label blending traditional Indian craftsmanship with modern e-commerce",
      image: portfolioImage("ecommerce-websites/Banjaaran.png"),
      link: "#",
      category: "E-commerce Websites",
    },
    {
      id: 7,
      title: "GullyLabs",
      description:
        "Urban streetwear platform with bold designs, seasonal collections, and fast browsing",
      image: portfolioImage("ecommerce-websites/GullyLabs.png"),
      link: "https://gullylabs.com",
      category: "E-commerce Websites",
    },
    {
      id: 8,
      title: "Nickron India",
      description:
        "Sleek storefront for appliances and electrical products with product demos and warranty details",
      image: portfolioImage("ecommerce-websites/Nickron India.png"),
      link: "https://nickronindia.com",
      category: "E-commerce Websites",
    },
    {
      id: 9,
      title: "Official DAPP",
      description:
        "Edgy, design-forward e-commerce space for fashion-forward youth with limited edition releases",
      image: portfolioImage("ecommerce-websites/Official DAPP.png"),
      link: "https://officialdapp.com",
      category: "E-commerce Websites",
    },
  ],
  appDevelopment: [
    {
      id: 1,
      title: "Akash Mega Mart",
      description:
        "User-friendly mobile shopping platform for groceries, fashion items, electronics, and household products with smooth UI and secure checkout",
      image: portfolioImage("app-development/akash_mega_mart-app.webp"),
      link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
      category: "App Development",
      subcategory: "E-commerce",
    },
    {
      id: 2,
      title: "Vetlab",
      description:
        "Diagnostic and health service app for veterinary clinics and pet owners with digital reports and sample pickup scheduling",
      image: portfolioImage("app-development/Vetlab.png"),
      link: "https://vetlab.com",
      category: "App Development",
      subcategory: "Health / Veterinary",
    },
    {
      id: 3,
      title: "VetOnline",
      description:
        "Telemedicine app allowing pet owners to consult licensed veterinarians through chat or video calls with medical history tracking",
      image: portfolioImage("app-development/VetOnline.png"),
      link: "#",
      category: "App Development",
      subcategory: "Health / Veterinary / Telemedicine",
    },
    {
      id: 4,
      title: "Sample Collector",
      description:
        "App for diagnostic labs and field agents to coordinate sample collections with route management and real-time notifications",
      image: portfolioImage("app-development/Sample Collector.png"),
      link: "#",
      category: "App Development",
      subcategory: "Health / Diagnostics",
    },
    {
      id: 5,
      title: "Feelit",
      description:
        "Mood-based social media platform where users post thoughts, stories, and images based on emotions for mental wellness",
      image: portfolioImage("app-development/feelit_app.webp"),
      link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
      category: "App Development",
      subcategory: "Social Networking",
    },
    {
      id: 6,
      title: "Eva People App",
      description:
        "HR and wellness platform helping companies monitor employee satisfaction and performance with survey tools and analytics",
      image: portfolioImage("app-development/Eva People App.webp"),
      link: "https://evapeople.com",
      category: "App Development",
      subcategory: "Corporate / HR",
    },
    {
      id: 7,
      title: "Eva Internships",
      description:
        "App helping students explore, apply, and manage internships worldwide with listings and mentorship tools",
      image: portfolioImage("app-development/Eva Internships.webp"),
      link: "#",
      category: "App Development",
      subcategory: "Education / Career",
    },
    {
      id: 8,
      title: "Eva Training Certificates",
      description:
        "Digital certificate management app for companies and learners to issue, store, and validate training credentials",
      image: portfolioImage("app-development/Eva Training Certificates.webp"),
      link: "#",
      category: "App Development",
      subcategory: "Education / Certification",
    },
    {
      id: 9,
      title: "Hayaty (iOS & Android)",
      description:
        "Healthcare and lifestyle management app for patients and caregivers with medication reminders and health records",
      image: portfolioImage("app-development/Hayaty.webp"),
      link: "#",
      iosLink: "#",
      androidLink: "#",
      category: "App Development",
      subcategory: "Health / Wellness",
    },
    {
      id: 10,
      title: "Naseh (iOS & Android - ناصح)",
      description:
        "Islamic guidance and personal development app featuring daily motivational content and spiritual reminders",
      image: portfolioImage("app-development/Naseh (iOS - ناصح).webp"),
      link: "https://naseh.com",
      iosLink: "https://apps.apple.com/app/naseh",
      androidLink: "https://play.google.com/store/apps/details?id=com.naseh.app",
      category: "App Development",
      subcategory: "Religion / Lifestyle",
    },
    {
      id: 11,
      title: "Lafi (iOS - لافي)",
      description:
        "Premium Arabic-language shopping platform with hand-picked product categories and modern UI",
      image: portfolioImage("app-development/Lafi.webp"),
      link: "#",
      category: "App Development",
      subcategory: "E-commerce",
    },
    {
      id: 12,
      title: "Rentop",
      description:
        "Marketplace app allowing users to rent out or lease items with product listings, booking calendar, and payment gateway",
      image: portfolioImage("app-development/rentop.webp"),
      link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      category: "App Development",
      subcategory: "Marketplace / Rentals",
    },
    {
      id: 13,
      title: "ICCB Prayer Times",
      description:
        "App for Muslim community providing accurate prayer times, Qibla direction, and mosque announcements",
      image: portfolioImage("app-development/ICCBrossard.webp"),
      link: "https://iccbrossard.com",
      category: "App Development",
      subcategory: "Religion / Utilities",
    },
    {
      id: 14,
      title: "Evans Francis Christian App",
      description:
        "Christian app featuring sermon videos, devotional messages, and Bible resources for spiritual growth",
      image: portfolioImage("app-development/Evans Francis Christian App.webp"),
      link: "https://evansfrancis.com",
      category: "App Development",
      subcategory: "Religion / Education",
    },
    {
      id: 15,
      title: "Zigna AutoSnap",
      description:
        "Real estate photography app helping agents capture professional property photos with guided photography and editing",
      image: portfolioImage("app-development/Zigna AutoSnap.webp"),
      link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      category: "App Development",
      subcategory: "Real Estate / Photography",
    },
    {
      id: 16,
      title: "Klikomics",
      description:
        "Digital comic reading app with animated panels, original content, and smooth navigation for graphic novel enthusiasts",
      image: portfolioImage("app-development/klikomics.webp"),
      link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      category: "App Development",
      subcategory: "Entertainment / Comics",
    },
    {
      id: 17,
      title: "Dubai Travel Guide by eTips",
      description:
        "Digital travel companion for Dubai tourists with offline maps, sightseeing highlights, and audio guides",
      image: portfolioImage("app-development/Dubai Travel Guide by eTips.webp"),
      link: "#",
      category: "App Development",
      subcategory: "Travel / Tourism",
    },
    {
      id: 18,
      title: "Planta",
      description:
        "Wellness-focused app helping users cultivate healthy lifestyle habits with reminders and progress tracking",
      image: portfolioImage("app-development/Planta - Plant & Garden Care.webp"),
      link: "https://planta.com",
      category: "App Development",
      subcategory: "Health / Wellness",
    },
    {
      id: 19,
      title: "Serviz",
      description:
        "Service aggregator platform connecting users with skilled professionals for home services with transparent pricing",
      image: portfolioImage("app-development/Serviz.webp"),
      link: "https://serviz.com",
      category: "App Development",
      subcategory: "On-Demand Services / Home Services",
    },
    {
      id: 20,
      title: "Kaamwali Bais",
      description:
        "App enabling households to find and hire reliable domestic helpers with detailed profiles and background checks",
      image: portfolioImage("app-development/Kaamwali Bais.webp"),
      link: "https://kaamwalibais.com",
      category: "App Development",
      subcategory: "On-Demand Services / Domestic Help",
    },
    {
      id: 21,
      title: "Satisfaction Farm",
      description:
        "Farm-to-home e-commerce platform offering fresh produce directly from farmers with real-time order placement",
      image: portfolioImage("app-development/Satisfaction Farm - Psychotech.webp"),
      link: "https://satisfactionfarm.com",
      category: "App Development",
      subcategory: "E-commerce / Agriculture",
    },
    {
      id: 22,
      title: "Fresh and Fresh",
      description:
        "Grocery delivery app connecting users to local stores for daily essentials with flexible delivery slots",
      image: portfolioImage("app-development/Fresh and Fresh.webp"),
      link: "#",
      category: "App Development",
      subcategory: "E-commerce / Grocery",
    },
    {
      id: 23,
      title: "Bharat Meds",
      description:
        "TrackNow Medicine Delivery & Tracking App for pharmaceutical services",
      image: portfolioImage(
        "app-development/Bharat Meds – TrackNow Medicine Delivery & Tracking App.jpg",
      ),
      link: "https://bharatmeds.com",
      category: "App Development",
      subcategory: "Health / Pharmacy",
    },
    {
      id: 24,
      title: "Crimson Classified Hub",
      description:
        "Community-Driven Classifieds Platform for local listings and community engagement",
      image: portfolioImage(
        "app-development/Crimson Classified Hub – Community-Driven Classifieds Platform.jpg",
      ),
      link: "#",
      category: "App Development",
      subcategory: "Classifieds / Community",
    },
    {
      id: 25,
      title: "Dubai Classifieds Pulse",
      description: "Hyperlocal Classified Listings Platform for Dubai community",
      image: portfolioImage(
        "app-development/Dubai Classifieds Pulse – Hyperlocal Classified Listings Platform.jpg",
      ),
      link: "#",
      category: "App Development",
      subcategory: "Classifieds / Local",
    },
    {
      id: 26,
      title: "Ember",
      description:
        "AI-Powered Soulmate Matching & Conversation Platform for relationship building",
      image: portfolioImage(
        "app-development/Ember – AI-Powered Soulmate Matching & Conversation Platform.jpg",
      ),
      link: "#",
      category: "App Development",
      subcategory: "Dating / AI",
    },
    {
      id: 27,
      title: "UrjaOne Nexus",
      description:
        "Mobile Energy Services Marketplace connecting users with energy solutions",
      image: portfolioImage(
        "app-development/UrjaOne Nexus – Mobile Energy Services Marketplace.jpg",
      ),
      link: "https://urjaone.com",
      category: "App Development",
      subcategory: "Energy / Marketplace",
    },
  ],
  ai: [
    {
      id: 1,
      title: "Find My AI Tool",
      description:
        "Discovery platform offering curated listings, reviews, and rankings of AI tools across categories like design, automation, and productivity",
      image: portfolioImage("ai/Find My AI Tool.png"),
      link: "https://findmyaitool.com",
      category: "AI Projects",
      subcategory: "AI Directory / SaaS Review",
    },
    {
      id: 2,
      title: "AI Art Generator – Vyro AI",
      description:
        "App using machine learning and neural style transfer to convert photos into stunning AI-generated artwork with multiple artistic styles",
      image: portfolioImage("ai/AI Art Generator – Vyro AI.webp"),
      link: "https://vyro.ai",
      category: "AI Projects",
      subcategory: "Art / Photo Editing",
    },
    {
      id: 3,
      title: "Musicly – AI Music Generator",
      description:
        "App transforming text prompts and moods into original AI-generated music with background tracks and theme-based soundscapes",
      image: portfolioImage("ai/Musicly – AI Music Generator.webp"),
      link: "https://musicly.ai",
      category: "AI Projects",
      subcategory: "AI Music / Audio Creation",
    },
    {
      id: 4,
      title: "Speaksify",
      description: "AI-Powered Public Speaking Coach",
      image: portfolioImage(
        "recent/Speaksify – AI-Powered Public Speaking Coach.jpg",
      ),
      link: "https://www.speaksify.eu/",
      category: "AI Projects",
      subcategory: "ai",
      type: "AI Calling Agency",
    },
  ],
  blockchain: [
    {
      id: 1,
      title: "Project Butterfly",
      description:
        "Eco-conscious blockchain initiative supporting carbon offsetting via NFT-backed environmental assets with real-world impact",
      image: portfolioImage("blockchain/Project Butterfly.png"),
      link: "https://projectbutterfly.com",
      category: "Blockchain",
      subcategory: "Sustainability / NFT Utility",
    },
    {
      id: 2,
      title: "Earlynctr",
      description:
        "Curated investment platform for early-stage crypto projects and blockchain startups with vetted listings and community voting",
      image: portfolioImage("blockchain/Earlynctr.png"),
      link: "#",
      category: "Blockchain",
      subcategory: "Crypto Investment / Startup Incubation",
    },
    {
      id: 3,
      title: "Solalgo",
      description:
        "Analytics engine built for the Solana ecosystem providing DApp performance metrics, smart contract tracking, and real-time data visualization",
      image: portfolioImage("blockchain/Solalgo.png"),
      link: "#",
      category: "Blockchain",
      subcategory: "Blockchain Analytics / Developer Tools",
    },
  ],
  chatbot: [
    {
      id: 1,
      title: "Chatly – AI Chatbot",
      description:
        "Highly engaging AI chatbot that mimics human-like conversations using advanced natural language processing for productivity and companionship",
      image: portfolioImage("chatbot/Chatly.webp"),
      link: "https://chatly.ai",
      category: "Chatbot Projects",
      subcategory: "Productivity / Companionship",
    },
    {
      id: 2,
      title: "Dawn AI Chatbot",
      description:
        "Intelligent virtual assistant integrating text-based conversation with art generation, creative ideation, and inspirational prompts",
      image: portfolioImage("chatbot/Dawn AI.webp"),
      link: "https://dawnai.com",
      category: "Chatbot Projects",
      subcategory: "AI Art & Creative Assistant",
    },
    {
      id: 3,
      title: "GENZ Art Chatbot",
      description:
        "Vibrant chatbot platform for Gen Z users to create and share AI-generated artworks through interactive chat-based prompts",
      image: portfolioImage("chatbot/GENZ Art.webp"),
      link: "https://genzart.com",
      category: "Chatbot Projects",
      subcategory: "Gen Z / Art & Expression",
    },
  ],
  gameDevelopment: [
    {
      id: 1,
      title: "Action Player Games",
      description:
        "Diverse collection of fast-paced arcade-style mini-games designed to keep users engaged with adrenaline-packed gameplay",
      image: portfolioImage("game development/2 3 4 Player Mini Games.webp"),
      link: "#",
      category: "Game Development",
      subcategory: "Action / Arcade Bundle",
    },
    {
      id: 2,
      title: "Worms Zone.io",
      description:
        "Addictive .io-style snake game where players control colorful worms competing to grow the biggest with real-time multiplayer",
      image: portfolioImage("game development/Worms Zone .io - Hungry Snake.webp"),
      link: "https://wormszone.io",
      category: "Game Development",
      subcategory: "Multiplayer / Casual Arcade",
    },
    {
      id: 3,
      title: "Sahi - Group Voice Room",
      description:
        "Interactive game world combining chatting with mini-games and metaverse-style social experience",
      image: portfolioImage("game development/Sahi - Group Voice Room.webp"),
      link: "https://sahi.com",
      category: "Game Development",
      subcategory: "Social / Simulation",
    },
  ],
  saas: [
    {
      id: 1,
      title: "Projectsy.ai",
      description: "AI-Powered Project & Task Management Platform",
      image: portfolioImage(
        "recent/Projectsy.ai – AI-Powered Project & Task Management Platform.jpg",
      ),
      link: "https://projectsy.ai",
      category: "SaaS Projects",
      subcategory: "saas",
      type: "SaaS Project",
    },
    {
      id: 2,
      title: "VirtuTeams",
      description: "Team Management & Remote Operations Platform",
      image: portfolioImage(
        "recent/VirtuTeams – Team Management & Remote Operations Platform.jpg",
      ),
      link: "https://virtuteams.com",
      category: "SaaS Projects",
      subcategory: "saas",
      type: "SaaS Project",
    },
  ],
};

export const getAllPortfolioItems = (): PortfolioItem[] =>
  Object.values(portfolioData).flat();

const categoryLookup: Record<string, PortfolioCategoryKey> = {
  "web-development": "webDevelopment",
  "ecommerce-websites": "ecommerceWebsites",
  "app-development": "appDevelopment",
  ai: "ai",
  blockchain: "blockchain",
  chatbot: "chatbot",
  "game-development": "gameDevelopment",
  saas: "saas",
};

export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
  if (category === "all") {
    return getAllPortfolioItems();
  }

  const categoryKey = categoryLookup[category as keyof typeof categoryLookup];

  if (!categoryKey) {
    return getAllPortfolioItems();
  }

  return portfolioData[categoryKey];
};
