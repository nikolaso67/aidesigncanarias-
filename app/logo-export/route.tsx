import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "500px",
          height: "500px",
          background: "linear-gradient(135deg, #312e81 0%, #4338ca 60%, #6366f1 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          borderRadius: "48px",
          gap: "12px",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "56px",
          }}
        >
          🤖
        </div>

        {/* AI */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          AI
        </div>

        {/* Design */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "rgba(199,210,254,0.95)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Design
        </div>

        {/* Canarias */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 500,
            color: "rgba(199,210,254,0.7)",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Canarias
        </div>
      </div>
    ),
    { width: 500, height: 500 }
  );
}
