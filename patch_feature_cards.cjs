const fs = require('fs');
let code = fs.readFileSync('src/components/ui/grid-feature-cards.tsx', 'utf-8');

// 1. Add image to FeatureType
code = code.replace(
  'showVideoVector?: boolean;\n};',
  'showVideoVector?: boolean;\n  image?: string;\n};'
);

// 2. Add isImageCard
code = code.replace(
  'const isVectorCard = !!feature.showVideoVector;\n  const isFullWidthCard = isVideoCard || isVectorCard;',
  'const isVectorCard = !!feature.showVideoVector;\n  const isImageCard = !!feature.image;\n  const isFullWidthCard = isVideoCard || isVectorCard || isImageCard;'
);

// 3. Add rendering for image inside the content block
code = code.replace(
  '{isVectorCard ? (\n              <VideoVectorDesign />\n            ) : (',
  `{isImageCard ? (
              <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-full aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-100 shadow-xl relative group/thumb flex items-center justify-center">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-emerald-950/5 group-hover/thumb:bg-transparent transition-colors duration-500" />
              </div>
            ) : isVectorCard ? (
              <VideoVectorDesign />
            ) : (`
);

fs.writeFileSync('src/components/ui/grid-feature-cards.tsx', code);
