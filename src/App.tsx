import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, lazy, Suspense, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// 🔥 Lazy Load Pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Smooth Scroll
    document.documentElement.style.scrollBehavior = "smooth";

    // ✅ AOS Init
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    // ⏳ 3 sec Loader
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // 🔥 FULL SCREEN LOGO LOADER
  if (loading) {
    return (
      <>
        <style>
          {`
          body {
            margin: 0;
            background: #0f172a;
          }

          .loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            font-family: 'Poppins', sans-serif;
          }

          .logo-text {
            font-weight: 800;
            font-size: 28px;
            color: white;
            text-align: center;
            line-height: 1.2;
          }

          .line {
            width: 120px;
            height: 2px;
            position: relative;
            overflow: hidden;
            background: rgba(255,255,255,0.1);
            margin: 6px 0;
          }

          .line::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, #00c6ff, transparent);
            animation: moveLine 2s linear infinite;
          }

          @keyframes moveLine {
            0% { left: -100%; }
            100% { left: 100%; }
          }

          .name-highlight {
            color: #00c6ff;
          }
          `}
        </style>

        <div className="loader-container">
          {/* Top Line */}
          <div className="line"></div>

          {/* Name */}
          <div className="logo-text">
            PRASHANT   
            <span className="name-highlight"> NANDANWAR</span>
          </div>

          {/* Bottom Line */}
          <div className="line"></div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Global Styles */}
      <style>
        {`
        html {
          scroll-behavior: smooth;
        }

        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 18px;
        }
        `}
      </style>

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Suspense fallback={<div className="loader"></div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>

        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;