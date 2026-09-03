import Image from "next/image";
import { assetPath } from "@/lib/constants";

export function HeroVisual() {
  return <div className="hero-art relative h-[390px] w-full sm:h-[500px] lg:h-[610px]" aria-label="Técnico da Marcos Cell realizando reparo em smartphone">
    <div className="hedgehog-shape absolute right-[-12%] top-[3%] h-[72%] w-[78%] bg-brand opacity-[.10]" />
    <svg className="absolute inset-0 h-full w-full text-brand opacity-20" viewBox="0 0 600 650" fill="none" aria-hidden="true"><path d="M35 450C155 205 350 90 590 115" stroke="currentColor" strokeWidth="3"/><path d="M15 500C190 270 365 190 600 190" stroke="currentColor"/><path d="M125 585C270 430 410 350 610 345" stroke="currentColor" strokeWidth="2"/></svg>
    <div className="hero-repair-photo absolute inset-x-[3%] bottom-[3%] top-[5%] overflow-hidden border-[8px] border-white bg-brand-dark shadow-[0_45px_70px_-30px_rgba(3,20,38,.55)] sm:left-[8%]">
      <Image src={assetPath("/images/Loja/consertando-telefone.webp")} alt="Técnico da Marcos Cell consertando um smartphone na bancada" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-[center_62%]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-deep/90 to-transparent"/>
      <div className="absolute bottom-6 left-6 text-white"><p className="text-[10px] font-black uppercase tracking-[.2em] text-blue-200">Reparo de smartphones</p><p className="mt-1 text-lg font-black">Experiência na bancada</p></div>
    </div>
  </div>;
}
