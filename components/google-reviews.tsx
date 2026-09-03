import { ExternalLink, Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";

export type GoogleReview = { name: string; rating: number; text: string };

// Adicione aqui somente avaliações reais, copiadas do Perfil da Empresa no Google.
export const googleReviews: GoogleReview[] = [];

const GOOGLE_RATING = 4.8;
const GOOGLE_REVIEW_COUNT = 99;

function GoogleMark() {
  return <span aria-label="Google" title="Google" className="google-mark">G</span>;
}

function RatingStars({ rating }: { rating: number }) {
  return <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
    {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} className={index < rating ? "fill-[#f4b740] text-[#f4b740]" : "fill-slate-100 text-slate-200"}/>)}
  </div>;
}

export function GoogleReviews() {
  const featuredReviews = googleReviews.filter((review) => review.rating >= 4);

  return <section aria-labelledby="google-reviews-title" className="bg-[#f5f8fc] pb-20 md:pb-28"><div className="container-page">
    <div data-reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(3,20,38,.06)] md:p-9">
      <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3"><GoogleMark/><div>
          <p className="text-xs font-extrabold uppercase tracking-[.12em] text-brand">Opiniões de clientes</p>
          <h2 id="google-reviews-title" className="mt-1 text-xl font-black tracking-[-.025em] text-brand-dark">Avaliações no Google</h2>
        </div></div>
        <div className="flex items-center gap-3 sm:text-right">
          <span className="text-3xl font-black text-brand-dark">{GOOGLE_RATING.toFixed(1).replace(".", ",")}</span>
          <div><RatingStars rating={Math.round(GOOGLE_RATING)}/><p className="mt-1 text-xs text-muted">{GOOGLE_REVIEW_COUNT} avaliações no Google</p></div>
        </div>
      </div>
      {featuredReviews.length > 0 ? <div className="reviews-track mt-6" tabIndex={0} role="region" aria-label="Avaliações em destaque; use as setas do teclado ou deslize para navegar">
        {featuredReviews.map((review, index) => <article key={`${review.name}-${index}`} className="review-card">
          <div className="flex items-start justify-between gap-4"><RatingStars rating={review.rating}/><GoogleMark/></div>
          <blockquote className="mt-4 text-sm leading-6 text-slate-600">“{review.text}”</blockquote>
          <p className="mt-4 text-sm font-extrabold text-brand-dark">— {review.name}</p>
        </article>)}
      </div> : <div className="py-8 text-center md:py-10">
        <p className="text-sm font-bold text-brand-dark">Veja o que os clientes dizem sobre a Marcos Cell no Google.</p>
      </div>}
      <div className="border-t border-slate-100 pt-5">
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="google-reviews-link">Ver todas as avaliações no Google <ExternalLink size={15}/></a>
      </div>
    </div>
  </div></section>;
}
