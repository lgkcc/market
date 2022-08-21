import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import {BrowserRouter} from "react-router-dom";
import {GeneralStyles} from "./styles/general";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <GeneralStyles/>
        <App />
    </BrowserRouter>
);

