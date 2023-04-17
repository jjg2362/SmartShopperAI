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

const App = () => {
  const { pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<TermLayout />}>
          <Route path="/legal/terms" element={<TermOfUse />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/consent1" element={<Consent1 />} />
          <Route path="/legal/consent2" element={<Consent2 />} />
        </Route>
      </Routes>
  );
}

export default App;
