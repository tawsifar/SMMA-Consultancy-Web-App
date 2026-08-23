const fs = require('fs');
let code = fs.readFileSync('src/components/ui/feature-demo.tsx', 'utf-8');

code = code.replace(
  'showVideoVector: true,',
  'image: "https://plain-apac-prod-public.komododecks.com/202608/23/nLpx5mWVxIG3xz6BSEG2/image.png",'
);

fs.writeFileSync('src/components/ui/feature-demo.tsx', code);
