<script>
    import { base } from '$app/paths';
    import { ArrowRight } from 'lucide-svelte';
</script>

<section class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-32 md:pt-40 pb-12">
    <div class="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
        <h1 class="text-5xl md:text-7xl font-semibold tracking-tight text-text-heading mb-6">
            Trusted Roofing in Paris.
        </h1>
        <p class="text-xl md:text-2xl text-text-body max-w-2xl leading-relaxed font-medium text-balance">
            We repair, install, and maintain roofs to keep your home safe. Reliable service you can count on.
        </p>
        
        <div class="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#contact" class="btn-primary flex items-center gap-2 group text-lg px-8 py-4 shadow-md hover:shadow-lg transition-all">
                Get a Free Quote
                <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" class="btn-secondary text-lg px-8 py-4 shadow-sm hover:shadow-md transition-all">
                Our Services
            </a>
        </div>
    </div>

    <div class="bento-card relative h-[50vh] md:h-[70vh] w-full overflow-hidden !p-0 bg-gray-100">
        <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=2000" 
            alt="Parisian Rooftop" 
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div class="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white text-left">
            <p class="text-sm font-semibold uppercase tracking-widest mb-2 opacity-90">Project: Montmartre Residence</p>
            <p class="text-2xl font-bold">Zinc & Slate Masterpiece</p>
        </div>
    </div>
</section>
