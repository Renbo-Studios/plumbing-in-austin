import type { RequestHandler } from './$types';
import { fetchBlogPosts } from '$lib/server/blog';
import { siteConfig } from '$lib/config';

interface SitemapPage {
	loc: string;
	priority: string;
	changefreq: string;
	lastmod?: string;
}

export const GET: RequestHandler = async () => {
	const baseUrl = `https://${siteConfig.domain}`;

	// Fetch all published blog posts
	const { posts } = await fetchBlogPosts({ limit: 1000 });

	// Static pages
	const staticPages: SitemapPage[] = [
		{ loc: '/', priority: '1.0', changefreq: 'weekly' },
		{ loc: '/blog', priority: '0.9', changefreq: 'daily' }
	];

	// Generate blog post URLs
	const blogPages: SitemapPage[] = posts.map((post) => ({
		loc: `/blog/${post.slug}`,
		lastmod: post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : undefined,
		priority: '0.8',
		changefreq: 'monthly'
	}));

	const allPages: SitemapPage[] = [...staticPages, ...blogPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600' // Cache for 1 hour
		}
	});
};
