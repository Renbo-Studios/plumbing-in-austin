// Server-side blog data fetching utilities
import { siteConfig, getBlogApiUrl } from '$lib/config';

// Re-export types from shared module
export type {
	BlogPost,
	BlogPostDetail,
	EditorJsContent,
	EditorJsBlock,
	TableOfContentsItem,
	BlogCategory,
	BlogTag,
	BlogListResponse,
	BlogCategoriesResponse
} from '$lib/blog-types';

import type { BlogListResponse, BlogPostDetail, BlogCategoriesResponse } from '$lib/blog-types';

// Fetch blog posts for this site
export async function fetchBlogPosts(options: {
	limit?: number;
	offset?: number;
	category?: string;
	tag?: string;
} = {}): Promise<BlogListResponse> {
	const params = new URLSearchParams();
	params.set('domain', siteConfig.domain);
	if (options.limit) params.set('limit', options.limit.toString());
	if (options.offset) params.set('offset', options.offset.toString());
	if (options.category) params.set('category', options.category);
	if (options.tag) params.set('tag', options.tag);

	const url = `${getBlogApiUrl()}?${params.toString()}`;

	try {
		const response = await fetch(url, {
			headers: { 'Accept': 'application/json' }
		});

		if (!response.ok) {
			console.error(`Blog API error: ${response.status} ${response.statusText}`);
			return { posts: [], total: 0, limit: 10, offset: 0, filters: { category: null, tag: null } };
		}

		return await response.json();
	} catch (error) {
		console.error('Failed to fetch blog posts:', error);
		return { posts: [], total: 0, limit: 10, offset: 0, filters: { category: null, tag: null } };
	}
}

// Fetch a single blog post by slug
export async function fetchBlogPost(slug: string): Promise<BlogPostDetail | null> {
	const params = new URLSearchParams();
	params.set('domain', siteConfig.domain);
	params.set('slug', slug);

	const url = `${getBlogApiUrl()}?${params.toString()}`;

	try {
		const response = await fetch(url, {
			headers: { 'Accept': 'application/json' }
		});

		if (!response.ok) {
			if (response.status === 404) return null;
			console.error(`Blog API error: ${response.status} ${response.statusText}`);
			return null;
		}

		const data = await response.json();
		return data.post || null;
	} catch (error) {
		console.error('Failed to fetch blog post:', error);
		return null;
	}
}

// Fetch categories and tags for this site
export async function fetchBlogCategories(): Promise<BlogCategoriesResponse> {
	const params = new URLSearchParams();
	params.set('domain', siteConfig.domain);

	const url = `${getBlogApiUrl('/categories')}?${params.toString()}`;

	try {
		const response = await fetch(url, {
			headers: { 'Accept': 'application/json' }
		});

		if (!response.ok) {
			console.error(`Blog categories API error: ${response.status}`);
			return { categories: [], tags: [] };
		}

		return await response.json();
	} catch (error) {
		console.error('Failed to fetch blog categories:', error);
		return { categories: [], tags: [] };
	}
}

// Re-export formatting functions from shared module
export { formatDate, formatReadingTime } from '$lib/blog-types';
