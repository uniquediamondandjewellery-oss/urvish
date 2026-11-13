import { useNavigate } from 'react-router-dom';
import { RiPlayFill, RiShoppingBag3Line, RiFilmLine } from 'react-icons/ri';
import styles from './VideoReel.module.css';

const REELS = [
  {
    id: 902,
    title: 'Mousse Luxury Rabbit Vibrator',
    price: '₹299.00',
    views: '128K Views',
    image: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/rnxze_512_62d8ece5-103a-44e6-9655-a0e262a02ed0.jpg?v=1791196776'
  },
  {
    id: 904,
    title: 'DRAGON CONDOM 8"',
    price: '₹299.00',
    views: '240K Views',
    image: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/dragon0_200x200_da524504-f374-494d-9bde-d8ef18790fa6.jpg?v=1791196766'
  },
  {
    id: 908,
    title: 'Wolf-Tooth Crystal Sleeve',
    price: '₹299.00',
    views: '98K Views',
    image: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1.png?v=1791196779'
  },
  {
    id: 912,
    title: 'SheThrill Massager',
    price: '₹299.00',
    views: '175K Views',
    image: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/11_cf28c864-4df6-4526-82e8-bc1524213a2e.jpg?v=1791196760'
  }
];

export default function VideoReel() {
  const navigate = useNavigate();

  return (
    <section className={styles.section} aria-label="Shoppable Video Reels">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>
            <RiFilmLine size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
            Watch &amp; Shop Live
          </span>
          <h2 className={styles.title}>Customer Demos &amp; Video Unboxings</h2>
        </div>

        <div className={styles.grid}>
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className={styles.card}
              onClick={() => navigate(`/product/${reel.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${reel.id}`)}
            >
              <div
                className={styles.cardBg}
                style={{ backgroundImage: `url(${reel.image})` }}
              />
              <div className={styles.overlay} />

              <div className={styles.topPill}>
                <span className={styles.liveDot} />
                <span>{reel.views}</span>
              </div>

              <div className={styles.playBtn}>
                <RiPlayFill size={26} />
              </div>

              <div className={styles.bottomContent}>
                <h3 className={styles.prodTitle}>{reel.title}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.salePrice}>{reel.price}</span>
                  <span className={styles.shopBtn}>
                    <RiShoppingBag3Line size={13} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                    View Toy
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
