import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import WishlistPage from './pages/WishlistPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/e-commerce-lura/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/e-commerce-lura/products" element={<ProductsPage />} />
        <Route path="/e-commerce-lura/products/:productId" element={<ProductDetailPage />} />
        <Route path="/e-commerce-lura/cart" element={<CartPage />} />
        <Route path="/e-commerce-lura/checkout" element={<CheckoutPage />} />
        <Route path="/e-commerce-lura/account" element={<AccountPage />} />
        <Route path="/e-commerce-lura/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;