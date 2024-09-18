import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HeroSection from "./components/HeroSection";
import Recent from "./components/Recent";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Recent />
              <FeaturedWorks />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Blogs />

              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />

              <Footer />
            </>
          }
        />
        <Route
          path="/Works"
          element={
            <>
              <Works />

              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
