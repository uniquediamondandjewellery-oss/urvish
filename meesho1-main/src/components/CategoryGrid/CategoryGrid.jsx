import {
  RiArrowRightLine,
  RiSparklingLine,
  RiHeartPulseLine,
  RiFireLine,
  RiFlashlightLine,
  RiShieldFlashLine,
  RiCupLine,
  RiUserHeartLine
} from 'react-icons/ri';
import styles from './CategoryGrid.module.css';

const CATEGORY_TILES = [
  {
    id: 'vibrators',
    name: 'Vibrators & Wands',
    count: 'Luxury Rabbit & Massagers',
    img: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/rnxze_512_62d8ece5-103a-44e6-9655-a0e262a02ed0.jpg?v=1791196776',
    icon: <RiHeartPulseLine size={18} />
  },
  {
    id: 'dildos',
    name: 'Realistic Dildos',
    count: 'Silicone & Dual Density',
    img: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_c058d745-76bd-46d3-b28b-72f6d06e0fa6.webp?v=1791196770',
    icon: <RiFireLine size={18} />
  },
  {
    id: 'dragon-condoms',
    name: 'Dragon Condoms',
    count: 'Studded & Beaded',
    img: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/dragon0_200x200_da524504-f374-494d-9bde-d8ef18790fa6.jpg?v=1791196766',
    icon: <RiShieldFlashLine size={18} />
  },
  {
    id: 'sleeves',
    name: 'Cock Sleeves',
    count: 'Wolf-Tooth & Vibrating',
    img: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_4c928055-276e-4e9b-b984-494443e27397.png?v=1791196774',
    icon: <RiFlashlightLine size={18} />
  },
  {
    id: 'men',
    name: 'Male Strokers',
    count: 'Automatic Thrust & Suction',
    img: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_2849ec7b-0e7a-4e87-99b2-8e5c1d2e12f8.webp?v=1791196773',
    icon: <RiCupLine size={18} />
  },
  {
    id: 'couples',
    name: 'Couples Play',
    count: 'Rings & Dual Pleasure',
    img: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/11_cf28c864-4df6-4526-82e8-bc1524213a2e.jpg?v=1791196760',
    icon: <RiUserHeartLine size={18} />
  }
];

export default function CategoryGrid({ onSelectCategory }) {
  const handleTileClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const target = document.getElementById('products-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section} aria-label="Shop by Category">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.sectionTag}>
              <RiSparklingLine size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              Explore Collections
            </span>
            <h2 className={styles.sectionTitle}>Shop by Popular Category</h2>
          </div>
          <button
            type="button"
            className={styles.viewAllBtn}
            onClick={() => handleTileClick('all')}
          >
            <span>View All</span>
            <RiArrowRightLine size={16} />
          </button>
        </div>

        <div className={styles.grid}>
          {CATEGORY_TILES.map((tile) => (
            <div
              key={tile.id}
              className={styles.tile}
              onClick={() => handleTileClick(tile.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTileClick(tile.id)}
            >
              {/* Product Category Image Thumbnail with Icon Badge */}
              <div className={styles.tileImageWrap}>
                <img
                  src={tile.img}
                  alt={tile.name}
                  className={styles.tileImage}
                  loading="lazy"
                />
                <div className={styles.iconBadge}>
                  {tile.icon}
                </div>
              </div>

              <h3 className={styles.tileName}>{tile.name}</h3>
              <span className={styles.tileCount}>{tile.count}</span>
              <span className={styles.tileLink}>
                Shop Now <RiArrowRightLine size={12} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
