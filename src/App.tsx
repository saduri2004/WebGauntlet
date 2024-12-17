import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { fetchProducts, setFilters } from './store/slices/productsSlice';
import theme from './theme';
import { NotificationManager } from './components/notifications/NotificationManager';

// Components
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';

// Wrapper component to handle route-based category management
const RouteWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const categoryId = pathname.startsWith('/category/') ? pathname.split('/')[2] : '';

  useEffect(() => {
    if (categoryId) {
      dispatch(setFilters({ category: categoryId }));
    } else if (pathname === '/') {
      // Clear category filter when returning to home page
      dispatch(setFilters({ category: '' }));
    }
  }, [categoryId, pathname, dispatch]);

  return <>{children}</>;
};

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NotificationManager />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={
                <RouteWrapper>
                  <Container maxWidth={false} sx={{ flex: 1, mt: 2, px: { xs: 2, sm: 3, md: 4 } }}>
                    <ProductList />
                  </Container>
                </RouteWrapper>
              } 
            />
            <Route 
              path="/category/:categoryId" 
              element={
                <RouteWrapper>
                  <Container maxWidth={false} sx={{ flex: 1, mt: 2, px: { xs: 2, sm: 3, md: 4 } }}>
                    <ProductList />
                  </Container>
                </RouteWrapper>
              } 
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
