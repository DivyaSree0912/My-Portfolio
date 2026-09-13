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
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#60a5fa",
            marginBottom: 24,
          }}
        >
          Software Engineer · AI/ML · Builder
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
          DADI DIVYA SREE
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#a1a1aa",
            maxWidth: 880,
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
