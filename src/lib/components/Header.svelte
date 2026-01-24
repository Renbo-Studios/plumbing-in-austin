<script>
    export let mobileMenuOpen = false;
</script>

<header class="fixed top-0 z-50 w-full glass transition-all duration-300">
    <div class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div class="flex justify-between items-center h-14 md:h-16">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-xl font-semibold text-text-heading tracking-tight flex items-center gap-2">
                   <!-- Icon could go here -->
                   RoofingInParis
                </a>
            </div>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex space-x-1">
                <a href="/" class="text-text-body hover:text-text-heading px-4 py-2 text-base font-medium transition-colors rounded-full hover:bg-black/5">Home</a>
                <a href="#about" class="text-text-body hover:text-text-heading px-4 py-2 text-base font-medium transition-colors rounded-full hover:bg-black/5">About</a>
                <a href="#services" class="text-text-body hover:text-text-heading px-4 py-2 text-base font-medium transition-colors rounded-full hover:bg-black/5">Services</a>
                <a href="#process" class="text-text-body hover:text-text-heading px-4 py-2 text-base font-medium transition-colors rounded-full hover:bg-black/5">Process</a>
                <a href="/blog" class="text-text-body hover:text-text-heading px-4 py-2 text-base font-medium transition-colors rounded-full hover:bg-black/5">Blog</a>
            </nav>

            <!-- CTA -->
            <div class="hidden md:flex items-center space-x-4">
                 <a href="#contact" class="text-sm font-medium bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-hover transition-colors shadow-sm cursor-pointer">
                    Free Quote
                </a>
            </div>

            <!-- Mobile menu button -->
            <div class="flex items-center md:hidden">
                <button type="button" class="text-text-body hover:text-text-heading p-2" aria-controls="mobile-menu" aria-expanded="false" on:click={() => mobileMenuOpen = !mobileMenuOpen}>
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile menu -->
    {#if mobileMenuOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl" id="mobile-menu">
        <div class="space-y-1 px-4 pb-6 pt-4">
            <a href="/" class="block rounded-xl px-4 py-3 text-lg font-medium text-text-heading hover:bg-gray-50" on:click={() => mobileMenuOpen = false}>Home</a>
            <a href="#about" class="block rounded-xl px-4 py-3 text-lg font-medium text-text-heading hover:bg-gray-50" on:click={() => mobileMenuOpen = false}>About</a>
            <a href="#services" class="block rounded-xl px-4 py-3 text-lg font-medium text-text-heading hover:bg-gray-50" on:click={() => mobileMenuOpen = false}>Services</a>
             <a href="#process" class="block rounded-xl px-4 py-3 text-lg font-medium text-text-heading hover:bg-gray-50" on:click={() => mobileMenuOpen = false}>Process</a>
            <a href="/blog" class="block rounded-xl px-4 py-3 text-lg font-medium text-text-heading hover:bg-gray-50" on:click={() => mobileMenuOpen = false}>Blog</a>
            <a href="#contact" class="block rounded-xl px-4 py-3 text-lg font-medium text-primary hover:bg-gray-50" on:click={() => mobileMenuOpen = false}>Contact</a>
        </div>
    </div>
    {/if}
</header>
