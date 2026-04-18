import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Design Canarias — Diseño web con IA en Gran Canaria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(129, 140, 248, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "40%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.12)",
          }}
        />

        {/* Top: badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "100px",
            padding: "8px 20px",
          }}
        >
          <span style={{ fontSize: "14px", color: "rgba(199,210,254,1)", letterSpacing: "2px", textTransform: "uppercase" }}>
            Agencia Digital · Gran Canaria
          </span>
        </div>

        {/* Center: main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "#6366f1",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
              }}
            >
              🤖
            </div>
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#c7d2fe" }}>
              AI Design Canarias
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span
              style={{
                fontSize: "58px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              Diseño web
            </span>
            <span
              style={{
                fontSize: "58px",
                fontWeight: 800,
                color: "#818cf8",
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              inteligente
            </span>
          </div>

          <span style={{ fontSize: "22px", color: "rgba(199,210,254,0.8)", maxWidth: "700px", lineHeight: 1.5 }}>
            Webs profesionales, SEO y chatbots con IA para negocios en Canarias
          </span>
        </div>

        {/* Bottom: stats */}
        <div style={{ display: "flex", gap: "40px" }}>
          {[
            { num: "7–14", label: "Días de entrega" },
            { num: "100%", label: "Clientes satisfechos" },
            { num: "24/7", label: "Soporte con IA" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff" }}>{stat.num}</span>
              <span style={{ fontSize: "14px", color: "rgba(199,210,254,0.7)" }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
