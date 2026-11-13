import { Link } from 'react-router-dom';
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterXLine,
  RiPinterestLine,
  RiLinkedinBoxLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiTimeLine,
  RiShieldCheckLine
} from 'react-icons/ri';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="main-footer">
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Column 1: Brand */}
            <div className={styles.brandCol}>
              <Link to="/" className={styles.logoTitle}>
                IMBesharam<span className={styles.logoDotCom}>.COM</span>
              </Link>
              <span className={styles.slogan}>Play More • Shame Less</span>
              <p className={styles.desc}>
                IMbesharam is India's First &amp; Largest Adult Toys Store, showcasing 200+ Premium Brands of Adult Toys for Men &amp; Women with over 1M+ orders delivered, 110,000+ real verified reviews, and 100% plain discreet delivery.
              </p>
              <div className={styles.socialRow}>
                <a href="https://www.instagram.com/imbesharam/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                  <RiInstagramLine size={18} />
                </a>
                <a href="https://www.facebook.com/IMbesharam/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                  <RiFacebookBoxLine size={18} />
                </a>
                <a href="https://twitter.com/imbesharam" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                  <RiTwitterXLine size={18} />
                </a>
                <a href="https://www.pinterest.it/imbesharam/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Pinterest">
                  <RiPinterestLine size={18} />
                </a>
                <a href="https://www.linkedin.com/company/imbesharam-com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <RiLinkedinBoxLine size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className={styles.colTitle}>Quick Links</h3>
              <div className={styles.linkList}>
                <Link to="/pages/about" className={styles.footerLink}>About Us</Link>
                <Link to="/blogs" className={styles.footerLink}>Sex Ed &amp; Intimacy Blog</Link>
                <Link to="/collections/all" className={styles.footerLink}>All Collections</Link>
                <Link to="/collections/vibrators" className={styles.footerLink}>Vibrators &amp; Massagers</Link>
                <Link to="/collections/dragon-condoms" className={styles.footerLink}>Dragon Condoms</Link>
                <Link to="/collections/men" className={styles.footerLink}>For Men &amp; Strokers</Link>
                <Link to="/collections/women" className={styles.footerLink}>For Women &amp; Couples</Link>
              </div>
            </div>

            {/* Column 3: Customer Support */}
            <div>
              <h3 className={styles.colTitle}>Customer Support</h3>
              <div className={styles.linkList}>
                <Link to="/pages/contact" className={styles.footerLink}>Contact &amp; Help Desk</Link>
                <Link to="/pages/contact" className={styles.footerLink}>Track My Order</Link>
                <Link to="/pages/about" className={styles.footerLink}>100% Discreet Packaging Policy</Link>
                <Link to="/pages/about" className={styles.footerLink}>Fast Shipping &amp; Delivery</Link>
                <Link to="/pages/about" className={styles.footerLink}>Returns &amp; Replacement</Link>
                <Link to="/pages/about" className={styles.footerLink}>Privacy &amp; Data Security</Link>
              </div>
            </div>

            {/* Column 4: Contact & Hours */}
            <div>
              <h3 className={styles.colTitle}>Get in Touch</h3>
              <div className={styles.contactItem}>
                <RiPhoneLine size={16} className={styles.contactIcon} />
                <span>
                  <strong>Customer Care:</strong><br />
                  <a href="tel:+912248931870" style={{ color: '#ffffff', fontWeight: 700 }}>+91 22 4893 1800</a>
                </span>
              </div>
              <div className={styles.contactItem}>
                <RiMailLine size={16} className={styles.contactIcon} />
                <span>
                  <strong>Email:</strong><br />
                  <a href="mailto:hello@imbesharam.com" style={{ color: '#ffffff' }}>hello@imbesharam.com</a>
                </span>
              </div>
              <div className={styles.contactItem}>
                <RiTimeLine size={16} className={styles.contactIcon} />
                <span>
                  <strong>Support Hours:</strong><br />
                  Mon - Sun 00:00 - 23:59 (24/7)
                </span>
              </div>
              <div className={styles.contactItem}>
                <RiMapPinLine size={16} className={styles.contactIcon} />
                <span>
                  Happy Birds Inc LLC, Connaught Place, New Delhi – 110001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div>
              © 2026 IMBesharam.com — Happy Birds Inc LLC. All rights reserved.
            </div>
            <div className={styles.paymentsRow}>
              <span className={styles.payBadge}>COD</span>
              <span className={styles.payBadge}>UPI</span>
              <span className={styles.payBadge}>Google Pay</span>
              <span className={styles.payBadge}>PhonePe</span>
              <span className={styles.payBadge}>Paytm</span>
              <span className={styles.payBadge}>NetBanking</span>
              <span className={styles.payBadge}>Visa / Master</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.disclaimerBar}>
        <div className={styles.container}>
          🔞 <strong>Age Restricted Content (18+ Only):</strong> All adult novelty items, wellness accessories and pleasure devices sold on IMBesharam are intended strictly for adults aged 18 years and above. All orders are packed in 100% plain, unmarked, tamper-evident brown boxes with no indication of contents or store branding.
        </div>
      </div>
    </footer>
  );
}
