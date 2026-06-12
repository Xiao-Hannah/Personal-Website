import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmGrain from "@/components/layout/FilmGrain";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import { SpotlightProvider } from "@/components/home/SpotlightContext";
import Index from "@/pages/Index";
import Atypica from "@/pages/Atypica";
import Bloome from "@/pages/Bloome";
import FridgeFriend from "@/pages/FridgeFriend";
import TLink from "@/pages/TLink";
import Zebra from "@/pages/Zebra";
import SolarEase from "@/pages/SolarEase";
import Fora from "@/pages/Fora";
import ForFun from "@/pages/ForFun";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <SpotlightProvider>
        <CustomCursor />
        <ScrollToTop />
        <FilmGrain />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/atypica" element={<Atypica />} />
          <Route path="/bloome" element={<Bloome />} />
          <Route path="/fridgefriend" element={<FridgeFriend />} />
          <Route path="/tlink" element={<TLink />} />
          <Route path="/zebra" element={<Zebra />} />
          <Route path="/solarease" element={<SolarEase />} />
          <Route path="/fora" element={<Fora />} />
          <Route path="/for-fun" element={<ForFun />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SpotlightProvider>
    </BrowserRouter>
  );
};

export default App;
