import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CatalogOfProducts from './components/CatalogOfProducts';





const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
        <App data={CatalogOfProducts} />
);