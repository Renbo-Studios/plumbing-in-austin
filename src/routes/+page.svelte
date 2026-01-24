<script>
  import { 
    Zap, 
    Shield, 
    Globe, 
    Phone, 
    Clock, 
    MapPin, 
    CheckCircle, 
    AlertTriangle, 
    ChevronRight,
    Droplets,
    Wrench
  } from 'lucide-svelte';

  const config = {
    slug: "emergency-plumbing-austin-texas",
    description: "Need an emergency plumber in Austin, TX? 24/7 rapid response for burst pipes, leaks, and drain cleaning. Licensed Austin plumbing experts available right now.",
    heroTitle: "24/7 Emergency Plumbing Services in Austin, Texas",
    heroSubtitle: "Don't let a leak destroy your home. Licensed Austin plumbers are on standby for immediate dispatch. Fast, reliable, and available right now.",
    features: [
      {
        title: "Immediate 24/7 Dispatch",
        description: "Our Austin-based fleet is ready to respond to your plumbing emergency within minutes, day or night, across Travis County.",
        icon: Zap
      },
      {
        title: "Licensed & Insured Pros",
        description: "Expert plumbing technicians specializing in Austin's unique infrastructure, water heater repairs, and local building codes.",
        icon: Shield
      },
      {
        title: "Upfront Austin Pricing",
        description: "No hidden fees for emergency calls. Get a clear, transparent estimate before we start any repair work on your property.",
        icon: Globe
      }
    ]
  };

  const services = [
    "Burst Pipe Repair",
    "Water Heater Emergencies",
    "Sewer Line Backups",
    "Gas Line Leak Detection",
    "Slab Leak Repairs",
    "Main Shut-off Valves"
  ];
</script>

<svelte:head>
  <title>{config.heroTitle}</title>
  <meta name="description" content={config.description} />
</svelte:head>

<!-- Navigation -->
<nav class="sticky top-0 z-50 bg-zinc-900 border-b border-amber-500/20 shadow-xl">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <div class="flex items-center gap-2">
        <div class="bg-amber-500 p-2 rounded">
          <Droplets class="text-zinc-900 w-6 h-6" />
        </div>
        <span class="text-white font-bold text-xl tracking-tight uppercase italic">Austin<span class="text-amber-500">Rapid</span>Plumb</span>
      </div>
      <div class="hidden md:flex items-center gap-6">
        <a href="#services" class="text-zinc-300 hover:text-amber-500 transition-colors font-medium">Services</a>
        <a href="#about" class="text-zinc-300 hover:text-amber-500 transition-colors font-medium">About</a>
        <a href="tel:512-555-0199" class="bg-amber-500 hover:bg-amber-400 text-zinc-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105">
          <Phone size={18} /> (512) 555-0199
        </a>
      </div>
    </div>
  </div>
</nav>

<main>
  <!-- HERO SECTION -->
  <section class="relative bg-zinc-900 py-20 lg:py-32 overflow-hidden">
    <!-- Abstract background elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-600 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <article>
          <div class="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full mb-6">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span class="text-amber-500 font-bold text-sm uppercase tracking-widest">Active Dispatch: Austin, TX</span>
          </div>
          <h1 class="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            {config.heroTitle}
          </h1>
          <p class="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
            {config.heroSubtitle}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:512-555-0199" class="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 text-xl font-black px-8 py-5 rounded-xl transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              <Phone size={24} /> CALL NOW: (512) 555-0199
            </a>
            <a href="#contact" class="inline-flex items-center justify-center gap-2 border-2 border-zinc-700 hover:border-amber-500 text-white px-8 py-5 rounded-xl transition-all">
              Request a Quote <ChevronRight size={20} />
            </a>
          </div>
          <div class="mt-8 flex items-center gap-4 text-zinc-500">
            <div class="flex -space-x-2">
              <div class="h-8 w-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-[10px] text-white">TX</div>
              <div class="h-8 w-8 rounded-full bg-amber-500 border-2 border-zinc-900 flex items-center justify-center text-[10px] text-zinc-900 font-bold">5★</div>
            </div>
            <p class="text-sm font-medium italic">"Fastest response in Travis County!" — Verified Austin Resident</p>
          </div>
        </article>
        
        <div class="relative">
          <div class="bg-zinc-800/50 backdrop-blur-md p-8 rounded-3xl border border-zinc-700 shadow-2xl">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <AlertTriangle class="text-amber-500" /> Need Immediate Assistance?
            </h3>
            <form action="/api/leads" method="POST" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-zinc-400 text-sm mb-1">Name</label>
                  <input type="text" id="name" name="name" required class="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label for="phone" class="block text-zinc-400 text-sm mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" required class="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="(512) 000-0000" />
                </div>
              </div>
              <div>
                <label for="service" class="block text-zinc-400 text-sm mb-1">Emergency Service</label>
                <select id="service" name="service" class="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors">
                  <option>Burst Pipe</option>
                  <option>Drain Clog</option>
                  <option>Water Heater Leak</option>
                  <option>Sewer Line Issue</option>
                  <option>Other Emergency</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-zinc-400 text-sm mb-1">Description</label>
                <textarea id="message" name="message" rows="3" class="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Briefly describe the emergency..."></textarea>
              </div>
              <button type="submit" class="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-amber-900/20 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                Send Emergency Request <Zap size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES SECTION -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-zinc-900 text-4xl font-black mb-4 uppercase italic tracking-tight">Why Austin Trusts Us</h2>
        <div class="h-1 w-20 bg-amber-500 mx-auto"></div>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        {#each config.features as feature}
          <div class="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 hover:border-amber-500 transition-all hover:shadow-xl group">
            <div class="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <svelte:component this={feature.icon} size={32} />
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
            <p class="text-zinc-600 leading-relaxed">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- SERVICES/ABOUT SECTION -->
  <section id="services" class="py-24 bg-zinc-900 text-white overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2">
          <h2 class="text-4xl font-extrabold mb-8 leading-tight">Mastering Austin's Plumbing Challenges Since 2008</h2>
          <p class="text-zinc-400 text-lg mb-8 leading-relaxed">
            Austin’s unique terrain and rapidly expanding infrastructure require specialized knowledge. Whether you're in Downtown, Round Rock, or Lake Travis, our technicians understand local plumbing codes and the common soil-shift issues that cause slab leaks in Central Texas.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {#each services as service}
              <div class="flex items-center gap-3 bg-zinc-800 p-4 rounded-lg">
                <CheckCircle class="text-amber-500" size={20} />
                <span class="font-bold">{service}</span>
              </div>
            {/each}
          </div>
        </div>
        <div class="lg:w-1/2 relative">
          <div class="relative z-10 grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="bg-amber-500 h-64 rounded-2xl flex items-end p-6">
                <span class="text-zinc-900 font-black text-4xl leading-none">15+<br><small class="text-sm font-bold uppercase">Years Experience</small></span>
              </div>
              <div class="bg-zinc-800 h-40 rounded-2xl p-6 border border-zinc-700">
                <Clock class="text-amber-500 mb-2" />
                <p class="text-zinc-300 text-sm font-medium italic">Average response time: Under 45 Minutes</p>
              </div>
            </div>
            <div class="space-y-4 pt-8">
              <div class="bg-zinc-800 h-40 rounded-2xl p-6 border border-zinc-700">
                <MapPin class="text-amber-500 mb-2" />
                <p class="text-zinc-300 text-sm font-medium uppercase">Serving All of Travis County</p>
              </div>
              <div class="bg-zinc-700 h-64 rounded-2xl flex items-center justify-center p-8">
                <Wrench class="text-amber-500 w-24 h-24 opacity-20 absolute" />
                <p class="text-center font-bold text-lg relative">Equipped for Multi-Family & Commercial Too</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="py-24 bg-zinc-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-black text-zinc-900 mb-4 uppercase">Emergency FAQ</h2>
        <p class="text-zinc-600 italic">Common questions during Austin plumbing crises</p>
      </div>
      
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
          <h4 class="font-bold text-lg text-zinc-900 mb-2">How fast can you get to my Austin location?</h4>
          <p class="text-zinc-600">Typically, we have a technician on-site within 30 to 60 minutes, depending on your location in Travis County and traffic conditions on I-35 or MoPac.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
          <h4 class="font-bold text-lg text-zinc-900 mb-2">Do you charge extra for weekends or holidays?</h4>
          <p class="text-zinc-600">We offer competitive emergency rates 24/7/365. We believe in transparent pricing and will provide an upfront estimate before any work begins.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
          <h4 class="font-bold text-lg text-zinc-900 mb-2">What should I do while waiting for the plumber?</h4>
          <p class="text-zinc-600">If you have a major leak, locate your main water shut-off valve (usually near the street or in the garage) and turn it clockwise to stop the water flow.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA FOOTER -->
  <section class="bg-amber-500 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-zinc-900 text-3xl font-black uppercase mb-6 italic tracking-tighter">STOP THE DAMAGE NOW</h2>
      <a href="tel:512-555-0199" class="inline-flex items-center gap-4 bg-zinc-900 text-white px-10 py-6 rounded-full text-3xl font-black transition-transform hover:scale-105 shadow-2xl">
        <Phone fill="currentColor" /> (512) 555-0199
      </a>
      <p class="mt-6 text-zinc-900 font-bold uppercase tracking-widest text-sm">Austin's Emergency Plumbing Authority</p>
    </div>
  </section>
</main>

<footer class="bg-zinc-950 text-zinc-500 py-12 border-t border-zinc-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
    <div class="flex items-center gap-2 grayscale opacity-50">
      <div class="bg-zinc-700 p-1 rounded">
        <Droplets class="w-4 h-4 text-zinc-300" />
      </div>
      <span class="font-bold text-sm uppercase italic tracking-tighter text-zinc-300">Austin<span class="text-zinc-500">Rapid</span>Plumb</span>
    </div>
    <div class="text-xs text-center md:text-right">
      <p>© {new Date().getFullYear()} Austin Rapid Plumbing Dispatch. Licensed TX Master Plumber #00000.</p>
      <p class="mt-1 italic">Serving Austin, West Lake Hills, Pflugerville, Round Rock, and Cedar Park.</p>
    </div>
  </div>
</footer>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>