/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { SplineSceneBasic } from "@/components/ui/demo";
import { Navbar } from "@/components/ui/navbar";
import { Chatbot } from "@/components/ui/chatbot";

// Lazy-loaded secondary modules to accelerate initial paint and interaction times
const DemoOne = lazy(() => import("@/components/ui/feature-demo"));
const Portfolio = lazy(() => import("@/components/ui/portfolio").then(m => ({ default: m.Portfolio })));
const ContactAuditor = lazy(() => import("@/components/ui/contact-auditor").then(m => ({ default: m.ContactAuditor })));
const Footer = lazy(() => import("@/components/ui/footer-section").then(m => ({ default: m.Footer })));
const VectorDecorations = lazy(() => import("@/components/ui/vector-decorations").then(m => ({ default: m.VectorDecorations })));

// Ultra-fast lightweight loading skeleton
function ComponentSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6 animate-pulse space-y-4">
      <div className="h-8 bg-emerald-100/50 rounded-lg w-1/4"></div>
      <div className="h-4 bg-emerald-100/30 rounded w-1/2"></div>
      <div className="h-32 bg-emerald-100/20 rounded-2xl w-full"></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0fdf4] font-sans text-emerald-950 relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-950">
      {/* Ambient Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-200/30 blur-[100px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-green-100/30 blur-[100px] mix-blend-multiply animate-blob-reverse" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-100/25 blur-[120px] mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      {/* Nano Banana Leaf Minimalist SVG Vector Decorations */}
      <Suspense fallback={null}>
        <VectorDecorations />
      </Suspense>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full flex flex-col items-center relative gap-2">
          {/* Hero section is eagerly loaded and interactive instantly */}
          <SplineSceneBasic />
          
          {/* Deferred lazy-loaded content blocks optimized with Suspense */}
          <Suspense fallback={<ComponentSkeleton />}>
            <DemoOne />
          </Suspense>
          
          <Suspense fallback={<ComponentSkeleton />}>
            <Portfolio />
          </Suspense>
          
          <Suspense fallback={<ComponentSkeleton />}>
            <ContactAuditor />
          </Suspense>
        </main>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        <Chatbot />
      </div>
    </div>
  );
}
