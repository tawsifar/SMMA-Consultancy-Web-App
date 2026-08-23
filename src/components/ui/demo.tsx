'use client'

import { motion } from "framer-motion";
 
// BrandLeaf component representing the iconic RenovaGrow logo outline and arrow growth theme
function BrandLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glossy leaf matching RenovaGrow brand asset */}
      <path 
        d="M50 15C32 38 32 68 50 85C68 68 68 38 50 15Z" 
        fill="currentColor" 
        fillOpacity="0.18"
        stroke="currentColor" 
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M50 85C50 61 50 39 50 15" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      {/* Curved growth arrow inside the leaf representing business elevation */}
      <path 
        d="M36 58C41 50 49 46 56 48" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      <path 
        d="M52 43L57 48L52 53" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SplineSceneBasic() {
  return (
    <section id="home" className="w-full min-h-[100vh] relative flex flex-col md:flex-row md:items-center md:justify-center overflow-hidden pt-24 md:pt-0">
      
      {/* Mobile Heading (Hidden on desktop) */}
      <div className="w-full px-6 relative z-10 pointer-events-none md:hidden pt-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-[12vw] leading-[0.9] font-bold tracking-tighter text-emerald-950">
            Renova<span className="text-emerald-600">Grow</span> <br/>
            <span className="font-serif italic font-normal text-emerald-800/80 block mt-2 text-[9vw]">Digital Marketing</span>
          </h1>
        </motion.div>
      </div>

      {/* 3D Scene Background - Pure-CSS/SVG 3D Glass sculpture, floating brand leaves, & high-definition palm leaves campaign video */}
      <div className="relative md:absolute md:right-4 lg:right-12 md:top-0 md:bottom-0 z-0 flex justify-center md:justify-end items-center opacity-100 pointer-events-none w-full h-[55vh] md:h-full mt-4 mb-4 md:mt-0 md:mb-0">
        <div className="w-[95%] md:w-[38vw] lg:w-[34vw] h-[46vh] md:h-[60vh] rounded-4xl overflow-hidden relative shadow-2xl border border-emerald-200/40 bg-gradient-to-br from-emerald-50/20 to-teal-50/10 backdrop-blur-md flex p-4 md:p-6 items-center justify-center">
          
          {/* Tech Dotted Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: 'radial-gradient(#10b981 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
            }}
          />

          
          {/* Floating Professional Service Tags */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[12%] left-[10%] bg-white/70 backdrop-blur-md border border-emerald-100 shadow-sm px-3 py-1.5 rounded-full text-emerald-900 text-[10px] md:text-xs font-semibold">Video Ads</motion.div>
          
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[18%] right-[10%] bg-emerald-900/80 backdrop-blur-md border border-emerald-700 shadow-sm px-3 py-1.5 rounded-full text-white text-[10px] md:text-xs font-semibold">Poster Ads</motion.div>
          
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[25%] right-[8%] bg-white/70 backdrop-blur-md border border-teal-100 shadow-sm px-3 py-1.5 rounded-full text-teal-900 text-[10px] md:text-xs font-semibold">Automated Ads</motion.div>
          
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-[12%] left-[8%] bg-white/70 backdrop-blur-md border border-emerald-100 shadow-sm px-3 py-1.5 rounded-full text-emerald-900 text-[10px] md:text-xs font-semibold">Automated Text Message Services</motion.div>
          
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[75%] left-[20%] bg-teal-900/80 backdrop-blur-md border border-teal-700 shadow-sm px-3 py-1.5 rounded-full text-white text-[10px] md:text-xs font-semibold">AI Voice Call Assistant</motion.div>
          
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute top-[5%] right-[30%] bg-emerald-50/90 backdrop-blur-md border border-emerald-200 shadow-sm px-3 py-1.5 rounded-full text-emerald-950 text-[10px] md:text-xs font-semibold">Brand Website Creating</motion.div>

          {/* Deep glowing color fields in the background */}
          <div className="absolute w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute w-60 h-60 rounded-full bg-teal-300/15 blur-2xl translate-x-12 -translate-y-12 animate-pulse" style={{ animationDuration: '8s' }} />

          {/* Interactive Core Area containing rings, rotating glass cube, and floating SVG leaves */}
          <div className="relative w-full h-full flex-1 flex items-center justify-center">

            {/* Floating thin SVG orbital rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 rounded-full border border-dashed border-emerald-500/20 flex items-center justify-center"
            >
              <div className="size-2 rounded-full bg-emerald-500/40 -mt-1" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full border border-emerald-500/10 flex items-center justify-center"
            >
              <div className="size-1.5 rounded-full bg-teal-400/50 ml-1" />
            </motion.div>

            {/* Majestic 3D Glassmorphic Interactive rotating cube */}
            <div className="absolute pointer-events-auto cursor-grab active:cursor-grabbing [perspective:1000px] flex items-center justify-center">
              <motion.div
                animate={{
                  rotateX: [12, 372],
                  rotateY: [15, 375],
                  rotateZ: [10, 370]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-24 h-24 md:w-24 md:h-24 relative [transform-style:preserve-3d]"
                whileHover={{ scale: 1.08 }}
              >
                {/* Front face with glassy tint */}
                <div className="absolute inset-0 bg-emerald-400/15 border-2 border-emerald-300/40 backdrop-blur-md [transform:translateZ(48px)] rounded-2xl flex flex-col items-center justify-center text-[10px] font-mono font-bold text-emerald-800 tracking-wider shadow-inner">
                  <span className="text-emerald-950 font-sans font-extrabold text-[11px]">RENOVA</span>
                  <span className="text-[7px] text-emerald-800/80 mt-0.5">GROW</span>
                </div>
                
                {/* Back face with glassy tint */}
                <div className="absolute inset-0 bg-teal-500/15 border-2 border-teal-400/40 backdrop-blur-md [transform:rotateY(180deg)_translateZ(48px)] rounded-2xl flex flex-col items-center justify-center text-[10px] font-mono font-bold text-teal-800 tracking-wider shadow-inner">
                  <span className="text-emerald-950 font-sans font-extrabold text-[11px]">GROW</span>
                  <span className="text-[7px] text-teal-800/80 mt-0.5">AUTOMATION</span>
                </div>
                
                {/* Left face with glassy tint */}
                <div className="absolute inset-0 bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-md [transform:rotateY(-90deg)_translateZ(48px)] rounded-2xl" />
                
                {/* Right face with glassy tint */}
                <div className="absolute inset-0 bg-teal-400/10 border border-teal-300/30 backdrop-blur-md [transform:rotateY(90deg)_translateZ(48px)] rounded-2xl" />
                
                {/* Top face with glassy tint */}
                <div className="absolute inset-0 bg-emerald-300/15 border border-emerald-200/35 backdrop-blur-md [transform:rotateX(90deg)_translateZ(48px)] rounded-2xl" />
                
                {/* Bottom face with glassy tint */}
                <div className="absolute inset-0 bg-emerald-800/10 border-2 border-emerald-600/30 backdrop-blur-md [transform:rotateX(-90deg)_translateZ(48px)] rounded-2xl" />
                
                {/* Inner glowing core capsule */}
                <div className="absolute inset-5 bg-gradient-to-tr from-amber-400/50 via-emerald-500/40 to-teal-400/50 blur-[3px] rounded-full [transform:translateZ(0px)] animate-pulse" />
              </motion.div>
            </div>

            {/* Dynamic, hardware-accelerated floating brand leaves drifting with natural sway */}
            <motion.div
              animate={{
                x: [0, 15, -15, 0],
                y: [0, -40, 20, 0],
                rotate: [0, 45, -45, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-6 text-emerald-600/60 size-10"
            >
              <BrandLeaf className="w-full h-full" />
            </motion.div>

            <motion.div
              animate={{
                x: [0, -20, 15, 0],
                y: [0, 35, -25, 0],
                rotate: [20, -60, 45, 20]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 left-4 text-emerald-500/50 size-12"
            >
              <BrandLeaf className="w-full h-full" />
            </motion.div>

            <motion.div
              animate={{
                x: [-10, 10, -10],
                y: [0, -15, 0],
                scale: [0.95, 1.05, 0.95],
                rotate: [-15, 15, -15]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-24 left-10 text-teal-600/40 size-8"
            >
              <BrandLeaf className="w-full h-full" />
            </motion.div>

            <motion.div
              animate={{
                x: [15, -15, 15],
                y: [0, 25, 0],
                rotate: [30, 90, 30]
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
              className="absolute bottom-16 right-8 text-emerald-700/40 size-9"
            >
              <BrandLeaf className="w-full h-full" />
            </motion.div>

          </div>

          {/* Conversions KPI Pill */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-3 right-3 md:top-6 md:right-6 bg-white/85 border border-emerald-100/90 p-2.5 rounded-2xl shadow-lg flex items-center gap-2 pointer-events-auto hover:scale-105 transition-all"
          >
            <div className="size-2 rounded-full bg-emerald-600 animate-ping" />
            <div className="text-left">
              <span className="block text-[7px] uppercase font-bold tracking-wider text-emerald-900/60 font-mono">Conversion Boost</span>
              <span className="text-[10px] font-bold text-emerald-950 font-mono">+340% Realized</span>
            </div>
          </motion.div>

          {/* AI Optimizations KPI Pill */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [0, 10, 0], opacity: 1 }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-white/85 border border-emerald-100/90 p-2.5 rounded-2xl shadow-lg flex items-center gap-2 pointer-events-auto hover:scale-105 transition-all w-fit"
          >
            <div className="size-2 rounded-full bg-amber-500 animate-pulse" />
            <div className="text-left">
              <span className="block text-[7px] uppercase font-bold tracking-wider text-emerald-900/60 font-mono">Campaign Audits</span>
              <span className="text-[10px] font-bold text-emerald-950 font-mono">Gemini Supported</span>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Foreground Content */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 pointer-events-none flex flex-col justify-center md:min-h-screen pb-12 md:pb-0 md:pt-20">
        
        {/* Desktop Heading (Hidden on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-3xl hidden md:block animate-fade-in"
        >
          <h1 className="text-[7.5vw] leading-[0.85] font-bold tracking-tighter text-emerald-950">
            Renova<span className="text-emerald-600">Grow</span> <br/>
            <span className="font-serif italic font-normal text-teal-800">Digital Marketing Agency</span>
          </h1>
        </motion.div>

        {/* Card (Both mobile and desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-8 md:mt-12 pointer-events-auto flex justify-center md:justify-start"
        >
          <div className="glass-panel p-6 md:p-8 rounded-3xl w-full max-w-md md:inline-block border-emerald-150/40 bg-white/50">
            <p className="text-emerald-950 text-base md:text-lg leading-relaxed font-semibold text-center md:text-left">
              Renovate your business, Grow your Reach. We provide high-impact marketing shortform videos, premium photo designs, target ad spend campaigns, authority SEO, and custom workflow automations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a href="#contact" className="w-[100%] sm:w-auto text-center px-8 py-3.5 rounded-full bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-emerald-700/15">
                Get Free Audit
              </a>
              <a href="#portfolio" className="w-[100%] sm:w-auto text-center px-8 py-3.5 rounded-full bg-white/70 text-emerald-950 text-sm font-semibold hover:bg-white hover:scale-[1.03] transition-all duration-300 border border-emerald-200">
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
