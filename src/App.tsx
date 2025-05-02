import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import TopBanner from "./components/layout/TopBanner";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/layout/CookieConsent";
import ChatBot from "./components/layout/ChatBot";
import SecurityHeaders from "./components/security/SecurityHeaders";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 60000,
      gcTime: 300000,
      queryFn: async ({ queryKey, signal }) => {
        const response = await fetch(Array.isArray(queryKey) ? queryKey[0] : queryKey.toString(), { 
          signal,
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      },
    },
    mutations: {
      onMutate: () => {
      },
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />
        <BrowserRouter>
          <SecurityHeaders />
          <div className="flex flex-col min-h-screen">
            <TopBanner />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <CookieConsent />
            <ChatBot />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
