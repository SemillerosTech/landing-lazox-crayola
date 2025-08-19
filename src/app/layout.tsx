import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title:
    "Didacti + Lazox | Productos Crayola Originales + Desarrollo Emocional CDMX",
  description:
    "40 años acompañando familias mexicanas. Productos Crayola originales al mejor precio + Sistema SILE de desarrollo emocional.",
  keywords: [
    "productos crayola",
    "útiles escolares",
    "desarrollo emocional infantil",
    "psicología infantil CDMX",
    "sistema SILE",
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
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
