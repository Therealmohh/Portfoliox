// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact"; // Assuming you have a Contact component
import HeroSection from "./components/HeroSection"; // Home page content
import Recent from "./components/Recent";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";
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
              {/* <Recent />
              <FeaturedWorks />
              <Footer /> */}
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Recent />
              <FeaturedWorks />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
