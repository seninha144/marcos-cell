import { ExternalLink, Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";

type GoogleReview = { name: string; rating: number; text: string };

// Adicione aqui somente avaliações reais, copiadas do Perfil da Empresa no Google.
const googleReviews: GoogleReview[] = [];

function GoogleMark() {
  return <span aria-label="Google" title="Google" className="google-mark">G</span>;
}

function RatingStars({ rating }: { rating: number }) {
  return <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
    {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} className={index < rating ? "fill-[#f4b740] text-[#f4b740]" : "fill-slate-100 text-slate-200"}/>)}
  </div>;
}

export function GoogleReviews() {
  const reviewCount = googleReviews.length;
  const average = reviewCount ? googleReviews.reduce((total, review) => total + review.rating, 0) / reviewCount : null;

  return <section aria-labelledby="google-reviews-title" className="bg-[#f5f8fc] pb-20 md:pb-28"><div className="container-page">
    <div data-reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(3,20,38,.06)] md:p-9">
      <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3"><GoogleMark/><div>
          <p className="text-xs font-extrabold uppercase tracking-[.12em] text-brand">Opiniões de clientes</p>
          <h2 id="google-reviews-title" className="mt-1 text-xl font-black tracking-[-.025em] text-brand-dark">Avaliações no Google</h2>
        </div></div>
        {average !== null && <div className="flex items-center gap-3 sm:text-right">
          <span className="text-2xl font-black text-brand-dark">{average.toFixed(1).replace(".", ",")}</span>
          <div><RatingStars rating={Math.round(average)}/><p className="mt-1 text-xs text-muted">baseado em {reviewCount} {reviewCount === 1 ? "avaliação" : "avaliações"}</p></div>
        </div>}
      </div>
      {reviewCount > 0 ? <div className="reviews-track mt-6">
        {googleReviews.map((review, index) => <article key={`${review.name}-${index}`} className="review-card">
          <div className="flex items-start justify-between gap-4"><RatingStars rating={review.rating}/><GoogleMark/></div>
          <blockquote className="mt-4 text-sm leading-6 text-slate-600">“{review.text}”</blockquote>
          <p className="mt-4 text-sm font-extrabold text-brand-dark">— {review.name}</p>
        </article>)}
      </div> : <div className="py-8 text-center md:py-10">
        <p className="text-sm font-bold text-brand-dark">Avaliações reais em preparação</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">As opiniões dos clientes serão exibidas aqui assim que os dados oficiais do perfil forem adicionados.</p>
      </div>}
      <div className="border-t border-slate-100 pt-5">
        {GOOGLE_REVIEWS_URL ? <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-extrabold text-brand transition-colors hover:text-brand-dark">Ver todas as avaliações no Google <ExternalLink size={15}/></a> : <span className="inline-flex cursor-not-allowed items-center gap-2 text-sm font-extrabold text-slate-400" title="Adicione a URL oficial do perfil do Google para ativar este link">Ver todas as avaliações no Google <ExternalLink size={15}/></span>}
      </div>
    </div>
  </div></section>;
}
