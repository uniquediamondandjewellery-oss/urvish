import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { RiHeartLine, RiDeleteBinLine, RiShoppingBag3Line } from 'react-icons/ri';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import styles from './WishlistPage.module.css';

export default function WishlistPage() {
  const navigate = useNavigate();
  const { items, dispatch } = useWishlist();
  const { dispatch: cartDispatch, openCartDrawer } = useCart();

  useEffect(() => {
    document.title = 'My Wishlist | IMBesharam India';
    window.scrollTo(0, 0);
  }, []);

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <Navbar />
        <main className={styles.emptyState}>
          <RiHeartLine className={styles.emptyIcon} />
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#ffffff', marginBottom: 8 }}>
            Your Wishlist is Empty
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 24, fontSize: 14 }}>
            Save items you love to your wishlist and find them here anytime with full discretion.
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
          <h1 className={styles.title}>
            Saved Adult Toys &amp; Essentials <span>({items.length})</span>
          </h1>

          <div className={styles.grid}>
            {items.map((product) => {
              const img = (product.images && product.images[0]) || product.imgUrl || '';
              const sellPrice = product.sellPrice || `₹${product.price?.toLocaleString('en-IN') || '299'}.00`;
              const mrpPrice = product.mrpPrice || `₹${product.mrp?.toLocaleString('en-IN') || '2,499'}.00`;
              const discount = product.offPercent || `${product.discount || '88'}% OFF`;

              return (
                <article key={product.id} className={styles.card}>
                  <div
                    className={styles.imgWrap}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <img src={img} alt={product.title} className={styles.img} />
                    <span className={styles.disc}>{discount}</span>
                  </div>

                  <div className={styles.body}>
                    <h3
                      className={styles.cardTitle}
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {product.title}
                    </h3>

                    <div className={styles.priceRow}>
                      <span className={styles.price}>{sellPrice}</span>
                      <span className={styles.mrp}>{mrpPrice}</span>
                    </div>

                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.cartBtn}
                        onClick={() => {
                          cartDispatch({ type: 'ADD_ITEM', product, quantity: 1 });
                          toast.success('Moved to cart!');
                          openCartDrawer();
                        }}
                      >
                        <RiShoppingBag3Line size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                        Move to Cart
                      </button>

                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => {
                          dispatch({ type: 'REMOVE_ITEM', id: product.id });
                          toast('Removed from wishlist');
                        }}
                        aria-label="Remove"
                      >
                        <RiDeleteBinLine size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
