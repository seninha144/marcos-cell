"use client";
import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppButton } from "./ui";
import { INSTAGRAM_URL } from "@/lib/constants";

const links = [["Serviços", "#servicos"], ["Produtos", "#produtos"], ["Sobre", "#sobre"], ["Localização", "#localizacao"]];

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
      <div className="hidden items-center gap-5 lg:flex"><a href={INSTAGRAM_URL} target="_blank" aria-label="Instagram" className="text-slate-500 transition hover:text-brand"><Instagram size={20}/></a><WhatsAppButton>WhatsApp</WhatsAppButton></div>
      <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 lg:hidden" aria-label="Abrir menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden"><div className="container-page flex flex-col">{links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} href={href} className="border-b border-slate-100 py-4 font-semibold">{label}</a>)}<WhatsAppButton className="mt-5">Falar no WhatsApp</WhatsAppButton></div></nav>}
  </header>;
}
