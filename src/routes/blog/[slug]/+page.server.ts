import type { PageServerLoad } from './$types';
import { fetchBlogPost } from '$lib/server/blog';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const post = await fetchBlogPost(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};
