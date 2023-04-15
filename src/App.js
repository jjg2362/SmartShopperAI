import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Consent1 from './components/Consent1';
import Consent2 from './components/Consent2';
import Privacy from './components/Privacy';
import TermLayout from './components/TermLayout';
import TermOfUse from './components/TermOfUse';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<TermLayout />}>
          <Route path="/legal/terms" element={<TermOfUse />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/consent1" element={<Consent1 />} />
          <Route path="/legal/consent2" element={<Consent2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
