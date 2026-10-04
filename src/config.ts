// Sitenin tüm iletişim bilgileri tek yerden yönetilir.
// Telefon numarasını değiştirmek için yalnızca bu dosyayı düzenlemeniz yeterli.

export const site = {
  name: 'Bi Taksi Mardin',
  city: 'Mardin',
  driver: 'Ahmet Bey',
  /** Ekranda görünen format */
  phoneDisplay: '0539 398 16 12',
  /** tel: linki için uluslararası format (boşluksuz) */
  phoneE164: '+905393981612',
  /** WhatsApp için başında + olmadan ülke koduyla */
  whatsapp: '905393981612',
  whatsappMessage: 'Merhaba, taksi çağırmak istiyorum. Konumum: ',
  /** Durak / buluşma noktası (ekranda görünen adres) */
  address: 'Kadim Cafe Mardin, Artuklu / Mardin',
  /** Google Haritalar'daki işletme adı: "Konum" ve "Yol Tarifi" linkleri bu adla arar */
  mapsPlace: 'Kadim Cafe Mardin',
  /** Google Haritalar → Paylaş → Harita yerleştir bölümündeki iframe'in src adresi */
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.589779464369!2d40.70942687609481!3d37.32854367210126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400a8f1e5b1d085f%3A0x1e387fa884e8a46d!2sKadim%20Cafe%20Mardin!5e0!3m2!1str!2str!4v1791108063715!5m2!1str!2str',
  hours: '7 gün 24 saat açık',
  /**
   * Google yorum linki. Google İşletme Profili → "Yorum iste" / "Yorum formu paylaş"
   * bölümünden alınır. Örn: https://g.page/r/XXXXXXXX/review
   */
  googleReviewUrl: 'https://g.page/r/BURAYA_ISLETME_KODU/review',
  description:
    "Mardin'de 7/24 güvenli ve hızlı taksi hizmeti. Havaalanı transferi, şehir içi ulaşım ve tur hizmeti için hemen arayın veya WhatsApp'tan yazın.",
};

export const telHref = `tel:${site.phoneE164}`;
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsPlace)}`;
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsPlace)}`;
export const mapEmbedSrc = site.mapEmbedSrc;
