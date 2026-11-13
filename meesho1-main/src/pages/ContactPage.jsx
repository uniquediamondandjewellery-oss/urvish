import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiTimeLine,
  RiSendPlaneFill
} from 'react-icons/ri';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  useEffect(() => {
    document.title = 'Contact & Customer Support | IMBesharam India';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in your name, phone, and message.');
      return;
    }
    toast.success('Thank you! Our discreet customer support team will reply within 2 hours.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.tag}>We're Here For You</span>
            <h1 className={styles.title}>Confidential Customer Support</h1>
          </div>

          <div className={styles.grid}>
            {/* Contact Details Left */}
            <div className={styles.contactInfoCard}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <RiPhoneLine size={20} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Direct Phone Support</div>
                  <div className={styles.infoVal}>
                    <a href="tel:+912248931870" style={{ color: 'var(--color-primary)' }}>
                      +91 22 4893 1800
                    </a>
                  </div>
                </div>
              </div>


              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <RiMailLine size={20} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Email Helpdesk</div>
                  <div className={styles.infoVal}>hello@imbesharam.com</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <RiTimeLine size={20} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Operating Hours</div>
                  <div className={styles.infoVal}>Monday - Sunday, 24/7 Response</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <RiMapPinLine size={20} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Registered Office</div>
                  <div className={styles.infoVal}>
                    Happy Birds Inc LLC, Block L, Connaught Place, New Delhi – 110001
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Right */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send a Confidential Message</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number (For discreet SMS response)</label>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address (Optional)</label>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Message / Order Query</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="How can we assist you today? (e.g., track order, toy sizing, discreet packaging questions)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <RiSendPlaneFill size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
