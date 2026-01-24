// Blog types - can be imported by both server and client code

export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	excerpt: string | null;
	featuredImage: string | null;
	featuredImageAlt: string | null;
	heroLayout: 'standard' | 'full-width' | 'split' | 'overlay' | 'minimal';
	readingTime: number | null;
	category: {
		id: string;
		name: string;
		slug: string;
	} | null;
	tags: Array<{
		id: string;
		name: string;
		slug: string;
	}>;
	authorName: string;
	publishedAt: string | null;
}

export interface BlogPostDetail extends BlogPost {
	content: string; // Legacy markdown
	blocks: EditorJsContent | null; // Editor.js blocks
	contentVersion: number; // 1 = markdown, 2 = blocks
	tableOfContents: TableOfContentsItem[] | null;
	seoTitle: string | null;
	seoDescription: string | null;
	canonicalUrl: string | null;
	noindex: boolean;
}

export interface EditorJsContent {
	time: number;
	version: string;
	blocks: EditorJsBlock[];
}

export interface EditorJsBlock {
	id: string;
	type: string;
	data: Record<string, unknown>;
}

export interface TableOfContentsItem {
	id: string;
	text: string;
	level: number;
}

export interface BlogCategory {
	id: string;
	name: string;
	slug: string;
	description: string | null;
	postCount: number;
}

export interface BlogTag {
	id: string;
	name: string;
	slug: string;
	postCount: number;
}

export interface BlogListResponse {
	posts: BlogPost[];
	total: number;
	limit: number;
	offset: number;
	filters: {
		category: BlogCategory | null;
		tag: string | null;
	};
}

export interface BlogCategoriesResponse {
	categories: BlogCategory[];
	tags: BlogTag[];
}

// Format date for display
export function formatDate(dateString: string | null): string {
	if (!dateString) return '';
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

// Format reading time
export function formatReadingTime(minutes: number | null): string {
	if (!minutes) return '';
	return `${minutes} min read`;
}
