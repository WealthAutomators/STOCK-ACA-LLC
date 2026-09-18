import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/navbar/site-header";
import { Footer } from "@/components/footer/footer";
import { Providers } from "@/components/providers/Providers";
import { company } from "@/data/company";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteTitle = `${company.name} — ${company.tagline}`;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.name }],
  openGraph: {
    title: siteTitle,
    description: company.description,
    siteName: company.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/hero/hero-1.jpg", width: 2200, height: 1400, alt: `${company.name} — contemporary living` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: company.description,
    images: ["/hero/hero-1.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.displayName,
  description: company.description,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
