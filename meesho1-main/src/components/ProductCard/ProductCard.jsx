import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  RiHeartLine,
  RiHeartFill,
  RiStarFill,
  RiShieldCheckLine,
  RiShoppingBag3Line,
  RiFlashlightFill
} from 'react-icons/ri';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { dispatch, openCartDrawer } = useCart();
  const { isWishlisted, dispatch: wDispatch } = useWishlist();

  const wishlisted = isWishlisted(product.id);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    wDispatch({ type: 'TOGGLE_ITEM', product });
    if (!wishlisted) {
      toast.success('Added to wishlist!');
    } else {
      toast('Removed from wishlist');
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', product, quantity: 1 });
    toast.success(`${product.title} added to cart!`);
    openCartDrawer();
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    dispatch({ type: 'BUY_NOW', product, quantity: 1 });
    navigate('/checkout');
  };

  const sellPrice = product.sellPrice || `₹${product.price?.toLocaleString('en-IN') || '299'}.00`;
  const mrpPrice = product.mrpPrice || `₹${product.mrp?.toLocaleString('en-IN') || '2,499'}.00`;
  const discount = product.offPercent || `${product.discount || '88'}% OFF`;
  const imageSrc = (product.images && product.images[0]) || product.imgUrl || '';

  return (
    <article
      className={styles.productCard}
      onClick={handleCardClick}
      id={`product-card-${product.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      aria-label={`${product.title} - ${sellPrice}`}
    >
      <div className={styles.productImgBox}>
        <img
          src={imageSrc}
          alt={product.title}
          className={styles.productImg}
          loading="lazy"
        />

        <div className={styles.saleBadge}>{discount}</div>

        <div className={styles.discreetBadge}>
          <RiShieldCheckLine size={12} />
          <span>Discreet</span>
        </div>

        <button
          type="button"
          className={`${styles.wishlistBtn} ${wishlisted ? styles.wishlisted : ''}`}
          onClick={handleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {wishlisted ? <RiHeartFill size={18} /> : <RiHeartLine size={18} />}
        </button>
      </div>

      <div className={styles.details}>
        <h3 className={styles.title} title={product.title}>
          {product.title}
        </h3>

        <div className={styles.ratingRow}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <RiStarFill key={i} size={13} />
            ))}
          </div>
          <span className={styles.reviewCount}>({product.reviewCount || 240})</span>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.sellPrice}>{sellPrice}</span>
          <span className={styles.mrpPrice}>{mrpPrice}</span>
        </div>

        <div className={styles.btnRow}>
          <button
            type="button"
            className={styles.addToCartBtn}
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <RiShoppingBag3Line size={14} />
            <span>Add</span>
          </button>

          <button
            type="button"
            className={styles.buyNowBtn}
            onClick={handleBuyNow}
            aria-label="Buy now"
          >
            <RiFlashlightFill size={13} />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </article>
  );
}
