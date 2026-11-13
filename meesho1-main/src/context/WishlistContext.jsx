import { createContext, useContext, useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const WishlistContext = createContext(null);

function wishlistReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_ITEM': {
      const exists = state.items.some(i => i.id === action.product.id);
      if (exists) {
        return { ...state, items: state.items.filter(i => i.id !== action.product.id) };
      }
      return { ...state, items: [...state.items, action.product] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [savedWishlist, setSavedWishlist] = useLocalStorage('meesho_wishlist', { items: [] });
  const [state, dispatch] = useReducer(wishlistReducer, savedWishlist);

  useEffect(() => {
    setSavedWishlist(state);
  }, [state]);

  const isWishlisted = (id) => state.items.some(i => i.id === id);
  const wishlistCount = state.items.length;

  return (
    <WishlistContext.Provider value={{ ...state, dispatch, isWishlisted, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used inside WishlistProvider');
  return ctx;
}
