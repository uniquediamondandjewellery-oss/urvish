import { useEffect } from 'react';
import { RiShieldCheckLine, RiTruckLine, RiHeartPulseLine } from 'react-icons/ri';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | India\'s #1 Adult Toys Store | IMBesharam';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.heroCard}>
            <span className={styles.tag}>Pioneering Adult Wellness In India</span>
            <h1 className={styles.title}>Play More • Shame Less</h1>
            <p className={styles.lead}>
              Founded in 2013, <strong>IMbesharam.com</strong> is India's first, largest, and most trusted adult pleasure store. We have delivered over 1 Million discreet orders across 25,000+ pincodes in India with 110,000+ real verified customer reviews.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNum}>1M+</div>
                <div className={styles.statLabel}>Orders Delivered</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNum}>110K+</div>
                <div className={styles.statLabel}>5-Star Verified Reviews</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNum}>200+</div>
                <div className={styles.statLabel}>Global Luxury Brands</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <RiShieldCheckLine size={24} color="var(--color-primary)" />
              100% Plain Discreet Packaging Guarantee
            </h2>
            <p className={styles.text}>
              We understand privacy is sacred. Every package dispatched from our central hub is shipped in a generic, unmarked brown cardboard box with tamper-evident security tape.
            </p>
            <p className={styles.text}>
              There is zero mention of adult toys, novelties, or the word "Besharam" on the outer shipping label or your bank statement descriptor. You can confidently receive your order at home or office.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <RiHeartPulseLine size={24} color="var(--color-primary)" />
              100% Body-Safe &amp; Authentic
            </h2>
            <p className={styles.text}>
              Your health and safety come first. We work directly with certified global manufacturers. All silicone products are 100% medical grade, phthalate-free, non-porous, hypoallergenic, and compliant with international safety standards (CE, RoHS, FDA approved materials).
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <RiTruckLine size={24} color="var(--color-primary)" />
              Pan-India Express Dispatch &amp; COD
            </h2>
            <p className={styles.text}>
              We offer Cash On Delivery, UPI, NetBanking, and credit/debit card payments with confidential billing. All shipments include real-time SMS tracking sent discreetly to your mobile phone.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
