import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import AppProvider from './context/AppContextProvider';

const app = (
  <AppProvider>
    <Application />
  </AppProvider>
);

createRoot(document.getElementById('app')).render(app);
