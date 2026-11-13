import { useState, useEffect } from 'react';
import {
  RiFilterLine,
  RiCloseLine,
  RiArrowDownSLine,
  RiArrowUpDownLine,
  RiCheckLine
} from 'react-icons/ri';
import styles from './Filters.module.css';

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'discount', label: 'Discount' },
];

const PRICE_RANGES = [
  { value: '0-300', label: 'Under ₹300' },
  { value: '300-600', label: '₹300 – ₹600' },
  { value: '600-1000', label: '₹600 – ₹1000' },
  { value: '1000-2000', label: '₹1000 – ₹2000' },
  { value: '2000+', label: 'Above ₹2000' },
];

const RATING_OPTIONS = [
  { value: 4, label: '4★ & above' },
  { value: 3, label: '3★ & above' },
  { value: 0, label: 'All ratings' },
];

export default function Filters({ filters, onFilterChange, totalResults }) {
  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    price: true,
    rating: true,
  });

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Lock body scroll when mobile filter drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsMobileDrawerOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileDrawerOpen]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleClearAll = () => {
    onFilterChange({ sort: 'relevance', priceRange: '', minRating: 0 });
  };

  const hasActiveFilters =
    filters.sort !== 'relevance' || Boolean(filters.priceRange) || filters.minRating > 0;

  const activeCount =
    (filters.sort !== 'relevance' ? 1 : 0) +
    (filters.priceRange ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0);

  // Modular helper to render options with unique prefixes to avoid DOM input collisions
  const renderFilterSections = (scopePrefix) => (
    <div className={styles.sectionsContainer}>
      {/* 1. Sort Options */}
      <div className={styles.section}>
        <button
          type="button"
          className={styles.sectionHeader}
          onClick={() => toggleSection('sort')}
          aria-expanded={expandedSections.sort}
        >
          <span className={styles.sectionTitle}>Sort By</span>
          <RiArrowDownSLine
            size={18}
            className={expandedSections.sort ? styles.rotated : ''}
          />
        </button>
        {expandedSections.sort && (
          <div className={styles.sectionBody}>
            {SORT_OPTIONS.map((opt) => {
              const isSelected = filters.sort === opt.value;
              return (
                <div
                  key={opt.value}
                  className={`${styles.optionRow} ${isSelected ? styles.optionRowActive : ''}`}
                  onClick={() => onFilterChange({ ...filters, sort: opt.value })}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                >
                  <span className={styles.customRadio}>
                    <span className={styles.customRadioDot} />
                  </span>
                  <span className={styles.optionLabel}>{opt.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <hr className={styles.divider} />

      {/* 2. Price Range */}
      <div className={styles.section}>
        <button
          type="button"
          className={styles.sectionHeader}
          onClick={() => toggleSection('price')}
          aria-expanded={expandedSections.price}
        >
          <span className={styles.sectionTitle}>Price Range</span>
          <RiArrowDownSLine
            size={18}
            className={expandedSections.price ? styles.rotated : ''}
          />
        </button>
        {expandedSections.price && (
          <div className={styles.sectionBody}>
            {/* All Prices Option */}
            <div
              className={`${styles.optionRow} ${!filters.priceRange ? styles.optionRowActive : ''}`}
              onClick={() => onFilterChange({ ...filters, priceRange: '' })}
              role="radio"
              aria-checked={!filters.priceRange}
              tabIndex={0}
            >
              <span className={styles.customRadio}>
                <span className={styles.customRadioDot} />
              </span>
              <span className={styles.optionLabel}>All Prices</span>
            </div>

            {PRICE_RANGES.map((range) => {
              const isSelected = filters.priceRange === range.value;
              return (
                <div
                  key={range.value}
                  className={`${styles.optionRow} ${isSelected ? styles.optionRowActive : ''}`}
                  onClick={() => onFilterChange({ ...filters, priceRange: range.value })}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                >
                  <span className={styles.customRadio}>
                    <span className={styles.customRadioDot} />
                  </span>
                  <span className={styles.optionLabel}>{range.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <hr className={styles.divider} />

      {/* 3. Rating */}
      <div className={styles.section}>
        <button
          type="button"
          className={styles.sectionHeader}
          onClick={() => toggleSection('rating')}
          aria-expanded={expandedSections.rating}
        >
          <span className={styles.sectionTitle}>Customer Rating</span>
          <RiArrowDownSLine
            size={18}
            className={expandedSections.rating ? styles.rotated : ''}
          />
        </button>
        {expandedSections.rating && (
          <div className={styles.sectionBody}>
            {RATING_OPTIONS.map((opt) => {
              const isSelected = filters.minRating === opt.value;
              return (
                <div
                  key={opt.value}
                  className={`${styles.optionRow} ${isSelected ? styles.optionRowActive : ''}`}
                  onClick={() => onFilterChange({ ...filters, minRating: opt.value })}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                >
                  <span className={styles.customRadio}>
                    <span className={styles.customRadioDot} />
                  </span>
                  <span className={styles.optionLabel}>{opt.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Trigger Bar above products */}
      <div className={styles.mobileFilterBar}>
        <div className={styles.mobileLeftActions}>
          <button
            type="button"
            className={styles.mobileFilterBtn}
            onClick={() => setIsMobileDrawerOpen(true)}
            id="mobile-filters-trigger"
            aria-label="Open filter options"
          >
            <RiFilterLine size={15} />
            <span>Filters</span>
            {activeCount > 0 && (
              <span className={styles.mobileBadge}>{activeCount}</span>
            )}
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              className={styles.mobileClearBtn}
              onClick={handleClearAll}
              id="mobile-filters-clear"
              aria-label="Clear all applied filters"
            >
              <RiCloseLine size={13} />
              <span>Clear</span>
            </button>
          )}
        </div>

        <div className={styles.mobileSortQuickPill}>
          <RiArrowUpDownLine size={13} />
          <select
            value={filters.sort}
            onChange={(e) => onFilterChange({ ...filters, sort: e.target.value })}
            className={styles.mobileSortSelect}
            aria-label="Sort products"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Active Filter Chips */}
      {hasActiveFilters && (
        <div className={styles.mobileActiveChips}>
          {filters.priceRange && (
            <span className={styles.activeChip}>
              {PRICE_RANGES.find((p) => p.value === filters.priceRange)?.label || filters.priceRange}
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, priceRange: '' })}
                className={styles.activeChipRemove}
                aria-label="Remove price filter"
              >
                <RiCloseLine size={12} />
              </button>
            </span>
          )}
          {filters.minRating > 0 && (
            <span className={styles.activeChip}>
              {filters.minRating}★ & above
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, minRating: 0 })}
                className={styles.activeChipRemove}
                aria-label="Remove rating filter"
              >
                <RiCloseLine size={12} />
              </button>
            </span>
          )}
          {filters.sort !== 'relevance' && (
            <span className={styles.activeChip}>
              {SORT_OPTIONS.find((s) => s.value === filters.sort)?.label}
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, sort: 'relevance' })}
                className={styles.activeChipRemove}
                aria-label="Reset sort"
              >
                <RiCloseLine size={12} />
              </button>
            </span>
          )}
        </div>
      )}

      {/* Desktop Sticky Sidebar */}
      <aside
        className={styles.sidebar}
        id="filters-sidebar"
        aria-label="Product filters"
      >
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <RiFilterLine size={18} />
            <h2 className={styles.title}>Filters</h2>
            {totalResults !== undefined && (
              <span className={styles.resultCount}>{totalResults}</span>
            )}
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              className={styles.clearAll}
              onClick={handleClearAll}
              id="filters-clear-all"
            >
              <RiCloseLine size={14} /> Clear All
            </button>
          )}
        </div>
        {renderFilterSections('desktop')}
      </aside>

      {/* Mobile Modal Drawer with High Z-Index & Clean Controls */}
      {isMobileDrawerOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMobileDrawerOpen(false)}
        >
          <div
            className={styles.mobileDrawer}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Filter products"
          >
            {/* Drawer Handle */}
            <div className={styles.drawerHandleBar}>
              <div className={styles.drawerHandle} />
            </div>

            {/* Drawer Header */}
            <div className={styles.drawerHeader}>
              <div className={styles.headerLeft}>
                <RiFilterLine size={18} />
                <h2 className={styles.title}>Filter Products</h2>
                {activeCount > 0 && (
                  <span className={styles.activeCountBadge}>{activeCount} active</span>
                )}
              </div>
              <div className={styles.drawerHeaderRight}>
                {hasActiveFilters && (
                  <button
                    type="button"
                    className={styles.clearAll}
                    onClick={handleClearAll}
                  >
                    Reset
                  </button>
                )}
                <button
                  type="button"
                  className={styles.mobileCloseBtn}
                  onClick={() => setIsMobileDrawerOpen(false)}
                  aria-label="Close filters"
                >
                  <RiCloseLine size={24} />
                </button>
              </div>
            </div>

            {/* Scrollable Filter Options */}
            <div className={styles.drawerScrollArea}>
              {renderFilterSections('mobile')}
            </div>

            {/* Sticky Bottom Apply Button */}
            <div className={styles.mobileApplySection}>
              <button
                type="button"
                className={styles.applyBtn}
                onClick={() => setIsMobileDrawerOpen(false)}
              >
                <RiCheckLine size={18} />
                <span>Apply Filters {totalResults !== undefined ? `(${totalResults} items)` : ''}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
