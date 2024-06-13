import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./../../pages/HomePage'));
const AboutPage = React.lazy(() => import('./../../pages/AboutPage'));
const ContactPage = React.lazy(() => import('./../../pages/ContactPage'));
const NotFoundPage = React.lazy(() => import('./../../pages/NotFoundPage'));

const AppContent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppContent;
