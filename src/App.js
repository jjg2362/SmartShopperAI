import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Consent1 from './components/Consent1';
import Consent2 from './components/Consent2';
import Privacy from './components/Privacy';
import TermLayout from './components/TermLayout';
import TermOfUse from './components/TermOfUse';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ContactPage from './pages/ContactPage';
// import Layout from './components/Layout';

const App = () => {
  const { pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route element={<TermLayout />}>
          <Route path="/legal/terms" element={<TermOfUse />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/consent1" element={<Consent1 />} />
          <Route path="/legal/consent2" element={<Consent2 />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
  );
}

export default App;
