const fs = require('fs');
let code = fs.readFileSync('src/components/ui/grid-feature-cards.tsx', 'utf-8');

const oldImageCard = `{isImageCard ? (
              <div className="w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl overflow-hidden border border-emerald-100 shadow-xl relative group/thumb">
                <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover object-left group-hover/thumb:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-emerald-950/5 group-hover/thumb:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>
            ) : isVectorCard ? (`;

const newImageCard = `{isImageCard ? (
              <>
                <div className="w-full h-[250px] lg:h-0" /> {/* Spacer to preserve height on mobile */}
                <div className="absolute -left-8 md:-left-10 lg:left-0 -bottom-8 md:-bottom-10 -right-8 md:-right-10 top-0 lg:-top-10 overflow-hidden group/thumb">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover object-left group-hover/thumb:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 border-t lg:border-t-0 lg:border-l border-emerald-200/50 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-emerald-950/5 group-hover/thumb:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </>
            ) : isVectorCard ? (`;

code = code.replace(oldImageCard, newImageCard);

// Also make sure the parent column has relative
code = code.replace(
  '<div className="lg:col-span-5 w-full h-full flex items-center justify-center mt-6 lg:mt-0">',
  '<div className="lg:col-span-5 w-full h-full flex items-center justify-center mt-6 lg:mt-0 relative">'
);

fs.writeFileSync('src/components/ui/grid-feature-cards.tsx', code);
