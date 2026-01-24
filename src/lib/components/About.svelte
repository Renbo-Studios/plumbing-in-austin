<script>
    import { Users, ShieldCheck } from 'lucide-svelte';
</script>

<section id="about" class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-12 scroll-mt-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Content Card -->
        <div class="bento-card md:!p-16 flex flex-col justify-center bg-white">
            <h2 class="text-sm font-semibold uppercase tracking-widest text-primary mb-4">About Us</h2>
            <h3 class="text-3xl md:text-5xl font-bold text-text-heading tracking-tight mb-6">Expert Local Roofers.</h3>
            
            <p class="text-text-body text-lg leading-relaxed mb-10">
                We are a team of skilled roofers working in Paris. We love our city and take pride in our work. From repairs to new roofs, we do it all.
            </p>

            <div class="space-y-6">
                 <div class="flex items-center gap-4 group">
                    <div class="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-text-heading group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Users size={20} />
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-text-heading">Skilled Team</h4>
                        <p class="text-text-body text-sm">Trained and experienced.</p>
                    </div>
                </div>

                <div class="flex items-center gap-4 group">
                    <div class="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-text-heading group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-text-heading">Guaranteed Work</h4>
                        <p class="text-text-body text-sm">Quality you can trust.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Card -->
        <div class="bento-card relative overflow-hidden h-[500px] lg:h-auto !p-0">
            <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop" 
                alt="Roofing Team" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
             <div class="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500"></div>
        </div>
    </div>
</section>
