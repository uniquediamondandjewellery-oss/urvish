import {
  RiShieldCheckLine,
  RiTruckLine,
  RiMoneyDollarCircleLine,
  RiStarFill,
  RiArrowRightLine,
  RiFireLine,
  RiSparklingFill,
  RiCheckDoubleLine
} from 'react-icons/ri';
import styles from './HeroBanner.module.css';

export default function HeroBanner({ onSelectCategory }) {
  const handleScrollToProducts = (catId = 'all') => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const target = document.getElementById('products-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.plainHeroSection} id="hero-banner" aria-label="Hero Introduction">
      <div className={styles.container}>
        <div className={styles.plainCard}>
          {/* Top subtle badge */}
          <div className={styles.badgeRow}>
            <span className={styles.tagBadge}>
              <RiSparklingFill size={13} className={styles.tagIcon} />
              INDIA'S #1 ADULT SUPER STORE
            </span>
            <span className={styles.verifiedText}>
              <RiStarFill size={14} color="var(--color-accent-gold)" />
              <strong>4.8 / 5</strong> Rating &bull; 110,000+ Verified Reviews
            </span>
          </div>

          {/* Main Plain Typography */}
          <h1 className={styles.title}>
            Play More, Shame Less. <br />
            <span className={styles.titleGradient}>India's Most Trusted Intimate Store</span>
          </h1>

          <p className={styles.subtitle}>
            Explore 200+ global brands of luxury vibrators, realistic sleeves, studded dragon condoms &amp; wellness essentials.
            Shipped pan-India with <strong>100% plain, unmarked packaging</strong> and complete privacy guaranteed.
          </p>

          {/* Value Perks Strip */}
          <div className={styles.perksList}>
            <div className={styles.perkItem}>
              <RiShieldCheckLine size={18} className={styles.perkIcon} />
              <span>100% Plain Unmarked Box</span>
            </div>
            <div className={styles.perkDivider} />
            <div className={styles.perkItem}>
              <RiTruckLine size={18} className={styles.perkIcon} />
              <span>Express Pan-India Delivery</span>
            </div>
            <div className={styles.perkDivider} />
            <div className={styles.perkItem}>
              <RiMoneyDollarCircleLine size={18} className={styles.perkIcon} />
              <span>COD &amp; UPI Available</span>
            </div>
            <div className={styles.perkDivider} />
            <div className={styles.perkItem}>
              <RiCheckDoubleLine size={18} className={styles.perkIcon} />
              <span>100% Original Global Brands</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className={styles.ctaRow}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => handleScrollToProducts('all')}
            >
              <span>Explore Collection</span>
              <RiArrowRightLine size={18} />
            </button>
            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={() => handleScrollToProducts('offers')}
            >
              <RiFireLine size={18} color="var(--color-primary)" />
              <span>Mega Offers &bull; Up to 93% Off</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
