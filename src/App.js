import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/header";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Features from "./components/features";
import PricingSection from "./components/pricing";
import FAQSection from "./components/faq";
import About from "./components/about";
AOS.init({
  duration: 1000,
});

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/faq" element={<FAQSection />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
