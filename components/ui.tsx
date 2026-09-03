import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`brand-button group ${className}`}><MessageCircle className="brand-button-icon" size={18} /><span>{children}</span><ArrowUpRight className="brand-button-arrow" size={17}/></a>;
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <div className="max-w-2xl">{eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}<h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">{title}</h2>{text && <p className="mt-5 text-base leading-7 text-muted md:text-lg">{text}</p>}</div>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="inline-flex items-center gap-2 font-bold text-brand hover:text-brand-dark">{children}<ArrowUpRight size={17} /></a>;
}
