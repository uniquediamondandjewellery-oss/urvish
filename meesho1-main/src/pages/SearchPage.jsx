import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import CategoriesBar from '../components/CategoriesBar/CategoriesBar';
import Filters from '../components/Filters/Filters';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Footer from '../components/Footer/Footer';
import { products, ensureNoAdjacentDuplicates } from '../data/products';
import styles from './SearchPage.module.css';

const DEFAULT_FILTERS = { sort: 'relevance', priceRange: '', minRating: 0 };

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const catalogProducts = useMemo(() => {
    return products.filter(p => p.isAdult || p.category === 'adult');
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...catalogProducts];

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    if (filters.priceRange) {
      if (filters.priceRange === '2000+') {
        result = result.filter(p => p.price >= 2000);
      } else {
        const [min, max] = filters.priceRange.split('-').map(Number);
        result = result.filter(p => p.price >= min && p.price <= max);
      }
    }

    if (filters.minRating > 0) {
      result = result.filter(p => p.rating >= filters.minRating);
    }

    switch (filters.sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'discount': result.sort((a, b) => (b.discount || 0) - (a.discount || 0)); break;
      default: break;
    }

    return ensureNoAdjacentDuplicates(result);
  }, [catalogProducts, query, filters]);

  useEffect(() => {
    document.title = query ? `Search: "${query}" | IMBesharam India` : 'Search Products | IMBesharam India';
    window.scrollTo(0, 0);
  }, [query]);

  const handleSearch = (newQ) => {
    setSearchParams({ q: newQ });
  };

  return (
    <div className={styles.page}>
      <Navbar onSearch={handleSearch} searchQuery={query} />
      <CategoriesBar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.searchHeader}>
            <h1 className={styles.searchQueryTitle}>
              {query ? (
                <>Search results for <span className={styles.highlight}>"{query}"</span></>
              ) : (
                'All Adult Products & Novelties'
              )}
            </h1>
            <span className={styles.resultCount}>
              {filteredProducts.length} Items Found
            </span>
          </div>

          <div className={styles.contentRow}>
            <Filters
              filters={filters}
              onFilterChange={setFilters}
              totalResults={filteredProducts.length}
            />
            <div className={styles.gridArea}>
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
