import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './Components/app/app';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)