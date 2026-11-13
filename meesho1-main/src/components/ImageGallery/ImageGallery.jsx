import { useState, useEffect, useRef } from 'react';
import { RiShieldCheckLine, RiImageLine } from 'react-icons/ri';
import styles from './ImageGallery.module.css';

const DEFAULT_FALLBACK_IMG =
  'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/rnxze_512_62d8ece5-103a-44e6-9655-a0e262a02ed0.jpg?v=1791196776';

export default function ImageGallery({ images = [], title = 'Product' }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [failedIndices, setFailedIndices] = useState(new Set());
  const imgRef = useRef(null);

  // Safe list of images with at least 1 fallback
  const validImages =
    Array.isArray(images) && images.length > 0
      ? images.filter(Boolean)
      : [DEFAULT_FALLBACK_IMG];

  // Reset selected image when product images prop changes
  useEffect(() => {
    setSelectedIndex(0);
    setImgLoaded(false);
    setFailedIndices(new Set());
  }, [images]);

  // Current main image source with fallback
  const safeIndex = selectedIndex < validImages.length ? selectedIndex : 0;
  const currentSrc = failedIndices.has(safeIndex)
    ? DEFAULT_FALLBACK_IMG
    : (validImages[safeIndex] || DEFAULT_FALLBACK_IMG);

  // Detect immediate cache hit to prevent any skeleton flicker
  const handleImageRef = (el) => {
    imgRef.current = el;
    if (el && el.complete && el.naturalWidth > 0 && !imgLoaded) {
      setImgLoaded(true);
    }
  };

  const handleImageError = (idx) => {
    setFailedIndices((prev) => new Set(prev).add(idx));
    setImgLoaded(true);
  };

  return (
    <div className={styles.gallery} id="pdp-image-gallery">
      {/* Thumbnails Row/Column */}
      {validImages.length > 1 && (
        <div className={styles.thumbnails} role="list" aria-label="Product thumbnails">
          {validImages.map((img, i) => (
            <button
              key={`${img}-${i}`}
              type="button"
              className={`${styles.thumb} ${i === safeIndex ? styles.activeThumb : ''}`}
              onClick={() => {
                setSelectedIndex(i);
                setImgLoaded(false);
              }}
              id={`thumb-${i}`}
              role="listitem"
              aria-label={`View image ${i + 1}`}
              aria-pressed={i === safeIndex}
            >
              <img
                src={failedIndices.has(i) ? DEFAULT_FALLBACK_IMG : img}
                alt={`${title} view ${i + 1}`}
                loading="lazy"
                onError={() => handleImageError(i)}
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image Stage */}
      <div className={styles.mainImageWrap}>
        {/* Shimmer skeleton behind the image */}
        {!imgLoaded && (
          <div className={styles.loadingSkeleton}>
            <div className={styles.skeletonShimmer} />
            <RiImageLine size={28} className={styles.skeletonIcon} />
          </div>
        )}

        {/* 100% Discreet Tag */}
        <div className={styles.discreetTag}>
          <RiShieldCheckLine size={13} />
          <span>100% Original Brand</span>
        </div>

        <img
          key={currentSrc}
          ref={handleImageRef}
          src={currentSrc}
          alt={title}
          className={styles.mainImage}
          onLoad={() => setImgLoaded(true)}
          onError={() => handleImageError(safeIndex)}
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
