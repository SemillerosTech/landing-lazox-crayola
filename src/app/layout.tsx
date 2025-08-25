import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "./providers";
import Script from "next/script"; // <-- IMPORTANTE

export const metadata: Metadata = {
  title:
    "Didacti + Lazox | Productos Crayola Originales + Desarrollo Emocional CDMX",
  description:
    "40 años acompañando familias mexicanas. Productos Crayola originales al mejor precio + Sistema SILEE de desarrollo emocional.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "productos crayola",
    "útiles escolares",
    "desarrollo emocional infantil",
    "psicología infantil CDMX",
    "sistema SILEE",
    "educación integral",
    "empresas familiares mexicanas",
  ],
  openGraph: {
    title: "Didacti + Lazox | Educación Integral Familiar Mexicana",
    description:
      "Productos Crayola originales + acompañamiento emocional especializado. 40 años cuidando familias mexicanas con valores profundos.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/placeholder.svg"],
  },
  authors: [{ name: "Didacti y Lazox - Empresas familiares mexicanas" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads / gtag.js */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17500675756"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17500675756');
          `}
        </Script>

        <Script id="conversion-event" strategy="afterInteractive">
          {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17500675756/PUS0CN2bwo0bEKy9_JhB',
            'transaction_id': ''
          });
        `}
        </Script>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
