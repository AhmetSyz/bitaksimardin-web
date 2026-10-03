import type { ImageMetadata } from 'astro';

// src/assets/taxi/ klasörüne atılan tüm fotoğraflar otomatik olarak siteye eklenir.
// Sıralama dosya adına göredir (01.jpg, 02.jpg, ...). Astro build sırasında
// fotoğrafları küçültüp WebP'ye çevirir; orijinal boyutlu dosyalar kullanıcıya gitmez.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/taxi/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

/** İsteğe bağlı: dosya adına göre açıklama (alt metin). Örn: '01.jpg': 'Aracın önden görünümü' */
const captions: Record<string, string> = {};

export interface TaxiPhoto {
  src: ImageMetadata;
  alt: string;
}

export const taxiPhotos: TaxiPhoto[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, 'tr', { numeric: true }))
  .map(([path, mod], i) => {
    const file = path.split('/').pop()!;
    return { src: mod.default, alt: captions[file] ?? `Taksi aracımız, fotoğraf ${i + 1}` };
  });
