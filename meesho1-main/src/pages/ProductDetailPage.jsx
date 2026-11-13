import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  RiHeartLine,
  RiHeartFill,
  RiStarFill,
  RiTruckLine,
  RiShieldCheckLine,
  RiLockLine,
  RiShoppingBag3Line,
  RiFlashlightFill,
  RiArrowRightSLine,
  RiArrowDownSLine,
  RiArrowUpSLine
} from 'react-icons/ri';
import Navbar from '../components/Navbar/Navbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import PincodeChecker from '../components/PincodeChecker/PincodeChecker';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';
import PeopleAlsoViewed from '../components/PeopleAlsoViewed/PeopleAlsoViewed';
import Footer from '../components/Footer/Footer';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import styles from './ProductDetailPage.module.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { dispatch, openCartDrawer } = useCart();
  const { isWishlisted, dispatch: wDispatch } = useWishlist();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [descOpen, setDescOpen] = useState(true);
  const [specsOpen, setSpecsOpen] = useState(false);

  const wishlisted = product ? isWishlisted(product.id) : false;
  const relatedProducts = product ? getRelatedProducts(product.id, product.category, 6) : [];

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | IMBesharam India`;
      window.scrollTo(0, 0);
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'ViewContent', {
          content_name: product.title,
          content_ids: [String(product.id)],
          content_type: 'product',
          value: product.price,
          currency: 'INR',
        });
      }
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <Navbar />
        <div className={styles.notFoundBody}>
          <h1 style={{ fontSize: 28, marginBottom: 16 }}>Product Not Found</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 24 }}>
            The adult toy or accessory you are looking for is unavailable or has moved.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            ← Return to Store
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWishlist = () => {
    wDispatch({ type: 'TOGGLE_ITEM', product });
    if (!wishlisted) {
      toast.success('Added to wishlist!');
    } else {
      toast('Removed from wishlist');
    }
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', product, quantity: 1 });
    toast.success(`${product.title} added to cart!`);
    openCartDrawer();
  };

  const handleBuyNow = () => {
    dispatch({ type: 'BUY_NOW', product, quantity: 1 });
    navigate('/checkout');
  };

  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.imgUrl
      ? [product.imgUrl]
      : ['https://cdn.shopify.com/s/files/1/0789/9791/3737/files/rnxze_512_62d8ece5-103a-44e6-9655-a0e262a02ed0.jpg?v=1791196776'];

  const variants = product.sizes || ['Standard Size (Discreet Pack)', 'Value 2-Pack (Extra Lube)'];
  const sellPrice = product.sellPrice || `₹${product.price?.toLocaleString('en-IN') || '299'}.00`;
  const mrpPrice = product.mrpPrice || `₹${product.mrp?.toLocaleString('en-IN') || '2,499'}.00`;
  const discount = product.offPercent || `${product.discount || '88'}% OFF`;

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Breadcrumb Navigation */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <RiArrowRightSLine size={14} />
            <Link to="/collections/all" className={styles.breadcrumbLink}>Adult Toys</Link>
            <RiArrowRightSLine size={14} />
            <span className={styles.breadcrumbCurrent}>{product.title}</span>
          </nav>

          {/* Main PDP Layout */}
          <div className={styles.pdpLayout}>
            {/* Gallery Left */}
            <div className={styles.galleryCol}>
              <ImageGallery images={images} title={product.title} />
            </div>

            {/* Info Right */}
            <div className={styles.infoCol}>
              <div className={styles.titleArea}>
                <span className={styles.brandTag}>
                  Official Store • 100% Authentic Brand
                </span>
                <h1 className={styles.title}>{product.title}</h1>
              </div>

              {/* Ratings */}
              <div className={styles.ratingRow}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill key={i} size={15} />
                  ))}
                </div>
                <span style={{ fontWeight: 800, color: '#ffffff' }}>4.8 / 5.0</span>
                <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                <a
                  href="#reviews-section"
                  className={styles.reviewLink}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {product.reviewCount || 320} Verified Reviews
                </a>
              </div>

              {/* Price Box */}
              <div className={styles.priceBox}>
                <div className={styles.priceRow}>
                  <span className={styles.sellPrice}>{sellPrice}</span>
                  <span className={styles.mrpPrice}>{mrpPrice}</span>
                  <span className={styles.discountBadge}>{discount}</span>
                </div>
                <span className={styles.taxNotice}>
                  Inclusive of all taxes • 100% Free Pan-India Delivery
                </span>
              </div>

              {/* Variant Selector */}
              <div className={styles.variantsArea}>
                <span className={styles.variantLabel}>Select Size / Option:</span>
                <div className={styles.variantGrid}>
                  {variants.map((variant, idx) => (
                    <button
                      key={variant}
                      type="button"
                      className={`${styles.variantBox} ${selectedVariant === idx ? styles.variantBoxActive : ''}`}
                      onClick={() => setSelectedVariant(idx)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pincode & Delivery Checker */}
              <PincodeChecker />

              {/* CTA Action Buttons */}
              <div className={styles.actionsArea}>
                <button
                  type="button"
                  className={styles.addToCartBtn}
                  onClick={handleAddToCart}
                >
                  <RiShoppingBag3Line size={18} />
                  <span>Add To Cart</span>
                </button>

                <button
                  type="button"
                  className={styles.buyNowBtn}
                  onClick={handleBuyNow}
                >
                  <RiFlashlightFill size={18} />
                  <span>Buy Now (COD / UPI)</span>
                </button>

                <button
                  type="button"
                  className={`${styles.wishlistBtn} ${wishlisted ? styles.wishlisted : ''}`}
                  onClick={handleWishlist}
                  aria-label="Wishlist"
                >
                  {wishlisted ? <RiHeartFill size={20} /> : <RiHeartLine size={20} />}
                </button>
              </div>

              {/* Discreet Guarantee Box */}
              <div className={styles.guaranteeBox}>
                <div className={styles.guaranteeItem}>
                  <RiLockLine size={18} className={styles.guaranteeIcon} />
                  <span><strong>100% Anonymous Delivery:</strong> Shipped in plain unbranded boxes without product description or store name.</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <RiTruckLine size={18} className={styles.guaranteeIcon} />
                  <span><strong>Fast &amp; Free Shipping:</strong> Dispatched within 24 hours with confidential SMS tracking.</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <RiShieldCheckLine size={18} className={styles.guaranteeIcon} />
                  <span><strong>Medical Grade Body-Safe:</strong> Non-porous, hypoallergenic, phthalate-free materials.</span>
                </div>
              </div>

              {/* Product Description Accordion */}
              <div className={styles.accordionSection}>
                <button
                  type="button"
                  className={styles.accordionHeader}
                  onClick={() => setDescOpen(!descOpen)}
                >
                  <span>Product Overview &amp; Sensation</span>
                  {descOpen ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
                </button>
                {descOpen && (
                  <div className={styles.accordionBody}>
                    <p>{product.description || 'Crafted with premium body-safe materials designed to deliver intense, multi-speed stimulation with whisper-quiet discretion.'}</p>
                    {product.highlights && (
                      <ul style={{ marginTop: 10, paddingLeft: 18, listStyleType: 'disc' }}>
                        {product.highlights.map((h, i) => (
                          <li key={i} style={{ marginBottom: 4 }}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  className={styles.accordionHeader}
                  onClick={() => setSpecsOpen(!specsOpen)}
                >
                  <span>Materials &amp; Specifications</span>
                  {specsOpen ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
                </button>
                {specsOpen && (
                  <div className={styles.accordionBody}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                      <div><strong>Material:</strong> Medical Grade Silicone / TPE</div>
                      <div><strong>Water Resistance:</strong> 100% Washable &amp; Waterproof</div>
                      <div><strong>Noise Level:</strong> &lt; 45dB Whisper Quiet</div>
                      <div><strong>Charging:</strong> USB Fast Rechargeable</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* People Also Viewed Section */}
          <PeopleAlsoViewed products={relatedProducts} />

          {/* Customer Reviews Section */}
          <div style={{ marginTop: 32 }}>
            <ReviewsSection
              reviews={product.reviews || []}
              rating={product.rating || 4.8}
              reviewCount={product.reviewCount || 320}
            />
          </div>
        </div>
      </main>

      {/* Mobile Sticky Bottom CTA */}
      <div className={styles.mobileStickyBar}>
        <div className={styles.mobileStickyPrice}>
          <span className={styles.stickyPriceVal}>{sellPrice}</span>
          <span className={styles.stickyMrpVal}>{mrpPrice}</span>
        </div>
        <div className={styles.mobileStickyBtns}>
          <button
            type="button"
            className={styles.stickyAddCartBtn}
            onClick={handleAddToCart}
          >
            <RiShoppingBag3Line size={15} /> Add
          </button>
          <button
            type="button"
            className={styles.stickyBuyNowBtn}
            onClick={handleBuyNow}
          >
            <RiFlashlightFill size={15} /> Buy Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
