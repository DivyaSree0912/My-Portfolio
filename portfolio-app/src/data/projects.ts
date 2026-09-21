import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "odtect",
    name: "OdTect",
    oneLiner:
      "Explainable multiclass oral cancer detection using EfficientNet-B2 and Grad-CAM, with a full-stack web application.",
    tags: ["Python", "PyTorch", "EfficientNet", "Grad-CAM", "React", "Flask"],
    github: "https://github.com/DivyaSree0912/Project_O_dtect",
    featured: true,
    status: "Jan 2026 – Present",
    problem:
      "Oral cancer is a significant health concern, and early-stage classification across Normal, Benign, Pre-Cancer, and Cancer categories requires a system that is both accurate and interpretable. Clinicians need to understand why a model makes a particular prediction before they can act on it.",
    solution:
      "A full-stack deep learning application with a hierarchical ensemble of three EfficientNet-B2 binary classifiers, Grad-CAM explainability, and a React + Flask web interface for image upload, prediction, and heatmap visualization.",
    contributions: [
      "Built the data preprocessing pipeline: duplicate removal (MD5 hashing), corruption checks, and image resizing",
      "Implemented data augmentation using Albumentations (horizontal flip, rotation, brightness/contrast, blur) — 3 augmented copies per image",
      "Designed and trained 3 binary EfficientNet-B2 classifiers in a hierarchical cascade: Normal/Abnormal → PreCancer/Cancer → Benign/Malignant",
      "Also trained a direct 4-class EfficientNet-B2 classifier (Normal, Oral Cancer, Benign Lesions, Lichen Planus)",
      "Implemented two-stage fine-tuning: Stage 1 (classifier-only, 5 epochs) → Stage 2 (full model, 20–25 epochs with early stopping)",
      "Used Focal Loss and WeightedRandomSampler to handle class imbalance",
      "Integrated Grad-CAM on the features[-1] layer to generate visual explanations for each prediction",
      "Built the Flask ensemble server with a /predict endpoint that returns classification + GradCAM heatmap",
      "Built the React/TypeScript frontend with image upload, crop/zoom, GradCAM viewer, confidence visualization, patient form, case history, and PDF report generation",
    ],
    technology: {
      ML: [
        "Python",
        "PyTorch",
        "EfficientNet-B0/B2",
        "Grad-CAM",
        "Albumentations",
        "scikit-learn",
      ],
      Backend: ["Flask", "Flask-CORS"],
      Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      Auth: ["Firebase Authentication"],
    },
    architecture: [
      "Hierarchical cascade (production): 3 binary classifiers — Normal vs. Abnormal → PreCancer vs. Cancer → Benign vs. Malignant",
      "Direct classifier (alternative): 4-class model (Normal, Oral Cancer, Benign Lesions, Lichen Planus)",
      "Production ensemble uses EfficientNet-B2 for all 3 tasks",
    ],
    dataset: [
      "3,536 images across 4 classes: Normal (1,000), Oral Cancer (1,000), Benign Lesions (536), Lichen Planus (1,000)",
      "Train/Val/Test split: 70% / 15% / 15%",
    ],
    implementationDetails: [
      "Hierarchical cascade of 3 binary EfficientNet-B2 classifiers for robust multi-stage classification",
      "Two-stage fine-tuning with Focal Loss and WeightedRandomSampler for class imbalance",
      "Grad-CAM heatmaps on features[-1] layer for model interpretability",
      "Full-stack web app: React frontend + Flask backend with /predict API",
    ],
    results: [
      "18 Grad-CAM heatmap images saved across all classes and tasks",
      "9 saved model weight files (EfficientNet B0 and B2 variants for all 3 tasks)",
      "Per-image test results available in server_model_test_results.json",
    ],
    metricsTable: {
      headers: ["Task", "Class", "Precision", "Recall", "F1-Score"],
      rows: [
        ["Normal vs. Abnormal", "Normal", "0.99", "1.00", "0.99"],
        ["Normal vs. Abnormal", "Abnormal", "1.00", "1.00", "1.00"],
        ["Benign vs. Malignant", "Benign", "0.97", "0.99", "0.98"],
        ["Benign vs. Malignant", "Malignant", "1.00", "0.99", "1.00"],
        ["PreCancer vs. Cancer", "PreCancer", "1.00", "1.00", "1.00"],
        ["PreCancer vs. Cancer", "Cancer", "1.00", "1.00", "1.00"],
      ],
    },
    notes: [
      "Metrics sourced from classification report files in the repository: report_normal_abnormal.txt, report_benign_malignant.txt, report_precancer_cancer.txt",
    ],
  },
  {
    slug: "tourx",
    name: "TourX",
    oneLiner:
      "Tourist safety frontend prototype with SOS interface, safety scoring, and emergency contact management.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/DivyaSree0912/TourX",
    problem:
      "Tourists in unfamiliar locations face safety risks and often lack access to fast, location-aware emergency-response tools.",
    solution:
      "A React/TypeScript frontend prototype for a tourist safety platform, featuring an SOS emergency interface, safety scoring dashboard, location tracking controls, emergency contact management, and an onboarding flow. Built as a concept for the Smart India Hackathon (SIH) 2026.",
    contributions: [],
    technology: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Lucide React",
    ],
    implementationDetails: [
      "13 pages/components covering emergency SOS, tracking, safety maps, alerts, and more",
      "SOS emergency interface with activation button and emergency contact list",
      "Safety scoring dashboard with factor breakdown and recommendations",
      "Location tracking controls with sharing toggles",
    ],
    results: [
      "Related to Smart India Hackathon (SIH) 2026 participation",
    ],
    notes: [
      "This is a frontend prototype. All data is static/hardcoded. There is no backend, no database integration, and no live API calls.",
    ],
  },
  {
    slug: "phone-detection",
    name: "AI Interview Mobile Phone Detection",
    oneLiner:
      "YOLOv8-based computer vision module for detecting mobile phone usage during AI interviews.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    github:
      "https://github.com/DivyaSree0912/AI-Interview-Mobile-Phone-Detection",
    problem:
      "Maintaining interview integrity requires detecting when candidates use mobile phones during video interviews. Manual monitoring does not scale.",
    solution:
      "A computer vision module using YOLOv8 and OpenCV that processes interview video frames to detect mobile phone usage, producing boolean flags and confidence scores.",
    contributions: [
      "Built the detection pipeline using Python, YOLOv8, and OpenCV",
      "Implemented video frame processing and phone detection logic",
      "Produced structured detection results with confidence scores",
    ],
    technology: ["Python", "YOLOv8", "OpenCV"],
    implementationDetails: [
      "YOLOv8 object detection applied to interview video frames",
      "Detection output includes a boolean phone_detected flag and a confidence score",
      "Tested example: phone_detected=true, confidence ≈ 0.88 (single test case)",
    ],
    results: [
      "Tested detection example: phone_detected=true, confidence ≈ 0.88 (single test case)",
    ],
    notes: [
      "The 0.88 confidence figure is from a single test case and should not be generalized as overall model accuracy.",
    ],
  },
  {
    slug: "interview-manager",
    name: "AI Interview Session Manager",
    oneLiner:
      "Backend system for managing AI interview session lifecycles with REST APIs and MongoDB.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    github:
      "https://github.com/DivyaSree0912/ai-interview-session-manager",
    problem:
      "AI interview platforms need robust session management — tracking session state, enforcing lifecycle rules, and providing structured, validated API responses for frontend consumption.",
    solution:
      "A Node.js/Express.js backend with MongoDB that manages the full lifecycle of AI interview sessions through REST APIs, with strict state enforcement and structured JSON responses.",
    contributions: [
      "Built the backend application using Node.js, Express.js, MongoDB, and Mongoose",
      "Designed and implemented REST API endpoints for session management",
      "Implemented session lifecycle with six statuses: CREATED, IN_PROGRESS, PAUSED, COMPLETED, FAILED, EXPIRED",
      "Enforced business rules — e.g., preventing answer submission after a session is COMPLETED",
      "Implemented input validation and structured JSON response formatting",
    ],
    technology: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    implementationDetails: [
      "Six distinct session states: CREATED → IN_PROGRESS → PAUSED → COMPLETED / FAILED / EXPIRED",
      "Business logic prevents invalid state transitions (e.g., no answers accepted after COMPLETED)",
      "Validation layer ensures all API inputs meet expected schemas",
      "All responses follow a consistent structured JSON format",
    ],
    results: [],
  },
  {
    slug: "codealpha-ecommerce",
    name: "CodeAlpha Simple E-Commerce Store",
    oneLiner:
      "Full-stack e-commerce web application with product catalog, cart, user auth, and order management.",
    tags: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/DivyaSree0912/CodeAlpha_SimpleEcommerceStore",
    status: "June 2026",
    problem:
      "E-commerce platforms require a cohesive full-stack architecture — managing product listings, handling customer shopping carts, securing authentication, and persistently tracking order lifecycles.",
    solution:
      "A full-stack e-commerce web application developed with Node.js, Express.js, and MongoDB that enables product catalog browsing, cart operations, user registration/login, and order processing.",
    contributions: [
      "Built RESTful API endpoints for product CRUD operations, cart management, and order submission",
      "Implemented user registration and login flows with session/state handling",
      "Integrated MongoDB schemas for products, user accounts, and customer orders",
      "Designed responsive frontend interfaces for product catalogs, detailed views, cart, and order history",
    ],
    technology: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML/CSS"],
    implementationDetails: [
      "REST API endpoints: GET/POST/DELETE /products, POST /register, POST /login, GET/POST /orders",
      "Clean separation of frontend views (product, cart, orders) and Express backend controllers",
      "MongoDB document storage for product inventories and customer order histories",
    ],
    results: [
      "Developed as part of the CodeAlpha Full Stack Development Internship",
    ],
    notes: [
      "Developed as part of the CodeAlpha Full Stack Development Internship.",
    ],
  },
  {
    slug: "codealpha-project-management",
    name: "CodeAlpha Project Management Tool",
    oneLiner:
      "Full-stack project and task management dashboard with project tracking, task status workflows, and search/filtering.",
    tags: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/DivyaSree0912/CodeAlpha_ProjectManagementTool",
    status: "June 2026",
    problem:
      "Managing software projects requires centralized visibility — tracking multiple projects, organizing task backlogs, monitoring status workflows, and keeping teams aligned without complex overhead.",
    solution:
      "A full-stack project management web application built with Node.js, Express.js, MongoDB, and JavaScript featuring a centralized dashboard, task CRUD operations, progress analytics, and filtering.",
    contributions: [
      "Implemented full-stack architecture with Express backend and modular client interfaces",
      "Built task workflow engine supporting status transitions (To Do, In Progress, Completed)",
      "Designed dashboard analytics tracking total projects and categorized task counters",
      "Implemented project search by title and task status filtering",
    ],
    technology: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3"],
    implementationDetails: [
      "Centralized dashboard displaying project lists, task progress bars, and completion metrics",
      "RESTful endpoints for project creation, task assignment, status updates, and deletion",
      "Search and status filter capabilities for quick navigation",
    ],
    results: [
      "Developed as part of the CodeAlpha Full Stack Development Internship",
    ],
    notes: [
      "Developed as part of the CodeAlpha Full Stack Development Internship.",
    ],
  },
  {
    slug: "intelliview",
    name: "IntelliView Orchestrator",
    oneLiner:
      "AI-powered interview orchestration backend with Gemini-driven question generation.",
    tags: ["Python", "Gemini API"],
    github: "https://github.com/DivyaSree0912/intelliview-orchestrator",
    problem:
      "AI-powered interviews require reliable backend orchestration — validated configurations, proper environment setup, and dynamically generated questions tailored to specific job descriptions. Without this, interview systems produce generic, untraceable questions.",
    solution:
      "A backend orchestration system that validates configuration and environment readiness, then uses the Gemini API to generate interview questions from job descriptions. Each generated question is tagged with source information for traceability.",
    contributions: [
      "Implemented configuration validation and environment checks",
      "Built Gemini-powered question generation (generate_questions with configurable count)",
      "Ensured AI-generated questions are tagged with source information for traceability",
      "Managed Gemini API configuration and environment variable setup",
    ],
    technology: ["Python", "Gemini API"],
    implementationDetails: [
      "generate_questions(job_description, count) generates interview questions from a given job description using the Gemini API",
      "Each generated question includes source tagging for traceability",
      "Configuration validation ensures the environment is correctly set up before any API calls",
    ],
    results: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
