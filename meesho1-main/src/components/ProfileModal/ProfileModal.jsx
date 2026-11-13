import { useState, useEffect } from 'react';
import { RiCloseLine, RiUser3Line, RiShieldCheckLine, RiEdit2Line, RiLogoutBoxRLine } from 'react-icons/ri';
import styles from './ProfileModal.module.css';

export default function ProfileModal({ isOpen, onClose, onProfileUpdated }) {
  const [profile, setProfile] = useState(null);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  // Load from localStorage on open
  useEffect(() => {
    if (isOpen) {
      try {
        const savedPhone = localStorage.getItem('meesho_user_phone');
        const savedName = localStorage.getItem('meesho_user_name') || '';
        if (savedPhone) {
          setProfile({ phone: savedPhone, name: savedName });
          setPhone(savedPhone);
          setName(savedName);
          setIsEditing(false);
        } else {
          setProfile(null);
          setPhone('');
          setName('');
          setIsEditing(true);
        }
      } catch (err) {
        console.error('Error loading profile', err);
      }
      setError('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPhone = phone.trim();
    if (!cleanPhone || !/^\d{10}$/.test(cleanPhone)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      localStorage.setItem('meesho_user_phone', cleanPhone);
      if (name.trim()) {
        localStorage.setItem('meesho_user_name', name.trim());
      } else {
        localStorage.removeItem('meesho_user_name');
      }
      setProfile({ phone: cleanPhone, name: name.trim() });
      setIsEditing(false);
      setError('');
      if (onProfileUpdated) {
        onProfileUpdated({ phone: cleanPhone, name: name.trim() });
      }
    } catch (err) {
      console.error('Error saving profile', err);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('meesho_user_phone');
      localStorage.removeItem('meesho_user_name');
      localStorage.removeItem('meesho_delivery_address');
      setProfile(null);
      setPhone('');
      setName('');
      setIsEditing(true);
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('meesho:logout'));
      if (onProfileUpdated) {
        onProfileUpdated(null);
      }
    } catch (err) {
      console.error('Error clearing profile', err);
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label="Meesho User Profile">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{profile && !isEditing ? 'My Profile' : 'Sign In or Sign Up'}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close profile modal" id="close-profile-modal-btn">
            <RiCloseLine size={24} />
          </button>
        </div>

        {/* Content */}
        <div className={styles.body}>
          <div className={styles.avatarCircle}>
            <RiUser3Line size={32} />
          </div>

          {profile && !isEditing ? (
            <>
              <div className={styles.profileCard}>
                <h3 className={styles.profileName}>{profile.name || 'Meesho Shopper'}</h3>
                <p className={styles.profilePhone}>+91 {profile.phone}</p>
                <div className={styles.verifiedTag}>
                  <RiShieldCheckLine size={14} />
                  <span>Verified Meesho Account</span>
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button
                  type="button"
                  className={styles.outlineBtn}
                  onClick={() => setIsEditing(true)}
                  id="profile-edit-btn"
                >
                  <RiEdit2Line size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                  Change Mobile Number
                </button>
                <button
                  type="button"
                  className={styles.logoutBtn}
                  onClick={handleLogout}
                  id="profile-logout-btn"
                >
                  <RiLogoutBoxRLine size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                  Sign Out / Remove Data
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className={styles.heading}>Welcome to Meesho</h3>
              <p className={styles.subheading}>
                Enter your 10-digit mobile number to view orders, address, and profile settings.
              </p>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Mobile Number *</label>
                  <div className={styles.phoneWrap}>
                    <span className={styles.phonePrefix}>+91</span>
                    <input
                      type="tel"
                      maxLength={10}
                      autoFocus
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setPhone(val);
                        if (error) setError('');
                      }}
                      className={styles.phoneInput}
                      id="profile-phone-input"
                    />
                  </div>
                  {error && <span className={styles.errorText}>{error}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Full Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.nameInput}
                    id="profile-name-input"
                  />
                </div>

                <button type="submit" className={styles.saveBtn} id="profile-submit-btn">
                  Continue & Save
                </button>

                {profile && (
                  <button
                    type="button"
                    className={styles.outlineBtn}
                    onClick={() => setIsEditing(false)}
                    style={{ marginTop: 6 }}
                  >
                    Cancel
                  </button>
                )}

                <p className={styles.termsText}>
                  By continuing, you agree to Meesho's Terms & Conditions and Privacy Policy.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
