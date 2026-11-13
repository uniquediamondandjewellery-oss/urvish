import styles from './TrustBar.module.css';

// 1. Discreet Packaging Logo (Box with Privacy Padlock Shield)
function DiscreetPackagingLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Discreet Packaging Logo">
      <path d="M18 3L4 9L18 15L32 9L18 3Z" fill="#EA1969" fillOpacity="0.25" stroke="#EA1969" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M4 9V24L18 30V15L4 9Z" fill="#1E2026" stroke="#EA1969" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M32 9V24L18 30V15L32 9Z" fill="#2C2F36" stroke="#EA1969" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="25" cy="23" r="8" fill="#141519" stroke="#FBCD0A" strokeWidth="1.5"/>
      <path d="M22 23V21C22 19.34 23.34 18 25 18C26.66 18 28 19.34 28 21V23" stroke="#FBCD0A" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="21" y="23" width="8" height="6" rx="1.5" fill="#FBCD0A"/>
      <circle cx="25" cy="26" r="1" fill="#141519"/>
    </svg>
  );
}

// 2. Free & Fast Delivery Logo (Express Van with Speed & Lightning)
function ExpressDeliveryLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Fast Express Delivery Logo">
      <path d="M3 13H8M1 18H6M3 23H9" stroke="#EA1969" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 10H22C23.1 10 24 10.9 24 12V24H9V10Z" fill="#EA1969" fillOpacity="0.25" stroke="#EA1969" strokeWidth="2"/>
      <path d="M24 14H29L33 19V24H24V14Z" fill="#2C2F36" stroke="#EA1969" strokeWidth="2"/>
      <circle cx="15" cy="26" r="3" fill="#141519" stroke="#19EA9A" strokeWidth="2"/>
      <circle cx="28" cy="26" r="3" fill="#141519" stroke="#19EA9A" strokeWidth="2"/>
      <path d="M17 13L14 18H18L15 22" stroke="#FBCD0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// 3. 1M+ Orders Delivered Logo (Gold Premium Seal Medal)
function OrdersDeliveredLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="1M+ Orders Logo">
      <circle cx="18" cy="16" r="13" fill="#FBCD0A" fillOpacity="0.2" stroke="#FBCD0A" strokeWidth="2"/>
      <path d="M12 26L9 34L18 30L27 34L24 26" fill="#EA1969" stroke="#EA1969" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="18" cy="16" r="9" fill="#1E2026" stroke="#FBCD0A" strokeWidth="1.5"/>
      <text x="18" y="16.5" textAnchor="middle" dominantBaseline="middle" fill="#FBCD0A" fontSize="7" fontWeight="900" fontFamily="sans-serif">1M+</text>
      <path d="M14 20C15 21 21 21 22 20" stroke="#FBCD0A" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

// 4. 110,000+ Reviews Logo (5 Gold Stars & Feedback Bubble)
function VerifiedReviewsLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="110,000+ Reviews Logo">
      <path d="M5 9C5 6.79 6.79 5 9 5H27C29.21 5 31 6.79 31 9V20C31 22.21 29.21 24 27 24H14L7 29V24H9C6.79 24 5 22.21 5 20V9Z" fill="#1E2026" stroke="#EA1969" strokeWidth="1.8"/>
      <path d="M10 14L11 11.5L12 14L9.5 12.5H12.5L10 14Z" fill="#FBCD0A"/>
      <path d="M14 14L15 11.5L16 14L13.5 12.5H16.5L14 14Z" fill="#FBCD0A"/>
      <path d="M18 14L19 11.5L20 14L17.5 12.5H20.5L18 14Z" fill="#FBCD0A"/>
      <path d="M22 14L23 11.5L24 14L21.5 12.5H24.5L22 14Z" fill="#FBCD0A"/>
      <path d="M26 14L27 11.5L28 14L25.5 12.5H28.5L26 14Z" fill="#FBCD0A"/>
      <text x="18" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="800" fontFamily="sans-serif">110K+ ★</text>
    </svg>
  );
}

// 5. COD & UPI Available Logo (UPI Chevron Logo + Cash Icon)
function CodUpiLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="COD & UPI Logo">
      <rect x="3" y="10" width="22" height="15" rx="2.5" fill="#1E2026" stroke="#19EA9A" strokeWidth="1.8"/>
      <circle cx="14" cy="17.5" r="3" fill="#19EA9A" fillOpacity="0.3" stroke="#19EA9A" strokeWidth="1"/>
      <text x="14" y="18.5" textAnchor="middle" dominantBaseline="middle" fill="#19EA9A" fontSize="4.5" fontWeight="900" fontFamily="sans-serif">COD</text>
      <rect x="18" y="17" width="16" height="13" rx="2.5" fill="#141519" stroke="#FBCD0A" strokeWidth="1.5"/>
      <path d="M23 20L27 23.5L23 27" stroke="#EA5D28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 20L30 23.5L26 27" stroke="#097939" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const TRUST_ITEMS = [
  {
    logo: <DiscreetPackagingLogo />,
    title: 'Discreet Packaging',
    desc: '100% Plain unmarked boxes'
  },
  {
    logo: <ExpressDeliveryLogo />,
    title: 'Free & Fast Delivery',
    desc: 'Pan-India express dispatch'
  },
  {
    logo: <OrdersDeliveredLogo />,
    title: '1M+ Orders Delivered',
    desc: "India's #1 trusted store"
  },
  {
    logo: <VerifiedReviewsLogo />,
    title: '110,000+ Reviews',
    desc: 'Real verified testimonials'
  },
  {
    logo: <CodUpiLogo />,
    title: 'COD & UPI Available',
    desc: 'Pay at doorstep or online'
  }
];

export default function TrustBar() {
  const handleScrollToProducts = () => {
    const target = document.getElementById('products-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.trustBarSection} aria-label="Customer Guarantees & Trust Badges">
      <div className={styles.trustContainer}>
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.title}
            className={styles.trustItem}
            onClick={handleScrollToProducts}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleScrollToProducts()}
          >
            <div className={styles.iconWrap}>
              {item.logo}
            </div>
            <div className={styles.textWrap}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.desc}>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
