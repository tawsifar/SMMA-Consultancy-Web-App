const fs = require('fs');
let code = fs.readFileSync('src/components/ui/grid-feature-cards.tsx', 'utf-8');

code = code.replace(
  '<div className="lg:col-span-5 w-full flex items-center justify-center">',
  '<div className="lg:col-span-5 w-full h-full flex items-center justify-center mt-6 lg:mt-0">'
);

code = code.replace(
  '{isImageCard ? (\n              <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-full aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-100 shadow-xl relative group/thumb flex items-center justify-center">\n                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-700" />\n                <div className="absolute inset-0 bg-emerald-950/5 group-hover/thumb:bg-transparent transition-colors duration-500" />\n              </div>',
  `{isImageCard ? (
              <div className="w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl overflow-hidden border border-emerald-100 shadow-xl relative group/thumb">
                <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover object-left group-hover/thumb:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-emerald-950/5 group-hover/thumb:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>`
);

fs.writeFileSync('src/components/ui/grid-feature-cards.tsx', code);
