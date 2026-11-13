import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  RiCloseLine,
  RiShoppingBag3Line,
  RiDeleteBinLine,
  RiArrowRightLine,
  RiShieldCheckLine
} from 'react-icons/ri';
import { useCart } from '../../context/CartContext';
import styles from './CartSidebar.module.css';

export default function CartSidebar() {
  const navigate = useNavigate();
  const {
    items,
    updateQty,
    removeItem,
    clearCart,
    cartCount,
    cartTotal,
    cartMrpTotal,
    isCartDrawerOpen,
    closeCartDrawer
  } = useCart();

  const totalSavings = Math.max(0, cartMrpTotal - cartTotal);

  useEffect(() => {
    if (isCartDrawerOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeCartDrawer();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isCartDrawerOpen, closeCartDrawer]);

  const handleItemClick = (id) => {
    closeCartDrawer();
    navigate(`/product/${id}`);
  };

  const handleCheckout = () => {
    closeCartDrawer();
    navigate('/checkout');
  };

  const handleGoToCartPage = () => {
    closeCartDrawer();
    navigate('/cart');
  };

  const handleDecreaseQty = (id, currentQty) => {
    if (currentQty <= 1) {
      removeItem(id);
      toast('Item removed from cart');
    } else {
      updateQty(id, currentQty - 1);
    }
  };

  const handleIncreaseQty = (id, currentQty) => {
    updateQty(id, currentQty + 1);
  };

  const handleRemove = (id) => {
    removeItem(id);
    toast('Item removed from cart');
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
      toast('Cart cleared');
    }
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isCartDrawerOpen ? styles.overlayOpen : ''}`}
        onClick={closeCartDrawer}
        aria-hidden="true"
      />

      <aside
        className={`${styles.sidebar} ${isCartDrawerOpen ? styles.sidebarOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart Drawer"
        id="cart-sidebar-drawer"
      >
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <RiShoppingBag3Line size={20} color="var(--color-primary)" />
            <h2>Shopping Cart</h2>
            <span className={styles.itemCountBadge}>{cartCount}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {items.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  fontSize: '11px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}
              >
                Clear All
              </button>
            )}
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeCartDrawer}
              aria-label="Close cart"
            >
              <RiCloseLine size={24} />
            </button>
          </div>
        </div>

        <div className={styles.trustBanner}>
          <RiShieldCheckLine size={16} />
          <span>100% Plain Unmarked Box &bull; Free Pan-India Delivery</span>
        </div>

        {items.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🛍️</div>
            <h3 className={styles.emptyTitle}>Your Cart is Empty</h3>
            <p className={styles.emptyDesc}>Explore our discreet collection of top-rated adult toys &amp; wellness essentials.</p>
            <button
              type="button"
              className={styles.emptyBtn}
              onClick={closeCartDrawer}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className={styles.itemsList}>
              {items.map((entry) => {
                const product = entry.product || entry;
                const id = product.id;
                const quantity = entry.quantity || 1;
                const img = (product.images && product.images[0]) || product.imgUrl || '';
                const sellPrice = product.sellPrice || `₹${product.price?.toLocaleString('en-IN') || '299'}.00`;
                const mrpPrice = product.mrpPrice || `₹${product.mrp?.toLocaleString('en-IN') || '2,499'}.00`;

                return (
                  <div key={id} className={styles.itemCard}>
                    <img
                      src={img}
                      alt={product.title}
                      className={styles.itemImg}
                      onClick={() => handleItemClick(id)}
                    />
                    <div className={styles.itemInfo}>
                      <span
                        className={styles.itemTitle}
                        onClick={() => handleItemClick(id)}
                      >
                        {product.title}
                      </span>
                      <div className={styles.itemPriceRow}>
                        <span className={styles.itemSellPrice}>{sellPrice}</span>
                        <span className={styles.itemMrpPrice}>{mrpPrice}</span>
                      </div>
                      <div className={styles.itemControls}>
                        <div className={styles.quantityGroup}>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => handleDecreaseQty(id, quantity, product.title)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className={styles.qtyValue}>{quantity}</span>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => handleIncreaseQty(id, quantity)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className={styles.deleteBtn}
                          onClick={() => handleRemove(id, product.title)}
                          aria-label="Remove item"
                          title="Remove item"
                        >
                          <RiDeleteBinLine size={17} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.footerSummary}>
              {totalSavings > 0 && (
                <div className={styles.summaryRow} style={{ color: 'var(--color-success)' }}>
                  <span>Instant Store Savings:</span>
                  <strong>-₹{totalSavings.toLocaleString('en-IN')}.00</strong>
                </div>
              )}
              <div className={styles.summaryRow}>
                <span>Discreet Shipping:</span>
                <strong style={{ color: 'var(--color-success)' }}>FREE</strong>
              </div>
              <div className={styles.totalRow}>
                <span>Subtotal ({cartCount} items):</span>
                <span className={styles.totalAmount}>
                  ₹{cartTotal.toLocaleString('en-IN')}.00
                </span>
              </div>
              <button
                type="button"
                className={styles.checkoutBtn}
                onClick={handleCheckout}
              >
                <span>Proceed to Checkout</span>
                <RiArrowRightLine size={18} />
              </button>
              <button
                type="button"
                onClick={handleGoToCartPage}
                style={{
                  background: 'none',
                  border: '1px solid var(--color-border)',
                  color: '#ffffff',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  letterSpacing: '0.04rem'
                }}
              >
                View Detailed Cart Page
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
