import { useState, useEffect } from 'react';
import { RiCloseLine, RiMapPinLine, RiHome4Line, RiBuilding4Line, RiCheckLine } from 'react-icons/ri';
import styles from './DeliveryAddressModal.module.css';

export default function DeliveryAddressModal({ isOpen, onClose, onSaveAddress }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    houseNo: '',
    roadArea: '',
    city: '',
    state: '',
    addressType: 'Home'
  });

  const [errors, setErrors] = useState({});

  // Pre-fill existing address if stored
  useEffect(() => {
    if (isOpen) {
      try {
        const saved = localStorage.getItem('meesho_delivery_address');
        if (saved) {
          const parsed = JSON.parse(saved);
          setFormData(parsed);
        }
      } catch (err) {
        console.error('Error loading address', err);
      }
      setErrors({});
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Valid 10-digit mobile number required';
    }
    if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = 'Valid 6-digit pincode required';
    }
    if (!formData.houseNo.trim()) newErrors.houseNo = 'House / Flat / Building no. is required';
    if (!formData.roadArea.trim()) newErrors.roadArea = 'Area / Colony / Street is required';
    if (!formData.city.trim()) newErrors.city = 'City / District is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      localStorage.setItem('meesho_delivery_address', JSON.stringify(formData));
    } catch (err) {
      console.error('Error saving address', err);
    }

    if (onSaveAddress) {
      onSaveAddress(formData);
    }
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label="Enter Delivery Address">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <RiMapPinLine size={22} className={styles.headerIcon} />
            <h2 className={styles.title}>Delivery Address</h2>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close address modal" id="close-address-modal-btn">
            <RiCloseLine size={24} />
          </button>
        </div>

        {/* Body */}
        <form className={styles.body} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGrid}>
            <div className={styles.twoCol}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  Contact Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter receiver's name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  id="address-name-input"
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  Mobile Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  placeholder="10-digit mobile"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  id="address-phone-input"
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>
            </div>

            <div className={styles.twoCol}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  Pincode <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  maxLength={6}
                  placeholder="6-digit pincode (e.g. 560001)"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.pincode ? styles.inputError : ''}`}
                  id="address-pincode-input"
                />
                {errors.pincode && <span className={styles.errorText}>{errors.pincode}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  City / District <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Bengaluru, Mumbai"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
                  id="address-city-input"
                />
                {errors.city && <span className={styles.errorText}>{errors.city}</span>}
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                House / Flat / Building No. <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="houseNo"
                placeholder="e.g. Flat 304, Green Heights"
                value={formData.houseNo}
                onChange={handleChange}
                className={`${styles.input} ${errors.houseNo ? styles.inputError : ''}`}
                id="address-house-input"
              />
              {errors.houseNo && <span className={styles.errorText}>{errors.houseNo}</span>}
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Road / Area / Colony / Landmark <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="roadArea"
                placeholder="e.g. MG Road, Near Metro Station"
                value={formData.roadArea}
                onChange={handleChange}
                className={`${styles.input} ${errors.roadArea ? styles.inputError : ''}`}
                id="address-road-input"
              />
              {errors.roadArea && <span className={styles.errorText}>{errors.roadArea}</span>}
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                State <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="state"
                placeholder="e.g. Karnataka, Maharashtra, Delhi"
                value={formData.state}
                onChange={handleChange}
                className={`${styles.input} ${errors.state ? styles.inputError : ''}`}
                id="address-state-input"
              />
              {errors.state && <span className={styles.errorText}>{errors.state}</span>}
            </div>

            {/* Address Type */}
            <div className={styles.typeSection}>
              <label className={styles.label}>Address Type</label>
              <div className={styles.typeRow}>
                <button
                  type="button"
                  className={`${styles.typeBtn} ${formData.addressType === 'Home' ? styles.typeBtnActive : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, addressType: 'Home' }))}
                >
                  <RiHome4Line size={16} />
                  <span>Home (All day)</span>
                </button>
                <button
                  type="button"
                  className={`${styles.typeBtn} ${formData.addressType === 'Work' ? styles.typeBtnActive : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, addressType: 'Work' }))}
                >
                  <RiBuilding4Line size={16} />
                  <span>Work (10 AM - 5 PM)</span>
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} id="save-address-btn">
            <RiCheckLine size={18} />
            <span>Save & Deliver to this Address</span>
          </button>
        </form>
      </div>
    </div>
  );
}
