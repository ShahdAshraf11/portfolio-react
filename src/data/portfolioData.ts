// Portfolio Data - Easy to edit and customize
// Simply update the values below to personalize your portfolio

export const personalInfo = {
  name: "Shahd Ashraf",
  title: "Junior Data Engineer",
  tagline: "Transforming Raw Data into Actionable Insights",
  email: "shahdashraf.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/shahd-ashraf-zakii/",
  github: "https://github.com/ShahdAshraf96",
  location: "Giza,Egypt",
};

export const aboutMe = {
  intro: "Recent Computer Science graduate specializing in web scraping, data engineering, and interactive dashboard development to transform raw data into actionable business insights.",
  description: [
    "I'm passionate about extracting value from data at every stage — from scraping and collecting data from various sources, to building robust ETL pipelines, to creating insightful visualizations that drive decision-making.",
    "With dual degrees in Computer Science from MSA University and the University of Greenwich, I've gained expertise in database systems, machine learning, and full-stack development. My projects span multimodal AI systems, predictive maintenance platforms, and large-scale data extraction and analysis.",
    "I thrive on solving complex data challenges and continuously expand my skillset with the latest technologies in data engineering, cloud platforms, and AI integration.",
  ],
  highlights: [
    "Expert in web scraping and data extraction at scale",
    "Strong foundation in SQL, Python, and data pipeline development",
    "Experience with Power BI dashboards and data visualization",
    "Microsoft certified in Azure Data and AI Fundamentals",
    "Proven track record in backend development and ML deployment",
  ],
};

export const skills = {
   programming: [
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "sql" },
    { name: "Java", icon: "java" },
    { name: "C++", icon: "cpp" },
    { name: "Bash/Shell", icon: "bash" },
  ],
  dataEngineering: [
    { name: "Web Scraping (BeautifulSoup, Requests)", icon: "scraping" },
    { name: "ETL Pipelines", icon: "pipeline" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "SQLAlchemy", icon: "sqlalchemy" },
    { name: "Docker", icon: "docker" },
    { name: "Power BI", icon: "powerbi" },
  ],
  machineLearning: [
    { name: "PyTorch", icon: "pytorch" },
    { name: "Scikit-learn", icon: "sklearn" },
    { name: "YOLO", icon: "yolo" },
    { name: "MediaPipe", icon: "mediapipe" },
    { name: "Transformers", icon: "transformers" },
    { name: "OpenCV", icon: "opencv" },
  ],
  databases: [
    { name: "SQL Server", icon: "sqlserver" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Azure Data Studio", icon: "azure" },
  ],
  cloud: [
    { name: "Azure", icon: "azure" },
    { name: "Kaggle", icon: "kaggle" },
  ],
  
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Web Scraping & Analytics Platform",
    category: "Data Engineering Project",
    description: "Extracted and analyzed 800+ mobile phone products from Jumia Egypt, building a comprehensive market analysis dashboard.",
    problem: "Understanding market trends, pricing strategies, and product positioning across e-commerce platforms requires systematic data collection and analysis.",
    solution: "Built a Python-based web scraper with BeautifulSoup and Requests to extract product details, prices, ratings, and seller information across 20 pages. Cleaned and normalized the data, then created interactive Power BI dashboards revealing market insights.",
    technologies: ["Python", "BeautifulSoup", "Requests", "Pandas", "Power BI", "CSV"],
    outcomes: [
      "Successfully scraped ~800 products with comprehensive details (name, price, ratings, brand, seller info)",
      "Identified market dominance of Samsung and pricing trends (majority in EGP 5,000-15,000 range)",
      "Discovered correlation between premium brands (Apple) and higher customer ratings",
      "Created reusable scraping pipeline with session management and rate limiting",
      "Generated actionable insights on seller reliability and product categories",
    ],
    image: "ecommerce-scraping",
  },
  {
    id: 2,
    title: "Turbofan Engine RUL Prediction System",
    category: "Graduation Project - Full Stack ML Platform",
    description: "Engineered a production-ready prognostics and health management (PHM) system to predict Remaining Useful Life (RUL) of turbofan engines using NASA C-MAPSS dataset with advanced ML architecture and backend API.",
    problem: "Airlines need predictive maintenance systems to prevent catastrophic engine failures and optimize maintenance scheduling, but traditional approaches lack accuracy and real-time capabilities.",
    solution: "Developed an end-to-end ML platform with custom Transformer-based architecture (Gated Convolutional Unit), FastAPI backend with async SQLAlchemy ORM managing 259 engines and their sensor data, and external ML service for real-time RUL predictions.",
    technologies: ["PyTorch", "FastAPI", "SQLAlchemy", "SQLite", "NumPy", "Pandas", "Scikit-learn", "Python"],
    outcomes: [
      "Achieved RMSE scores of 13.40–24.61 across four sub-datasets (FD001–FD004)",
      "Advanced from baseline LSTM to sophisticated Transformer architecture with custom GCU",
      "Built scalable data pipeline with feature selection (16 sensors), Min-Max normalization, and sliding windows",
      "Implemented real-time RUL predictions via RESTful API with async processing",
      "Designed database schema managing 259 engines with metadata and sensor readings",
      "Deployed on Kaggle with GPU optimization and early stopping for model training",
    ],
    image: "turbofan-rul",
  },
  {
    id: 3,
    title: "SoundSwipe: Multimodal Music Interaction System",
    category: "HCI & Computer Vision Project",
    description: "Built a real-time multimodal HCI system enabling music control through gestures, face recognition, emotion detection, gaze tracking, and Bluetooth presence.",
    problem: "Traditional music interfaces lack intuitive, natural interaction methods. Users need context-aware systems that respond to gestures, emotions, and presence.",
    solution: "Designed Python AI server with parallel recognition modules (MediaPipe hand gestures, YOLO object detection, face recognition, emotion detection, gaze tracking, Bluetooth discovery) communicating via sockets to a C# GUI client with TUIO marker tracking and NAudio for multi-stream playback.",
    technologies: ["Python", "OpenCV", "MediaPipe", "YOLO", "PyTorch", "DeepFace", "PyBluez", "C#", "TUIO", "NAudio", "Socket Programming"],
    outcomes: [
      "Achieved real-time gesture recognition with $1 Recognizer for swipes and shapes",
      "Implemented automatic user login via face recognition and Bluetooth device presence",
      "Enabled chord and harmony playback with marker-based (DO, RE, MI, FA, SOL, LA, SI) and gesture-based note triggering",
      "Generated gaze tracking heatmaps to visualize user attention patterns",
      "Built threaded architecture for parallel execution of multiple CV modules",
      "Created seamless multimodal experience blending vision, sound, and device awareness",
    ],
    image: "soundswipe",
  },
  {
    id: 4,
    title: "Hotel Management Database System",
    category: "Database Systems Project",
    description: "Designed and implemented a comprehensive hotel management system with ERD modeling, relational database, and C++ application interface.",
    problem: "Hotel operations require efficient management of guests, reservations, staff, rooms, and billing across multiple interconnected entities.",
    solution: "Created complete database solution from ERD design (using ERDPlus) to implementation with SQL Server, including DDL/DML/DQL scripts and C++ ODBC application for real-time operations.",
    technologies: ["SQL Server", "Azure Data Studio", "C++", "ODBC", "ERDPlus"],
    outcomes: [
      "Designed normalized ERD with entities (Customer, Staff, Room, Bills, Address) and relationships",
      "Implemented relational model with proper primary/foreign key constraints",
      "Developed DDL scripts for schema creation, DML for data manipulation, and DQL for complex queries",
      "Built C++ console application with ODBC connectivity for guest check-in, bill generation, and room availability",
      "Enabled efficient hotel operations including reservation management and staff assignment",
    ],
    image: "hotel-db",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  universities: [
    {
      name: "MSA University",
      location: "Egypt",
      year: "2025",
    },
    {
      name: "University of Greenwich",
      location: "United Kingdom",
      year: "2025",
    },
  ],
  gpa: "3.53/4.0",
  relevantCourses: [
    "Database Systems",
    "Human-Computer Interaction",
    "Data Structures & Algorithms",
    "Machine Learning",
    "Cloud Computing",
    "Software Engineering",
  ],
  certifications: [
    {
      name: "Azure Data Fundamentals (DP-900)",
      code: "DP-900",
      issuer: "Microsoft",
      status: "Completed",
      year: "2022",
    },
    {
      name: "Azure AI Fundamentals (AI-900)",
      code: "AI-900",
      issuer: "Microsoft",
      status: "Completed",
      year: "2022",
    },
  ],
};

export const careerVision = {
   title: "Why Data & AI Systems?",
  paragraphs: [
  "I enjoy building systems that transform raw data into practical tools such as dashboards, automated scraping pipelines, and AI-powered applications.",
  "My background in machine learning, computer vision, and system integration allows me to combine AI with real-world data workflows.",
  "Through freelancing, I'm gaining hands-on experience with web scraping, dashboard development, and intelligent data solutions—while building toward expertise in large-scale distributed systems and data platforms.",
  ],
  goals: [
    "Master distributed systems and stream processing",
    "Contribute to open-source data tools",
    "Build data platforms that drive business value",
    "Stay at the forefront of data engineering innovation",
  ],
};


export const services = {
  title: "Freelance Services Offered",
  offerings: [
    {
      name: "Web Scraping & Data Extraction",
      description: "Custom scraping solutions for e-commerce sites, job boards, real estate listings, and more. Handle complex pagination, dynamic content, and anti-scraping measures.",
      deliverables: ["Clean CSV/JSON datasets", "Automated scraping scripts", "Data validation & quality checks", "Documentation & maintenance"],
    },
    {
      name: "Dashboard Development",
      description: "Interactive dashboards and reports using Power BI to visualize data trends, patterns, and key metrics. Connect to various data sources including CSV files, Excel spreadsheets, and SQL databases.",
      deliverables: ["Custom Power BI visualizations", "Interactive reports with filtering", "Data source integration", "Chart and graph creation"],
    },
    {
      name: "Data Engineering & ETL",
      description: "Design and implement data pipelines to extract, transform, and load data from various sources into databases or data warehouses.",
      deliverables: ["Automated ETL pipelines", "Data cleaning & normalization", "Database schema design", "API integrations"],
    },
    {
      name: "AI/ML Integration",
      description: "Integrate machine learning models into existing systems for predictive analytics, recommendation engines, or automated decision-making.",
      deliverables: ["Model training & optimization", "API endpoints for predictions", "Real-time inference systems", "Performance monitoring"],
    },
  ],
};


export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Vision", href: "#vision" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];
