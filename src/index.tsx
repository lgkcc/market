import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import {BrowserRouter} from "react-router-dom";
import {GeneralStyles} from "./styles/general";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <GeneralStyles/>
            <App />
        </BrowserRouter>
    </Provider>
);

