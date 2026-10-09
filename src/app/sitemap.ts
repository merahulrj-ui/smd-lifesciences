import { MetadataRoute } from 'next';
import { BIOTECH_PRODUCTS } from '@/data/products';
import { STATIC_INSIGHTS } from '@/data/insights';

const BASE_URL = 'https://lifesciences.smdmedicare.in';
const LAST_MODIFIED_CORE = new Date('2026-10-08T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/ivd-raw-materials`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/recombinant-antigens`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/diagnostic-cdmo`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic product routes (all 70 validated B2B reagents)
  const productRoutes: MetadataRoute.Sitemap = BIOTECH_PRODUCTS.map((product) => ({
    url: `${BASE_URL}/products/${product.code}`,
    lastModified: LAST_MODIFIED_CORE,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Static insight whitepaper routes
  const insightRoutes: MetadataRoute.Sitemap = STATIC_INSIGHTS.map((item) => ({
    url: `${BASE_URL}/insights/${item.slug}`,
    lastModified: new Date(item.updated_at || item.created_at),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes, ...insightRoutes];
}
