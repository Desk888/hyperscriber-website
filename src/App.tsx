
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBanner from "./components/layout/TopBanner";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import ChatBot from "./components/layout/ChatBot";
import SecurityHeaders from "./components/security/SecurityHeaders";

// Configure the query client with more secure defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 60000, // 1 minute
      cacheTime: 300000, // 5 minutes
      // Only perform GETs for queries
      queryFn: async ({ queryKey, signal }) => {
        const response = await fetch(Array.isArray(queryKey) ? queryKey[0] : queryKey.toString(), { 
          signal,
          credentials: 'same-origin', // Use cookies for same-origin requests
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
      // Add security defaults
      onMutate: () => {
        // Could add CSRF token validation here
      },
      retry: 0, // Don't retry mutations by default
    },
  },
});

const App = () => (
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

export default App;
