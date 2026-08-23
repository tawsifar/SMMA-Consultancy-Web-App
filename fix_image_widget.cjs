const fs = require('fs');
let code = fs.readFileSync('src/components/ui/grid-feature-cards.tsx', 'utf-8');

// I am rewriting the entire FeatureCard component so the image covers the *entire* widget,
// and the text is elegantly overlaid on top.

const replacement = `export function FeatureCard({ feature, className, delay = 0, ...props }: FeatureCardProps) {
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
          'glass-panel rounded-3xl relative overflow-hidden group flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 border border-emerald-100 min-h-[400px]', 
          className
        )}
        {...props}
      >
        {/* Full bleed image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={feature.image} 
            alt={feature.title} 
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out" 
          />
        </div>
        
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Content overlaid on the image */}
        <div className="relative z-10 p-8 md:p-10 w-full">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md shadow-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
            <feature.icon className="text-white size-6" strokeWidth={1.5} aria-hidden />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 drop-shadow-md">
            {feature.title}
          </h3>
          <p className="text-emerald-50/90 text-base md:text-lg font-medium leading-relaxed max-w-md drop-shadow-md">
            {feature.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div`;

code = code.replace(/export function FeatureCard[^]+?return \(\n    <motion\.div/, replacement);

fs.writeFileSync('src/components/ui/grid-feature-cards.tsx', code);
