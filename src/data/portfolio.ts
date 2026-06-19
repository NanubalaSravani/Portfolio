export type Metric = {
  value: string;
  label: string;
  caption: string;
  icon: string;
  tags?: string[];
  wide?: boolean;
};

export type SkillProficiency = {
  category: string;
  name: string;
  detail: string;
  percent: number;
  evidence?: string;
  examples?: string[];
};

export type Project = {
  category: string;
  title: string;
  repoUrl: string;
  liveDemoUrl?: string;
  period: string;
  department: string;
  badge: string;
  icon: string;
  summary: string;
  context: string;
  objective: string;
  role: string;
  tools: string[];
  outcome: string;
  skills: string[];
  quote?: string;
  flagship?: boolean;
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  period?: string;
};

export const navLinks = [
  { label: 'Home', href: '#hero', icon: 'home' },
  { label: 'Projects', href: '#projects', icon: 'work' },
  { label: 'Skills', href: '#skills', icon: 'psychology' },
  { label: 'Contact', href: '#contact', icon: 'mail' },
];

export const hero = {
  badge: 'Final Year | B.Tech CSE (AI & DS) · Class of 2027',
  headline: 'AI & Data Science Engineering Excellence',
  subheadline:
    'AI & Data Science engineer who ships full systems, not isolated notebooks. Final-year B.Tech CSE (AI & Data Science) at The Apollo University — biometric computer vision, ensemble ML, deployed backends, and solo product execution.',
  statValue: '90%',
  statLabel: 'Ensemble Accuracy',
  email: 'sravaninanubala6@gmail.com',
  phone: '+91 90525 11474',
  location: 'Chittoor, Andhra Pradesh, India',
  githubUrl: 'https://github.com/NanubalaSravani',
  linkedinUrl: 'https://linkedin.com/in/sravani-nanubala',
  demosHref: '#projects',
  resumeHref: '#contact',
};

export const metrics: Metric[] = [
  {
    value: '90%',
    label: 'Ensemble Accuracy',
    caption:
      '89.5–90% RidgeVision AI accuracy across all 8 blood groups on a held-out, balanced 1,200-sample test set (weighted avg precision/recall/F1: 0.90).',
    icon: 'biotech',
    tags: ['Biometric ML', 'NHRC & NCW'],
    wide: true,
  },
  {
    value: '1,200',
    label: 'Sample Test Set',
    caption: 'Held-out balanced evaluation set for ensemble blood-group classification.',
    icon: 'dataset',
  },
  {
    value: '10+',
    label: 'Tech Credentials',
    caption: 'IBM, Google, Microsoft, NPTEL, Cisco, AWS, Coursera, Infosys, Forage.',
    icon: 'workspace_premium',
  },
  {
    value: '6',
    label: 'Featured Projects',
    caption:
      'RidgeVision AI, Blood Bridge AI, AI Resume Analyzer, SkillPath, Virtual Calculator, and EDA portfolio — ML, CV, NLP, and product.',
    icon: 'rocket_launch',
    tags: ['Full-Stack ML', 'Flutter'],
    wide: true,
  },
];

export const skillProficiencies: SkillProficiency[] = [
  {
    category: 'ML & AI',
    name: 'Machine Learning',
    detail: 'Logistic Regression → XGBoost',
    percent: 92,
    evidence: 'Trained and compared classification models for donor-availability prediction; decision tree modeling on Bank Marketing dataset.',
    examples: ['Blood-Bridge-AI', 'Bank-Marketing-Decision-Tree'],
  },
  {
    category: 'ML & AI',
    name: 'Computer Vision',
    detail: 'OpenCV, MediaPipe, ridge patterns',
    percent: 88,
    evidence: 'Real-time hand-gesture detection and ridge-pattern feature extraction for biometric classification.',
    examples: ['Virtual-Calculator-with-Hand-Gestures', 'RidgeVision AI'],
  },
  {
    category: 'ML & AI',
    name: 'Natural Language Processing',
    detail: 'Sentiment + Groq LLM API',
    percent: 85,
    evidence: 'Sentiment analyzer, social-media pattern detector, Groq LLM for resume/ATS scoring and cover-letter generation.',
    examples: ['NLP_sentiment_analyzer', 'AI Resume Analyzer'],
  },
  {
    category: 'Data',
    name: 'Data Analysis & Visualization',
    detail: 'Full EDA raw-to-insight cycles',
    percent: 90,
    evidence: 'Complete EDA and cleaning on Titanic dataset and Age-Gender Distribution analysis (Prodigy Data Science track).',
    examples: ['Titanic-EDA', 'Age-Gender-Distribution-Analysis'],
  },
  {
    category: 'Engineering',
    name: 'Backend & Product Integration',
    detail: 'FastAPI, Streamlit, Flutter',
    percent: 88,
    evidence: 'Served trained models via FastAPI; Streamlit + LLM API with PDF export; full Flutter app (auth, navigation, theming) built solo.',
    examples: ['Blood-Bridge-AI', 'AI Resume Analyzer', 'SkillPath'],
  },
  {
    category: 'Research',
    name: 'Research Writing & Presentation',
    detail: 'Papers, NHRC/NCW, Big Data',
    percent: 86,
    evidence: 'Authored RidgeVision AI research paper; presented to NHRC & NCW; delivered Big Data Analytics fundamentals presentation.',
    examples: ['RidgeVision AI paper', 'NHRC/NCW presentation'],
  },
];

export const softSkills = [
  'Feature Engineering',
  'Research Presentation',
  'API Development',
  'Prompt Engineering',
  'Solo Execution',
  'Full-Stack ML',
  'UI/UX Design',
  'Agile Team Workflow',
];

export const projects: Project[] = [
  {
    category: 'FLAGSHIP / BIOMETRIC ML',
    title: 'RidgeVision AI — Fingerprint-Based Blood Group Detection',
    repoUrl: 'https://github.com/NanubalaSravani/Ridgevision-ai',
    liveDemoUrl: 'https://sravaninanubala-ridgevision-ai.hf.space',
    period: '2024 – Present',
    department: 'Biometric ML Research',
    badge: 'Flagship',
    icon: 'fingerprint',
    summary:
      'Non-invasive ABO/Rh blood-group estimator from fingerprint ridge patterns — 89.5–90% ensemble accuracy, research paper authored, presented to NHRC & NCW.',
    context:
      'Standard blood-typing requires lab access and time. Could fingerprint ridge patterns carry enough signal to estimate ABO/Rh group non-invasively?',
    objective:
      'Design and validate a production-grade ensemble system for all 8 blood groups and ship as a live demo — not leave findings in a notebook.',
    role:
      'Designed ridge-analysis and texture feature extraction; built and compared two model architectures, combined into an ensemble; authored the full research paper; presented to national commissions.',
    tools: ['Python', 'Jupyter', 'Image Processing', 'Ensemble Classification', 'Hugging Face Spaces'],
    outcome:
      '89.5–90% ensemble accuracy across all 8 blood groups on a held-out, balanced 1,200-sample test set (weighted avg precision/recall/F1: 0.90). Presented to the National Human Rights Commission & National Commission for Women. Live demo deployed on Hugging Face Spaces.',
    skills: ['Biometric ML', 'Feature Engineering', 'Ensemble Methods', 'Research Writing', 'Research Presentation'],
    quote:
      '90% accuracy across 8 balanced classes on a problem with no established baseline — validated and shipped as a live demo, not left in a notebook.',
    flagship: true,
  },
  {
    category: 'APPLIED ML / DEPLOYED BACKEND',
    title: 'Blood Bridge AI — Donor Availability Prediction System',
    repoUrl: 'https://github.com/NanubalaSravani/Blood-Bridge-AI-',
    period: '2024',
    department: 'Applied ML / Production',
    badge: 'Deployed',
    icon: 'bloodtype',
    summary:
      'Predicts donor availability from donation recency, response rate, and distance — XGBoost model served via FastAPI with JS/HTML frontend.',
    context:
      'Connecting patients with eligible donors requires predicting real availability from donation recency, response rate, and distance — not just donor lists.',
    objective:
      'Build an end-to-end donor availability prediction system accessible outside the notebook via API and web UI.',
    role:
      'Engineered features (days since last donation, donation count, response rate, distance); compared Logistic Regression vs. XGBoost; selected XGBoost for production; served via FastAPI with a JS/HTML frontend.',
    tools: ['Python', 'scikit-learn', 'XGBoost', 'FastAPI', 'Pandas / NumPy', 'JavaScript'],
    outcome:
      'Fully working end-to-end system — trained model serialized with Joblib, served live through a functioning API and web UI.',
    skills: ['Model Selection', 'Feature Engineering', 'API Development', 'Full-Stack ML Deployment'],
    quote:
      "This candidate understands that a model isn't done until someone outside the notebook can use it.",
  },
  {
    category: 'APPLIED LLM / PRODUCT BUILD',
    title: 'AI Resume Analyzer & ATS Optimizer (Groq-Powered)',
    repoUrl: 'https://github.com/NanubalaSravani',
    period: '2024',
    department: 'NLP / LLM Integration',
    badge: 'LLM Pipeline',
    icon: 'description',
    summary:
      'Streamlit app with PDF extraction, Groq LLM ATS scoring (0–100), keyword-gap analysis, cover-letter generation, and downloadable PDF report.',
    context:
      'Job applicants have no visibility into how an ATS scores their resume against a job description or which keywords are missing.',
    objective:
      'Deliver a fully functional product covering upload → analyze → score → generate → download in one Streamlit journey.',
    role:
      'Built PDF text extraction for resume upload; designed prompt pipeline against Groq LLM API to produce ATS score (0–100), keyword-gap analysis, cover-letter generation, and a downloadable PDF report.',
    tools: ['Python', 'Streamlit', 'Groq LLM API', 'PDF Parsing', 'Prompt Engineering'],
    outcome:
      'Fully functional Streamlit app covering the entire journey — upload, analyze, score, generate, download.',
    skills: ['LLM Integration', 'Prompt Engineering', 'NLP Pipelines', 'Product UX'],
    quote: 'Bridging the gap between what candidates write and what hiring systems read.',
  },
  {
    category: 'TEAM PROJECT / SOLO EXECUTION',
    title: 'SkillPath — Mobile Learning App (Excelerate MAD-June26)',
    repoUrl: 'https://github.com/NanubalaSravani/Team2-Excelerate-MADJune26-SkillPath',
    period: '2025 – 2026',
    department: 'Flutter / Mobile Product',
    badge: 'Solo Build',
    icon: 'phone_iphone',
    summary:
      'Cross-platform Flutter learning app — login through enrollment — built solo when an 8-person remote team stalled.',
    context:
      'An 8-person remote team project needed a cross-platform Flutter app connecting learners to programs — login through enrollment — in a tight build window.',
    objective:
      'Deliver a fully navigable prototype across all four core screens under the team deadline despite limited team contribution.',
    role:
      'Listed as UI/UX Designer but built the full application solo — login validation, home screen, category-filtered program listings, 3-tab program detail screen, named-route navigation with shared Hero animations, centralized theming.',
    tools: ['Flutter', 'Dart', 'Material Design', 'Git / GitHub', 'Agile Team Workflow'],
    outcome:
      'A fully working, navigable prototype across all four core screens, delivered under the team\'s name despite limited team contribution. Demo video available on request.',
    skills: ['Flutter Development', 'UI/UX Design', 'Mobile Navigation', 'Solo Execution'],
    quote: "When the team project stalled, she didn't escalate — she built it.",
  },
  {
    category: 'COMPUTER VISION / REAL-TIME INTERACTION',
    title: 'Virtual Calculator with Hand Gestures',
    repoUrl: 'https://github.com/NanubalaSravani/Virtual-Calculator-with-Hand-Gestures',
    period: '2025',
    department: 'Computer Vision',
    badge: 'Live Demo',
    icon: 'back_hand',
    summary:
      'Touchless calculator controlled via webcam — MediaPipe hand landmarks map to OpenCV-rendered UI with thumb-to-index click detection.',
    context:
      'Touchless interfaces depend on reliably translating webcam-captured hand geometry into discrete input events.',
    objective:
      'Build a demoable touchless calculator with a complete gesture-to-input pipeline using a standard webcam.',
    role:
      'Implemented real-time hand-landmark detection with MediaPipe; calculated thumb-to-index distance to register clicks; mapped coordinates to an OpenCV-rendered calculator UI.',
    tools: ['Python', 'OpenCV', 'MediaPipe', 'cvzone'],
    outcome:
      'A fully working, demoable touchless calculator with a complete gesture-to-input pipeline via standard webcam.',
    skills: ['Computer Vision', 'Real-Time Detection', 'OpenCV', 'Human-Computer Interaction'],
  },
  {
    category: 'DATA SCIENCE FUNDAMENTALS',
    title: 'Exploratory Data Analysis — Titanic & Age-Gender Distribution',
    repoUrl:
      'https://github.com/NanubalaSravani/Titanic-Dataset-Data-Cleaning-and-Exploratory-Data-Analysis-EDA-',
    period: '2025',
    department: 'Prodigy Data Science Track',
    badge: 'EDA Portfolio',
    icon: 'analytics',
    summary:
      'Two complete, independently-delivered EDA notebooks — Titanic survival analysis and Age-Gender Distribution (Prodigy Task 1).',
    context:
      'Independent Prodigy Data Science tasks requiring full ownership from raw data to insight.',
    objective:
      'Demonstrate the full raw-to-insight workflow — cleaning, feature engineering, and visualization — without supervision.',
    role:
      'Handled missing values and inconsistent types, engineered features, produced visualizations surfacing relationships between class, age, and survival outcome across both datasets.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib / Seaborn', 'Jupyter'],
    outcome:
      'Two complete, independently-delivered EDA notebooks demonstrating the full raw-to-insight workflow without supervision.',
    skills: ['Exploratory Data Analysis', 'Data Cleaning', 'Feature Engineering', 'Data Visualization'],
  },
];

export const milestones: Milestone[] = [
  {
    year: '2025',
    title: 'NHRC & NCW National Presentation',
    description:
      'Presented RidgeVision AI fingerprint-based blood group research to the National Human Rights Commission and National Commission for Women.',
  },
  {
    year: '2025',
    title: 'RidgeVision AI Research Paper',
    description:
      'Authored full methodology and findings on dermatoglyphic ridge analysis for non-invasive ABO/Rh estimation.',
  },
  {
    year: '2025',
    title: 'SkillPath Solo Flutter Delivery',
    description:
      'Rebuilt full Excelerate MAD-June26 mobile app solo after remote team project stalled.',
  },
  {
    year: '2024',
    title: 'Blood Bridge AI Deployment',
    description: 'Shipped XGBoost production model via FastAPI with functioning web UI.',
  },
  {
    year: '2024',
    title: 'Big Data Analytics Presentation',
    description: 'Delivered coursework presentation on core big data analytics fundamentals.',
  },
];

export const certificates: Certificate[] = [
  { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM', period: '2026' },
  { title: 'Data Science for Engineers', issuer: 'NPTEL', period: '2025' },
  { title: 'Database Management System', issuer: 'NPTEL', period: '2025' },
  { title: 'Prompt Design in Vertex AI', issuer: 'Google', period: '2025' },
  { title: 'Generative AI for Data Science', issuer: 'Microsoft', period: '2025' },
  { title: 'Data Analytics Essentials', issuer: 'Cisco', period: '2025' },
  { title: 'GenAI for Data Engineers: Scaling with GenAI', issuer: 'Coursera', period: '2025' },
  { title: 'A Complete Guide to Finance using Python', issuer: 'Infosys Springboard', period: '2025' },
  { title: 'Fundamentals of Information Security', issuer: 'Infosys Springboard', period: '2025' },
  { title: 'AWS APAC Solutions Architecture Job Simulation', issuer: 'Forage', period: '2025' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/NanubalaSravani', icon: 'code' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sravani-nanubala', icon: 'link' },
];
