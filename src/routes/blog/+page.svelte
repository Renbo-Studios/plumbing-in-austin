<script lang="ts">
	import { ArrowRight, Calendar, Clock, Search, ChevronLeft, ChevronRight } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { formatDate, formatReadingTime } from '$lib/blog-types';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: PageData;

	let searchQuery = '';

	// Filter posts based on search query
	$: filteredPosts = searchQuery
		? data.posts.filter(
				(post) =>
					post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					(post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
			)
		: data.posts;

	// Build URL with filters
	function buildFilterUrl(params: { category?: string; tag?: string; page?: number }) {
		const url = new URL($page.url);
		if (params.category !== undefined) {
			if (params.category) url.searchParams.set('category', params.category);
			else url.searchParams.delete('category');
		}
		if (params.tag !== undefined) {
			if (params.tag) url.searchParams.set('tag', params.tag);
			else url.searchParams.delete('tag');
		}
		if (params.page !== undefined) {
			if (params.page > 1) url.searchParams.set('page', params.page.toString());
			else url.searchParams.delete('page');
		}
		return url.pathname + url.search;
	}

	function filterByCategory(slug: string | null) {
		goto(buildFilterUrl({ category: slug || undefined, page: 1 }));
	}

	function filterByTag(slug: string) {
		goto(buildFilterUrl({ tag: slug, page: 1 }));
	}

	function goToPage(pageNum: number) {
		goto(buildFilterUrl({ page: pageNum }));
	}
</script>

<svelte:head>
	<title>Blog | Expert Tips & Insights</title>
	<meta
		name="description"
		content="Read expert articles, tips, and insights from our blog."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-32 md:pt-40 pb-16">
		<div class="text-center max-w-4xl mx-auto">
			<h1 class="text-5xl md:text-6xl font-bold text-text-heading tracking-tight mb-6">
				Insights & Expertise.
			</h1>
			<p class="text-xl text-text-body leading-relaxed mb-8">
				Professional advice, industry trends, and practical tips from our experts.
			</p>

			<!-- Search Bar (client-side filter) -->
			<div class="max-w-2xl mx-auto">
				<div class="relative">
					<Search class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search articles..."
						class="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none bg-white text-text-heading placeholder-gray-400 transition-colors"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Category Filter -->
	{#if data.categories.length > 0}
		<section class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pb-12">
			<div class="flex flex-wrap justify-center gap-3">
				<button
					on:click={() => filterByCategory(null)}
					class="px-6 py-2 rounded-full font-semibold transition-all {!data.activeCategory
						? 'bg-primary text-white shadow-md'
						: 'bg-white text-text-body hover:bg-gray-100'}"
				>
					All
				</button>
				{#each data.categories as category}
					<button
						on:click={() => filterByCategory(category.slug)}
						class="px-6 py-2 rounded-full font-semibold transition-all {data.activeCategory?.slug ===
						category.slug
							? 'bg-primary text-white shadow-md'
							: 'bg-white text-text-body hover:bg-gray-100'}"
					>
						{category.name}
						<span class="ml-1 text-xs opacity-70">({category.postCount})</span>
					</button>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Active Tag Filter -->
	{#if data.activeTag}
		<section class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pb-6">
			<div class="flex items-center justify-center gap-2">
				<span class="text-text-body">Filtered by tag:</span>
				<span class="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
					{data.activeTag}
				</span>
				<button
					on:click={() => goto(buildFilterUrl({ tag: undefined }))}
					class="text-sm text-text-body hover:text-primary underline"
				>
					Clear
				</button>
			</div>
		</section>
	{/if}

	<!-- Blog Grid -->
	<section class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pb-24">
		{#if filteredPosts.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each filteredPosts as post}
					<article
						class="bento-card group !p-0 overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
					>
						<!-- Image -->
						<div class="relative h-56 overflow-hidden bg-gray-100">
							{#if post.featuredImage}
								<img
									src={post.featuredImage}
									alt={post.featuredImageAlt || post.title}
									class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									loading="lazy"
								/>
							{:else}
								<div
									class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5"
								>
									<span class="text-4xl text-primary/30">📝</span>
								</div>
							{/if}
							{#if post.category}
								<div class="absolute top-4 left-4">
									<span
										class="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full uppercase tracking-wide"
									>
										{post.category.name}
									</span>
								</div>
							{/if}
						</div>

						<!-- Content -->
						<div class="p-6">
							<div class="flex items-center gap-4 text-sm text-text-body mb-3">
								{#if post.publishedAt}
									<span class="flex items-center gap-1">
										<Calendar size={14} />
										{formatDate(post.publishedAt)}
									</span>
								{/if}
								{#if post.readingTime}
									<span class="flex items-center gap-1">
										<Clock size={14} />
										{formatReadingTime(post.readingTime)}
									</span>
								{/if}
							</div>

							<h2
								class="text-xl font-bold text-text-heading mb-3 group-hover:text-primary transition-colors line-clamp-2"
							>
								{post.title}
							</h2>

							{#if post.excerpt}
								<p class="text-text-body leading-relaxed mb-4 line-clamp-3">
									{post.excerpt}
								</p>
							{/if}

							<a
								href="/blog/{post.slug}"
								class="inline-flex items-center gap-2 text-primary font-semibold group/link"
							>
								Read Full Article
								<ArrowRight
									size={16}
									class="group-hover/link:translate-x-1 transition-transform"
								/>
							</a>
						</div>
					</article>
				{/each}
			</div>

			<!-- Pagination -->
			{#if data.totalPages > 1}
				<div class="mt-12 flex items-center justify-center gap-2">
					<button
						on:click={() => goToPage(data.page - 1)}
						disabled={data.page <= 1}
						class="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						<ChevronLeft size={20} />
					</button>

					{#each Array.from({ length: data.totalPages }, (_, i) => i + 1) as pageNum}
						{#if pageNum === 1 || pageNum === data.totalPages || (pageNum >= data.page - 1 && pageNum <= data.page + 1)}
							<button
								on:click={() => goToPage(pageNum)}
								class="w-10 h-10 rounded-lg font-medium transition-colors {pageNum === data.page
									? 'bg-primary text-white'
									: 'bg-white border border-gray-200 hover:bg-gray-50 text-text-body'}"
							>
								{pageNum}
							</button>
						{:else if pageNum === 2 || pageNum === data.totalPages - 1}
							<span class="text-text-body">...</span>
						{/if}
					{/each}

					<button
						on:click={() => goToPage(data.page + 1)}
						disabled={data.page >= data.totalPages}
						class="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						<ChevronRight size={20} />
					</button>
				</div>

				<p class="mt-4 text-center text-sm text-text-body">
					Showing {(data.page - 1) * data.limit + 1} - {Math.min(data.page * data.limit, data.total)}
					of {data.total} articles
				</p>
			{/if}
		{:else}
			<div class="text-center py-16">
				<p class="text-xl text-text-body">
					{searchQuery
						? 'No articles found matching your search.'
						: 'No articles found in this category.'}
				</p>
				{#if searchQuery || data.activeCategory || data.activeTag}
					<button
						on:click={() => {
							searchQuery = '';
							goto('/blog');
						}}
						class="mt-4 text-primary hover:underline"
					>
						View all articles
					</button>
				{/if}
			</div>
		{/if}
	</section>
</div>

<style>
	.bento-card {
		border-radius: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.05);
	}

	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
