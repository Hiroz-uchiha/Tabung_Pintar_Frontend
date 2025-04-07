import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RekeningProvider, RingkasanProvider } from './Halaman/Beranda/RekeningContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RekeningProvider>
      <RingkasanProvider>
        <App />
      </RingkasanProvider>
    </RekeningProvider>
);
