import { useState, useRef, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { categories } from '../../data/products';
import styles from './CategoriesBar.module.css';

export default function CategoriesBar({ activeCategory, onCategoryChange }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (cat) => {
    if (onCategoryChange) {
      onCategoryChange(cat.id);
    }
  };

  return (
    <nav className={styles.categoriesBar} id="categories-bar" aria-label="Collections">
      <div className={styles.carouselWrapper}>
        {canScrollLeft && (
          <button
            type="button"
            className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <RiArrowLeftSLine size={18} />
          </button>
        )}

        <div className={styles.categoriesInner} ref={scrollRef}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-${cat.id}`}
                className={`${styles.catItem} ${isActive ? styles.active : ''}`}
                onClick={() => handleCategoryClick(cat)}
                aria-pressed={isActive}
              >
                <span className={styles.catIconWrap}>{cat.icon}</span>
                <span className={styles.catLabel}>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            type="button"
            className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <RiArrowRightSLine size={18} />
          </button>
        )}
      </div>
    </nav>
  );
}
