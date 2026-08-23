const fs = require('fs');
let code = fs.readFileSync('src/components/ui/demo.tsx', 'utf-8');

// Replace the parent wrapper to add padding to the right and make it slightly smaller
code = code.replace(
  'className="relative md:absolute md:right-0 md:top-0 md:bottom-0 z-0 flex justify-center md:justify-end items-center opacity-100 lg:translate-x-[2%] pointer-events-none w-full h-[55vh] md:h-full mt-4 mb-4 md:mt-0 md:mb-0"',
  'className="relative md:absolute md:right-4 lg:right-12 md:top-0 md:bottom-0 z-0 flex justify-center md:justify-end items-center opacity-100 pointer-events-none w-full h-[55vh] md:h-full mt-4 mb-4 md:mt-0 md:mb-0"'
);

code = code.replace(
  'className="w-[95%] md:w-[42vw] h-[46vh] md:h-[68vh] rounded-4xl overflow-hidden relative shadow-2xl border border-emerald-200/30 bg-gradient-to-br from-emerald-50/10 to-teal-50/5 backdrop-blur-sm flex flex-col md:flex-row p-4 md:p-6 gap-4 md:gap-5 items-center justify-center"',
  'className="w-[95%] md:w-[38vw] lg:w-[34vw] h-[46vh] md:h-[60vh] rounded-4xl overflow-hidden relative shadow-2xl border border-emerald-200/40 bg-gradient-to-br from-emerald-50/20 to-teal-50/10 backdrop-blur-md flex p-4 md:p-6 items-center justify-center"'
);

// Remove the video capsule (lines 79-98)
const videoCapsuleRegex = /\{\/\* Tropical Palm Leaves Video Capsule[\s\S]*?<\/div>[\s]*\{\/\* Interactive Core Area/;
code = code.replace(videoCapsuleRegex, `{/* Interactive Core Area`);

// Update the cube text
code = code.replace(/<span className="text-\[7px\] text-emerald-800\/80 mt-0\.5">3D ENGINE<\/span>/g, '<span className="text-[7px] text-emerald-800/80 mt-0.5">GROW</span>');

// Inject the floating tags
const floatingTags = `
          {/* Floating Professional Service Tags */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[12%] left-[10%] bg-white/70 backdrop-blur-md border border-emerald-100 shadow-sm px-3 py-1.5 rounded-full text-emerald-900 text-[10px] md:text-xs font-semibold">Video Ads</motion.div>
          
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[18%] right-[10%] bg-emerald-900/80 backdrop-blur-md border border-emerald-700 shadow-sm px-3 py-1.5 rounded-full text-white text-[10px] md:text-xs font-semibold">Poster Ads</motion.div>
          
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[25%] right-[8%] bg-white/70 backdrop-blur-md border border-teal-100 shadow-sm px-3 py-1.5 rounded-full text-teal-900 text-[10px] md:text-xs font-semibold">Automated Ads</motion.div>
          
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-[12%] left-[8%] bg-white/70 backdrop-blur-md border border-emerald-100 shadow-sm px-3 py-1.5 rounded-full text-emerald-900 text-[10px] md:text-xs font-semibold">Automated Text Message Services</motion.div>
          
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[75%] left-[20%] bg-teal-900/80 backdrop-blur-md border border-teal-700 shadow-sm px-3 py-1.5 rounded-full text-white text-[10px] md:text-xs font-semibold">AI Voice Call Assistant</motion.div>
          
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute top-[5%] right-[30%] bg-emerald-50/90 backdrop-blur-md border border-emerald-200 shadow-sm px-3 py-1.5 rounded-full text-emerald-950 text-[10px] md:text-xs font-semibold">Brand Website Creating</motion.div>
`;

code = code.replace(/\{\/\* Deep glowing color fields in the background \*\/\}/, floatingTags + '\n          {/* Deep glowing color fields in the background */}');

fs.writeFileSync('src/components/ui/demo.tsx', code);
