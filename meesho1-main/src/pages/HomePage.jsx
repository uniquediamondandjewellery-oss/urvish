import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import CategoriesBar from '../components/CategoriesBar/CategoriesBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import TrustBar from '../components/TrustBar/TrustBar';
import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import OfferBanner from '../components/OfferBanner/OfferBanner';
import BrandStrip from '../components/BrandStrip/BrandStrip';
import VideoReel from '../components/VideoReel/VideoReel';
import Filters from '../components/Filters/Filters';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection';
import Footer from '../components/Footer/Footer';
import { products, ensureNoAdjacentDuplicates } from '../data/products';
import styles from './HomePage.module.css';

const DEFAULT_FILTERS = { sort: 'relevance', priceRange: '', minRating: 0 };

function matchesCategory(prod, cat) {
  if (!cat || cat === 'all' || cat === 'adult') return true;
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

function applyFilters(prods, filters, category, query) {
  let result = [...prods];

  // Search filter
  if (query) {
    const q = query.toLowerCase();
    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }

  // Category filter
  if (category) {
    result = result.filter(p => matchesCategory(p, category));
  }

  // Price range
  if (filters.priceRange) {
    if (filters.priceRange === '2000+') {
      result = result.filter(p => p.price >= 2000);
    } else {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }
  }

  // Rating
  if (filters.minRating > 0) {
    result = result.filter(p => p.rating >= filters.minRating);
  }

  // Sort
  switch (filters.sort) {
    case 'price-asc': result.sort((a, b) => a.price - b.price); break;
    case 'price-desc': result.sort((a, b) => b.price - a.price); break;
    case 'rating': result.sort((a, b) => b.rating - a.rating); break;
    case 'discount': result.sort((a, b) => (b.discount || 0) - (a.discount || 0)); break;
    default:
      break;
  }

  return ensureNoAdjacentDuplicates(result);
}

const SAMPLE_STORE_REVIEWS = [
  {
    id: 1,
    user: 'Rohan M.',
    rating: 5,
    comment: 'Super fast delivery to Pune. Arrived in an ordinary brown box with zero labels or store name on it. Total peace of mind!',
    date: '18 Oct 2026',
    helpful: 52
  },
  {
    id: 2,
    user: 'Pooja & Amit',
    rating: 5,
    comment: 'Bought the luxury rabbit vibrator and dragon sleeve. Quality is outstanding, 100% body-safe silicone and whisper quiet. Best adult toy store in India!',
    date: '14 Oct 2026',
    helpful: 88
  },
  {
    id: 3,
    user: 'Vikram S.',
    rating: 5,
    comment: 'Loved the discreet packaging and smooth COD payment. Dragon condom fit was exact and sensations are intense. Highly recommended.',
    date: '10 Oct 2026',
    helpful: 41
  },
  {
    id: 4,
    user: 'Sneha K.',
    rating: 5,
    comment: 'Amazing customer care on WhatsApp! Answered all my sizing queries without any awkwardness. Authentic 100% original product delivered in 2 days.',
    date: '06 Oct 2026',
    helpful: 35
  }
];

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [activeCategory, setActiveCategory] = useState('all');
  const searchQuery = searchParams.get('q') || '';

  // Get active catalog products (26 items)
  const catalogProducts = useMemo(() => {
    return products.filter(p => p.isAdult || p.category === 'adult');
  }, []);

  const filteredProducts = useMemo(
    () => applyFilters(catalogProducts, filters, activeCategory, searchQuery),
    [catalogProducts, filters, activeCategory, searchQuery]
  );

  useEffect(() => {
    document.title = "India's #1 Adult Toys Super Store | Buy Sex Toys Online | IMBesharam";
  }, []);

  const catParam = searchParams.get('cat');
  useEffect(() => {
    if (catParam) {
      setActiveCategory(catParam);
      setFilters(DEFAULT_FILTERS);
    }
  }, [catParam]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setFilters(DEFAULT_FILTERS);
    setSearchParams(prev => {
      const p = new URLSearchParams(prev);
      if (catId && catId !== 'all') {
        p.set('cat', catId);
      } else {
        p.delete('cat');
      }
      return p;
    });
  };

  const handleSearch = (q) => {
    setSearchParams(prev => {
      const p = new URLSearchParams(prev);
      if (q) p.set('q', q);
      else p.delete('q');
      return p;
    });
  };

  return (
    <div className={styles.page}>
      {/* 1. Header & Navigation */}
      <Navbar
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onCategoryChange={handleCategoryChange}
      />
      <CategoriesBar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* 2. Plain Hero Banner */}
      <HeroBanner onSelectCategory={handleCategoryChange} />

      {/* 3. Customer Guarantees Trust Bar with Logos */}
      <TrustBar />

      {/* 4. Category Grid Tiles */}
      <CategoryGrid onSelectCategory={handleCategoryChange} />

      {/* 5. Flash Sale Offer Banner */}
      <OfferBanner onSelectCategory={handleCategoryChange} />

      {/* 6. Products Showcase Section */}
      <section className={styles.listingSection} id="products-section" aria-label="Products Section">
        <div className={styles.listingInner}>
          <div className={styles.sectionHeader}>
            <div className={styles.headerTextGroup}>
              <span className={styles.sectionTag}>Discreet &amp; Authentic</span>
              <h2 className={styles.sectionTitle}>
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : activeCategory === 'all'
                  ? 'All Top Trending Toys & Wellness'
                  : `Collection: ${activeCategory.replace('-', ' ').toUpperCase()}`}
              </h2>
            </div>
            <span className={styles.resultCountBadge}>
              {filteredProducts.length} Products Available
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
      </section>

      {/* 7. Brand Store Strip */}
      <BrandStrip onSelectBrand={handleSearch} />

      {/* 8. Video Reel / Customer Demos */}
      <VideoReel />

      {/* 9. Judge.me Reviews Section */}
      <div style={{ maxWidth: 'var(--page-width)', margin: '0 auto', padding: '0 16px', width: '100%' }}>
        <ReviewsSection
          reviews={SAMPLE_STORE_REVIEWS}
          rating={4.8}
          reviewCount={755}
        />
      </div>

      {/* 10. Newsletter Capture */}
      <NewsletterSection />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
