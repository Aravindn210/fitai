import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';

// Placeholder Pages
import ProgramsPage from './components/Programs/ProgramsPage';
import ProgramDetailPage from './components/ProgramDetail/ProgramDetailPage';
import PricingPage from './components/Pricing/PricingPage';
import RecommendedPage from './components/Programs/RecommendedPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProgramsPage />} />
            <Route path="/recommended" element={<RecommendedPage />} />
            <Route path="/program/:id" element={<ProgramDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            {/* Fallback for now */}
            <Route path="*" element={<ProgramsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
