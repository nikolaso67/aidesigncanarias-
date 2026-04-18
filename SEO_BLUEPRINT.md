# SEO Blueprint — AI Design Canarias
## Procedimiento estándar para rankear cualquier web nueva

---

## FASE 1 — SEO TÉCNICO (Día 1, antes de publicar)

### 1.1 Metadata en layout.tsx

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://tudominio.com"),
  title: {
    default: "Negocio | Servicio principal en Ciudad",  // ≤60 caracteres
    template: "%s | Nombre Negocio",
  },
  description: "Descripción clara del negocio, qué hace, dónde, CTA.",  // 150-160 chars
  keywords: ["keyword1 ciudad", "keyword2 región", ...],
  alternates: { canonical: "https://tudominio.com" },
  openGraph: { type: "website", locale: "es_ES", url, siteName, title, description, images },
  twitter: { card: "summary_large_image", title, description, images },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};
```

**Reglas de oro:**
- Title: keyword principal primero, ciudad/región, nombre negocio al final
- Description: incluye keyword + beneficio + CTA ("Presupuesto gratis", "Llámanos hoy")
- Nunca duplicar title = description
- Canonical siempre en la homepage

---

### 1.2 JSON-LD Structured Data (en layout.tsx head)

Para negocios locales, siempre incluir `LocalBusiness` + `WebSite`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Nombre Negocio",
      "description": "...",
      "url": "https://...",
      "email": "...",
      "telephone": "+34...",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle...",
        "addressLocality": "Ciudad",
        "addressRegion": "Región",
        "postalCode": "...",
        "addressCountry": "ES"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "...", "longitude": "..." },
      "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
      "priceRange": "€€",
      "image": "https://.../og-image.jpg"
    }
  ]
}
```

**Validar en:** https://search.google.com/test/rich-results

---

### 1.3 Sitemap y Robots

```ts
// app/sitemap.ts — Next.js genera /sitemap.xml automáticamente
export default function sitemap() {
  return [{ url: "https://tudominio.com", lastModified: new Date(), priority: 1 }];
}

// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://tudominio.com/sitemap.xml",
  };
}
```

---

### 1.4 OG Image (og-image.jpg)

- Tamaño: **1200×630px**
- Incluir: logo + nombre negocio + tagline + ciudad
- Formato: JPG (no PNG, pesa menos)
- Ruta: `/public/og-image.jpg`
- Herramienta rápida: Canva, Figma, o generador automático

---

### 1.5 Favicon

Archivos necesarios en `/public/`:
- `favicon.ico` (32×32)
- `apple-touch-icon.png` (180×180)
- Herramienta: https://realfavicongenerator.net

---

## FASE 2 — SEO ON-PAGE (Día 1-2)

### 2.1 Jerarquía de encabezados

```
H1: Solo UNO por página. Keyword principal + localización.
    Ejemplo: "Diseño web profesional en Gran Canaria"
H2: Una por sección. Keywords secundarias.
    Ejemplo: "Nuestros servicios", "¿Por qué elegirnos?", "Contacto"
H3: Subsecciones o cards de servicios individuales.
```

### 2.2 Keywords por tipo de negocio local

Patrón: `[servicio] + [ciudad/zona]`

Ejemplos:
- "diseño web Gran Canaria"
- "páginas web Las Palmas"
- "agencia web Canarias"
- "tienda online Gran Canaria"
- "SEO Las Palmas de Gran Canaria"

**Herramientas para encontrar keywords:**
- Google Search (sugerencias y "búsquedas relacionadas")
- Google Keyword Planner (gratis con cuenta Google Ads)
- Ubersuggest (freemium)
- AnswerThePublic (preguntas que hace la gente)

### 2.3 Alt text en todas las imágenes

```tsx
<Image alt="Diseño web profesional en Gran Canaria — AI Design Canarias" ... />
// Formato: descripción de la imagen + keyword + nombre negocio
```

### 2.4 URLs limpias

- Sin parámetros: `/servicios` no `/servicios?id=1`
- Sin mayúsculas: `/diseno-web` no `/DisenoWeb`
- Con guiones: `/tienda-online` no `/tienda_online`

---

## FASE 3 — SEO LOCAL (Día 2-3, crítico para negocios físicos)

### 3.1 Google Business Profile ⭐ (Lo más importante)

1. Crear/reclamar perfil en https://business.google.com
2. Rellenar TODO: nombre, categoría, dirección, teléfono, horario, web
3. Subir mínimo 10 fotos (interior, exterior, equipo, trabajos)
4. Pedir reseñas a clientes actuales
5. Publicar posts semanales con ofertas/noticias
6. Responder TODAS las reseñas (positivas y negativas)

**Regla: NAP (Name, Address, Phone) debe ser idéntico en web, Google Business y cualquier directorio**

### 3.2 Directorios locales (menciones = backlinks)

Registrar en estos directorios de forma gratuita:
- [ ] Google Business Profile
- [ ] Bing Places for Business
- [ ] Apple Maps Connect
- [ ] Páginas Amarillas (paginas-amarillas.es)
- [ ] Yelp España
- [ ] Hotfrog
- [ ] 11870.com
- [ ] Cylex España
- [ ] Kompass.com

**Para Canarias específicamente:**
- [ ] Canarias7 directorio empresas
- [ ] ElDiario.es Canarias

### 3.3 Schema de horario y teléfono

Añadir al JSON-LD del negocio:
```json
"telephone": "+34 XXX XXX XXX",
"openingHoursSpecification": [
  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" }
]
```

---

## FASE 4 — VELOCIDAD Y CORE WEB VITALS

### 4.1 Métricas objetivo

| Métrica | Objetivo |
|---------|----------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID/INP (Interactividad) | < 100ms |
| CLS (Layout Shift) | < 0.1 |
| TTFB (Time to First Byte) | < 800ms |

**Herramientas:**
- https://pagespeed.web.dev (Google oficial)
- https://web.dev/measure

### 4.2 Checklist de velocidad para Next.js

- [x] Imágenes con `next/image` (optimización automática)
- [x] Fuentes con `next/font` (sin layout shift)
- [ ] Imágenes hero con `priority` prop
- [ ] Lazy loading en imágenes below-the-fold
- [ ] Comprimir og-image.jpg (< 200KB)
- [ ] No cargar librerías JS pesadas innecesarias

---

## FASE 5 — GOOGLE SEARCH CONSOLE (Día 3)

1. Ir a https://search.google.com/search-console
2. Añadir propiedad → Dominio → `tudominio.com`
3. Verificar vía DNS (añadir registro TXT en GoDaddy/Namecheap)
4. Enviar sitemap: Sitemaps → `https://tudominio.com/sitemap.xml`
5. Pedir indexación manual: URL Inspection → `https://tudominio.com` → "Request Indexing"
6. Esperar 3-7 días para ver datos

---

## FASE 6 — CONTENT MARKETING (Mes 1 en adelante)

### 6.1 Blog (opcional pero muy potente)

Crear `/blog` con artículos sobre:
- "¿Cuánto cuesta una página web en Gran Canaria?" (intención transaccional)
- "Por qué tu negocio necesita web en 2025"
- "Cómo aparece mi negocio en Google Maps"
- "Diseño web vs. Wix vs. WordPress en Canarias"

**Frecuencia:** 1 artículo/mes mínimo

### 6.2 Estructura de un artículo SEO

```
URL: /blog/cuanto-cuesta-pagina-web-gran-canaria
H1: ¿Cuánto cuesta una página web en Gran Canaria en 2025?
Intro: 100-150 palabras con keyword
H2: Tipos de web y sus precios
H2: ¿Qué incluye el precio?
H2: Factores que afectan al coste
H2: Conclusión
CTA: Formulario de contacto o enlace a servicios
Longitud: mínimo 800 palabras
```

---

## FASE 7 — LINK BUILDING (Mes 2 en adelante)

### 7.1 Links fáciles de conseguir (gratis)

- Directorios locales (ver Fase 3.2)
- Perfil en redes sociales con link a la web (LinkedIn, Instagram, Facebook)
- Colaboraciones con otros negocios locales (intercambio de menciones)
- Aparición en medios locales (prensa Canarias si haces algo noticiable)
- Testimoniales en webs de clientes ("Web hecha por AI Design Canarias")

### 7.2 Táctica de link building para agencias web

Cuando hagas una web para un cliente:
1. Añadir "Diseño web por AI Design Canarias" en el footer con link
2. Pedir al cliente que mencione tu agencia en su Google Business Profile
3. Publicar el caso de éxito en tu web/blog (con permiso del cliente)

---

## FASE 8 — SEGUIMIENTO Y MEDICIÓN

### 8.1 Google Analytics 4

1. Crear propiedad en https://analytics.google.com
2. Añadir a Next.js:
```tsx
// app/layout.tsx — añadir en <head>
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX" />
<Script id="ga">
  {`window.dataLayer=[];function gtag(){dataLayer.push(arguments)}
  gtag('js',new Date());gtag('config','G-XXXXXXXX');`}
</Script>
```
3. Actualizar CSP: añadir `https://www.googletagmanager.com` a `script-src` y `connect-src`

### 8.2 KPIs a revisar mensualmente

| KPI | Herramienta | Objetivo |
|-----|-------------|---------|
| Posición en Google | Search Console | Top 10 keywords objetivo |
| Clics orgánicos | Search Console | Crecimiento mes a mes |
| Impresiones | Search Console | Visibilidad de marca |
| Usuarios | Analytics | Crecimiento mes a mes |
| Tasa de conversión | Analytics | > 2% (formulario/chat) |
| Core Web Vitals | PageSpeed | Verde en los 3 |

---

## CHECKLIST RÁPIDO — Nueva web (copiar y pegar)

### Antes de publicar
- [ ] Title y description únicos, con keyword + ciudad
- [ ] Canonical URL configurada
- [ ] Open Graph: og:title, og:description, og:image (1200×630)
- [ ] JSON-LD LocalBusiness con dirección y teléfono reales
- [ ] sitemap.xml accesible
- [ ] robots.txt apuntando al sitemap
- [ ] Favicon en todas las resoluciones
- [ ] H1 único con keyword principal
- [ ] Alt text en todas las imágenes
- [ ] Core Web Vitals verdes en PageSpeed

### Primera semana
- [ ] Google Business Profile creado y completo
- [ ] Enviado sitemap en Search Console
- [ ] Indexación manual solicitada
- [ ] Registrado en 5 directorios mínimo

### Primer mes
- [ ] Primeras reseñas de clientes en Google
- [ ] Primer artículo de blog publicado
- [ ] Links básicos (redes sociales, directorios)
- [ ] Revisión de Search Console — primeras keywords apareciendo

---

## HERRAMIENTAS ESENCIALES (todas gratis o freemium)

| Herramienta | Para qué | URL |
|-------------|----------|-----|
| Google Search Console | Monitorizar indexación y keywords | search.google.com/search-console |
| Google Analytics 4 | Tráfico y comportamiento | analytics.google.com |
| PageSpeed Insights | Core Web Vitals | pagespeed.web.dev |
| Rich Results Test | Validar JSON-LD | search.google.com/test/rich-results |
| Google Business Profile | SEO local | business.google.com |
| Ubersuggest | Investigación de keywords | app.ubersuggest.com |
| Screaming Frog (500 URLs gratis) | Auditoría técnica | screamingfrog.co.uk |
| Ahrefs Webmaster Tools (gratis) | Backlinks y keywords | ahrefs.com/webmaster-tools |

---

## TIMELINE REALISTA

| Periodo | Qué pasa |
|---------|----------|
| Semana 1-2 | Google indexa la web |
| Mes 1-2 | Apareces para keywords de marca y long-tail |
| Mes 3-4 | Primeras posiciones top 20 para keywords objetivo |
| Mes 6 | Top 10 para keywords locales de mediana competencia |
| Mes 12 | Resultados sólidos, tráfico orgánico establecido |

**El SEO es una inversión a largo plazo. Consistencia > perfección.**

---

*Blueprint creado por AI Design Canarias — Actualizar con cada web nueva que se rankee.*
