import type { PageServerLoad } from './$types';
import { fetchBlogPosts, fetchBlogCategories } from '$lib/server/blog';

export const load: PageServerLoad = async ({ url }) => {
	const category = url.searchParams.get('category') || undefined;
	const tag = url.searchParams.get('tag') || undefined;
	const page = parseInt(url.searchParams.get('page') || '1');
	const limit = 12;
	const offset = (page - 1) * limit;

	// Fetch posts and categories in parallel
	const [postsData, categoriesData] = await Promise.all([
		fetchBlogPosts({ limit, offset, category, tag }),
		fetchBlogCategories()
	]);

	return {
		posts: postsData.posts,
		total: postsData.total,
		page,
		limit,
		totalPages: Math.ceil(postsData.total / limit),
		categories: categoriesData.categories,
		tags: categoriesData.tags,
		activeCategory: postsData.filters.category,
		activeTag: postsData.filters.tag
	};
};
