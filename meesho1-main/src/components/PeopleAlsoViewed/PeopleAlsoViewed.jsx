import { useNavigate } from 'react-router-dom';
import { RiStarFill } from 'react-icons/ri';
import { useCart } from '../../context/CartContext';
import styles from './PeopleAlsoViewed.module.css';

export default function PeopleAlsoViewed({ products }) {
  const navigate = useNavigate();
  const { items, dispatch } = useCart();

  if (!products || products.length === 0) return null;

  return (
    <section className={styles.section} id="people-also-viewed" aria-label="People also viewed">
      <div className={styles.header}>
        <h2 className={styles.heading}>People Also Viewed</h2>
        <div className={styles.headingLine} />
      </div>
      <div className={styles.grid}>
        {products.map((product) => {
          const cartItem = items.find(i => i.product.id === product.id);
          const qty = cartItem ? cartItem.quantity : 0;
          return (
            <article
              key={product.id}
              className={styles.card}
              id={`pav-card-${product.id}`}
              onClick={() => navigate(`/product/${product.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${product.id}`)}
            >
              <div className={styles.imageWrap}>
                <img src={product.images[0]} alt={product.title} className={styles.image} loading="lazy" />
                <span className={styles.discBadge}>{product.discount}% OFF</span>
              </div>
              <div className={styles.body}>
                <p className={styles.title}>{product.title}</p>
                <div className={styles.priceRow}>
                  <span className={styles.price}>₹{product.price}</span>
                  <span className={styles.mrp}>₹{product.mrp}</span>
                </div>
                <div className={styles.ratingRow}>
                  <span className={styles.rating}>
                    <RiStarFill size={11} /> {product.rating}
                  </span>
                </div>
                <button
                  className={`${styles.addBtn} ${qty > 0 ? styles.addedBtn : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch({ type: 'ADD_ITEM', product });
                  }}
                  id={`pav-add-${product.id}`}
                >
                  {qty > 0 ? `In Cart (${qty})` : '+ Add'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
