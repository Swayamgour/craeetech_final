import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./pages/Home/Home";
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import ServicesPage from "./pages/ServicesPage";
import CareerPage from "./pages/CareerPage";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/PortfolioPage" element={<PortfolioPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/CareerPage" element={<CareerPage />} />
          <Route path="/BlogDetail" element={<BlogDetail />} />
          <Route path="/Blog" element={<Blog />} />
          {/* <Route path="/Ca" element={<Ca />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
