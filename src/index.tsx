import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(undefined, { disableWarnings: true });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
