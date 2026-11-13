import { useState } from 'react';
import { RiMapPinLine, RiCheckLine } from 'react-icons/ri';
import styles from './PincodeChecker.module.css';

function getDeliveryDate() {
  const date = new Date();
  date.setDate(date.getDate() + Math.floor(Math.random() * 3) + 5);
  return date.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
}

export default function PincodeChecker() {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode)) {
      setError('Please enter a valid 6-digit pincode');
      setResult(null);
      return;
    }
    setError('');
    setResult({
      available: true,
      deliveryDate: getDeliveryDate(),
      pincode,
    });
  };

  return (
    <div className={styles.wrap} id="pincode-checker">
      <h4 className={styles.title}>
        <RiMapPinLine size={18} /> Check Delivery
      </h4>
      <form className={styles.form} onSubmit={handleCheck}>
        <input
          type="text"
          id="pincode-input"
          className={styles.input}
          placeholder="Enter 6-digit pincode"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value.replace(/\D/g, '').slice(0, 6));
            setResult(null);
            setError('');
          }}
          maxLength={6}
          aria-label="Enter pincode"
        />
        <button
          type="submit"
          className={styles.checkBtn}
          id="pincode-check-btn"
          disabled={pincode.length !== 6}
        >
          Check
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {result && (
        <div className={styles.result}>
          <div className={styles.resultIcon}><RiCheckLine size={16} /></div>
          <div className={styles.resultText}>
            <strong>Delivery available to {result.pincode}</strong>
            <span>Expected delivery by <strong>{result.deliveryDate}</strong></span>
            <span className={styles.freeTag}>🚚 FREE Delivery</span>
          </div>
        </div>
      )}
    </div>
  );
}
