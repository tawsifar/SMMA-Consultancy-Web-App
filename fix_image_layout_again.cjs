const fs = require('fs');
let code = fs.readFileSync('src/components/ui/grid-feature-cards.tsx', 'utf-8');

// 1. Redefine isFullWidthCard
code = code.replace(
  'const isFullWidthCard = isVideoCard || isVectorCard;',
  'const isFullWidthCard = isVideoCard || isVectorCard || isImageCard;'
);

// 2. Remove the custom `if (isImageCard)` block completely
const customBlockStart = 'if (isImageCard) {\n    return (';
const customBlockEnd = '    );\n  }\n\n  return (\n    <motion.div ';

// We can just use a regex to strip it
code = code.replace(/if \(isImageCard\) \{\s*return \([\s\S]*?<\/motion\.div>\s*\);\s*\}\s*return \(\s*<motion\.div /, 'return (\n    <motion.div ');

// 3. Fix the isImageCard branch inside the full width layout to use aspect-video and object-cover
const oldInnerImageCard = `{isImageCard ? (
              <div className="w-full relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-emerald-200/50 group/thumb bg-white">
                <img src={feature.image} alt={feature.title} className="w-full h-auto object-contain group-hover/thumb:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-emerald-950/5 group-hover/thumb:bg-transparent transition-colors duration-500 pointer-events-none" />
                <div className="absolute inset-0 border border-emerald-500/10 rounded-2xl pointer-events-none" />
              </div>
            )`;

const newInnerImageCard = `{isImageCard ? (
              <div className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-xl border border-emerald-100 group/thumb bg-emerald-50/50 flex items-center justify-center">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover/thumb:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-emerald-950/5 group-hover/thumb:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>
            )`;

code = code.replace(oldInnerImageCard, newInnerImageCard);

fs.writeFileSync('src/components/ui/grid-feature-cards.tsx', code);
