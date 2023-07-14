import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'

import './styles/global.css';

import router, { RouterProvider } from './router';

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
