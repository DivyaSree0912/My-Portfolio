import { ImageResponse } from "next/og";

export const alt = "Dadi Divya Sree — Software Engineer · AI/ML";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#F5F0EB",
          color: "#1A1A1A",
          fontFamily: "sans-serif",
          border: "16px solid #E0D9D1",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6B6560",
            marginBottom: 24,
            fontWeight: 600,
          }}
        >
          01 // PORTFOLIO · SOFTWARE ENGINEERING · AI/ML
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: -2,
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          DADI DIVYA SREE
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#6B6560",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          I build AI-powered applications, intelligent systems, and practical
          full-stack solutions.
        </div>
      </div>
    ),
    { ...size },
  );
}
