import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Cell | Assistência Técnica e Celulares em Iguatu",
  description: "Assistência técnica de celulares em Iguatu. Reparos, manutenção, acessórios e produtos para o seu smartphone. Fale com a Marcos Cell."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="scroll-smooth"><body>{children}</body></html>;
}
