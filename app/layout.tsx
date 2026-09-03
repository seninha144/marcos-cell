import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Cell | Assistência Técnica de Smartphones em Iguatu",
  description: "Assistência técnica de smartphones em Iguatu para Samsung, Xiaomi, Motorola, Realme e outras marcas, com especialidade em reparos de iPhone. Fale com a Marcos Cell."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marcos Cell",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Joaquim Ailton Alexandre, Nº 97 - Alto do Juca",
      addressLocality: "Iguatu",
      addressRegion: "CE",
      postalCode: "63502-323",
      addressCountry: "BR",
    },
  };
  return <html lang="pt-BR" className="scroll-smooth"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} /></body></html>;
}
