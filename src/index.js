import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';


const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  // react-snap이 미리 생성한 정적 HTML이 있으면 hydrate (SEO 유지)
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  // 정적 HTML이 없으면 일반 CSR 렌더링
  createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}
