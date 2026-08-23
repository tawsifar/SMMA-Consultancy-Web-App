const fs = require('fs');
let code = fs.readFileSync('src/components/ui/grid-feature-cards.tsx', 'utf-8');

const replacement = `export function FeatureCard({ feature, className, delay = 0, ...props }: FeatureCardProps) {
  const isVideoCard = !!feature.video;
  const isVectorCard = !!feature.showVideoVector;
  const isImageCard = !!feature.image;
  const isFullWidthCard = isVideoCard || isVectorCard || isImageCard;

  if (isImageCard) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -8, scale: 1.01 }}
        className={cn(
          'glass-panel rounded-3xl relative overflow-hidden group flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 border-emerald-50 bg-white/40', 
          className
        )}
        {...props}
      >
        {/* Top 65% Image */}
        <div className="w-full h-3/5 min-h-[250px] relative overflow-hidden border-b border-emerald-100">
          <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-emerald-950/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        </div>
        
        {/* Bottom 40% Text */}
        <div className="w-full flex-1 p-8 md:p-10 flex flex-col justify-center bg-white/40">
          <div className="flex items-center gap-4 mb-3">
             <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                <feature.icon className="text-emerald-800 size-6" strokeWidth={1.5} aria-hidden />
             </div>
             <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
               {feature.title}
             </h3>
          </div>
          <p className="text-emerald-900/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl mt-1">
            {feature.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div`;

code = code.replace(/export function FeatureCard[^]+?return \(\n    <motion\.div/, replacement);

// We need to also clean up the old isImageCard rendering inside the main return
const oldIsImageCardBlock = `{isImageCard \\? \\([\\s\\S]*?\\) : isVectorCard \\? \\(`;
code = code.replace(new RegExp(oldIsImageCardBlock), `{isVectorCard ? (`);
const oldIsImageCardBlock2 = `const isFullWidthCard = isVideoCard \\|\\| isVectorCard \\|\\| isImageCard;`;
// it's fine, we already redefined it at the top of the function. wait, we just replaced the whole top.
// but the old body still has {isImageCard ? ...} which we need to remove.

// Let's just do a clean regex replacement for the old logic.
