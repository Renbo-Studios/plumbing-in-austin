<script>
    import { ArrowRight, Calendar, Clock } from 'lucide-svelte';
    
    const blogPosts = [
        {
            id: 1,
            title: "5 Signs Your Roof Needs Immediate Repair",
            excerpt: "Learn to identify warning signs before they turn into costly problems. Early detection can save you thousands in repairs.",
            image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800",
            date: "January 12, 2026",
            readTime: "5 min read",
            category: "Maintenance"
        },
        {
            id: 2,
            title: "Traditional Parisian Roofing: Zinc & Slate",
            excerpt: "Discover the timeless beauty and durability of traditional zinc and slate roofing materials that define Paris's iconic skyline.",
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
            date: "January 8, 2026",
            readTime: "7 min read",
            category: "Materials"
        },
        {
            id: 3,
            title: "How to Prepare Your Roof for Winter",
            excerpt: "Essential autumn maintenance tips to protect your roof from harsh winter weather and prevent ice damage.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
            date: "December 28, 2025",
            readTime: "6 min read",
            category: "Seasonal"
        }
    ];
</script>

<section class="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-24 bg-gray-50">
    <div class="mb-16 md:text-center max-w-3xl mx-auto">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Blog</h2>
        <h3 class="text-4xl md:text-5xl font-bold text-text-heading tracking-tight mb-6">Latest Roofing Insights.</h3>
        <p class="text-lg text-text-body leading-relaxed">Expert advice, tips, and industry insights to help you make informed decisions about your roofing needs.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {#each blogPosts as post}
            <article class="bento-card group !p-0 overflow-hidden bg-white hover:shadow-2xl transition-all duration-300">
                <!-- Image -->
                <div class="relative h-48 overflow-hidden">
                    <img 
                        src={post.image} 
                        alt={post.title}
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div class="absolute top-4 left-4">
                        <span class="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                            {post.category}
                        </span>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="p-6">
                    <div class="flex items-center gap-4 text-sm text-text-body mb-3">
                        <span class="flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                        </span>
                        <span class="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                        </span>
                    </div>
                    
                    <h4 class="text-xl font-bold text-text-heading mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                    </h4>
                    
                    <p class="text-text-body leading-relaxed mb-4">
                        {post.excerpt}
                    </p>
                    
                    <a href="/blog/{post.id}" class="inline-flex items-center gap-2 text-primary font-semibold group/link">
                        Read More
                        <ArrowRight size={16} class="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                </div>
            </article>
        {/each}
    </div>

    <!-- View All Button -->
    <div class="text-center">
        <a href="/blog" class="btn-primary inline-flex items-center gap-2 group text-lg px-8 py-4 shadow-md hover:shadow-lg transition-all">
            View All Articles
            <ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
        </a>
    </div>
</section>
