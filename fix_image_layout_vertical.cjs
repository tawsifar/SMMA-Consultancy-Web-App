const fs = require('fs');
let code = fs.readFileSync('src/components/ui/grid-feature-cards.tsx', 'utf-8');

// We will recreate the early return for isImageCard, rendering it as a top-text bottom-image vertical layout.
const customBlockStart = `export function FeatureCard({ feature, className, delay = 0, ...props }: FeatureCardProps) {
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
    <motion.div`;

// Note: Replace the start of FeatureCard
code = code.replace(/export function FeatureCard[^]+?return \(\n    <motion\.div/, customBlockStart);

// Note: also strip out the old isImageCard logic from inside the isFullWidthCard block
const innerReplaceStart = `{isImageCard \\? \\([\\s\\S]*?\\) : isVectorCard \\? \\(`;
code = code.replace(new RegExp(innerReplaceStart), '{isVectorCard ? (');

fs.writeFileSync('src/components/ui/grid-feature-cards.tsx', code);
