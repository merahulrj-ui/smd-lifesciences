import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileDrawer from "@/components/MobileDrawer";
import BottomNav from "@/components/BottomNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SearchModal from "@/components/SearchModal";
import FontAwesomeLoader from "@/components/FontAwesomeLoader";
import { UIProvider } from "@/context/UIContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lifesciences.smdmedicare.in'),
  applicationName: 'SMD Life Sciences',
  title: {
    default: "SMD Life Sciences & Diagnostic Solutions | Recombinant Antigens & Antibodies",
    template: "%s | SMD Life Sciences",
  },
  description: "SMD Life Sciences & Diagnostic Solutions - B2B biological raw materials supplier and CDMO in technical association with Pentavalent Bio Sciences, Bangalore. High-affinity antigens, antibodies, and conjugates.",
  keywords: [
    "SMD Life Sciences",
    "IVD raw materials India",
    "recombinant antigens manufacturer",
    "monoclonal antibodies Bangalore",
    "lateral flow rapid test reagents",
    "colloidal gold conjugate",
    "CDMO diagnostic development"
  ],
  authors: [{ name: "SMD Life Sciences" }],
  creator: "SMD Life Sciences & Pentavalent Bio Sciences",
  publisher: "SMD Medicare Life Sciences Division",
  openGraph: {
    title: "SMD Life Sciences & Diagnostic Solutions",
    description: "High-Purity Biological Raw Materials & Custom CDMO Services for IVD Manufacturers.",
    url: 'https://lifesciences.smdmedicare.in',
    siteName: 'SMD Life Sciences',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lifesciences.smdmedicare.in/icon-512.png',
        width: 512,
        height: 512,
        alt: 'SMD Life Sciences Logo',
      }
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMD Life Sciences & Diagnostic Solutions | Recombinant Antigens & Antibodies',
    description: 'High-Purity Biological Raw Materials & Custom CDMO Services for IVD Manufacturers.',
    images: ['https://lifesciences.smdmedicare.in/icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lifesciences.smdmedicare.in',
  },
};

const organizationSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://lifesciences.smdmedicare.in/#organization',
      name: 'SMD Life Sciences & Diagnostic Solutions',
      legalName: 'SMD Medicare Private Limited',
      url: 'https://lifesciences.smdmedicare.in',
      logo: 'https://lifesciences.smdmedicare.in/icon-512.png',
      description: 'B2B biological raw materials supplier and CDMO in technical association with Pentavalent Bio Sciences, Bangalore. High-affinity antigens, monoclonal antibodies, and colloidal gold conjugates for IVD manufacturers.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560100',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9555422455',
        contactType: 'technical sales',
        areaServed: ['IN', 'US', 'GB', 'AE', 'DE', 'FR', 'JP'],
        availableLanguage: ['English', 'Hindi'],
      },
      knowsAbout: [
        'IVD Raw Materials',
        'Recombinant Antigens',
        'Monoclonal Antibodies',
        'Lateral Flow Assay Reagents',
        'Colloidal Gold Conjugates',
        'Diagnostic CDMO Services',
        'In Vitro Diagnostic Assay Development',
        'Lateral Flow Test Development'
      ],
      parentOrganization: {
        '@type': 'Organization',
        '@id': 'https://www.smdmedicare.in/#organization',
        name: 'SMD Medicare',
        url: 'https://www.smdmedicare.in',
      },
      memberOf: {
        '@type': 'Organization',
        name: 'Pentavalent Bio Sciences',
        url: 'https://lifesciences.smdmedicare.in/about',
      },
      sameAs: [
        'https://linkedin.com/company/smdmedicare',
        'https://x.com/smd_medicare',
        'https://facebook.com/smdmedicare'
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://lifesciences.smdmedicare.in/#website',
      url: 'https://lifesciences.smdmedicare.in',
      name: 'SMD Life Sciences',
      publisher: {
        '@id': 'https://lifesciences.smdmedicare.in/#organization',
      },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaGraph) }}
        />
      </head>
      <body className={`${plusJakartaSans.className} ${plusJakartaSans.variable} font-sans antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <UIProvider>
          <FontAwesomeLoader />
          <Navbar />
          <MobileDrawer />
          <SearchModal />
          <main className="flex-grow pt-[76px] pb-[70px] lg:pb-0">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <BottomNav />
        </UIProvider>
      </body>
    </html>
  );
}
