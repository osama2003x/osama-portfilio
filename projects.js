// Projects Data for Portfolio
// Add your projects here with their details

const projects = [
    // Flutter/Mobile Development Projects
    {
        id: 1,
        title: "MedJust",
        description: "Flutter-based healthcare app for managing appointments, medical records, and communication between doctors and patients.",
        image: "assets/images/med_just.png",
        category: "Flutter",
        tags: ["Flutter", "Healthcare", "Mobile App"],
        github: "https://www.mediafire.com/file/cg6456hlp7jfs7u/app-release.apk/file",
        demo: "https://www.mediafire.com/file/cg6456hlp7jfs7u/app-release.apk/file"
    },
    {
        id: 2,
        title: "Ulmo Ecommerce",
        description: "A complete e-commerce platform with product browsing, cart, and checkout.",
        image: "assets/images/ulmo.png",
        category: "Flutter",
        tags: ["Flutter", "E-Commerce", "State Management"],
        github: "https://github.com/Osamariyad2003/ulmo_ecmmerce",
        demo: "#"
    },
    {
        id: 3,
        title: "Meal Recommendation AI",
        description: "Flutter mobile app that uses AI to recommend personalized meals based on user preferences, goals, and dietary restrictions.",
        image: "assets/images/meal_recommendation.png",
        category: "Flutter",
        tags: ["AI", "Flutter", "Recommendation System"],
        github: "https://github.com/Osamariyad2003/meal_recommendation_ai",
        demo: "#"
    },
    {
        id: 5,
        title: "Prime Cinema Admin Panel",
        description: "Comprehensive admin dashboard for managing cinemas, screens, movies, showtimes, bookings, and loyalty programs.",
        image: "assets/images/prime_admin_panel.png",
        category: "backend",
        tags: ["Backend", "Admin Panel", "Dashboard", "Management System"],
        github: "#",
        demo: "https://prime-cinema-backend-1.onrender.com/admin.html"
    },
    {
        id: 7,
        title: "URL Shortener",
        description: "Efficient URL shortening service with analytics and redirection.",
        image: "assets/images/url.png",
        category: "backend",
        tags: ["Node.js", "Backend", "API"],
        github: "https://github.com/Osamariyad2003/url_shorter",
        demo: "#"
    },
    {
        id: 6,
        title: "Prime Cinema ",
        description: "Modern cinema booking platform with movie browsing, showtime selection, and ticket reservation system.",
        image: "assets/images/prime_cinema.png",
        category: "web",
        tags: ["Web Frontend", "Cinema Booking", "UI/UX"],
        github: "https://github.com/Osamariyad2003/prime_cinema",
        demo: "https://osamariyad2003.github.io/prime_cinema/"
    },


    {
        id: 8,
        title: "Kaboom",
        description: "Fast-paced browser game built with modern web technologies and responsive UI.",
        image: "assets/images/kaboom.png",
        category: "Web",
        tags: ["Web Frontend", "Game", "Interactive"],
        github: "https://github.com/Osamariyad2003/Kaboom",
        demo: "https://osamariyad2003.github.io/Kaboom/"
    },

    // Other Projects (Placeholders/Previous)
    {
        id: 9,
        title: "ARD Database System",
        description: "Academic research database system with ERD design, optimized queries, and reports for space and satellite data.",
        image: "assets/images/ard.png",
        category: "Flutter",
        tags: ["Flutter", "NASA", "Optimization"],
        github: "https://github.com/Osamariyad2003/ARD",
        demo: "https://github.com/Osamariyad2003/ARD"
    },
    {
        id: 10,
        title: "Bookly",
        description: "Flutter application for discovering bestselling books, writing and sharing summaries, and tracking personal reading activity.",
        image: "assets/images/bookly.png",
        category: "Flutter",
        tags: ["Flutter", "Books", "Community"],
        github: "https://github.com/Osamariyad2003/bookly",
        demo: "https://github.com/Osamariyad2003/bookly"
    },
    {
        id: 11,
        title: "Health Hearts at Home (HeartHub)",
        description: "Comprehensive Flutter app for caregivers of children with Congenital Heart Disease (CHD). Features health tracking (growth, feeding, vitals), AI-powered recipe suggestions, educational resources, bilingual support (English/Arabic), and hospital directory integration.",
        image: "https://via.placeholder.com/400x300/1a1a1a/ec4899?text=HeartHub",
        category: "Flutter",
        tags: ["Flutter", "Healthcare", "Firebase", "AI", "Mobile App"],
        github: "https://github.com/Osamariyad2003/hhh_app",
        demo: "https://drive.google.com/file/d/15fff4joSZhXiSpyjnsfdHkCPrUSAe-bQ/view?usp=drivesdk"
    },
    {
        id: 13,
        title: "Weather-AI",
        description: "Flutter mobile application with Clean Architecture providing real-time weather updates and AI-driven predictions. Features secure authentication, Cubit state management, and modern UI for accurate weather forecasting.",
        image: "assets/images/clouds.png",
        category: "Flutter",
        tags: ["Flutter", "AI", "Weather", "Clean Architecture", "Mobile App"],
        github: "https://github.com/Osamariyad2003/weather_ai_model",
        demo: "#"
    },
    {
        id: 15,
        title: "Volleyball Stats",
        description: "Flutter Material Design app for tracking volleyball statistics and tournament data. Built with MVP architecture, integrates with SportRadar API for real-time match data, includes error handling and empty state screens.",
        image: "assets/images/volleyball.png",
        category: "Flutter",
        tags: ["Flutter", "Material Design", "MVP Architecture", "Sports", "API Integration"],
        github: "https://github.com/Osamariyad2003/vollyball_stats",
        demo: "#"
    },
 
    {
        id: 14,
        title: "AI Audit Monitoring Model",
        description: "Machine learning model designed to monitor, audit, and detect anomalies or biases in AI/ML system outputs. Includes real-time reporting, explainability tools, and customizable audit policies.",
        image: "https://via.placeholder.com/400x300/1a1a1a/ff6b6b?text=AI+Audit+ML",
        category: "ai",
        tags: ["Python", "ML Monitoring", "Explainable AI", "Audit", "Anomaly Detection"],
        github: "#",
        demo: "#"
    },
 

];

// Project categories for filtering
const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "flutter", label: "Flutter", count: projects.filter(p => p.category === "flutter").length },
    { id: "backend", label: "Backend", count: projects.filter(p => p.category === "backend").length },
    { id: "sql", label: "SQL", count: projects.filter(p => p.category === "sql").length },
    { id: "mysql", label: "MySQL", count: projects.filter(p => p.category === "mysql").length },
    { id: "mongodb", label: "MongoDB", count: projects.filter(p => p.category === "mongodb").length },
    { id: "sqlserver", label: "SQL Server", count: projects.filter(p => p.category === "sqlserver").length },
    { id: "devops", label: "DevOps", count: projects.filter(p => p.category === "devops").length },
    { id: "ai", label: "AI/ML", count: projects.filter(p => p.category === "ai").length },
    { id: "web", label: "Web", count: projects.filter(p => p.category === "web").length }
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, categories };
}
