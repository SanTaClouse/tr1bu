import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tr1bu.com',
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://tr1bu.com/en',
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://tr1bu.com/es',
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
