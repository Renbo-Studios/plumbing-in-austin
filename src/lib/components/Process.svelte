<script>
    import { CheckCircle } from 'lucide-svelte';
</script>

<section id="process" class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-24 scroll-mt-20">
    <div class="mb-20 text-center max-w-3xl mx-auto">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-primary mb-3">How It Works</h2>
        <h3 class="text-4xl md:text-5xl font-bold text-text-heading tracking-tight">Simple Process.</h3>
    </div>

    <div class="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <!-- Connecting Line (Desktop) -->
        <div class="absolute top-12 left-0 w-full h-0.5 bg-gray-200 hidden md:block -z-10"></div>

        <!-- Step 1 -->
        <div class="flex flex-col items-center group">
            <div class="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-3xl font-bold text-text-heading mb-8 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                1
            </div>
            <h4 class="text-2xl font-bold text-text-heading mb-4">Contact Us</h4>
            <p class="text-text-body leading-relaxed max-w-sm">
                Call us or send a message. We listen to what you need.
            </p>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center group">
            <div class="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-3xl font-bold text-text-heading mb-8 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                2
            </div>
            <h4 class="text-2xl font-bold text-text-heading mb-4">Get a Quote</h4>
            <p class="text-text-body leading-relaxed max-w-sm">
                We check your roof and give you a clear price.
            </p>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center group">
            <div class="w-24 h-24 rounded-full bg-primary text-white border-4 border-primary flex items-center justify-center text-3xl font-bold mb-8 shadow-lg shadow-primary/30">
                3
            </div>
            <h4 class="text-2xl font-bold text-text-heading mb-4">We Do the Work</h4>
            <p class="text-text-body leading-relaxed max-w-sm">
                Our team fixes your roof quickly and cleans up after.
            </p>
        </div>
    </div>
</section>
