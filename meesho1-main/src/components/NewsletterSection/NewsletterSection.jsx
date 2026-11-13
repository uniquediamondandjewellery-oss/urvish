import { useState } from 'react';
import toast from 'react-hot-toast';
import { RiMailSendLine } from 'react-icons/ri';
import styles from './NewsletterSection.module.css';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Welcome to the Besharam Club! Check your inbox for 10% off coupon code.');
    setEmail('');
  };

  return (
    <section className={styles.section} aria-label="Join Club">
      <div className={styles.container}>
        <span className={styles.tag}>Exclusive Perks</span>
        <h2 className={styles.title}>Join the Besharam Club &amp; Get 10% Off</h2>
        <p className={styles.desc}>
          Get secret flash deal invites, discreet VIP discounts, and intimacy wellness guides delivered straight to your inbox.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your private email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email Address"
          />
          <button type="submit" className={styles.submitBtn}>
            <RiMailSendLine size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
            Claim 10% Off
          </button>
        </form>

        <span className={styles.note}>
          🔒 100% Privacy Guaranteed. We respect your privacy &amp; never spam.
        </span>
      </div>
    </section>
  );
}
