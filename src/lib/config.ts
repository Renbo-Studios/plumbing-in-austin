// Site configuration - this file gets customized per microsite
// The domain is used to fetch blog posts from the orbit-sites API

export const siteConfig = {
	// The domain of this microsite (without protocol)
	// This is injected during site generation from orbit-sites
	domain: import.meta.env.VITE_SITE_DOMAIN || 'example.renbo.network',

	// The orbit-sites API URL (where blog posts are fetched from)
	apiUrl: import.meta.env.VITE_API_URL || 'https://admin.renbo.site',

	// Site metadata (injected during generation)
	name: import.meta.env.VITE_SITE_NAME || 'My Site',
	description: import.meta.env.VITE_SITE_DESCRIPTION || 'A professional microsite'
};

// API endpoint for fetching blog posts
export function getBlogApiUrl(endpoint: string = '') {
	return `${siteConfig.apiUrl}/api/public/blog${endpoint}`;
}
