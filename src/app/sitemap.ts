import { MetadataRoute } from 'next';
import { BIOTECH_PRODUCTS } from '@/data/products';
import pool from '@/lib/db';

const BASE_URL = 'https://lifesciences.smdmedicare.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ivd-raw-materials`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/recombinant-antigens`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/diagnostic-cdmo`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic product routes (all 64+ validated B2B reagents)
  const productRoutes: MetadataRoute.Sitemap = BIOTECH_PRODUCTS.map((product) => ({
    url: `${BASE_URL}/products/${product.code}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic insight routes
  let insightRoutes: MetadataRoute.Sitemap = [];
  try {
    const [rows] = await pool.query(
      'SELECT slug, updated_at, created_at FROM blog WHERE status = "published" AND division = "biotech"'
    ) as any[];

    if (Array.isArray(rows)) {
      insightRoutes = rows
        .filter((r) => r.slug)
        .map((r) => ({
          url: `${BASE_URL}/insights/${r.slug.replace(/\.html$/, '')}`,
          lastModified: r.updated_at ? new Date(r.updated_at) : (r.created_at ? new Date(r.created_at) : now),
          changeFrequency: 'weekly',
          priority: 0.7,
        }));
    }
  } catch (err) {
    // If DB is unavailable during static build, fallback safely
  }

  return [...staticRoutes, ...productRoutes, ...insightRoutes];
}
