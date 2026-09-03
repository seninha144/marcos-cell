import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Cell | Conserto de iPhone e Celulares em Iguatu",
  description: "Assistência técnica em Iguatu com experiência em reparos de iPhone, troca de tela, bateria, conector de carga e manutenção de celulares. Fale com a Marcos Cell."
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
