// Substitua pelos dados oficiais antes da publicação.
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
export const INSTAGRAM_URL = "https://www.instagram.com/marcoscell90/";
export const TIKTOK_URL = "https://www.tiktok.com/@marcos1986m";
export const MAPS_URL = "https://maps.google.com/?q=Iguatu%2C+Ceara";
// Substitua pela URL oficial do Perfil da Empresa da Marcos Cell no Google.
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=c828aacda31190d4&sxsrf=APpeQnujRFUrCLcFg5RP5yFbKiclWLSrzg:1788430603522&uds=AJ5uw1_a2D0D09lxm8gpKKOTUn4rDNZHtXVBFupfEJCN4bZnyqI7w-jAlqj_q1q9rFFxNeE2Umt7D4kVsBfoQrIjXzPEpwSzTa94zhGT8lpVZYJ-wEyneA8AN5dIrNEXmIVT67_-ZuuBEb8RtXhks4tgw7QywKwtdg&q=Marcos+Cell+Cr%C3%ADticas&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_4OngkgZy5R8wGYljjH_2twqFAsiROtejc1b6GaINC6Ex0ysOcK8GzQlwqMk3zzMoOOhLFnnp10KyKCuPwvsHXjrMVIL&hl=pt-PT&sa=X&ved=2ahUKEwjJ7M-Wl9KWAxXrRP4FHf5jJyMQ_4MLegQITRAO&biw=1920&bih=957&dpr=1";
export const BASE_PATH = "/marcos-cell";

export function assetPath(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

const message = "Olá! Vi o site da Marcos Cell e gostaria de saber mais sobre um serviço.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
