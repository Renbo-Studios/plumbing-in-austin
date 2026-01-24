<script lang="ts">
	import { ArrowLeft, Calendar, Clock, Tag, User, Share2, BookOpen } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { formatDate, formatReadingTime } from '$lib/blog-types';
	import BlockRenderer from '$lib/components/BlockRenderer.svelte';
	import { siteConfig } from '$lib/config';

	export let data: PageData;

	const post = data.post;

	// Generate structured data for SEO
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.seoTitle || post.title,
		description: post.seoDescription || post.excerpt,
		image: post.featuredImage,
		datePublished: post.publishedAt,
		dateModified: post.publishedAt,
		author: {
			'@type': 'Person',
			name: post.authorName
		},
		publisher: {
			'@type': 'Organization',
			name: siteConfig.name
		}
	};

	// Table of contents visibility
	let showToc = false;

	function sharePost() {
		if (navigator.share) {
			navigator.share({
				title: post.title,
				text: post.excerpt || '',
				url: window.location.href
			});
		} else {
			// Fallback: copy to clipboard
			navigator.clipboard.writeText(window.location.href);
			alert('Link copied to clipboard!');
		}
	}

	function scrollToHeading(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			showToc = false;
		}
	}
</script>

<svelte:head>
	<title>{post.seoTitle || post.title}</title>
	<meta name="description" content={post.seoDescription || post.excerpt || ''} />
	{#if post.canonicalUrl}
		<link rel="canonical" href={post.canonicalUrl} />
	{/if}
	{#if post.noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.seoTitle || post.title} />
	<meta property="og:description" content={post.seoDescription || post.excerpt || ''} />
	{#if post.featuredImage}
		<meta property="og:image" content={post.featuredImage} />
	{/if}
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.seoTitle || post.title} />
	<meta name="twitter:description" content={post.seoDescription || post.excerpt || ''} />
	{#if post.featuredImage}
		<meta name="twitter:image" content={post.featuredImage} />
	{/if}
	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<article class="min-h-screen bg-white">
	<!-- Hero Section -->
	<header
		class="relative {post.heroLayout === 'full-width' || post.heroLayout === 'overlay'
			? 'min-h-[70vh]'
			: ''}"
	>
		{#if post.featuredImage && (post.heroLayout === 'full-width' || post.heroLayout === 'overlay')}
			<!-- Full width / Overlay hero -->
			<div class="absolute inset-0">
				<img
					src={post.featuredImage}
					alt={post.featuredImageAlt || post.title}
					class="w-full h-full object-cover"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
			</div>
			<div
				class="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 md:pt-40 pb-16 text-white"
			>
				<!-- Back link -->
				<a
					href="/blog"
					class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
				>
					<ArrowLeft size={16} />
					Back to Blog
				</a>

				<!-- Category -->
				{#if post.category}
					<div class="mb-4">
						<span
							class="px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full uppercase tracking-wide"
						>
							{post.category.name}
						</span>
					</div>
				{/if}

				<!-- Title -->
				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
				>
					{post.title}
				</h1>

				<!-- Meta -->
				<div class="flex flex-wrap items-center gap-6 text-white/80">
					<span class="flex items-center gap-2">
						<User size={16} />
						{post.authorName}
					</span>
					{#if post.publishedAt}
						<span class="flex items-center gap-2">
							<Calendar size={16} />
							{formatDate(post.publishedAt)}
						</span>
					{/if}
					{#if post.readingTime}
						<span class="flex items-center gap-2">
							<Clock size={16} />
							{formatReadingTime(post.readingTime)}
						</span>
					{/if}
				</div>
			</div>
		{:else}
			<!-- Standard / Minimal / Split hero -->
			<div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 md:pt-40 pb-12">
				<!-- Back link -->
				<a
					href="/blog"
					class="inline-flex items-center gap-2 text-text-body hover:text-primary mb-8 transition-colors"
				>
					<ArrowLeft size={16} />
					Back to Blog
				</a>

				<!-- Category -->
				{#if post.category}
					<div class="mb-4">
						<span
							class="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full uppercase tracking-wide"
						>
							{post.category.name}
						</span>
					</div>
				{/if}

				<!-- Title -->
				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading tracking-tight leading-tight mb-6"
				>
					{post.title}
				</h1>

				<!-- Meta -->
				<div class="flex flex-wrap items-center gap-6 text-text-body mb-8">
					<span class="flex items-center gap-2">
						<User size={16} />
						{post.authorName}
					</span>
					{#if post.publishedAt}
						<span class="flex items-center gap-2">
							<Calendar size={16} />
							{formatDate(post.publishedAt)}
						</span>
					{/if}
					{#if post.readingTime}
						<span class="flex items-center gap-2">
							<Clock size={16} />
							{formatReadingTime(post.readingTime)}
						</span>
					{/if}
					<button
						on:click={sharePost}
						class="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
					>
						<Share2 size={16} />
						Share
					</button>
				</div>

				<!-- Featured Image (standard layout) -->
				{#if post.featuredImage && post.heroLayout !== 'minimal'}
					<figure class="mb-12">
						<img
							src={post.featuredImage}
							alt={post.featuredImageAlt || post.title}
							class="w-full h-auto rounded-2xl shadow-xl"
						/>
					</figure>
				{/if}
			</div>
		{/if}
	</header>

	<!-- Content Section -->
	<div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
		<!-- Table of Contents (if available) -->
		{#if post.tableOfContents && post.tableOfContents.length > 0}
			<div class="mb-12 p-6 bg-gray-50 rounded-2xl">
				<button
					on:click={() => (showToc = !showToc)}
					class="flex items-center justify-between w-full text-left"
				>
					<span class="flex items-center gap-2 font-semibold text-text-heading">
						<BookOpen size={18} />
						Table of Contents
					</span>
					<span class="text-sm text-text-body">{showToc ? 'Hide' : 'Show'}</span>
				</button>

				{#if showToc}
					<nav class="mt-4 pt-4 border-t border-gray-200">
						<ul class="space-y-2">
							{#each post.tableOfContents as item}
								<li style="padding-left: {(item.level - 2) * 1}rem">
									<button
										on:click={() => scrollToHeading(item.id)}
										class="text-left text-text-body hover:text-primary transition-colors"
									>
										{item.text}
									</button>
								</li>
							{/each}
						</ul>
					</nav>
				{/if}
			</div>
		{/if}

		<!-- Content -->
		{#if post.contentVersion === 2 && post.blocks}
			<BlockRenderer blocks={post.blocks.blocks} />
		{:else}
			<!-- Fallback to markdown rendering -->
			<div class="prose prose-lg max-w-none">
				{@html post.content}
			</div>
		{/if}

		<!-- Tags -->
		{#if post.tags && post.tags.length > 0}
			<div class="mt-12 pt-8 border-t border-gray-200">
				<div class="flex flex-wrap items-center gap-2">
					<Tag size={16} class="text-text-body" />
					{#each post.tags as tag}
						<a
							href="/blog?tag={tag.slug}"
							class="px-3 py-1 bg-gray-100 text-text-body text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
						>
							{tag.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Author Bio -->
		<div class="mt-12 p-8 bg-gray-50 rounded-2xl">
			<div class="flex items-start gap-4">
				<div
					class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl"
				>
					{post.authorName.charAt(0)}
				</div>
				<div>
					<h3 class="font-semibold text-text-heading">{post.authorName}</h3>
					<p class="text-text-body mt-1">
						Thank you for reading! If you found this article helpful, feel free to share it with
						others.
					</p>
				</div>
			</div>
		</div>
	</div>
</article>
