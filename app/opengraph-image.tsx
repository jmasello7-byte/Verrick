import { ImageResponse } from "next/og";

export const alt = "Verrick AI — Practical AI, apps, and web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f4ef",
          color: "#14201b",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: "-0.03em",
          }}
        >
          Verrick <span style={{ color: "#047857", marginLeft: 12 }}>AI</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.04em",
            }}
          >
            Practical AI, apps, and web for businesses that need results — not
            hype.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#4a5a53",
            }}
          >
            Verrick AI LLC · Illinois
          </div>
        </div>
      </div>
    ),
    size,
  );
}
