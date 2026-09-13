export const site = {
  name: "Dadi Divya Sree",
  nameDisplay: "DADI DIVYA SREE",
  shortName: "DS",
  tagline: "Software Engineer · AI/ML · Builder",
  statement:
    "I build AI-powered applications, intelligent systems, and practical full-stack solutions.",
  email: "divyapersonal05@gmail.com",
  github: "https://github.com/DivyaSree0912",
  linkedin: "https://linkedin.com/in/dadidivyasree",
  location: "Visakhapatnam, India",
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    school: "GITAM University",
    duration: "2024 — 2028",
    cgpa: "CGPA: 9.3 / 10",
  },
} as const;

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
