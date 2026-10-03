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
  /** Durak / buluşma noktası. Gerçek adres ve koordinatlarla değiştirin. */
  address: 'Cumhuriyet Meydanı, Artuklu / Mardin',
  location: { lat: 37.3129, lng: 40.7351 },
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
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${site.location.lat},${site.location.lng}`;
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${site.location.lat},${site.location.lng}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${site.location.lat},${site.location.lng}&z=16&hl=tr&output=embed`;
