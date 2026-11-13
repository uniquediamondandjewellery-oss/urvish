import { RiStarFill, RiStarHalfLine, RiThumbUpLine, RiShieldCheckLine } from 'react-icons/ri';
import styles from './ReviewsSection.module.css';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<RiStarFill key={i} className={styles.starFilled} />);
    else if (rating >= i - 0.5) stars.push(<RiStarHalfLine key={i} className={styles.starHalf} />);
    else stars.push(<RiStarFill key={i} className={styles.starEmpty} />);
  }
  return <div className={styles.stars}>{stars}</div>;
}

function RatingBar({ stars, total, count }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className={styles.ratingBarRow}>
      <span className={styles.ratingBarLabel}>{stars}★</span>
      <div className={styles.ratingBarTrack}>
        <div className={styles.ratingBarFill} style={{ width: `${pct}%` }} />
      </div>
      <span className={styles.ratingBarCount}>{count}</span>
    </div>
  );
}

export default function ReviewsSection({ reviews, rating = 4.8, reviewCount = 755 }) {
  if (!reviews || reviews.length === 0) return null;

  const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    dist[Math.round(r.rating)] = (dist[Math.round(r.rating)] || 0) + 1;
  });

  return (
    <section className={styles.section} id="reviews-section" aria-label="Customer Reviews">
      <div className={styles.heading}>
        <span>Judge.me Verified Customer Reviews</span>
        <span style={{ fontSize: 13, color: 'var(--color-primary)', fontWeight: 600 }}>
          110,000+ Real Reviews
        </span>
      </div>

      <div className={styles.summary}>
        <div className={styles.avgRating}>
          <span className={styles.avgNumber}>{rating}</span>
          <StarRating rating={rating} />
          <span className={styles.totalCount}>{reviewCount.toLocaleString()} Verified Ratings</span>
        </div>
        <div className={styles.distribution}>
          {[5, 4, 3, 2, 1].map((s) => (
            <RatingBar key={s} stars={s} total={reviews.length} count={dist[s] || 0} />
          ))}
        </div>
      </div>

      <div className={styles.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard} id={`review-${review.id}`}>
            <div className={styles.reviewHeader}>
              <div className={styles.avatar}>
                {review.user.charAt(0).toUpperCase()}
              </div>
              <div className={styles.reviewMeta}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <strong className={styles.reviewer}>{review.user}</strong>
                  <span className={styles.verifiedBadge}>
                    <RiShieldCheckLine size={12} /> Verified Buyer
                  </span>
                </div>
                <div className={styles.reviewRating}>
                  <span className={styles.ratingBadge}>
                    <RiStarFill size={11} /> {review.rating}.0
                  </span>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
              </div>
            </div>
            <p className={styles.reviewComment}>{review.comment}</p>
            <div className={styles.reviewFooter}>
              <button type="button" className={styles.helpfulBtn} aria-label="Mark helpful">
                <RiThumbUpLine size={13} /> Helpful ({review.helpful || 12})
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
