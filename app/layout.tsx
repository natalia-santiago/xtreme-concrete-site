// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://xtremeconcretecutting.com"; // update if your final domain is different

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Xtreme Concrete Cutting & Demolition | Goldsboro NC",
  description:
    "Concrete cutting, core drilling, slab cutting, and demolition services in Goldsboro, NC and surrounding areas. Fast scheduling and precision work.",
  keywords: [
    "concrete cutting Goldsboro NC",
    "core drilling Goldsboro NC",
    "concrete demolition Goldsboro NC",
    "slab cutting North Carolina",
    "wall cutting NC",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // LocalBusiness structured data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Xtreme Concrete Cutting & Demolition LLC",
    url: SITE_URL,
    telephone: "+1-919-429-2619",
    email: "xtreme.concretecutting.demo@gmail.com",
    areaServed: [
      "Goldsboro, NC",
      "Wayne County, NC",
      "Wilson, NC",
      "Smithfield, NC",
      "Selma, NC",
      "Kinston, NC",
      "Eastern North Carolina",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goldsboro",
      addressRegion: "NC",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    // What you do (no fake claims—just your listed services)
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Core Drilling" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Concrete Slab Cutting" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Concrete Wall Cutting" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Reinforced Concrete Cutting" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Building Demolition" },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-[#0d0d0d]">
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          // JSON-LD must be a string
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}