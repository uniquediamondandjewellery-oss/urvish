import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  RiDeleteBinLine,
  RiShoppingBag3Line,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiArrowLeftLine
} from 'react-icons/ri';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import styles from './CartPage.module.css';

export default function CartPage() {
  const navigate = useNavigate();
  const { items, updateQty, removeItem, clearCart, cartTotal, cartMrpTotal, cartCount } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    document.title = 'Shopping Cart | IMBesharam India';
    window.scrollTo(0, 0);
  }, []);

  const totalDiscount = Math.max(0, cartMrpTotal - cartTotal);
  const extraDiscount = discountApplied ? Math.round(cartTotal * 0.1) : 0;
  const finalPayable = Math.max(0, cartTotal - extraDiscount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'BESHARAM10') {
      setDiscountApplied(true);
      toast.success('10% VIP Besharam Discount Applied!');
    } else {
      toast.error('Invalid coupon code. Try "BESHARAM10"');
    }
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
    if (window.confirm('Are you sure you want to clear your shopping cart?')) {
      clearCart();
      toast('Shopping cart cleared');
    }
  };

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <Navbar />
        <main className={styles.emptyState} id="cart-empty">
          <RiShoppingBag3Line className={styles.emptyIcon} />
          <h1 className={styles.emptyTitle}>Your Cart is Empty</h1>
          <p className={styles.emptyDesc}>
            Looks like you haven't added any adult toys or essentials yet.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            Explore Best Sellers
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
            <h1 className={styles.pageTitle} style={{ marginBottom: 0 }}>
              Review Your Cart <span className={styles.cartCount}>({cartCount} items)</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button
                type="button"
                onClick={() => navigate('/')}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <RiArrowLeftLine size={14} /> Continue Shopping
              </button>
              <button
                type="button"
                onClick={handleClearAll}
                style={{
                  background: 'rgba(255, 82, 123, 0.1)',
                  border: '1px solid rgba(255, 82, 123, 0.3)',
                  color: '#ff527b',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className={styles.layout}>
            {/* Left Items Column */}
            <div className={styles.itemsCol}>
              {items.map((entry) => {
                const product = entry.product || entry;
                const id = product.id;
                const quantity = entry.quantity || 1;
                const img = (product.images && product.images[0]) || product.imgUrl || '';
                const sellPrice = product.sellPrice || `₹${product.price?.toLocaleString('en-IN') || '299'}.00`;
                const mrpPrice = product.mrpPrice || `₹${product.mrp?.toLocaleString('en-IN') || '2,499'}.00`;

                return (
                  <div key={id} className={styles.cartItem}>
                    <div
                      className={styles.itemImage}
                      onClick={() => navigate(`/product/${id}`)}
                    >
                      <img src={img} alt={product.title} />
                    </div>

                    <div className={styles.itemInfo}>
                      <h3
                        className={styles.itemTitle}
                        onClick={() => navigate(`/product/${id}`)}
                      >
                        {product.title}
                      </h3>

                      <div className={styles.itemPriceRow}>
                        <span className={styles.sellPrice}>{sellPrice}</span>
                        <span className={styles.mrpPrice}>{mrpPrice}</span>
                      </div>

                      <div className={styles.itemControls}>
                        <div className={styles.qtyGroup}>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => handleDecreaseQty(id, quantity)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className={styles.qtyVal}>{quantity}</span>
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
                          className={styles.removeBtn}
                          onClick={() => handleRemove(id)}
                          aria-label="Remove item"
                        >
                          <RiDeleteBinLine size={16} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Summary Column */}
            <div className={styles.summaryCol}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>

              <div className={styles.summaryRow}>
                <span>Items Subtotal:</span>
                <span>₹{cartMrpTotal.toLocaleString('en-IN')}.00</span>
              </div>

              <div className={styles.summaryRow} style={{ color: 'var(--color-primary)' }}>
                <span>Store Discount:</span>
                <span>-₹{totalDiscount.toLocaleString('en-IN')}.00</span>
              </div>

              {discountApplied && (
                <div className={styles.summaryRow} style={{ color: 'var(--color-success)' }}>
                  <span>Coupon (BESHARAM10):</span>
                  <span>-₹{extraDiscount.toLocaleString('en-IN')}.00</span>
                </div>
              )}

              <div className={styles.summaryRow}>
                <span>Shipping &amp; Packaging:</span>
                <span style={{ color: 'var(--color-success)', fontWeight: 800 }}>FREE (Discreet)</span>
              </div>

              {/* Coupon Form */}
              <form className={styles.couponArea} onSubmit={handleApplyCoupon}>
                <input
                  type="text"
                  className={styles.couponInput}
                  placeholder="Coupon code (BESHARAM10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button type="submit" className={styles.couponBtn}>
                  Apply
                </button>
              </form>

              <div className={styles.totalRow}>
                <span>Total Amount:</span>
                <span className={styles.totalAmount}>
                  ₹{finalPayable.toLocaleString('en-IN')}.00
                </span>
              </div>

              <button
                type="button"
                className={styles.checkoutBtn}
                onClick={() => navigate('/checkout')}
              >
                <span>Proceed to Checkout</span>
                <RiArrowRightLine size={18} />
              </button>

              <div className={styles.discreetNotice}>
                <RiShieldCheckLine size={20} style={{ flexShrink: 0 }} />
                <span>
                  <strong>100% Anonymous Dispatch:</strong> Your order will arrive in a plain, unbranded brown carton with zero mention of product or store name.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
