import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightLine, RiBookOpenLine } from 'react-icons/ri';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import styles from './BlogPage.module.css';

const ARTICLES = [
  {
    id: 1,
    title: 'Beginner Guide to Choosing Your First Rabbit Vibrator in India',
    date: '16 October 2026 • Sex Ed & Wellness',
    image: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/rnxze_512.jpg?v=1791196780',
    excerpt: 'Dual-stimulation, body-safe medical silicone, and quiet motors. Everything you need to know before finding your perfect companion.'
  },
  {
    id: 2,
    title: 'Everything You Need to Know About Dragon Condoms & Textured Sleeves',
    date: '10 October 2026 • Intimacy Tips',
    image: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/dragon0_200x200_da524504-f374-494d-9bde-d8ef18790fa6.jpg?v=1791196766',
    excerpt: 'How beaded and studded silicone condoms enhance stamina, prolong pleasure, and give partners an intense heightened experience.'
  },
  {
    id: 3,
    title: 'How IMBesharam Ensures 100% Discreet Packaging for Every Order',
    date: '04 October 2026 • Privacy & Safety',
    image: 'https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_3c3c5986-8d3f-4522-8a95-29bd25ef965d.webp?v=1791196772',
    excerpt: 'Plain brown boxes, no product logos, confidential billing descriptors, and zero awkward delivery moments across 25,000+ Indian pincodes.'
  }
];

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Sex Education & Intimate Wellness Blog | IMBesharam India';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.tag}>
              <RiBookOpenLine size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              Education &amp; Guides
            </span>
            <h1 className={styles.title}>Play More • Shame Less Blog</h1>
            <p className={styles.subtitle}>
              Unfiltered sex education, intimate wellness guides, and expert advice to help you explore pleasure safely and confidently.
            </p>
          </div>

          <div className={styles.grid}>
            {ARTICLES.map((art) => (
              <article key={art.id} className={styles.card}>
                <img src={art.image} alt={art.title} className={styles.img} />
                <div className={styles.body}>
                  <span className={styles.cardDate}>{art.date}</span>
                  <h2 className={styles.cardTitle}>{art.title}</h2>
                  <p className={styles.cardExcerpt}>{art.excerpt}</p>
                  <Link to="/" className={styles.readMore}>
                    Read Full Guide <RiArrowRightLine size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
