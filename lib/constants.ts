// Substitua pelos dados oficiais antes da publicação.
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
export const INSTAGRAM_URL = "https://instagram.com/SEU_USUARIO";
export const MAPS_URL = "https://maps.google.com/?q=Iguatu%2C+Ceara";
export const BASE_PATH = "/marcos-cell";

export function assetPath(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

const message = "Olá! Vi o site da Marcos Cell e gostaria de saber mais sobre um serviço.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
