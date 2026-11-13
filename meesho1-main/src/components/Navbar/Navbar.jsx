import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  RiSearchLine,
  RiHeartLine,
  RiShoppingBag3Line,
  RiUser3Line,
  RiMenuLine,
  RiCloseLine,
  RiShieldCheckLine,
  RiTruckLine,
  RiCustomerService2Line,
  RiFireLine,
  RiArrowRightSLine,
  RiPhoneLine
} from 'react-icons/ri';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { categories } from '../../data/products';
import ProfileModal from '../ProfileModal/ProfileModal';
import styles from './Navbar.module.css';

const TRENDING_SEARCHES = [
  'Rabbit Vibrator',
  'Dragon Condom',
  '12 Inch Dildo',
  'Wolf Tooth Sleeve',
  'Male Stroker',
  'SheThrill Massager',
  'Couples Toys',
  'Silicone Stud Dildo',
  'Personal Care'
];

export default function Navbar({ onSearch, searchQuery, onCategoryChange }) {
  const { cartCount, openCartDrawer } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const searchContainerRef = useRef(null);
  const mobileSearchRef = useRef(null);

  useEffect(() => {
    setSearchTerm(searchQuery || '');
  }, [searchQuery]);

  useEffect(() => {
    try {
      const savedPhone = localStorage.getItem('user_phone') || localStorage.getItem('meesho_user_phone');
      const savedName = localStorage.getItem('user_name') || localStorage.getItem('meesho_user_name');
      if (savedPhone) {
        setUserProfile({ phone: savedPhone, name: savedName });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target) &&
        (!mobileSearchRef.current || !mobileSearchRef.current.contains(e.target))
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSearchFocused(false);
    const trimmed = searchTerm.trim();
    if (onSearch) {
      onSearch(trimmed);
    } else {
      navigate(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/');
    }
  };

  const handleSuggestionClick = (keyword) => {
    setSearchTerm(keyword);
    setIsSearchFocused(false);
    if (onSearch) {
      onSearch(keyword);
    } else {
      navigate(`/search?q=${encodeURIComponent(keyword)}`);
    }
  };

  const handleCategoryNav = (catId) => {
    setIsMobileMenuOpen(false);
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      navigate(`/collections/${catId}`);
    }
  };

  return (
    <div className={styles.headerWrapper} id="imbesharam-header">
      {/* 1. Top Announcement Bar */}
      <div className={styles.announcementBar}>
        <div className={styles.announcementContent}>
          <span className={styles.announcementItem}>
            <RiTruckLine size={15} /> 100% DISCREET PACKAGING &amp; FAST &amp; FREE DELIVERY
          </span>
          <span className={styles.announcementSep}>•</span>
          <span className={styles.announcementItem}>
            <RiShieldCheckLine size={15} /> PAY VIA COD / NETBANKING / UPI
          </span>
          <span className={styles.announcementSep}>•</span>
          <span className={`${styles.announcementItem} ${styles.desktopOnly}`}>
            INDIA'S #1 ADULT STORE (1M+ ORDERS)
          </span>
        </div>
        <div className={styles.announcementRight}>
          <a href="tel:+912248931870" className={styles.announcementLink}>
            <RiPhoneLine size={12} style={{ verticalAlign: 'middle', marginRight: 3 }} />
            +91 22 4893 1800
          </a>
          <span className={styles.announcementSep}>|</span>
          <Link to="/pages/contact" className={styles.announcementLink}>
            Help &amp; FAQs
          </Link>
        </div>
      </div>

      {/* 2. Main Sticky Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          {/* Left: Mobile Hamburger & Brand Logo */}
          <div className={styles.navLeft}>
            <button
              type="button"
              className={styles.hamburgerBtn}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <RiMenuLine size={22} />
            </button>

            <Link to="/" className={styles.logo} aria-label="IMBesharam Home">
              <span className={styles.logoTitle}>
                IMBesharam<span className={styles.logoDotCom}>.COM</span>
              </span>
              <span className={styles.logoSlogan}>Play More • Shame Less</span>
            </Link>
          </div>

          {/* Center: Desktop Search Input */}
          <div className={styles.searchContainer} ref={searchContainerRef}>
            <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
              <div className={styles.searchInner}>
                <button type="submit" className={styles.searchBtn} aria-label="Search">
                  <RiSearchLine size={18} />
                </button>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search 200+ brands, vibrators, dildos, strokers, condoms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  aria-label="Search products"
                />
                {searchTerm && (
                  <button
                    type="button"
                    className={styles.clearSearchBtn}
                    onClick={() => {
                      setSearchTerm('');
                      if (onSearch) onSearch('');
                    }}
                    aria-label="Clear search"
                  >
                    <RiCloseLine size={16} />
                  </button>
                )}
              </div>
            </form>

            {/* Live Search Suggestions Dropdown */}
            {isSearchFocused && (
              <div className={styles.searchSuggestions}>
                <div className={styles.suggestionHeader}>
                  <RiFireLine size={14} color="var(--color-primary)" />
                  <span>Popular Trending Searches</span>
                </div>
                <div className={styles.suggestionChips}>
                  {TRENDING_SEARCHES.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={styles.chip}
                      onMouseDown={() => handleSuggestionClick(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Site Actions */}
          <div className={styles.navActions}>
            <div className={`${styles.trustBadgeBtn} ${styles.desktopOnly}`}>
              <RiShieldCheckLine size={16} />
              <span>100% Discreet</span>
            </div>

            <button
              type="button"
              className={`${styles.actionBtn} ${styles.desktopOnly}`}
              onClick={() => setIsProfileModalOpen(true)}
              aria-label="Account"
            >
              <div className={styles.actionIconWrap}>
                <RiUser3Line size={20} />
              </div>
              <span>
                {userProfile?.name ? userProfile.name.split(' ')[0] : 'Account'}
              </span>
            </button>

            <Link
              to="/wishlist"
              className={`${styles.actionBtn} ${styles.desktopOnly}`}
              aria-label="Wishlist"
            >
              <div className={styles.actionIconWrap}>
                <RiHeartLine size={20} />
                {wishlistCount > 0 && (
                  <span className={styles.countBubble}>{wishlistCount}</span>
                )}
              </div>
              <span>Wishlist</span>
            </Link>

            <button
              type="button"
              className={styles.actionBtn}
              onClick={openCartDrawer}
              aria-label="Cart"
              id="cart-icon-bubble"
            >
              <div className={styles.actionIconWrap}>
                <RiShoppingBag3Line size={20} />
                {cartCount > 0 && (
                  <span className={styles.countBubble}>{cartCount}</span>
                )}
              </div>
              <span className={styles.desktopOnly}>Cart</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input Row */}
        <div className={styles.mobileSearchRow}>
          <div className={styles.searchContainer} ref={mobileSearchRef}>
            <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
              <div className={styles.searchInner}>
                <button type="submit" className={styles.searchBtn} aria-label="Search">
                  <RiSearchLine size={18} />
                </button>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search toys, dildos, strokers, condoms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  aria-label="Search products"
                />
                {searchTerm && (
                  <button
                    type="button"
                    className={styles.clearSearchBtn}
                    onClick={() => {
                      setSearchTerm('');
                      if (onSearch) onSearch('');
                    }}
                    aria-label="Clear search"
                  >
                    <RiCloseLine size={16} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <>
          <div
            className={styles.drawerOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className={styles.drawer} aria-label="Mobile Navigation">
            <div className={styles.drawerHeader}>
              <div className={styles.logo}>
                <span className={styles.logoTitle} style={{ fontSize: 20 }}>
                  IMBesharam<span className={styles.logoDotCom}>.COM</span>
                </span>
                <span className={styles.logoSlogan}>Play More • Shame Less</span>
              </div>
              <button
                type="button"
                className={styles.drawerCloseBtn}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <RiCloseLine size={24} />
              </button>
            </div>

            {/* Account & Wishlist Moved from Top Bar into Drawer */}
            <div className={styles.drawerAccountBox}>
              <button
                type="button"
                className={styles.drawerAccountCard}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsProfileModalOpen(true);
                }}
              >
                <div className={styles.drawerAccountAvatar}>
                  <RiUser3Line size={20} />
                </div>
                <div className={styles.drawerAccountInfo}>
                  <span className={styles.drawerAccountName}>
                    {userProfile?.name ? userProfile.name : 'Sign In / My Account'}
                  </span>
                  <span className={styles.drawerAccountSub}>
                    {userProfile?.phone ? userProfile.phone : 'Manage profile & saved address'}
                  </span>
                </div>
                <RiArrowRightSLine size={20} color="var(--color-text-muted)" />
              </button>

              <Link
                to="/wishlist"
                className={styles.drawerWishlistBtn}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={styles.drawerWishlistLeft}>
                  <RiHeartLine size={19} color="var(--color-primary)" />
                  <span>My Wishlist</span>
                </div>
                {wishlistCount > 0 ? (
                  <span className={styles.drawerWishlistBadge}>{wishlistCount} saved</span>
                ) : (
                  <RiArrowRightSLine size={18} color="var(--color-text-muted)" />
                )}
              </Link>
            </div>

            <div className={styles.drawerSection}>
              <div className={styles.drawerSectionTitle}>Shop Collections</div>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={styles.drawerLink}
                  onClick={() => handleCategoryNav(cat.id)}
                >
                  <span className={styles.drawerLinkLeft}>
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </span>
                  <RiArrowRightSLine size={18} color="var(--color-text-muted)" />
                </button>
              ))}
            </div>

            <div className={styles.drawerSection}>
              <div className={styles.drawerSectionTitle}>Customer Care</div>
              <a href="tel:+912248931870" className={styles.drawerLink}>
                <span className={styles.drawerLinkLeft}>
                  <RiPhoneLine size={18} />
                  <span>+91 22 4893 1800</span>
                </span>
              </a>
              <Link
                to="/pages/contact"
                className={styles.drawerLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.drawerLinkLeft}>
                  <RiCustomerService2Line size={18} />
                  <span>Support &amp; Contact</span>
                </span>
              </Link>
            </div>

            <div className={styles.drawerSection}>
              <div className={styles.drawerHelpBox}>
                🔒 <strong>100% Anonymous Delivery:</strong> Every order is shipped in plain, unmarked, tamper-evident brown boxes with no mention of product or store name.
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <ProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          onProfileUpdated={(prof) => setUserProfile(prof)}
        />
      )}
    </div>
  );
}
