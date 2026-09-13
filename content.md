# Portfolio Content — DADI DIVYA SREE

> **Content rules**: Every item below is sourced from verified information. Nothing is invented. Remaining gaps are marked `[NEEDS INPUT]`.

---

## 1. Identity

| Field | Value |
|-------|-------|
| **Full Name** | Dadi Divya Sree |
| **Role** | Software Engineering + AI/ML |
| **Education** | B.Tech Computer Science & Engineering, GITAM University |
| **Duration** | 2024–2028 |
| **CGPA** | 9.3 / 10 |
| **Location** | Visakhapatnam, India |

---

## 2. Hero

**Name Display**: DADI DIVYA SREE

**Tagline**: Software Engineer · AI/ML · Builder

**Core Statement**:
> I build AI-powered applications, intelligent systems, and practical full-stack solutions.

**Primary CTA**: View Projects

**Secondary CTA**: Get in Touch

---

## 3. About

**Bio**:

I'm Divya Sree — a Computer Science undergraduate at GITAM University (9.3 CGPA) building at the intersection of software engineering and applied AI. My work spans explainable deep learning for medical imaging, AI-powered backend systems, and computer vision pipelines. I build across the stack: EfficientNet and YOLOv8 on the ML side, Node.js and React on the product side. I placed 1st at a GDGoC state-level hackathon, participated in SIH 2025, and have solved 100+ problems on LeetCode. I focus on building systems that are practical, well-engineered, and backed by real evidence.

**Education Display**:
- B.Tech CSE — GITAM University, Visakhapatnam
- 2024–2028 · CGPA: 9.3/10

**Current Focus Areas**:
- Deep learning and computer vision (explainable AI)
- Backend systems and API design
- Full-stack application development


---

## 4. Featured Projects

Projects listed in priority order. Each card links to a detailed case study (§5).

### Card 1 — OdTect

- **Name**: OdTect
- **One-liner**: Explainable multiclass oral cancer detection using EfficientNet-B2 and Grad-CAM, with a full-stack web application.
- **Tags**: Python · PyTorch · EfficientNet · Grad-CAM · React · Flask
- **GitHub**: [Project_O_dtect](https://github.com/DivyaSree0912/Project_O_dtect) · PUBLIC


### Card 2 — IntelliView Orchestrator

- **Name**: IntelliView Orchestrator
- **One-liner**: AI-powered interview orchestration backend with Gemini-driven question generation.
- **Tags**: Python · Gemini API
- **GitHub**: [intelliview-orchestrator](https://github.com/DivyaSree0912/intelliview-orchestrator) · PUBLIC (fork)


### Card 3 — AI Interview Session Manager

- **Name**: AI Interview Session Manager
- **One-liner**: Backend system for managing AI interview session lifecycles with REST APIs and MongoDB.
- **Tags**: Node.js · Express.js · MongoDB
- **GitHub**: [ai-interview-session-manager](https://github.com/DivyaSree0912/ai-interview-session-manager) · PUBLIC


### Card 4 — AI Interview Mobile Phone Detection

- **Name**: AI Interview Mobile Phone Detection
- **One-liner**: YOLOv8-based computer vision module for detecting mobile phone usage during AI interviews.
- **Tags**: Python · YOLOv8 · OpenCV
- **GitHub**: [AI-Interview-Mobile-Phone-Detection](https://github.com/DivyaSree0912/AI-Interview-Mobile-Phone-Detection) · PUBLIC


### Card 5 — TourX

- **Name**: TourX
- **One-liner**: Tourist safety frontend prototype with SOS interface, safety scoring, and emergency contact management.
- **Tags**: React · TypeScript · Vite · Tailwind CSS
- **GitHub**: [TourX](https://github.com/DivyaSree0912/TourX) · PUBLIC


---

## 5. Project Case Studies

### 5.1 OdTect — Explainable Multiclass Oral Cancer Detection

**Status**: Jan 2026 – Present

**Problem**:
Oral cancer is a significant health concern, and early-stage classification across Normal, Benign, Pre-Cancer, and Cancer categories requires a system that is both accurate and interpretable. Clinicians need to understand *why* a model makes a particular prediction before they can act on it.

**Solution**:
A full-stack deep learning application with a hierarchical ensemble of three EfficientNet-B2 binary classifiers, Grad-CAM explainability, and a React + Flask web interface for image upload, prediction, and heatmap visualization.

**My Contribution**:
- Built the data preprocessing pipeline: duplicate removal (MD5 hashing), corruption checks, and image resizing
- Implemented data augmentation using Albumentations (horizontal flip, rotation, brightness/contrast, blur) — 3 augmented copies per image
- Designed and trained 3 binary EfficientNet-B2 classifiers in a hierarchical cascade: Normal/Abnormal → PreCancer/Cancer → Benign/Malignant
- Also trained a direct 4-class EfficientNet-B2 classifier (Normal, Oral Cancer, Benign Lesions, Lichen Planus)
- Implemented two-stage fine-tuning: Stage 1 (classifier-only, 5 epochs) → Stage 2 (full model, 20–25 epochs with early stopping)
- Used Focal Loss and WeightedRandomSampler to handle class imbalance
- Integrated Grad-CAM on the `features[-1]` layer to generate visual explanations for each prediction
- Built the Flask ensemble server with a `/predict` endpoint that returns classification + GradCAM heatmap
- Built the React/TypeScript frontend with image upload, crop/zoom, GradCAM viewer, confidence visualization, patient form, case history, and PDF report generation

**Technology**:
- **ML**: Python, PyTorch, EfficientNet-B0/B2, Grad-CAM, Albumentations, scikit-learn
- **Backend**: Flask, Flask-CORS
- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Auth**: Firebase Authentication

**Architecture**:
- **Hierarchical cascade** (production): 3 binary classifiers — Normal vs. Abnormal → PreCancer vs. Cancer → Benign vs. Malignant
- **Direct classifier** (alternative): 4-class model (Normal, Oral Cancer, Benign Lesions, Lichen Planus)
- Production ensemble uses EfficientNet-B2 for all 3 tasks

**Dataset**:
- 3,536 images across 4 classes: Normal (1,000), Oral Cancer (1,000), Benign Lesions (536), Lichen Planus (1,000)
- Train/Val/Test split: 70% / 15% / 15%
- Dataset source: [NEEDS INPUT — origin of images not documented in repo]

**Results / Evidence** *(from classification report files in the repository)*:

| Task | Class | Precision | Recall | F1-Score |
|------|-------|-----------|--------|----------|
| Normal vs. Abnormal | Normal | 0.99 | 1.00 | 0.99 |
| Normal vs. Abnormal | Abnormal | 1.00 | 1.00 | 1.00 |
| Benign vs. Malignant | Benign | 0.97 | 0.99 | 0.98 |
| Benign vs. Malignant | Malignant | 1.00 | 0.99 | 1.00 |
| PreCancer vs. Cancer | PreCancer | 1.00 | 1.00 | 1.00 |
| PreCancer vs. Cancer | Cancer | 1.00 | 1.00 | 1.00 |

*Source: `mlproject/results/report_normal_abnormal.txt`, `report_benign_malignant.txt`, `report_precancer_cancer.txt`*

- **18 Grad-CAM heatmap images** saved across all classes and tasks (`mlproject/results/gradcam_*.png`)
- **9 saved model weight files** (EfficientNet B0 and B2 variants for all 3 tasks)
- **Per-image test results** available in `mlproject/server_model_test_results.json` (31 KB)

**Links**:
- GitHub: [Project_O_dtect](https://github.com/DivyaSree0912/Project_O_dtect) · PUBLIC

---

### 5.2 IntelliView Orchestrator

**Problem**:
AI-powered interviews require reliable backend orchestration — validated configurations, proper environment setup, and dynamically generated questions tailored to specific job descriptions. Without this, interview systems produce generic, untraceable questions.

**Solution**:
A backend orchestration system that validates configuration and environment readiness, then uses the Gemini API to generate interview questions from job descriptions. Each generated question is tagged with source information for traceability.

**My Contribution**:
- Implemented configuration validation and environment checks
- Built Gemini-powered question generation (`generate_questions(job_description, count=10)`)
- Ensured AI-generated questions are tagged with source information for traceability
- Managed Gemini API configuration and environment variable setup

**Technology**:
- Python
- Gemini API

**Key Implementation Details**:
- `generate_questions(job_description, count=10)` generates a configurable number of interview questions from a given job description using the Gemini API
- Each generated question includes source tagging for traceability
- Configuration validation ensures the environment is correctly set up before any API calls

**Results / Evidence**:
- [NEEDS INPUT — example output, number of question types supported, any testing results]

**Links**:
- GitHub: [intelliview-orchestrator](https://github.com/DivyaSree0912/intelliview-orchestrator) · PUBLIC (fork)

---

### 5.3 AI Interview Session Manager

**Problem**:
AI interview platforms need robust session management — tracking session state, enforcing lifecycle rules, and providing structured, validated API responses for frontend consumption.

**Solution**:
A Node.js/Express.js backend with MongoDB that manages the full lifecycle of AI interview sessions through REST APIs, with strict state enforcement and structured JSON responses.

**My Contribution**:
- Built the backend application using Node.js, Express.js, MongoDB, and Mongoose
- Designed and implemented REST API endpoints for session management
- Implemented session lifecycle with six statuses: CREATED, IN_PROGRESS, PAUSED, COMPLETED, FAILED, EXPIRED
- Enforced business rules — e.g., preventing answer submission after a session is COMPLETED
- Implemented input validation and structured JSON response formatting

**Technology**:
- Node.js · Express.js · MongoDB · Mongoose

**Key Implementation Details**:
- Six distinct session states: CREATED → IN_PROGRESS → PAUSED → COMPLETED / FAILED / EXPIRED
- Business logic prevents invalid state transitions (e.g., no answers accepted after COMPLETED)
- Validation layer ensures all API inputs meet expected schemas
- All responses follow a consistent structured JSON format

**Results / Evidence**:
- [NEEDS INPUT — number of API endpoints, any test results, example API response]

**Links**:
- GitHub: [ai-interview-session-manager](https://github.com/DivyaSree0912/ai-interview-session-manager) · PUBLIC

---

### 5.4 AI Interview Mobile Phone Detection

**Problem**:
Maintaining interview integrity requires detecting when candidates use mobile phones during video interviews. Manual monitoring does not scale.

**Solution**:
A computer vision module using YOLOv8 and OpenCV that processes interview video frames to detect mobile phone usage, producing boolean flags and confidence scores.

**My Contribution**:
- Built the detection pipeline using Python, YOLOv8, and OpenCV
- Implemented video frame processing and phone detection logic
- Produced structured detection results with confidence scores

**Technology**:
- Python · YOLOv8 · OpenCV

**Key Implementation Details**:
- YOLOv8 object detection applied to interview video frames
- Detection output includes a boolean `phone_detected` flag and a confidence score
- Tested example: `phone_detected=true`, confidence ≈ 0.88 (single test case)

> **Note**: The 0.88 confidence figure is from a single test case and should not be generalized as overall model accuracy.

**Results / Evidence**:
- Tested detection example: `phone_detected=true`, confidence ≈ 0.88 (single test case)
- [NEEDS INPUT — additional test results, sample detection images/video]

**Links**:
- GitHub: [AI-Interview-Mobile-Phone-Detection](https://github.com/DivyaSree0912/AI-Interview-Mobile-Phone-Detection) · PUBLIC

---

### 5.5 TourX — Tourist Safety Frontend Prototype

**Problem**:
Tourists in unfamiliar locations face safety risks and often lack access to fast, location-aware emergency-response tools.

**Solution**:
A React/TypeScript frontend prototype for a tourist safety platform, featuring an SOS emergency interface, safety scoring dashboard, location tracking controls, emergency contact management, and an onboarding flow. Built as a concept/prototype for the Smart India Hackathon (SIH) 2025.

**My Contribution**:
- [NEEDS INPUT — specify personal contribution vs. AI-generated scaffolding]

**Technology**:
- React 18 · TypeScript · Vite · Tailwind CSS · React Router · Lucide React

**Key Implementation Details**:
- 13 pages/components: Home, Emergency SOS, Tracking, Safety Map, Safety Score, Alerts, Emergency Contacts, IoT Devices, Satellite Comm, Onboarding, Profile, Settings, Help
- SOS emergency interface with activation button and emergency contact list
- Safety scoring dashboard with factor breakdown and recommendations
- Location tracking controls with sharing toggles
- Emergency contact management UI

> **Note**: This is a frontend prototype. All data is static/hardcoded. There is no backend, no database integration, and no live API calls. The interactive map component was planned but is not active in the current codebase.

**Results / Evidence**:
- Related to Smart India Hackathon (SIH) 2025 participation
- [NEEDS INPUT — screenshots, SIH context, any awards for this project]

**Links**:
- GitHub: [TourX](https://github.com/DivyaSree0912/TourX) · PUBLIC

---

## 6. Experience

### Python Development Intern — UptoSkills

**Duration**: 2026 *(exact months: [NEEDS INPUT])*

- Worked on AI interview systems: backend orchestration and API development
- Contributed to IntelliView Orchestrator: configuration validation, Gemini-powered question generation with source tagging
- Worked on interview session management functionality

---

### Full Stack Development Intern — CodeAlpha

**Duration**: June 2026

- Worked on full-stack development projects
- Built backend and database components

---

## 7. Achievements

| Achievement | Details |
|-------------|---------|
| **🥇 1st Place — TechSprint Hackathon** | GDGoC State-Level Hackathon. Advanced to the national round. |
| **Smart India Hackathon (SIH) 2025** | Participated and contributed to an offline SOS alert solution for tourist safety. |
| **100+ LeetCode Problems** | Consistent problem-solving practice across arrays, trees, graphs, DP, and greedy algorithms. |
| **Deloitte Technology Virtual Experience** | Completed the Deloitte Technology Virtual Experience Program. |

---

## 8. Skills

### AI / ML
Machine Learning · Deep Learning · Computer Vision · EfficientNet · YOLOv8 · Grad-CAM · OpenCV · PyTorch

### Languages
Python · Java · C · SQL · JavaScript · TypeScript

### Backend / Full Stack
Node.js · Express.js · Flask · FastAPI · REST APIs · React · Vite · Tailwind CSS

### Databases
MongoDB · MySQL · Mongoose

### Developer Tools
Git · GitHub · VS Code · Postman · Firebase · Figma

### CS Fundamentals
Data Structures & Algorithms · Object-Oriented Programming · DBMS · Operating Systems · Computer Networks · Software Engineering

---

## 9. Problem Solving

| Platform | Metric | Link |
|----------|--------|------|
| **LeetCode** | 100+ problems solved | [NEEDS INPUT — LeetCode profile URL] |

**Topics practiced**:
Arrays · Strings · Linked Lists · Trees · Graphs · Recursion · Dynamic Programming · Greedy Algorithms

---

## 10. Contact

| Channel | Value |
|---------|-------|
| **Email** | divyapersonal05@gmail.com |
| **LinkedIn** | [linkedin.com/in/dadidivyasree](https://linkedin.com/in/dadidivyasree) |
| **GitHub** | [github.com/DivyaSree0912](https://github.com/DivyaSree0912) |
| **Resume PDF** | [NEEDS INPUT] |

---

## 11. Links

| Resource | URL |
|----------|-----|
| **GitHub Profile** | https://github.com/DivyaSree0912 |
| **LinkedIn Profile** | https://linkedin.com/in/dadidivyasree |
| **Portfolio Repository** | https://github.com/DivyaSree0912/My-Portfolio |
| **Email** | divyapersonal05@gmail.com |
| **LeetCode Profile** | [NEEDS INPUT] |

---

## 12. Missing Information

> The following items must be supplied before the portfolio can be fully implemented.

### High Priority

| # | Item | Why it's needed |
|---|------|----------------|
| 1 | **LeetCode profile URL** | For the Problem Solving section. |
| 2 | **UptoSkills internship dates** | Start and end months for 2026. |
| 3 | **OdTect: dataset source** | Origin of the 3,536 images (e.g., Kaggle dataset name). Reviewers will ask. |
| 4 | **TourX: personal contribution** | What specifically did you build vs. what was AI-generated (Bolt)? |

### Medium Priority

| # | Item | Why it's needed |
|---|------|----------------|
| 5 | **Project screenshots / GIFs** | Visual evidence, especially OdTect Grad-CAM heatmaps and TourX UI. |
| 6 | **Professional photo** | For the About section. |
| 7 | **Resume PDF** | For downloadable resume link. |

### Low Priority

| # | Item | Why it's needed |
|---|------|----------------|
| 8 | **Custom domain preference** | e.g., divyasree.dev — for deployment. |
| 9 | **Accent color preference** | Default will be selected from spec if not provided. |

---

*All content above is sourced from verified information. No statistics, metrics, links, or claims have been invented. Items marked `[NEEDS INPUT]` require input before implementation.*
