import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://aidesigncanarias.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Design Canarias | Diseño Web con IA en Gran Canaria",
    template: "%s | AI Design Canarias",
  },
  description:
    "Agencia de diseño web e inteligencia artificial en Gran Canaria. Webs profesionales, SEO local, tiendas online y chatbots con IA. Presupuesto gratis en 24h.",
  keywords: [
    "diseño web Gran Canaria",
    "agencia web Canarias",
    "páginas web Gran Canaria",
    "diseño web Las Palmas",
    "SEO Gran Canaria",
    "posicionamiento web Canarias",
    "tienda online Gran Canaria",
    "chatbot IA empresa",
    "inteligencia artificial negocios",
    "diseño web barato Canarias",
    "agencia digital Gran Canaria",
    "web profesional Canarias",
  ],
  authors: [{ name: "AI Design Canarias", url: SITE_URL }],
  creator: "AI Design Canarias",
  publisher: "AI Design Canarias",
  alternates: {
    canonical: SITE_URL,
    languages: { "es-ES": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "AI Design Canarias",
    title: "AI Design Canarias | Diseño Web con IA en Gran Canaria",
    description:
      "Agencia de diseño web e inteligencia artificial en Gran Canaria. Webs profesionales, SEO local, tiendas online y chatbots con IA. Presupuesto gratis en 24h.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Design Canarias — Diseño web con inteligencia artificial en Gran Canaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Design Canarias | Diseño Web con IA en Gran Canaria",
    description:
      "Agencia de diseño web e IA en Gran Canaria. Webs profesionales, SEO, tiendas online y chatbots. Presupuesto gratis.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AI Design Canarias",
      description: "Agencia de diseño web e inteligencia artificial en Gran Canaria",
      inLanguage: "es-ES",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "AI Design Canarias",
      description:
        "Agencia de diseño web e inteligencia artificial en Gran Canaria. Webs profesionales, SEO, tiendas online y chatbots con IA.",
      url: SITE_URL,
      email: "info@aidesigncanarias.com",
      image: `${SITE_URL}/opengraph-image`,
      logo: `${SITE_URL}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Palmas de Gran Canaria",
        addressRegion: "Gran Canaria",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.1235",
        longitude: "-15.4366",
      },
      areaServed: [
        { "@type": "City", name: "Las Palmas de Gran Canaria" },
        { "@type": "Island", name: "Gran Canaria" },
        { "@type": "AdministrativeArea", name: "Islas Canarias" },
      ],
      priceRange: "€€",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de diseño web e IA",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño web profesional" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integración de IA y chatbots" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO y posicionamiento web" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tiendas online" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Identidad visual y branding" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mantenimiento web" } },
        ],
      },
      sameAs: [],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
