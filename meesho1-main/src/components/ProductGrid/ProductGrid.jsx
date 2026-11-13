import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products, loading = false }) {
  if (loading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.skeleton} aria-hidden="true">
            <div className={styles.skeletonImg} />
            <div className={styles.skeletonLine} style={{ width: '80%' }} />
            <div className={styles.skeletonLine} style={{ width: '60%' }} />
            <div className={styles.skeletonLine} style={{ width: '40%' }} />
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className={styles.empty} id="product-grid-empty">
        <div className={styles.emptyIcon}>🛍️</div>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className={styles.grid} id="product-grid" role="list">
      {products.map((product) => (
        <div key={product.id} role="listitem">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
