import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'OAI-SearchBot',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://lifesciences.smdmedicare.in/sitemap.xml',
    host: 'https://lifesciences.smdmedicare.in',
  };
}

