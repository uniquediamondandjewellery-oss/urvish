import styles from './BrandStrip.module.css';

const BRANDS = [
  'TENGA',
  'WE-VIBE',
  'LELO',
  'DUREX',
  'SATISFYER',
  'SVAKOM',
  'BOLD CARE',
  'LOVENSE',
  'SKORE'
];

export default function BrandStrip({ onSelectBrand }) {
  const handleClick = (brand) => {
    if (onSelectBrand) {
      onSelectBrand(brand);
    }
    const target = document.getElementById('products-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section} aria-label="Official Brand Store">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Official Brand Store</span>
          <h2 className={styles.title}>200+ Global Luxury Brands</h2>
        </div>

        <div className={styles.strip}>
          {BRANDS.map((brand) => (
            <button
              key={brand}
              type="button"
              className={styles.brandCard}
              onClick={() => handleClick(brand)}
            >
              <span className={styles.dot} />
              <span>{brand}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
