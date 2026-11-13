import { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import CollectionPage from './pages/CollectionPage';
import SearchPage from './pages/SearchPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartSidebar from './components/CartSidebar/CartSidebar';

function MetaPixelTracker() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname, location.search]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <MetaPixelTracker />
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1c1e21',
              color: '#ffffff',
              border: '1px solid #ea1969',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            },
            iconTheme: {
              primary: '#ea1969',
              secondary: '#ffffff',
            },
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/collections/:category" element={<CollectionPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/pages/about" element={<AboutPage />} />
          <Route path="/pages/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <CartSidebar />
      </WishlistProvider>
    </CartProvider>
  );
}
