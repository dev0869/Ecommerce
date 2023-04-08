import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { AppProvider } from './Context/Context';
import { FilterProvider } from './Context/FilterContext';
import { CartProvider } from './Context/CartContext';
import ScrollToTop from './componenets/scrolltotop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Router>
            <ScrollToTop/>
            <AuthProvider>
                <AppProvider>
                    <FilterProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </FilterProvider>
                </AppProvider>
            </AuthProvider>
        </Router>


    </>
);

