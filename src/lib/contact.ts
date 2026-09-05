// Configuracion centralizada de contacto.
// IMPORTANTE: reemplazar WHATSAPP_PHONE por el numero real del Centro Artesanal Cusco
// (formato: codigo de pais + numero, sin espacios ni simbolos, ej. '51984123456').
export const WHATSAPP_PHONE = '51XXXXXXXXX';

export const DISPLAY_PHONE = '+51 XXX XXX XXX';

export function getWhatsAppUrl(message: string): string {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
