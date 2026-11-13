import { createContext, useContext, useReducer, useEffect, useState, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext(null);

function parsePrice(val, fallback = 299) {
  if (typeof val === 'number') return val;
  if (!val) return fallback;
  const cleaned = String(val).replace(/[^0-9.]/g, '');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? fallback : parsed;
}

function normalizeProduct(prod) {
  if (!prod) return null;
  const price = parsePrice(prod.price ?? prod.sellPrice, 299);
  const mrp = parsePrice(prod.mrp ?? prod.mrpPrice, 2499);
  return {
    ...prod,
    id: prod.id,
    title: prod.title || prod.name || 'IMBesharam Product',
    price,
    mrp: Math.max(price, mrp),
    imgUrl: (prod.images && prod.images[0]) || prod.imgUrl || '',
    images: prod.images || (prod.imgUrl ? [prod.imgUrl] : []),
    sellPrice: prod.sellPrice || `₹${price.toLocaleString('en-IN')}.00`,
    mrpPrice: prod.mrpPrice || `₹${mrp.toLocaleString('en-IN')}.00`
  };
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const rawProd = action.product || action.item;
      if (!rawProd || !rawProd.id) return state;
      const product = normalizeProduct(rawProd);
      const isBuyNow = Boolean(action.isBuyNow);
      const addQty = typeof action.quantity === 'number' && action.quantity > 0 ? action.quantity : 1;

      const existingIndex = state.items.findIndex(
        i => (i.product?.id || i.id) === product.id
      );

      if (existingIndex > -1) {
        const updated = [...state.items];
        const currentQty = updated[existingIndex].quantity || 1;
        updated[existingIndex] = {
          ...updated[existingIndex],
          product,
          quantity: isBuyNow ? addQty : currentQty + addQty
        };
        return { ...state, items: updated };
      }

      return {
        ...state,
        items: [...state.items, { product, quantity: addQty }]
      };
    }

    case 'BUY_NOW': {
      const rawProd = action.product || action.item;
      if (!rawProd || !rawProd.id) return state;
      const product = normalizeProduct(rawProd);
      const targetQty = typeof action.quantity === 'number' && action.quantity > 0 ? action.quantity : 1;

      const existingIndex = state.items.findIndex(
        i => (i.product?.id || i.id) === product.id
      );

      if (existingIndex > -1) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          product,
          quantity: targetQty
        };
        return { ...state, items: updated };
      }

      return {
        ...state,
        items: [...state.items, { product, quantity: targetQty }]
      };
    }

    case 'REMOVE_ITEM': {
      const targetId = action.id ?? action.productId;
      return {
        ...state,
        items: state.items.filter(i => (i.product?.id || i.id) !== targetId)
      };
    }

    case 'UPDATE_QTY': {
      const targetId = action.id ?? action.productId;
      const newQty = parseInt(action.quantity, 10);

      if (isNaN(newQty) || newQty <= 0) {
        return {
          ...state,
          items: state.items.filter(i => (i.product?.id || i.id) !== targetId)
        };
      }

      return {
        ...state,
        items: state.items.map(i => {
          if ((i.product?.id || i.id) === targetId) {
            return { ...i, quantity: newQty };
          }
          return i;
        })
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [savedCart, setSavedCart] = useLocalStorage('meesho_cart', { items: [] });
  const [state, dispatch] = useReducer(cartReducer, savedCart, (initial) => {
    // Normalize any legacy items stored in localStorage
    const rawItems = Array.isArray(initial?.items) ? initial.items : [];
    const normalized = rawItems
      .filter(entry => (entry.product?.id || entry.id))
      .map(entry => {
        const product = normalizeProduct(entry.product || entry);
        return {
          product,
          quantity: Math.max(1, parseInt(entry.quantity, 10) || 1)
        };
      });
    return { items: normalized };
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  useEffect(() => {
    setSavedCart(state);
  }, [state, setSavedCart]);

  const openCartDrawer = useCallback(() => setIsCartDrawerOpen(true), []);
  const closeCartDrawer = useCallback(() => setIsCartDrawerOpen(false), []);
  const toggleCartDrawer = useCallback(() => setIsCartDrawerOpen(prev => !prev), []);

  // CRUD Convenience Methods
  const addItem = useCallback((product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', product, quantity });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  }, []);

  const updateQty = useCallback((id, quantity) => {
    dispatch({ type: 'UPDATE_QTY', id, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const buyNow = useCallback((product, quantity = 1) => {
    dispatch({ type: 'BUY_NOW', product, quantity });
  }, []);

  // Totals Calculation
  const cartCount = state.items.reduce((sum, i) => sum + (i.quantity || 1), 0);
  const cartTotal = state.items.reduce((sum, i) => {
    const price = parsePrice(i.product?.price ?? i.product?.sellPrice, 299);
    return sum + price * (i.quantity || 1);
  }, 0);
  const cartMrpTotal = state.items.reduce((sum, i) => {
    const mrp = parsePrice(i.product?.mrp ?? i.product?.mrpPrice, 2499);
    return sum + mrp * (i.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        dispatch,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        buyNow,
        cartCount,
        cartTotal,
        cartMrpTotal,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        openCartDrawer,
        closeCartDrawer,
        toggleCartDrawer
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
