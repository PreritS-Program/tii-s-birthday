import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatedCursor } from "./components/AnimatedCursor";
import { ParticleBackground } from "./components/ParticleBackground";
import { MusicPlayer } from "./components/MusicPlayer";
import CoverPage from "./pages/CoverPage";
import CakePage from "./pages/CakePage";
import LetterPage from "./pages/LetterPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <AnimatedCursor />
        <ParticleBackground />
        <MusicPlayer />
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/Tii-s-Birthday">
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/cake" element={<CakePage />} />
            <Route path="/letter" element={<LetterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
