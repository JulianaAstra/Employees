import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './Components/app/app';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)