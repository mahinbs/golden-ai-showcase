import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import AISolutions from "./pages/AISolutions";
import GameDevelopment from "./pages/GameDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import DataScienceSolutions from "./pages/DataScienceSolutions";
import HealthcareSolutions from "./pages/HealthcareSolutions";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/game-development" element={<GameDevelopment />} />
          <Route path="/uiux-design" element={<UIUXDesign />} />
          <Route
            path="/data-science-solutions"
            element={<DataScienceSolutions />}
          />
          <Route
            path="/healthcare-solutions"
            element={<HealthcareSolutions />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
