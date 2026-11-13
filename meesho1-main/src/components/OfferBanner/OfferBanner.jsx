import { RiFireLine, RiArrowRightLine, RiFlashlightLine } from 'react-icons/ri';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import styles from './OfferBanner.module.css';

// 8 hours from now for persistent urgency countdown
const ENDS_AT = Date.now() + 8 * 3600 * 1000 + 42 * 60 * 1000;

export default function OfferBanner({ onSelectCategory }) {
  const handleCta = () => {
    if (onSelectCategory) {
      onSelectCategory('all');
    }
    const target = document.getElementById('products-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.bannerSection} aria-label="Flash Deals Banner">
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.saleTag}>
            <RiFireLine size={16} /> Exclusive Flash Deal
          </span>
          <h2 className={styles.headline}>
            Deals of the Day — <span>Flat ₹299 / Up to 93% Off</span>
          </h2>
          <p className={styles.subtext}>
            Grab top-selling dragon condoms, crystal sleeves, and dildos with 100% discreet delivery.
          </p>
        </div>

        <div className={styles.rightContent}>
          <CountdownTimer endsAt={ENDS_AT} />
          <button type="button" className={styles.actionBtn} onClick={handleCta}>
            <span>Unlock Deals</span>
            <RiArrowRightLine size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
