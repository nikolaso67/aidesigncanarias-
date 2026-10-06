import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://images.unsplash.com https://www.googletagmanager.com https://www.clarity.ms",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://region1.google-analytics.com https://region1.analytics.google.com https://www.clarity.ms",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Post antiguo («… 2025») con precios de mercado que contradecían los
      // nuestros y competía con la página de precios: se consolida en ella.
      {
        source: "/blog/cuanto-cuesta-una-pagina-web-en-gran-canaria-2026-06-29",
        destination: "/servicios/diseno-web-gran-canaria",
        permanent: true,
      },
      // Dos posts sobre el mismo tema competían entre sí: se queda el más completo
      {
        source: "/blog/como-atraer-clientes-turistas-con-tu-web-en-el-sur-de-gran-canaria-2026-05-21",
        destination: "/blog/como-atraer-clientes-turistas-con-tu-web-en-el-sur-de-gran-canaria-2026-07-20",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
