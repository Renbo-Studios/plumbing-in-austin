<script>
    import { Mail, Phone } from 'lucide-svelte';
</script>

<section id="contact" class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-24 scroll-mt-20">
    <div class="bento-card relative shadow-2xl !p-12 bg-white overflow-hidden border-0">
        <!-- Subtle gradient background -->
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60 -mr-40 -mt-40 pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div class="flex flex-col justify-center">
                <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-semibold mb-6 w-fit">Contact Us</span>
                <h3 class="text-5xl lg:text-6xl font-semibold text-text-heading mb-6 tracking-tight leading-tight">Ready to start?</h3>
                <p class="text-text-body mb-12 leading-relaxed text-lg max-w-md">
                    We're here to answer your questions. Get a comprehensive, free estimate for your roofing needs today.
                </p>

                <div class="space-y-6">
                    <a href="mailto:contact@roofinginparis.com" class="flex items-center gap-5 group p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                         <div class="bg-blue-50 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p class="text-sm text-text-body">Email us</p>
                            <span class="text-text-heading font-medium text-lg">contact@roofinginparis.com</span>
                        </div>
                    </a>
                     <div class="flex items-center gap-5 group p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
                        <div class="bg-blue-50 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Phone size={24} />
                        </div>
                         <div>
                            <p class="text-sm text-text-body">Call us</p>
                            <span class="text-text-heading font-medium text-lg">+33 1 23 45 67 89</span>
                        </div>
                    </div>
                </div>
            </div>

            <form class="space-y-5 bg-gray-50/50 p-8 md:p-10 rounded-[2rem] border border-gray-100">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="space-y-2">
                        <label for="name" class="text-sm font-medium text-text-heading ml-1">Name</label>
                        <input id="name" type="text" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-heading focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm">
                    </div>
                    <div class="space-y-2">
                         <label for="email" class="text-sm font-medium text-text-heading ml-1">Email</label>
                        <input id="email" type="email" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-heading focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm">
                    </div>
                </div>
                
                <div class="space-y-2">
                     <label for="service" class="text-sm font-medium text-text-heading ml-1">Service</label>
                     <select id="service" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-heading focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm">
                        <option value="" disabled selected>Select a service...</option>
                        <option value="repair">Roof Repair</option>
                        <option value="install">New Installation</option>
                        <option value="inspection">Inspection</option>
                    </select>
                </div>

                <div class="space-y-2">
                    <label for="message" class="text-sm font-medium text-text-heading ml-1">Message</label>
                    <textarea id="message" rows="4" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-heading focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"></textarea>
                </div>
                
                <button type="submit" class="w-full bg-primary text-white hover:bg-primary-hover font-medium py-4 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 text-lg">
                    Send Request
                </button>
            </form>
        </div>
    </div>
</section>
