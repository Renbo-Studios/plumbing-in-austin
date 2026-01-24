import type { RequestHandler } from './$types';
import { siteConfig } from '$lib/config';

export const GET: RequestHandler = async () => {
	const baseUrl = `https://${siteConfig.domain}`;

	const robotsTxt = `# Robots.txt for ${siteConfig.name}
User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Allow AI crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Perplexitybot
Allow: /
`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400' // Cache for 24 hours
		}
	});
};
