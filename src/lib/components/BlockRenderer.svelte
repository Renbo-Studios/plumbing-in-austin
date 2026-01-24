<script lang="ts">
	import type { EditorJsBlock } from '$lib/blog-types';

	export let blocks: EditorJsBlock[];

	// Helper to render inline HTML safely (Editor.js includes some HTML tags)
	function renderText(text: string): string {
		// Editor.js uses <b>, <i>, <a>, <mark> etc. - we'll keep these
		return text;
	}

	// Check if a list item is a string or an object (Editor.js format varies)
	function getListItemText(item: unknown): string {
		if (typeof item === 'string') return item;
		if (typeof item === 'object' && item !== null && 'content' in item) {
			return (item as { content: string }).content;
		}
		return String(item);
	}

	// Type-safe data accessors
	function getImageUrl(data: Record<string, unknown>): string {
		const file = data.file as { url?: string } | undefined;
		return file?.url || (data.url as string) || '';
	}

	function getString(value: unknown): string {
		return typeof value === 'string' ? value : '';
	}
</script>

<div class="block-renderer">
	{#each blocks as block (block.id)}
		{#if block.type === 'paragraph'}
			<p class="prose-paragraph">
				{@html renderText(block.data.text as string)}
			</p>
		{:else if block.type === 'header'}
			{@const level = (block.data.level as number) || 2}
			{#if level === 2}
				<h2 id={block.id} class="prose-h2">
					{@html renderText(block.data.text as string)}
				</h2>
			{:else if level === 3}
				<h3 id={block.id} class="prose-h3">
					{@html renderText(block.data.text as string)}
				</h3>
			{:else if level === 4}
				<h4 id={block.id} class="prose-h4">
					{@html renderText(block.data.text as string)}
				</h4>
			{/if}
		{:else if block.type === 'list'}
			{@const style = (block.data.style as string) || 'unordered'}
			{@const items = (block.data.items as unknown[]) || []}
			{#if style === 'ordered'}
				<ol class="prose-list prose-list-ordered">
					{#each items as item}
						<li>{@html renderText(getListItemText(item))}</li>
					{/each}
				</ol>
			{:else}
				<ul class="prose-list prose-list-unordered">
					{#each items as item}
						<li>{@html renderText(getListItemText(item))}</li>
					{/each}
				</ul>
			{/if}
		{:else if block.type === 'quote'}
			<blockquote class="prose-quote">
				<p class="quote-text">{@html renderText(block.data.text as string)}</p>
				{#if block.data.caption}
					<cite class="quote-caption">{block.data.caption}</cite>
				{/if}
			</blockquote>
		{:else if block.type === 'image'}
			<figure class="prose-image">
				<img
					src={getImageUrl(block.data)}
					alt={getString(block.data.caption)}
					class:stretched={block.data.stretched}
					class:with-border={block.data.withBorder}
					class:with-background={block.data.withBackground}
					loading="lazy"
				/>
				{#if block.data.caption}
					<figcaption>{getString(block.data.caption)}</figcaption>
				{/if}
			</figure>
		{:else if block.type === 'code'}
			<pre class="prose-code"><code>{block.data.code}</code></pre>
		{:else if block.type === 'delimiter'}
			<hr class="prose-delimiter" />
		{:else if block.type === 'warning'}
			<div class="prose-warning">
				{#if block.data.title}
					<strong class="warning-title">{block.data.title}</strong>
				{/if}
				<p class="warning-message">{@html renderText(block.data.message as string)}</p>
			</div>
		{:else if block.type === 'checklist'}
			<ul class="prose-checklist">
				{#each (block.data.items as Array<{ text: string; checked: boolean }>) || [] as item}
					<li class:checked={item.checked}>
						<span class="checkbox">{item.checked ? '✓' : ''}</span>
						<span>{@html renderText(item.text)}</span>
					</li>
				{/each}
			</ul>
		{:else if block.type === 'table'}
			<div class="prose-table-wrapper">
				<table class="prose-table">
					{#if block.data.withHeadings && (block.data.content as string[][])?.length > 0}
						<thead>
							<tr>
								{#each (block.data.content as string[][])[0] as cell}
									<th>{@html renderText(cell)}</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each (block.data.content as string[][]).slice(1) as row}
								<tr>
									{#each row as cell}
										<td>{@html renderText(cell)}</td>
									{/each}
								</tr>
							{/each}
						</tbody>
					{:else}
						<tbody>
							{#each (block.data.content as string[][]) || [] as row}
								<tr>
									{#each row as cell}
										<td>{@html renderText(cell)}</td>
									{/each}
								</tr>
							{/each}
						</tbody>
					{/if}
				</table>
			</div>
		{:else if block.type === 'embed'}
			<div class="prose-embed">
				{#if block.data.service === 'youtube'}
					<iframe
						src="https://www.youtube.com/embed/{getString(block.data.embed)}"
						title={getString(block.data.caption) || 'YouTube video'}
						frameborder="0"
						allowfullscreen
						loading="lazy"
					></iframe>
				{:else if block.data.service === 'twitter'}
					<!-- Twitter embed placeholder -->
					<a href={getString(block.data.source)} target="_blank" rel="noopener" class="embed-link">
						View on Twitter
					</a>
				{:else}
					<a href={getString(block.data.source)} target="_blank" rel="noopener" class="embed-link">
						{getString(block.data.caption) || 'View embedded content'}
					</a>
				{/if}
				{#if block.data.caption}
					<p class="embed-caption">{getString(block.data.caption)}</p>
				{/if}
			</div>
		{/if}
	{/each}
</div>

<style>
	.block-renderer {
		font-family: 'Georgia', serif;
		font-size: 1.125rem;
		line-height: 1.8;
		color: var(--text-body, #4a5568);
	}

	/* Paragraphs - Magazine style */
	.prose-paragraph {
		margin-bottom: 1.75rem;
	}

	.prose-paragraph :global(a) {
		color: var(--primary, #3182ce);
		text-decoration: underline;
		text-decoration-color: var(--primary, #3182ce);
		text-underline-offset: 2px;
	}

	.prose-paragraph :global(b),
	.prose-paragraph :global(strong) {
		font-weight: 700;
		color: var(--text-heading, #1a202c);
	}

	/* Headings - Bold magazine style */
	.prose-h2 {
		font-family: system-ui, sans-serif;
		font-size: 2rem;
		font-weight: 800;
		color: var(--text-heading, #1a202c);
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	.prose-h3 {
		font-family: system-ui, sans-serif;
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-heading, #1a202c);
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		line-height: 1.3;
	}

	.prose-h4 {
		font-family: system-ui, sans-serif;
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-heading, #1a202c);
		margin-top: 2rem;
		margin-bottom: 0.75rem;
	}

	/* Lists */
	.prose-list {
		margin-bottom: 1.75rem;
		padding-left: 1.5rem;
	}

	.prose-list li {
		margin-bottom: 0.5rem;
	}

	.prose-list-ordered {
		list-style-type: decimal;
	}

	.prose-list-unordered {
		list-style-type: disc;
	}

	/* Pull Quote - Magazine signature style */
	.prose-quote {
		position: relative;
		margin: 3rem 0;
		padding: 2rem 2.5rem;
		background: linear-gradient(135deg, var(--primary, #3182ce) 0%, color-mix(in srgb, var(--primary, #3182ce) 80%, black) 100%);
		border-radius: 1rem;
		border: none;
	}

	.prose-quote .quote-text {
		font-family: 'Georgia', serif;
		font-size: 1.5rem;
		font-style: italic;
		font-weight: 500;
		line-height: 1.5;
		color: white;
		margin: 0;
	}

	.prose-quote .quote-caption {
		display: block;
		margin-top: 1rem;
		font-family: system-ui, sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		color: rgba(255, 255, 255, 0.8);
	}

	.prose-quote .quote-caption::before {
		content: '— ';
	}

	/* Images - Magazine layout */
	.prose-image {
		margin: 2.5rem 0;
	}

	.prose-image img {
		width: 100%;
		height: auto;
		border-radius: 0.75rem;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	}

	.prose-image img.stretched {
		margin-left: -2rem;
		margin-right: -2rem;
		width: calc(100% + 4rem);
		max-width: none;
		border-radius: 0;
	}

	.prose-image img.with-border {
		border: 2px solid var(--border-color, #e2e8f0);
	}

	.prose-image img.with-background {
		padding: 1rem;
		background: var(--bg-subtle, #f7fafc);
	}

	.prose-image figcaption {
		margin-top: 0.75rem;
		font-family: system-ui, sans-serif;
		font-size: 0.875rem;
		color: var(--text-muted, #718096);
		text-align: center;
	}

	/* Code blocks */
	.prose-code {
		margin: 2rem 0;
		padding: 1.5rem;
		background: #1a202c;
		border-radius: 0.75rem;
		overflow-x: auto;
	}

	.prose-code code {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 0.875rem;
		line-height: 1.6;
		color: #e2e8f0;
	}

	/* Delimiter - Magazine section break */
	.prose-delimiter {
		border: none;
		text-align: center;
		margin: 3rem 0;
	}

	.prose-delimiter::before {
		content: '✦ ✦ ✦';
		color: var(--primary, #3182ce);
		font-size: 1rem;
		letter-spacing: 1rem;
	}

	/* Warning/Callout - Key takeaway box */
	.prose-warning {
		margin: 2rem 0;
		padding: 1.5rem 2rem;
		background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
		border-left: 4px solid #f59e0b;
		border-radius: 0 0.75rem 0.75rem 0;
	}

	.prose-warning .warning-title {
		display: block;
		font-family: system-ui, sans-serif;
		font-size: 1rem;
		font-weight: 700;
		color: #92400e;
		margin-bottom: 0.5rem;
	}

	.prose-warning .warning-message {
		margin: 0;
		color: #78350f;
		font-size: 1rem;
	}

	/* Checklist */
	.prose-checklist {
		list-style: none;
		padding: 0;
		margin: 2rem 0;
	}

	.prose-checklist li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
		padding: 0.5rem 0;
	}

	.prose-checklist .checkbox {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.25rem;
		height: 1.25rem;
		border: 2px solid var(--primary, #3182ce);
		border-radius: 0.25rem;
		flex-shrink: 0;
		margin-top: 0.15rem;
		font-size: 0.75rem;
		color: var(--primary, #3182ce);
	}

	.prose-checklist li.checked .checkbox {
		background: var(--primary, #3182ce);
		color: white;
	}

	/* Table */
	.prose-table-wrapper {
		margin: 2rem 0;
		overflow-x: auto;
	}

	.prose-table {
		width: 100%;
		border-collapse: collapse;
		font-family: system-ui, sans-serif;
		font-size: 0.9375rem;
	}

	.prose-table th,
	.prose-table td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid var(--border-color, #e2e8f0);
	}

	.prose-table th {
		font-weight: 600;
		color: var(--text-heading, #1a202c);
		background: var(--bg-subtle, #f7fafc);
	}

	/* Embed */
	.prose-embed {
		margin: 2rem 0;
	}

	.prose-embed iframe {
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: 0.75rem;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	}

	.prose-embed .embed-link {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: var(--primary, #3182ce);
		color: white;
		border-radius: 0.5rem;
		text-decoration: none;
		font-family: system-ui, sans-serif;
		font-weight: 500;
	}

	.prose-embed .embed-caption {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		color: var(--text-muted, #718096);
		text-align: center;
	}

	/* Responsive */
	@media (max-width: 640px) {
		.prose-h2 {
			font-size: 1.75rem;
		}

		.prose-h3 {
			font-size: 1.25rem;
		}

		.prose-quote .quote-text {
			font-size: 1.25rem;
		}

		.prose-image img.stretched {
			margin-left: -1rem;
			margin-right: -1rem;
			width: calc(100% + 2rem);
		}
	}
</style>
