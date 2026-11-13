import { RiAlertLine, RiCloseLine } from 'react-icons/ri';
import styles from './AdultWarningModal.module.css';

export default function AdultWarningModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="adult-modal-title">
      <div className={styles.card}>
        <div className={styles.warningIcon}>
          <span>🔞</span>
        </div>
        <h2 className={styles.title} id="adult-modal-title">Adult Content Warning</h2>
        <p className={styles.subtitle}>18+ Only - Strictly Restricted</p>
        <p className={styles.body}>
          This section contains adult content intended <strong>only for individuals aged 18 years or older</strong>.
          By continuing, you confirm that you are of legal age and consent to viewing such content.
        </p>
        <div className={styles.points}>
          <p>⚠️ Content is for adults only (18+)</p>
          <p>📦 All orders delivered in 100% discreet packaging</p>
          <p>🔒 Your privacy is fully protected</p>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.btnConfirm}
            onClick={onConfirm}
            id="adult-modal-confirm"
          >
            ✅ I am 18+ - Continue
          </button>
          <button
            className={styles.btnCancel}
            onClick={onCancel}
            id="adult-modal-cancel"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
