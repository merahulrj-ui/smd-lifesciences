import { MetadataRoute } from 'next';
import { BIOTECH_PRODUCTS } from '@/data/products';
import { STATIC_INSIGHTS } from '@/data/insights';

export const revalidate = 43200;

const BASE_URL = 'https://lifesciences.smdmedicare.in';
const LAST_MODIFIED_CORE = new Date();

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
      url: `${BASE_URL}/monoclonal-antibodies`,
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
    {
      url: `${BASE_URL}/services/custom-monoclonal-antibody-development`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/services/custom-polyclonal-antibody-production`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/shipping-policy`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/return-policy`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAST_MODIFIED_CORE,
      changeFrequency: 'monthly',
      priority: 0.6,
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
    lastModified: new Date(item.updated_at || item.created_at || item.publishedAt || LAST_MODIFIED_CORE),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes, ...insightRoutes];
}
