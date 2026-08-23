'use client';
import React from 'react';
import { Video, Image as ImageIcon, Target, Search, Bot, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
  {
    title: 'Marketing Videos',
    icon: Video,
    description: "Viral social reels & sensory product ads. Showcase of 'Hawas Fire' and 'Valero Imagination' launch loops optimized for custom feed hook retention.",
    image: "https://plain-apac-prod-public.komododecks.com/202608/23/nLpx5mWVxIG3xz6BSEG2/image.png",
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Marketing Photo Designs',
    icon: ImageIcon,
    description: 'Premium visual brand photoshoots and custom graphic blueprints engineered to capture conversion, like our iconic AromaBD catalog launches.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Ad Run Services',
    icon: Target,
    description: 'Autonomous campaigns executing intelligent CPC bidding and continuous cross-platform budget optimization.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'SEO',
    icon: Search,
    description: 'Programmatic authority cluster indexation designed to rank for search queries and scale organic buyer traffic.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Business Automations',
    icon: Bot,
    description: 'Smart CRM synchronization loops and custom conversational agent workflows automating lead triage and client calendar bookings.',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'Business Web Development',
    icon: Code2,
    description: 'Ultra-immersive, rapid loading digital landing hubs equipped with micro-interactive animations and solid infrastructure.',
    className: 'md:col-span-3 md:row-span-1',
  },
];

export default function DemoOne() {
  return (
    <section id="features" className="py-24 md:py-36 w-full relative z-10 scroll-mt-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-emerald-950 leading-[1.1]">
            Our Professional <br className="hidden md:block" />
            <span className="font-serif italic font-normal text-emerald-700">Capabilities</span>
          </h2>
          <p className="text-emerald-900/80 mt-6 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Streamlined solutions designed to automate lead generation, elevate aesthetic trust, and drive absolute capital efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {features.map((feature, i) => (
            <FeatureCard 
              key={i} 
              feature={feature} 
              className={feature.className}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
