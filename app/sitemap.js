export default function sitemap() {
  const base = 'https://www.evconsults.pk';
  const now = new Date().toISOString();
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/licensing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/start-ev-business-pakistan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ev-license-requirements`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/cost-setup-ev-charging`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ac-vs-dc-chargers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/best-locations-ev-charging`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ev-business-model-petrol-pumps`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ev-charging-housing-societies`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ev-opportunity-investors`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/technical-requirements-ev`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ev-feasibility-study`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
