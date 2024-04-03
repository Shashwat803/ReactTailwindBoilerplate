import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { MultiStepProvider } from './feature/MultiStepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MultiStepProvider>
    <App />
    </MultiStepProvider>
  </React.StrictMode>
);

