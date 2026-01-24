<script>
    import Hero from '$lib/components/Hero.svelte';
    import Stats from '$lib/components/Stats.svelte';
    import Services from '$lib/components/Services.svelte';
    import About from '$lib/components/About.svelte';
    import Process from '$lib/components/Process.svelte';
    import Blog from '$lib/components/Blog.svelte';
    import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
    <title>Roofing In Paris | Expert Roofers</title>
    <meta name="description" content="Expert roofing solutions in Paris using modern, durable materials." />
</svelte:head>

<div class="space-y-4 pb-12">
    <div id="hero" class="scroll-mt-20"><Hero /></div>
    <Stats />
    <About />
    <div id="services" class="scroll-mt-20"><Services /></div>
    <Process />
    <Blog />
    <Contact />
</div>

