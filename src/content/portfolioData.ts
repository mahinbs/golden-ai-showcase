// Portfolio data for all categories
export const portfolioData = {
  webDevelopment: [
    {
      id: 1,
      title: "5G Homes",
      category: "Web Development",
      description:
        "High-speed internet service provider website with modern design and seamless user experience.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image: "/src/assets/portfolio/web-development/5ghomes.webp",
      link: "https://5ghighspeedinternet.co",
    },
    {
      id: 2,
      title: "Cold Creekcap",
      category: "Web Development",
      description:
        "Investment and financial services website with advanced analytics and client portal.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      image: "/src/assets/portfolio/web-development/cold-creekcap.webp",
      link: "https://www.coldcreekcap.com",
    },
    {
      id: 3,
      title: "Think Reality",
      category: "Web Development",
      description:
        "Real estate platform with property listings, virtual tours, and advanced search functionality.",
      technologies: ["Vue.js", "Express", "MySQL", "Google Maps API"],
      image: "/src/assets/portfolio/web-development/think-reality.webp",
      link: "https://thinkrealty.ae",
    },
    {
      id: 4,
      title: "Akash Mega Mart",
      category: "Web Development",
      description:
        "E-commerce platform with comprehensive product catalog, payment integration, and order management.",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
      image: "/src/assets/portfolio/web-development/akash-mega-mart.webp",
      link: "https://akashmegamart.com/",
    },
    {
      id: 5,
      title: "Midwam",
      category: "Web Development",
      description:
        "Immersive experience design company website with 3D elements and interactive portfolio showcase.",
      technologies: ["Three.js", "React", "WebGL", "GSAP"],
      image: "/src/assets/portfolio/web-development/midwam.webp",
      link: "https://www.midwam.com/en/about",
    },
  ],
  appDevelopment: [
    {
      id: 1,
      title: "Akash Mega Mart Mobile App",
      category: "App Development",
      description:
        "Cross-platform mobile e-commerce app with offline support, push notifications, and seamless shopping experience.",
      technologies: ["React Native", "Redux", "Firebase", "Stripe"],
      image: "/src/assets/portfolio/app-development/akash_mega_mart-app.webp",
      link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    },
    {
      id: 2,
      title: "FeelIt Mobile App",
      category: "App Development",
      description:
        "Social media app for sharing emotions and experiences with AI-powered content recommendations.",
      technologies: ["Flutter", "Firebase", "TensorFlow", "AWS"],
      image: "/src/assets/portfolio/app-development/feelit_app.webp",
      link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    },
    {
      id: 3,
      title: "Klikomics Mobile App",
      category: "App Development",
      description:
        "Financial analytics and investment tracking app with real-time market data and portfolio management.",
      technologies: ["React Native", "Node.js", "WebSocket", "Chart.js"],
      image: "/src/assets/portfolio/app-development/klikomics.webp",
      link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    },
    {
      id: 4,
      title: "AutoSnap Mobile App",
      category: "App Development",
      description:
        "AI-powered photo editing app with automatic enhancement, filters, and social sharing features.",
      technologies: ["Flutter", "TensorFlow Lite", "OpenCV", "Firebase"],
      image: "/src/assets/portfolio/app-development/autosnap-app.webp",
      link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    },
    {
      id: 5,
      title: "Rentop Bike and Car",
      category: "App Development",
      description:
        "Vehicle rental platform with GPS tracking, payment integration, and real-time booking system.",
      technologies: ["React Native", "Google Maps", "Stripe", "Socket.io"],
      image: "/src/assets/portfolio/app-development/rentop.webp",
      link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    },
  ],
  gameDevelopment: [
    {
      id: 1,
      title: "3D Bowling Game",
      category: "Game Development",
      description:
        "Immersive 3D bowling game with realistic physics, multiple lanes, and multiplayer support.",
      technologies: ["Unity", "C#", "Photon", "Blender"],
      image: "/src/assets/portfolio/game development/3d bowling game.webp",
      link: "#",
    },
    {
      id: 2,
      title: "Car Stunt Extreme Racing",
      category: "Game Development",
      description:
        "High-octane racing game with extreme stunts, multiple vehicles, and challenging tracks.",
      technologies: ["Unity", "C#", "Unity Analytics", "3D Modeling"],
      image:
        "/src/assets/portfolio/game development/car stunt extreme racing.webp",
      link: "#",
    },
  ],
  blockchain: [
    {
      id: 1,
      title: "Cryptopadie",
      category: "Blockchain",
      description:
        "Decentralized cryptocurrency exchange platform with advanced trading features and security protocols.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      image: "/src/assets/portfolio/blockchain/cryptopadie.webp",
      link: "#",
    },
    {
      id: 2,
      title: "Nanoflow",
      category: "Blockchain",
      description:
        "NFT marketplace with minting, trading, and auction features for digital art and collectibles.",
      technologies: ["Solidity", "IPFS", "Next.js", "OpenSea API"],
      image: "/src/assets/portfolio/blockchain/nanoflow.webp",
      link: "#",
    },
    {
      id: 3,
      title: "Padipal",
      category: "Blockchain",
      description:
        "DeFi lending platform with yield farming, staking, and automated market making capabilities.",
      technologies: ["Solidity", "Hardhat", "React", "Chainlink"],
      image: "/src/assets/portfolio/blockchain/padipal.webp",
      link: "#",
    },
  ],
};

// Get all portfolio items
export const getAllPortfolioItems = () => {
  return [
    ...portfolioData.webDevelopment,
    ...portfolioData.appDevelopment,
    ...portfolioData.gameDevelopment,
    ...portfolioData.blockchain,
  ];
};

// Get portfolio items by category
export const getPortfolioByCategory = (category: string) => {
  const categoryMap: { [key: string]: any[] } = {
    "web-development": portfolioData.webDevelopment,
    "app-development": portfolioData.appDevelopment,
    "game-development": portfolioData.gameDevelopment,
    blockchain: portfolioData.blockchain,
    all: getAllPortfolioItems(),
  };

  return categoryMap[category] || getAllPortfolioItems();
};
