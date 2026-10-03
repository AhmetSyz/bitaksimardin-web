# Bi Taksi Mardin — Landing Page

Astro + Tailwind CSS v4 ile hazırlanmış, mobil öncelikli, tek sayfalık statik taksi sitesi.

## Komutlar

| Komut             | Açıklama                              |
| ----------------- | ------------------------------------- |
| `npm install`     | Bağımlılıkları kurar                  |
| `npm run dev`     | Geliştirme sunucusu (localhost:4321)  |
| `npm run build`   | Yayına hazır çıktıyı `dist/`e üretir  |
| `npm run preview` | Build çıktısını yerelde önizler       |

## Yayına almadan önce

1. **İletişim bilgileri:** `src/config.ts` → isim, telefon, WhatsApp numarası, şoför adı.
2. **Alan adı:** `astro.config.mjs` → `site` alanı.
3. **Konum:** `src/config.ts` → `address` ve `location` (enlem/boylam). Google Haritalar'da noktaya sağ tıklayınca koordinat kopyalanır.
4. **Taksi fotoğrafları:** `src/assets/taxi/` klasörüne `01.jpg`, `02.jpg` … şeklinde atın. Kodda değişiklik gerekmez:
   - Ana sayfadaki galeri kartlarında (ilk 6 fotoğraf, tıklayınca büyür),
   - Hakkımızda hero'sunda 1. ve 2. fotoğraf, İletişim hero'sunda 3. ve 4. fotoğraf (4'ten az varsa 1. ve 2.) görünür.
   - Astro build sırasında fotoğrafları 400–1600px WebP'ye çevirir; büyük orijinaller siteye yüklenmez.
   - iPhone'dan gelen `.heic` dosyaları desteklenmez, önce JPG'ye çevirin.
   - Alt metin vermek için `src/lib/photos.ts` içindeki `captions` nesnesini kullanın.
5. **Hero arka planı:** `public/images/hero-placeholder.svg` yerine gerçek fotoğraf koyup `src/components/Hero.astro` içindeki `src`'yi güncelleyin.
6. **İstatistikler** (`About.astro`): tecrübe yılı, yolcu sayısı, puan gerçek değerlerle değiştirilmeli.

`dist/` klasörü Netlify, Vercel, Cloudflare Pages veya herhangi bir statik hostinge doğrudan yüklenebilir.

## Yapı

```
src/
├── config.ts              # Telefon / WhatsApp / adres / konum (tek kaynak)
├── assets/taxi/           # Taksi fotoğrafları buraya
├── lib/photos.ts          # Fotoğrafları otomatik toplar
├── styles/global.css      # Tailwind tema tokenları, buton efektleri, reveal animasyonu
├── layouts/Layout.astro   # <head>, SEO, JSON-LD, scroll-reveal script'i
├── components/
│   ├── Header.astro       # Üst menü + mobil hamburger menü
│   ├── Hero.astro         # Ana sayfa: slogan, Ara / WhatsApp / Konum butonları
│   ├── Services.astro     # "Neden Biz?" kartları
│   ├── Gallery.astro      # Fotoğraf kartları + büyütme (lightbox)
│   ├── PageHero.astro     # Alt sayfa hero'su (metin + dikey fotoğraflar)
│   ├── PhotoFrame.astro   # Optimize fotoğraf / placeholder
│   ├── About.astro        # Hikâye, güven maddeleri, istatistikler
│   ├── ContactDetails.astro # Telefon, WhatsApp, adres, saat kartları
│   ├── MapSection.astro   # Google Haritalar + yol tarifi
│   ├── CallToAction.astro # "Taksiye mi ihtiyacınız var?" kartı
│   ├── Footer.astro       # Footer + mobil sabit "Hemen Ara" çubuğu
│   └── Icon.astro         # Inline SVG ikonlar
└── pages/
    ├── index.astro        # Ana sayfa
    ├── hakkimizda.astro   # /hakkimizda
    └── iletisim.astro     # /iletisim
```
