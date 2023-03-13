import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Layout } from './components/layout/Layout';
import { store } from './store';
import './scss/main.scss';
const container = document.getElementById('root')!;
const root = createRoot(container);
import '@fontsource/inter/800.css';
import '@fontsource/inter/500.css';
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
