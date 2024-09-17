import Navbar from "./components/Navbar";

import "./App.css";
import HeroSection from "./components/HeroSection";
import Recent from "./components/Recent";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Recent />
      <FeaturedWorks />
      <Footer />
    </div>
  );
}

export default App;
