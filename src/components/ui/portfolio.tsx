'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Film, Image as ImageIcon, Target, Search, Bot, Code2, Sparkles } from 'lucide-react';

// Import AromaBD portfolio images generated through AI
import perfumeFlatlay from '@/assets/images/perfume_flatlay_1780397972971.png';
import perfumeVelvet from '@/assets/images/perfume_velvet_1780397988578.png';
import perfumeWoman from '@/assets/images/perfume_woman_1780398005525.png';

// Import newly generated case studies posters
import nikePoster from '@/assets/images/nike_poster_1780426002660.png';
import renovagrowPoster from '@/assets/images/renovagrow_poster_1780426019261.png';
import glowRitualPoster from '@/assets/images/glow_ritual_poster_1780426034974.png';

interface Project {
  title: string;
  client: string;
  type: 'marketing-video' | 'photo-design' | 'ad-run' | 'seo' | 'automation' | 'web-dev';
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  color: string;
  image?: string;
  video?: string;
  iframe?: string;
}

const projects: Project[] = [
  // MARKETING PHOTO DESIGNS
  {
    title: 'AromaBD Fragrances Flat-Lay Composition',
    client: 'AromaBD Co. (Fragrance)',
    type: 'photo-design',
    metric: '+32%',
    metricLabel: 'Engagement Rate Increase',
    description: 'Minimalist flat-lay branding assets highlighting Rose Oud, Amber Vanilla, and Oud Wood fragrances on premium marble with pink silk accents.',
    tags: ['AromaBD Brand Design', 'Creative Product Photography', 'Social Visuals'],
    color: 'from-emerald-400 to-green-600',
    image: perfumeFlatlay,
  },
  {
    title: 'Crimson Rose Velvet Conceptual Launch',
    client: 'AromaBD Co. (Fragrance)',
    type: 'photo-design',
    metric: '1.4x',
    metricLabel: 'Ad Conversion Multiplier',
    description: 'Dramatic dark rose fragrance creative on sumptuous red velvet with glowing volumetric lighting pipelines for Rose Oud launch.',
    tags: ['E-Commerce Hero Assets', 'Premium Color Theory', 'Volumetric Lighting'],
    color: 'from-green-400 to-emerald-500',
    image: perfumeVelvet,
  },
  {
    title: 'Editorial Garden Lifestyle Campaign',
    client: 'AromaBD Co. (Fragrance)',
    type: 'photo-design',
    metric: '-15%',
    metricLabel: 'Reduction in Cost Per Click',
    description: 'A deeply emotional, sunset golden-hour campaign set in a blooming rose garden, translating sensory scent profiles to high-end social media banners.',
    tags: ['Lifestyle Campaign', 'South Asian Model Edit', 'Warm Backlight'],
    color: 'from-teal-400 to-emerald-600',
    image: perfumeWoman,
  },
  {
    title: 'Air Jordan Social Trendsetter Campaign',
    client: 'Air Jordan Regional Partner',
    type: 'photo-design',
    metric: '50% OFF',
    metricLabel: 'Promotional Campaign CTR',
    description: 'A dark, gritty urban-textured ad poster featuring iconic black & white low patent-leather sneakers in dynamic floating mid-air arrangement.',
    tags: ['Street Footwear Style', 'Urban Grungy Aesthetic', 'E-Commerce Poster'],
    color: 'from-zinc-700 to-black',
    image: nikePoster,
  },
  {
    title: 'RenovaGrow Seaside Citrus Freshness Launch',
    client: 'RenovaGrow refreshing',
    type: 'photo-design',
    metric: 'Fresh 100%',
    metricLabel: 'Zero Artificial Additives Focus',
    description: 'Bright tropical coastal product scene of RenovaGrow clean lime energy plant-cans sweating beautifully inside an icewater bucket.',
    tags: ['Lime Citrus Glow', '3D Scene Styling', 'Beach Sunbathing Mood'],
    color: 'from-blue-400 to-emerald-600',
    image: renovagrowPoster,
  },
  {
    title: 'Glow Ritual Premium Sunbeam Skincare Poster',
    client: 'Glow Ritual Botanical',
    type: 'photo-design',
    metric: '92% Rate',
    metricLabel: 'Audience Skin-Texture Rating',
    description: 'Minimalist editorial display featuring a botanical serum dropper and sage daily cleanser on sunlit travertine pedestals with leaf patterns.',
    tags: ['Sage Green Palette', 'Organic Soft Shadows', 'Clean Beauty Launch'],
    color: 'from-stone-600 to-emerald-800',
    image: glowRitualPoster,
  },

  // MARKETING VIDEOS
  {
    title: 'Hawas Fire & Valero Fragrances Trilogy',
    client: 'Valero & Valdas',
    type: 'marketing-video',
    metric: '420K+',
    metricLabel: 'Organic Social Video Views',
    description: "Cinematic short-form launch sequence: 'Unleash your inner fire' for Hawas Fire & 'Experience imagination beyond thought' for Valero's iconic perfume impressions.",
    tags: ['3D Product Ad', 'Cinematic Flow', 'Product Hook Ads'],
    color: 'from-amber-500 to-emerald-600',
    image: 'https://plain-apac-prod-public.komododecks.com/202608/23/nLpx5mWVxIG3xz6BSEG2/image.png',
  },

  // AD RUN SERVICES
  {
    title: 'Autonomous Audience Budget Shifting',
    client: 'FinGrow Capital',
    type: 'ad-run',
    metric: '+18%',
    metricLabel: 'Monthly Lead CTR Uplift',
    description: 'Integrated intelligent split-budget spending reallocating operational capital across search and social channels in real-time.',
    tags: ['Meta & Google Ads', 'CPC Optimization', 'Autonomous Bidding'],
    color: 'from-green-500 to-teal-500',
  },

  // SEO
  {
    title: 'Semantic SEO Cluster Mapping',
    client: 'MedSaaS International',
    type: 'seo',
    metric: '+38%',
    metricLabel: 'Organic Search Click growth',
    description: 'Programmatic high-intent content clusters mapping semantic customer intents to claim global ranking positions.',
    tags: ['Programmatic SEO', 'SERP Indexation', 'Inbound Loop'],
    color: 'from-emerald-400 to-green-500',
  },

  // BUSINESS AUTOMATIONS
  {
    title: 'Instant Agentic Appointment Booking',
    client: 'Apex Logistics',
    type: 'automation',
    metric: '-24%',
    metricLabel: 'Customer Turnaround Times',
    description: 'Custom AI conversational agents scanning customer requests of the inbox and scheduling real-time consultation calls 24/7.',
    tags: ['CRM Orchestration', 'Database Sync', 'AI Schedulers'],
    color: 'from-teal-500 to-green-600',
  },

  // BUSINESS WEB DEVELOPMENT
  {
    title: 'High-Performance 3D Web Funnel',
    client: 'Aether Robotics',
    type: 'web-dev',
    metric: '+25%',
    metricLabel: 'Active User Retention Boost',
    description: 'Designed highly creative interactive landing experiences with lightweight responsive canvases and embedded web assets.',
    tags: ['ThreeJS Engine', 'Adaptive Frame', 'UX Engineering'],
    color: 'from-green-600 to-emerald-700',
  }
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<'all' | 'marketing-video' | 'photo-design' | 'ad-run' | 'seo' | 'automation' | 'web-dev'>('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeTab);

  return (
    <section id="portfolio" className="py-24 md:py-32 w-full relative z-10 bg-gradient-to-b from-[#f0fdf4]/30 to-[#f0fdf4]/80 scroll-mt-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200/50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="size-3.5 text-emerald-600" />
              RenovaGrow Service Case Studies
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-emerald-950 leading-[1.1]">
              Crafted <br />
              <span className="font-serif italic font-normal text-emerald-700">For True Outperformance</span>
            </h2>
            <p className="text-emerald-900/80 mt-6 text-lg md:text-xl font-medium leading-relaxed">
              We do not believe in theoretical marketing. Review the raw data metrics, high-end designs, and automation flows engineered for modern growing brands.
            </p>
          </motion.div>

          {/* Filtering tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap gap-2 mt-8 md:mt-0 max-w-xl justify-start md:justify-end"
          >
            {[
              { id: 'all', label: 'All Cases' },
              { id: 'marketing-video', label: 'Videos' },
              { id: 'photo-design', label: 'Photo Designs' },
              { id: 'ad-run', label: 'Ad Run' },
              { id: 'seo', label: 'SEO' },
              { id: 'automation', label: 'Automations' },
              { id: 'web-dev', label: 'Web Dev' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-emerald-800 text-white shadow-lg shadow-emerald-800/15 scale-102 border border-emerald-800' 
                    : 'bg-white/80 text-emerald-950 hover:bg-emerald-50 border border-emerald-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects list */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass-panel hover:shadow-2xl hover:shadow-emerald-900/5 rounded-3xl overflow-hidden border border-emerald-100 bg-white/70 flex flex-col justify-between"
              >
                <div className="relative flex-1 flex flex-col">
                  {/* Performance Campaign Media with Hover Effect */}
                  {project.iframe ? (
                    <div className="relative w-full h-[240px] overflow-hidden bg-zinc-950 flex flex-col justify-between border-b border-emerald-50">
                      <div className="w-full h-full absolute inset-0">
                        <iframe
                          src={project.iframe}
                          allow="autoplay; gyroscope;"
                          allowFullScreen
                          referrerPolicy="strict-origin"
                          style={{ border: 0 }}
                          className="w-full h-full"
                          title="Embedded content made on Kapwing"
                        />
                      </div>
                      {/* Top Label */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-emerald-150 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-900 shadow-md tracking-wide flex items-center gap-1 z-20 pointer-events-none">
                        <Film className="size-3 text-emerald-600" />
                        PREVIEW VIDEO
                      </div>
                      {/* Kapwing editor credit beautifully placed on the right */}
                      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-zinc-300 text-[10px] px-2 py-0.5 rounded-md hover:text-white transition-colors duration-200 z-20">
                        Edited on{' '}
                        <a 
                          href="https://www.kapwing.com/video-editor" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="underline font-semibold hover:text-emerald-400"
                        >
                          Kapwing
                        </a>
                      </div>
                    </div>
                  ) : project.video ? (
                    <div className="relative w-full h-[240px] overflow-hidden bg-emerald-50/50 flex items-center justify-center border-b border-emerald-50">
                      <video 
                        src={project.video} 
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-800 shadow-sm tracking-wide flex items-center gap-1">
                        <Film className="size-3 text-emerald-600" />
                        PREVIEW VIDEO
                      </div>
                    </div>
                  ) : project.image ? (
                    <div className="relative w-full h-[240px] overflow-hidden bg-emerald-50/50 flex items-center justify-center border-b border-emerald-50">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-800 shadow-sm tracking-wide flex items-center gap-1">
                        <ImageIcon className="size-3 text-emerald-600" />
                        PROTFOLIO WORK
                      </div>
                    </div>
                  ) : (
                    /* Visual blur highlights in background of text-only cards */
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 blur-3xl rounded-full pointer-events-none" />
                  )}

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-emerald-800/70 text-xs font-bold tracking-wider uppercase">
                          {project.client}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-600">
                          {project.type === 'marketing-video' && <Film className="size-4.5" />}
                          {project.type === 'photo-design' && <ImageIcon className="size-4.5" />}
                          {project.type === 'ad-run' && <Target className="size-4.5" />}
                          {project.type === 'seo' && <Search className="size-4.5" />}
                          {project.type === 'automation' && <Bot className="size-4.5" />}
                          {project.type === 'web-dev' && <Code2 className="size-4.5" />}
                        </div>
                      </div>

                      {/* Impact Metric Header */}
                      <div className="mb-6">
                        <span className={`text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.metric}
                        </span>
                        <span className="block text-emerald-900/60 text-xs font-bold uppercase tracking-wider mt-1">
                          {project.metricLabel}
                        </span>
                      </div>

                      {/* Content details */}
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-emerald-950 mb-3 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-emerald-900/75 text-sm md:text-base font-semibold leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags and Action footer */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 text-[10px] font-bold tracking-tight bg-emerald-50 border border-emerald-100 rounded-full text-emerald-800">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a 
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-600 group transition-colors mt-2"
                      >
                        Discuss Campaign Model
                        <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

