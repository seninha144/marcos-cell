export const WHATSAPP_NUMBER = "5588997462570";
export const INSTAGRAM_URL = "https://www.instagram.com/marcoscell90/";
export const TIKTOK_URL = "https://www.tiktok.com/@marcos1986m";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x7a31fad19f40ad1:0x449950bb7e054048?sa=X&ved=1t:8290&ictx=111";
export const MAPS_URL = GOOGLE_MAPS_URL;
export const STORE_ADDRESS =
  "Av. Joaquim Ailton Alexandre, Nº 97 - Alto do Juca, Iguatu - CE, 63502-323";
// Substitua pela URL oficial do Perfil da Empresa da Marcos Cell no Google.
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=c828aacda31190d4&sxsrf=APpeQnujRFUrCLcFg5RP5yFbKiclWLSrzg:1788430603522&uds=AJ5uw1_a2D0D09lxm8gpKKOTUn4rDNZHtXVBFupfEJCN4bZnyqI7w-jAlqj_q1q9rFFxNeE2Umt7D4kVsBfoQrIjXzPEpwSzTa94zhGT8lpVZYJ-wEyneA8AN5dIrNEXmIVT67_-ZuuBEb8RtXhks4tgw7QywKwtdg&q=Marcos+Cell+Cr%C3%ADticas&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_4OngkgZy5R8wGYljjH_2twqFAsiROtejc1b6GaINC6Ex0ysOcK8GzQlwqMk3zzMoOOhLFnnp10KyKCuPwvsHXjrMVIL&hl=pt-PT&sa=X&ved=2ahUKEwjJ7M-Wl9KWAxXrRP4FHf5jJyMQ_4MLegQITRAO&biw=1920&bih=957&dpr=1";
export const BASE_PATH = "/marcos-cell";

export function assetPath(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl("Olá! Gostaria de saber mais sobre um serviço da Marcos Cell.");
export const IPHONE_REPAIR_WHATSAPP_URL = buildWhatsAppUrl("Olá! Gostaria de pedir um orçamento para reparo do meu iPhone.");
