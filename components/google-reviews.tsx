"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";

export type GoogleReview = { name: string; rating: number; text: string; date: string };

export const googleReviews: GoogleReview[] = [
  { name: "Anny Clecya (Clecia barbosa)", rating: 5, text: "Excelente atendimento. Serviços qualificados de ótima qualidade. Indico demais 👏", date: "há 3 meses" },
  { name: "reserva Logistica", rating: 4, text: "Ótimo atendimento e serviços completos, sem enganação ao cliente. Eu recomendo.", date: "há 2 meses" },
  { name: "Geovana Uchoa", rating: 5, text: "Excelente atendimento. Muito bom ☺️", date: "há 5 meses" },
  { name: "Aureni Batista Cardoso", rating: 5, text: "Muito bom. Resolveram meu problema. Atendimento top.", date: "há 7 meses" },
  { name: "Naiane Lima", rating: 5, text: "Ótima, atendimento excelente e trabalho entregue rapidamente.", date: "há 3 meses" },
  { name: "Francisco Lima", rating: 5, text: "Atendimento muito bom e excelente. Vocês estão de parabéns.", date: "há 2 meses" },
  { name: "Aurelio Alves", rating: 5, text: "Muito boa, não apenas a questão do atendimento, mas também do serviço prestado. Recomendo muito.", date: "há 7 meses" },
  { name: "Izadora Fernandes", rating: 5, text: "Excelente atendimento. Gostei muito e indico.", date: "há 8 meses" },
  { name: "HELIO LAVOR", rating: 5, text: "Ótimo atendimento, serviço executado com qualidade e garantia! Super indico.", date: "há 7 meses" },
  { name: "Antonio Val Silva Silva", rating: 5, text: "Ótima, super indico, melhor assistência da cidade.", date: "há 2 meses" },
  { name: "Junior Gomes", rating: 5, text: "Ótima, muito bom o atendimento.", date: "há 8 meses" },
  { name: "Mariadelourdes Silva", rating: 5, text: "Ótimo atendimento.", date: "há 2 meses" },
  { name: "Jhones Gomes", rating: 5, text: "Melhor assistência do Iguatu. Ótimo atendimento e serviço de qualidade.", date: "há 7 meses" },
  { name: "Maria Eduarda", rating: 5, text: "Serviço de qualidade. Recomendo muitooooo!", date: "há 6 meses" },
  { name: "Luiz Pedro Lavor", rating: 5, text: "Excelente! Ótimo atendimento.", date: "há 11 meses" },
  { name: "Maria Eva Alves", rating: 5, text: "Melhor atendimento da região.", date: "há 7 meses" },
  { name: "Lourdes Lurdinha", rating: 5, text: "Excelente atendimento.", date: "há 2 meses" },
];

const GOOGLE_RATING = 4.8;
const GOOGLE_REVIEW_COUNT = 99;

function GoogleBadge() {
  return <span aria-label="Google" className="google-badge">Google</span>;
}

function RatingStars({ rating, size = 15 }: { rating: number; size?: number }) {
  return <div className="flex shrink-0 gap-0.5" aria-label={`${rating} de 5 estrelas`}>
    {Array.from({ length: 5 }, (_, index) => <Star key={index} size={size} aria-hidden="true" className={index < rating ? "fill-[#f4b740] text-[#f4b740]" : "fill-slate-100 text-slate-200"} />)}
  </div>;
}

export function GoogleReviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const featuredReviews = googleReviews.filter((review) => review.rating === 4 || review.rating === 5);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 2);
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateControls();
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateControls]);

  const scrollReviews = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".review-card");
    if (!track || !card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return <section id="google-reviews" aria-labelledby="google-reviews-title" className="google-reviews-section"><div className="container-page">
    <div className="google-reviews-shell">
      <div className="google-reviews-header">
        <div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-brand">Opiniões de clientes</p><h2 id="google-reviews-title" className="mt-2 text-2xl font-black tracking-[-.03em] text-brand-dark md:text-3xl">Avaliações no Google</h2></div>
        <div className="google-rating-summary"><div className="flex items-center gap-3"><span className="text-3xl font-black tracking-[-.04em] text-brand-dark">{GOOGLE_RATING.toFixed(1).replace(".", ",")}</span><RatingStars rating={Math.round(GOOGLE_RATING)} size={18} /></div><p className="mt-1 text-sm text-muted">{GOOGLE_REVIEW_COUNT} avaliações no Google</p></div>
      </div>

      <div className="relative mt-8">
        <div ref={trackRef} onScroll={updateControls} className="reviews-track" tabIndex={0} role="region" aria-label="Avaliações de clientes; deslize ou use as setas para navegar">
          {featuredReviews.map((review, index) => <article key={`${review.name}-${index}`} className="review-card">
            <div className="flex items-start justify-between gap-4"><RatingStars rating={review.rating} /><GoogleBadge /></div>
            <span aria-hidden="true" className="review-quote">“</span>
            <blockquote className="review-text">{review.text}</blockquote>
            <footer className="mt-auto border-t border-slate-100 pt-4"><p className="text-sm font-extrabold text-brand-dark">{review.name}</p><p className="mt-1 text-xs text-muted">{review.date}</p></footer>
          </article>)}
        </div>
        <button type="button" onClick={() => scrollReviews(-1)} disabled={!canScrollLeft} className="review-arrow review-arrow-left" aria-label="Avaliações anteriores"><ChevronLeft size={18} aria-hidden="true" /></button>
        <button type="button" onClick={() => scrollReviews(1)} disabled={!canScrollRight} className="review-arrow review-arrow-right" aria-label="Próximas avaliações"><ChevronRight size={18} aria-hidden="true" /></button>
      </div>

      <div className="mt-7 border-t border-slate-100 pt-5"><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="google-reviews-link">Ver todas as avaliações no Google <ExternalLink size={15} aria-hidden="true" /></a></div>
    </div>
  </div></section>;
}
