import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  video?: string;
  showVideoVector?: boolean;
  image?: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
  feature: FeatureType;
  delay?: number;
};

function VideoVectorDesign() {
  return (
    <div className="w-full max-w-[340px] lg:max-w-full aspect-[4/3] bg-zinc-900/5 rounded-2xl p-6 border border-emerald-800/10 relative overflow-hidden group/vector flex flex-col justify-between select-none shadow-inner">
      {/* Background abstract grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Viewport/Camera guides in emerald-ash color */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-emerald-800/20" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-emerald-800/20" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-emerald-800/20" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-emerald-800/20" />
      
      {/* Centered abstract camera lens / concentric circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 flex items-center justify-center pointer-events-none">
        <div className="size-24 rounded-full border border-emerald-800/5 flex items-center justify-center">
          <div className="size-16 rounded-full border border-dashed border-emerald-800/10 flex items-center justify-center">
            <div className="size-8 rounded-full bg-emerald-500/5 flex items-center justify-center">
              <div className="size-3 rounded-full bg-emerald-600/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Controls Header */}
      <div className="relative z-10 flex items-center justify-between text-emerald-800/60 text-[10px] font-mono tracking-wider">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500/40 animate-pulse" />
          <span>REC 00:04:12:15</span>
        </div>
        <span className="text-[9px] border border-emerald-800/25 px-1.5 py-0.5 rounded text-emerald-700/60 uppercase font-semibold">FEED-LOG</span>
      </div>

      {/* Audio waves visual animation */}
      <div className="relative z-10 flex items-end justify-center gap-1 h-14 my-auto px-4 opacity-80">
        {[40, 25, 60, 45, 80, 50, 95, 75, 45, 60, 30, 55, 40, 20].map((h, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-full bg-emerald-800/15"
            animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.6}%`] }}
            transition={{
              duration: 1.2 + (i * 0.1) % 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Modern Multi-Track NLE Timeline representation */}
      <div className="relative z-10 w-full bg-emerald-50/20 backdrop-blur-md p-3 rounded-xl border border-emerald-800/10 space-y-2 font-mono text-[9px]">
        {/* Track 1: Video Track */}
        <div className="flex items-center gap-2">
          <span className="w-5 text-emerald-800/60 font-semibold">V1</span>
          <div className="flex-1 h-5 bg-emerald-800/5 rounded border border-emerald-800/10 overflow-hidden relative flex items-center">
            <div className="w-[45%] h-full bg-emerald-700/5 border-r border-emerald-800/10 flex items-center justify-between px-1.5">
              <span className="text-emerald-850/60 truncate">loop_01_fire.mp4</span>
            </div>
            <div className="w-[35%] h-full bg-emerald-700/10 border-r border-emerald-800/10 flex items-center justify-between px-1.5">
              <span className="text-emerald-900/60 truncate">valero_main.mp4</span>
            </div>
            {/* Cut indicator */}
            <div className="absolute left-[45%] top-0 bottom-0 w-[1px] bg-red-400/40 z-20" />
          </div>
        </div>

        {/* Track 2: Audio Track */}
        <div className="flex items-center gap-2">
          <span className="w-5 text-emerald-800/60 font-semibold">A1</span>
          <div className="flex-1 h-3 bg-emerald-800/5 rounded border border-emerald-800/5 overflow-hidden relative">
            <div className="absolute left-[10%] right-[30%] top-0 bottom-0 bg-emerald-600/10 rounded" />
          </div>
        </div>

        {/* Timeline cursor & Scrubber line */}
        <div className="absolute left-[48%] top-0 bottom-0 w-[1px] bg-emerald-600/40 z-20 pointer-events-none flex flex-col items-center">
          <div className="size-1.5 bg-emerald-700 rounded-full -mt-[2px]" />
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({ feature, className, delay = 0, ...props }: FeatureCardProps) {
  const isVideoCard = !!feature.video;
  const isVectorCard = !!feature.showVideoVector;
  const isImageCard = !!feature.image;
  const isFullWidthCard = isVideoCard || isVectorCard;

  if (isImageCard) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -8, scale: 1.01 }}
        className={cn(
          'glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 border-emerald-50 bg-white/40', 
          className
        )} 
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full w-full">
          {/* Top text content */}
          <div className="mb-10 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-white/80 shadow-sm border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
              <feature.icon className="text-emerald-800 size-7" strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-emerald-900/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              {feature.description}
            </p>
          </div>
          
          {/* Bottom massive image */}
          <div className="w-full mt-auto aspect-video relative rounded-2xl overflow-hidden shadow-xl border border-emerald-100 group/thumb bg-emerald-50/50 flex items-center justify-center">
            <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover group-hover/thumb:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0 bg-emerald-950/5 group-hover/thumb:bg-transparent transition-colors duration-500 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={cn(
        'glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 border-emerald-50 bg-white/40', 
        className
      )} 
      {...props}
    >
      {/* Dynamic looping background video if provided */}
      {feature.video && (
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10 group-hover:opacity-15 transition-opacity duration-500 ease-out pointer-events-none">
          <video
            src={feature.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent" />
        </div>
      )}

      {/* Subtle gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-green-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
      
      {isFullWidthCard ? (
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[220px]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/80 shadow-sm border border-emerald-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                <feature.icon className="text-emerald-800 size-7" strokeWidth={1.5} aria-hidden />
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-emerald-900/80 text-base md:text-lg font-medium leading-relaxed max-w-md">
                {feature.description}
              </p>
            </div>
          </div>

          {/* Minimalist Vector or Video player design */}
          <div className="lg:col-span-5 w-full h-full flex items-center justify-center mt-6 lg:mt-0 relative">
            {isVectorCard ? (
              <VideoVectorDesign />
            ) : (
              <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-full aspect-[4/3] bg-zinc-950 rounded-2xl p-4 border border-zinc-805 shadow-2xl relative overflow-hidden group/thumb flex flex-col justify-between">
                {/* Golden circular glow matching Hawas Fire ring theme */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25)_0%,transparent_70%)] pointer-events-none" />
                
                {/* Loop video in small window */}
                <div className="absolute inset-1 rounded-xl overflow-hidden opacity-45 group-hover/thumb:opacity-70 transition-opacity duration-700">
                  <video
                    src={feature.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover filter brightness-75 contrast-125"
                  />
                </div>

                {/* Player Topbar */}
                <div className="relative z-10 flex items-center justify-between text-zinc-400 text-[10px] font-mono tracking-wider">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/5">
                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>ad_sequence_v2.mp4</span>
                  </div>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/5 text-emerald-400">1080P</span>
                </div>

                {/* Centered glassmorphic play/maintenance status trigger */}
                <div className="relative z-10 flex flex-col justify-center items-center my-auto gap-2">
                  <div className="px-4 py-2 rounded-xl bg-zinc-900/65 backdrop-blur-md border border-zinc-700/50 flex flex-col items-center gap-1.5 text-zinc-300 shadow-2xl transform group-hover/thumb:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-zinc-400 animate-pulse" />
                      <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-zinc-300">IN MAINTENANCE</span>
                    </div>
                    <span className="text-[9px] text-zinc-500 font-sans tracking-wide">Live Stream Optimizing</span>
                  </div>
                </div>

                {/* Player Bottombar - Scrubber & visualizer */}
                <div className="relative z-10 w-full space-y-2 bg-black/70 backdrop-blur-md p-2.5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between text-[9px] text-zinc-400 font-mono">
                    <span>0:03</span>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500 font-semibold uppercase tracking-widest text-[8px] px-1 bg-amber-500/10 rounded">HAWAS FIRE</span>
                      <span className="text-emerald-400 font-semibold uppercase tracking-widest text-[8px] px-1 bg-emerald-500/10 rounded">VALERO</span>
                    </div>
                  </div>
                  
                  {/* Custom timeline bar */}
                  <div className="w-full h-1 bg-zinc-805 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-[45%] bg-gradient-to-r from-amber-500 to-emerald-500" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/80 shadow-sm border border-emerald-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
              <feature.icon className="text-emerald-800 size-7" strokeWidth={1.5} aria-hidden />
            </div>
          </div>
          
          <div className="relative z-10 mt-auto">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-emerald-900/80 text-base md:text-lg font-medium leading-relaxed max-w-md">
              {feature.description}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
}
