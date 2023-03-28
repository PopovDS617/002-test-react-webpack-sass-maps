import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import AppProvider from './context/AppContextProvider';
import { AnimatePresence } from 'framer-motion';

const app = (
  <AppProvider>
    <AnimatePresence mode="wait" initial={true}>
      <Application />
    </AnimatePresence>
  </AppProvider>
);

createRoot(document.getElementById('app')).render(app);
