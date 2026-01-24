<script>
    import { Hammer, Home, Search, ShieldCheck, CheckCircle } from 'lucide-svelte';
</script>

<section class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-24" id="services">
    <div class="mb-16 md:text-center max-w-3xl mx-auto">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Services</h2>
        <h3 class="text-4xl md:text-5xl font-bold text-text-heading tracking-tight mb-6">Professional Roofing Solutions.</h3>
        <p class="text-lg text-text-body leading-relaxed">From emergency repairs to complete installations, we deliver quality craftsmanship and reliable service for every project.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Main Service: Roof Repair (Span 2) -->
        <div class="bento-card md:col-span-2 group flex flex-col justify-between !p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <div class="flex justify-between items-start">
                <div class="p-4 bg-primary/20 rounded-2xl text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Hammer size={36} />
                </div>
            </div>
            <div>
                <h4 class="text-2xl font-bold text-text-heading mb-4 md:text-3xl">Expert Roof Repair</h4>
                <p class="text-text-body text-lg leading-relaxed mb-6 max-w-2xl">
                    Quick, reliable repairs that fix leaks, storm damage, and structural issues. We diagnose problems accurately and provide lasting solutions to protect your home.
                </p>
                <ul class="space-y-2 text-text-body">
                    <li class="flex items-start gap-2">
                        <CheckCircle size={20} class="text-primary mt-0.5 flex-shrink-0" />
                        <span>Emergency leak repairs available 24/7</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <CheckCircle size={20} class="text-primary mt-0.5 flex-shrink-0" />
                        <span>Storm damage assessment and restoration</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <CheckCircle size={20} class="text-primary mt-0.5 flex-shrink-0" />
                        <span>All materials and workmanship guaranteed</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Service 2: Inspections (Span 1) -->
        <div class="bento-card group flex flex-col justify-between !p-8 bg-white hover:shadow-xl transition-shadow duration-300">
            <div class="p-3 bg-gray-100 rounded-2xl w-fit text-text-heading mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Search size={32} />
            </div>
             <div>
                <h4 class="text-xl font-bold text-text-heading mb-3 md:text-2xl">Roof Inspections</h4>
                <p class="text-text-body leading-relaxed mb-4">
                   Comprehensive roof evaluations to identify potential issues before they become costly problems.
                </p>
                <ul class="space-y-2 text-sm text-text-body">
                    <li class="flex items-start gap-2">
                        <CheckCircle size={16} class="text-primary mt-0.5 flex-shrink-0" />
                        <span>Detailed inspection reports</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <CheckCircle size={16} class="text-primary mt-0.5 flex-shrink-0" />
                        <span>Free estimates provided</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Service 3: New Install (Span 1) -->
        <div class="bento-card group flex flex-col justify-between !p-8 bg-white hover:shadow-xl transition-shadow duration-300">
             <div class="p-3 bg-gray-100 rounded-2xl w-fit text-text-heading mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Home size={32} />
            </div>
            <div>
                <h4 class="text-xl font-bold text-text-heading mb-3 md:text-2xl">New Installations</h4>
                <p class="text-text-body leading-relaxed mb-4">
                    Premium roofing installations using the finest materials for long-lasting protection and curb appeal.
                </p>
                <ul class="space-y-2 text-sm text-text-body">
                    <li class="flex items-start gap-2">
                        <CheckCircle size={16} class="text-primary mt-0.5 flex-shrink-0" />
                        <span>Zinc & slate specialists</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <CheckCircle size={16} class="text-primary mt-0.5 flex-shrink-0" />
                        <span>Modern & traditional styles</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Service 4: Maintenance (Span 2) -->
        <div class="bento-card md:col-span-2 group flex flex-col justify-between !p-10 bg-gradient-to-br from-gray-700 to-gray-900 text-white">
             <div class="flex justify-between items-start">
                <div class="p-4 bg-white/10 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                    <ShieldCheck size={36} />
                </div>
             </div>
            <div class="relative z-10">
                <h4 class="text-2xl font-bold mb-4 md:text-3xl" style="color: #ffffff;">Preventive Maintenance</h4>
                <p class="text-lg leading-relaxed mb-6 max-w-2xl" style="color: #ffffff;">
                    Regular maintenance programs that extend your roof's lifespan and prevent expensive emergency repairs. Keep your investment protected year-round.
                </p>
                <ul class="space-y-2" style="color: #ffffff;">
                    <li class="flex items-start gap-2">
                        <CheckCircle size={20} class="mt-0.5 flex-shrink-0" style="color: #ffffff;" />
                        <span>Seasonal inspections and cleaning</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <CheckCircle size={20} class="mt-0.5 flex-shrink-0" style="color: #ffffff;" />
                        <span>Gutter maintenance and debris removal</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <CheckCircle size={20} class="mt-0.5 flex-shrink-0" style="color: #ffffff;" />
                        <span>Priority scheduling for maintenance clients</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
