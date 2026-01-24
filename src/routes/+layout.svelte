
<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500/30">
	{@render children()}
	
	<footer class="bg-slate-900 text-white py-12 px-6">
		<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
			<div class="text-center md:text-left">
				<p class="font-bold text-xl">24/7 Emergency Plumbing Services in Austin, Texas</p>
				<p class="text-slate-400 text-sm mt-2">Serving Austin, Texas, USA and surrounding areas.</p>
			</div>
			<p class="text-slate-500 text-sm">&copy; 2026 All rights reserved.</p>
		</div>
	</footer>
</div>
