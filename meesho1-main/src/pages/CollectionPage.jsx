import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RiArrowRightSLine, RiShieldCheckLine } from 'react-icons/ri';
import Navbar from '../components/Navbar/Navbar';
import CategoriesBar from '../components/CategoriesBar/CategoriesBar';
import Filters from '../components/Filters/Filters';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Footer from '../components/Footer/Footer';
import { products, ensureNoAdjacentDuplicates, categories } from '../data/products';
import styles from './CollectionPage.module.css';

const DEFAULT_FILTERS = { sort: 'relevance', priceRange: '', minRating: 0 };

function matchesCategory(prod, cat) {
  if (!cat || cat === 'all') return true;
  const text = `${prod.title} ${prod.shortName || ''} ${(prod.tags || []).join(' ')} ${prod.subCategory || ''}`.toLowerCase();
  if (cat === 'vibrators') return text.includes('vibrat') || text.includes('massager') || text.includes('wand') || text.includes('shethrill') || text.includes('rabbit');
  if (cat === 'dildos') return text.includes('dildo');
  if (cat === 'dragon-condoms') return text.includes('dragon') || text.includes('condom');
  if (cat === 'sleeves') return text.includes('sleeve') || text.includes('wolf-tooth') || text.includes('crystal');
  if (cat === 'men') return text.includes('stroker') || text.includes('boy') || text.includes('sleeve') || text.includes('cock') || text.includes('penis');
  if (cat === 'women') return text.includes('vibrat') || text.includes('rabbit') || text.includes('dildo') || text.includes('massager') || text.includes('shethrill') || text.includes('vagina');
  if (cat === 'couples') return text.includes('rabbit') || text.includes('vibrat') || text.includes('dildo') || text.includes('dragon');
  if (cat === 'personal-care') return text.includes('care') || text.includes('hygienic') || text.includes('vagina') || text.includes('lube');
  if (cat === 'offers') return (prod.discount >= 85) || (prod.offPercent && (prod.offPercent.includes('8') || prod.offPercent.includes('9')));
  return true;
}

export default function CollectionPage() {
  const { category = 'all' } = useParams();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const currentCategory = useMemo(() => {
    return categories.find(c => c.id === category) || { id: category, label: category.toUpperCase() };
  }, [category]);

  const catalogProducts = useMemo(() => {
    return products.filter(p => p.isAdult || p.category === 'adult');
  }, []);

  const filteredProducts = useMemo(() => {
    let result = catalogProducts.filter(p => matchesCategory(p, category));

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
  }, [catalogProducts, category, filters]);

  useEffect(() => {
    document.title = `${currentCategory.label} | Buy Online | IMBesharam India`;
    window.scrollTo(0, 0);
  }, [currentCategory]);

  return (
    <div className={styles.page}>
      <Navbar />
      <CategoriesBar activeCategory={category} />

      <main className={styles.main}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <RiArrowRightSLine size={14} />
            <Link to="/collections/all" className={styles.breadcrumbLink}>Collections</Link>
            <RiArrowRightSLine size={14} />
            <span style={{ color: '#ffffff', fontWeight: 700 }}>{currentCategory.label}</span>
          </nav>

          <div className={styles.headerCard}>
            <span className={styles.categoryTag}>
              <RiShieldCheckLine size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              100% Plain Discreet Packaging Guaranteed
            </span>
            <h1 className={styles.categoryTitle}>{currentCategory.label}</h1>
            <p className={styles.categoryDesc}>
              Browse India's top rated luxury adult novelties, bedroom accessories, and body-safe devices with discreet delivery.
            </p>
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
