"use client";
import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppButton } from "./ui";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/constants";
import { TikTokIcon } from "./social-icons";

const links = [["iPhone", "#reparos-iphone"], ["Serviços", "#servicos"], ["Produtos", "#produtos"], ["Sobre", "#sobre"], ["Localização", "#localizacao"]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <header className={`site-header sticky top-0 z-50 ${scrolled ? "site-header-scrolled" : ""}`}>
    <div className="container-page flex h-[82px] items-center justify-between">
      <a href="#inicio" className="text-[1.35rem] font-black tracking-[-.06em] text-brand-dark" aria-label="Início da Marcos Cell">Marcos<span className="text-brand">Cell</span><span className="ml-1 inline-block h-1.5 w-1.5 bg-brand align-top" /></a>
      <nav className="hidden items-center gap-7 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}</nav>
      <div className="hidden items-center gap-5 lg:flex">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Marcos Cell" className="social-icon-link"><Instagram size={21}/></a>
        <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok da Marcos Cell" className="social-icon-link"><TikTokIcon width={21} height={21}/></a>
        <WhatsAppButton>WhatsApp</WhatsAppButton>
      </div>
      <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 lg:hidden" aria-label="Abrir menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden"><div className="container-page flex flex-col">{links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} href={href} className="border-b border-slate-100 py-4 font-semibold">{label}</a>)}<div className="grid grid-cols-2 gap-3 py-4"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mobile-social-link"><Instagram size={19}/> Instagram <span aria-hidden="true">↗</span></a><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="mobile-social-link"><TikTokIcon width={19} height={19}/> TikTok <span aria-hidden="true">↗</span></a></div><WhatsAppButton className="mt-1">Falar no WhatsApp</WhatsAppButton></div></nav>}
  </header>;
}
