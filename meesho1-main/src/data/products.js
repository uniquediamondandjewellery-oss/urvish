import saree1 from '../assets/products/saree1.jpg';
import kurti1 from '../assets/products/kurti1.jpg';
import menShirt from '../assets/products/men-shirt.jpg';
import lehenga from '../assets/products/lehenga.jpg';
import kidsDress from '../assets/products/kids-dress.jpg';
import beauty from '../assets/products/beauty.jpg';
import homeDecor from '../assets/products/home-decor.jpg';
import westernDress from '../assets/products/western-dress.jpg';

const NOW = Date.now();
const H = 3600000;

const reviews = {
  r1: [
    { id: 1, user: 'Priya S.', rating: 5, comment: 'Absolutely love this! Quality is amazing, exactly as shown in photos. Fast delivery too!', date: '12 Oct 2026', helpful: 42 },
    { id: 2, user: 'Meena K.', rating: 4, comment: 'Good product, nice fabric. Slightly smaller than expected but overall satisfied with the purchase.', date: '08 Oct 2026', helpful: 28 },
    { id: 3, user: 'Sunita R.', rating: 5, comment: 'Best purchase on Meesho! My family loved it. Will definitely buy again. Recommended!', date: '01 Oct 2026', helpful: 61 },
    { id: 4, user: 'Anjali M.', rating: 4, comment: 'Very pretty design. The color is vibrant and material is comfortable. Worth every rupee!', date: '25 Sep 2026', helpful: 19 },
    { id: 5, user: 'Kavitha T.', rating: 3, comment: 'Average quality, but the design is nice. Would have preferred better stitching at this price point.', date: '20 Sep 2026', helpful: 8 },
  ],
  r2: [
    { id: 1, user: 'Rahul G.', rating: 5, comment: 'Superb product! Wore it at a wedding and got so many compliments. Very impressed with the quality.', date: '14 Oct 2026', helpful: 55 },
    { id: 2, user: 'Deepak V.', rating: 4, comment: 'Good fitting. Material is decent for the price. Shipping was quick. Happy with this purchase.', date: '10 Oct 2026', helpful: 33 },
    { id: 3, user: 'Arjun N.', rating: 5, comment: 'Exactly as described! Great value for money. The seller is trustworthy, packaging was good too.', date: '05 Oct 2026', helpful: 47 },
    { id: 4, user: 'Vikram P.', rating: 3, comment: 'Okay product. Color is slightly different from the photo but material quality is good.', date: '28 Sep 2026', helpful: 12 },
    { id: 5, user: 'Suresh L.', rating: 4, comment: 'Nice design and comfortable wear. Would order more from this seller. Fast delivery!', date: '22 Sep 2026', helpful: 26 },
  ],
  r3: [
    { id: 1, user: 'Nisha P.', rating: 5, comment: 'Love love love it! Perfect for festivals. The fabric is so soft and the embroidery is stunning.', date: '13 Oct 2026', helpful: 72 },
    { id: 2, user: 'Ritu A.', rating: 4, comment: 'Beautiful piece! Great for gifting too. My mother was very happy. Will order again soon.', date: '09 Oct 2026', helpful: 38 },
    { id: 3, user: 'Pooja B.', rating: 5, comment: 'Exceeded expectations! The quality is much better than I thought at this price. Highly recommended!', date: '03 Oct 2026', helpful: 81 },
    { id: 4, user: 'Geeta S.', rating: 4, comment: 'Pretty design. Easy to wear. The seller responded quickly when I had a query. Good experience.', date: '27 Sep 2026', helpful: 22 },
    { id: 5, user: 'Lalita D.', rating: 5, comment: 'Wow! Mind-blowing quality at this price. Highly recommend to all. Bought 2 more for sisters!', date: '18 Sep 2026', helpful: 64 },
  ],
  r4: [
    { id: 1, user: 'Amar K.', rating: 4, comment: 'Good product overall. Fits well and looks stylish. Delivery was on time. Satisfied.', date: '11 Oct 2026', helpful: 29 },
    { id: 2, user: 'Rajan M.', rating: 5, comment: 'Excellent quality! Much better than expected. The detailing is very fine. Great purchase!', date: '07 Oct 2026', helpful: 45 },
    { id: 3, user: 'Dinesh C.', rating: 3, comment: 'Decent product for casual use. Nothing extraordinary but serves the purpose well.', date: '02 Oct 2026', helpful: 15 },
    { id: 4, user: 'Mohan P.', rating: 4, comment: 'Comfortable and stylish. Good value for money. Kids absolutely love it! Fast delivery.', date: '26 Sep 2026', helpful: 31 },
    { id: 5, user: 'Harish T.', rating: 5, comment: 'Amazing product! Bought this as gift, receiver was very happy. Will definitely order again.', date: '19 Sep 2026', helpful: 57 },
  ],
  r5: [
    { id: 1, user: 'Smita J.', rating: 5, comment: 'Brilliant! Worth every paisa. I was skeptical at first but the quality really impressed me.', date: '15 Oct 2026', helpful: 68 },
    { id: 2, user: 'Varsha N.', rating: 4, comment: 'Nice product. Good packaging. The material is comfortable and easy to maintain. Happy buyer!', date: '11 Oct 2026', helpful: 41 },
    { id: 3, user: 'Madhuri S.', rating: 5, comment: 'Perfect! Just as shown in picture. My go-to shop now. Very reliable seller and fast delivery.', date: '06 Oct 2026', helpful: 59 },
    { id: 4, user: 'Usha R.', rating: 3, comment: 'Product is okay. Stitching could be better but design is nice. Acceptable for the price.', date: '01 Oct 2026', helpful: 11 },
    { id: 5, user: 'Rekha G.', rating: 4, comment: 'Good quality product. Delivery was fast and packaging was secure. Would recommend to friends.', date: '24 Sep 2026', helpful: 35 },
  ],
  rAdult: [
    { id: 1, user: 'Verified Buyer', rating: 5, comment: '100% discreet packaging, arrived in a plain brown box without any product name or label. Works amazingly well, whisper quiet and premium silicone feel!', date: '14 Oct 2026', helpful: 94 },
    { id: 2, user: 'Customer A.', rating: 5, comment: 'Exceeded all expectations! Build quality is top tier, battery lasts long and multiple modes are incredible. Fast shipping too.', date: '10 Oct 2026', helpful: 62 },
    { id: 3, user: 'Private Shopper', rating: 4, comment: 'Very happy with the discreet delivery and the product quality. Smooth texture, waterproof, and super easy to clean.', date: '04 Oct 2026', helpful: 48 },
    { id: 4, user: 'K. R.', rating: 5, comment: 'Must have! Bought for couples play and we both love it. Zero noise disturbance and completely body-safe material.', date: '29 Sep 2026', helpful: 83 },
    { id: 5, user: 'Anonymous', rating: 5, comment: 'Best purchase ever. Packaging was totally anonymous, no one could guess what was inside. 10/10 recommendation!', date: '21 Sep 2026', helpful: 77 },
  ],
};

export const products = [
  // =========================================================================
  // 18+ ADULT TOYS PRODUCTS
  // ORDER: ALL STROKERS FIRST (20 ITEMS), REMAINING PRODUCTS NEXT (28 ITEMS)
  // ZERO ADJACENT IDENTICAL ITEMS
  // =========================================================================
  {
    "id": 901,
    "shopifyId": 9376676479194,
    "handle": "3-in-1-joly-x",
    "title": "Dragon Thrusted 3-in-1 Stroker Cup",
    "name": "dragon ≡ƒÉ▓Thrusted",
    "shortName": "Dragon Thrusted 3-in-1 Stroker Cup",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 269,
    "sellPrice": "₹269.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.6,
    "ratingCount": 1450,
    "reviewCount": 320,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676479194_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676479194_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676479194_3.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 923,
    "shopifyId": 8887253958793,
    "handle": "hygienic-breathable-vagina-personal-care-alyt2",
    "title": "Realistic Vagina Stroker Sleeve for Men (Self-Lubricating)",
    "name": "Realistic Vagina Stroker Sleeve for Men",
    "shortName": "Realistic Vagina Stroker Sleeve for Men",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Intimate Wellness",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 1899,
    "originalPrice": 1899,
    "mrpPrice": "₹1,899.00",
    "discount": 84,
    "discountPercentage": 84,
    "offPercent": "84% off",
    "rating": 4.5,
    "ratingCount": 850,
    "reviewCount": 180,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Intimate Wellness",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a1_0f43e309-3a47-449d-9b7a-b046b7460500.jpg?v=1791196763",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a2.webp?v=1791196762",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a3.webp?v=1791196762",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a4.webp?v=1791196762",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a5.webp?v=1791196762",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a6.webp?v=1791196762"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Simply add water to activate the ground-breaking, self-lubricating technology and instantly make her pussy wet",
      "The self-lubrication lasts for up to 10 uses",
      "After that, just add your own lube for endless fun",
      "Inside, the tight and textured sleeve caresses and massages your cock as you stroke back and forth"
    ],
    "details": [
      "Simply add water to activate the ground-breaking, self-lubricating technology and instantly make her pussy wet",
      "The self-lubrication lasts for up to 10 uses",
      "After that, just add your own lube for endless fun",
      "Inside, the tight and textured sleeve caresses and massages your cock as you stroke back and forth"
    ],
    "description": "Description • Realistic vagina masturbator with self-lubricating technology • Instantly make her wet by adding a splash of water • Tight, textured tunnel caresses and massages your cock Full Description Looking and feeling like a real vagina, the CyberSkin H20 Vulcan Self-Lubricating Realistic Masturbator proves that wetter is better. Simply add water to activate the ground-breaking, self-lubricating technology and instantly make her pussy wet. The self-lubrication lasts for up to 10 uses. After that, just add your own lube for endless fun. Inside, the tight and textured sleeve caresses and massages your cock as you stroke back and forth. The sleeve is open-ended and removable for a quick and easy clean-up, and even includes a waterproof hang cord for storage. Colour Flesh Material TPR/TPE Features Water activated, no lube required, remarkably life like, easy to clean, tight & textured inner sleeve, hang cord for easy storage Internal Length 2.45 Inches Total Length 6 Inches Width 2.45 Inches Waterproof? Yes Fully Water Proof",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 902,
    "shopifyId": 9376676446426,
    "handle": "blow-boom-joly-ultra-soft-automatic",
    "title": "Dragon Thrusting Auto Soft Cup",
    "name": "dragon ≡ƒÉ▓Thrusting",
    "shortName": "Dragon Thrusting Auto Soft Cup",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 279,
    "sellPrice": "₹279.00",
    "mrp": 2599,
    "originalPrice": 2599,
    "mrpPrice": "₹2,599.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.7,
    "ratingCount": 1767,
    "reviewCount": 399,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Automatic Thrust",
    "tags": [
      "Automatic Thrust",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676446426_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676446426_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676446426_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676446426_4.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676446426_5.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676446426_6.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 903,
    "shopifyId": 9376676348122,
    "handle": "cruizr-rotating-masturbator-fm-064",
    "title": "Dragon Lotus 360┬░ Rotating Stroker",
    "name": "dragon ≡ƒÉ▓Lotus",
    "shortName": "Dragon Lotus 360┬░ Rotating Stroker",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 289,
    "sellPrice": "₹289.00",
    "mrp": 2699,
    "originalPrice": 2699,
    "mrpPrice": "₹2,699.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.8,
    "ratingCount": 2084,
    "reviewCount": 478,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "360┬░ Rotation",
    "tags": [
      "360┬░ Rotation",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676348122_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676348122_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676348122_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676348122_4.jpg"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 905,
    "shopifyId": 9376676282586,
    "handle": "apex-joly-machine",
    "title": "Dragon MEN Apex Thrusting Machine",
    "name": "dragon ≡ƒÉ▓MEN",
    "shortName": "Dragon MEN Apex Thrusting Machine",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 259,
    "sellPrice": "₹259.00",
    "mrp": 2899,
    "originalPrice": 2899,
    "mrpPrice": "₹2,899.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.6,
    "ratingCount": 2718,
    "reviewCount": 636,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Apex Power",
    "tags": [
      "Apex Power",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676282586_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676282586_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676282586_3.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 906,
    "shopifyId": 9376676217050,
    "handle": "joly-knight",
    "title": "Dragon Robot Knight Stroker Cup",
    "name": "dragon ≡ƒÉ▓robot",
    "shortName": "Dragon Robot Knight Stroker Cup",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 279,
    "sellPrice": "₹279.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.7,
    "ratingCount": 3035,
    "reviewCount": 715,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Intelligent Cup",
    "tags": [
      "Intelligent Cup",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676217050_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676217050_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676217050_3.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 907,
    "shopifyId": 9376676184282,
    "handle": "joly-protein-shaker",
    "title": "Dragon Sensational Shaker Stroker",
    "name": "dragon ≡ƒÉ▓ Sensational",
    "shortName": "Dragon Sensational Shaker Stroker",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 289,
    "sellPrice": "₹289.00",
    "mrp": 2599,
    "originalPrice": 2599,
    "mrpPrice": "₹2,599.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.8,
    "ratingCount": 3352,
    "reviewCount": 794,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Discreet Shaker",
    "tags": [
      "Discreet Shaker",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676184282_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676184282_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676184282_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676184282_4.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 929,
    "shopifyId": 8887253893257,
    "handle": "stoker-for-boys",
    "title": "Stoker for boys",
    "name": "Stoker for boys",
    "shortName": "Stoker for boys",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Intimate Strokers & Cups",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3999,
    "originalPrice": 3999,
    "mrpPrice": "₹3,999.00",
    "discount": 93,
    "discountPercentage": 93,
    "offPercent": "93% off",
    "rating": 4.7,
    "ratingCount": 1252,
    "reviewCount": 318,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Intimate Strokers & Cups",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_3c2f98e1-c281-4423-8fba-699d0d65bcf5.webp?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_7c92c284-50de-437b-8612-7c2d44b8657c.webp?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/4_8ccdf277-3f6b-4b12-afdc-73e5728cd20e.webp?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/5_f32dd1fa-3e5c-456f-b61f-e2be1e74ee40.webp?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/6_51216045-cebe-49ab-a754-8c7ad5ef2611.webp?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/7_2ce0c85d-29b5-4498-a4d2-8859de19b3d1.webp?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/8_fea0eba6-9fd8-4d0b-b48c-3a80394664ed.webp?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/9.webp?v=1791196760"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Premium medical-grade body-safe silicone with soft lifelike texture",
      "Ergonomic, flexible design built for maximum comfort and intense sensation",
      "Waterproof and easy to wash with warm water and mild soap",
      "100% Plain Discreet Packaging – Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Premium medical-grade body-safe silicone with soft lifelike texture",
      "Ergonomic, flexible design built for maximum comfort and intense sensation",
      "Waterproof and easy to wash with warm water and mild soap",
      "100% Plain Discreet Packaging – Delivered in a secure, unbranded outer box"
    ],
    "description": "यह सिलिकोन द्वारा निर्मित योनि है। जिन पुरुषों के पास पार्टनर नहीं है, और हस्तमैथुन करने का मन करता है, वो पुरुष इसका इस्तेमाल करते है, यह बहुत सॉफ्ट होती है और रियल फ़ील देती है, इसके द्वारा करने से हस्तमैथुन जैसे नुकसान भी नहीं है। हेल्थ केयर इसका इस्तेमाल प्रतिदिन करने के लिए मना करता है, हाँ लेकिन हफ्ते मे 01 या 02 बार इसका इस्तेमाल किया जा सकता है और original सेक्स का आनंद लिया जा सकता है।",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 908,
    "shopifyId": 9376676118746,
    "handle": "joly-strokker",
    "title": "Dragon Lander Suction Stroker",
    "name": "dragon ≡ƒÉ▓ lander",
    "shortName": "Dragon Lander Suction Stroker",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2699,
    "originalPrice": 2699,
    "mrpPrice": "₹2,699.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.9,
    "ratingCount": 3669,
    "reviewCount": 873,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Max Suction",
    "tags": [
      "Max Suction",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676118746_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676118746_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676118746_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676118746_4.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 909,
    "shopifyId": 9376676085978,
    "handle": "joly-telescopic-rotation-piston-cup",
    "title": "Dragon Knight Telescopic Piston Cup",
    "name": "dragon ≡ƒÉ▓ knight",
    "shortName": "Dragon Knight Telescopic Piston Cup",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 269,
    "sellPrice": "₹269.00",
    "mrp": 2799,
    "originalPrice": 2799,
    "mrpPrice": "₹2,799.00",
    "discount": 90,
    "discountPercentage": 90,
    "offPercent": "90% off",
    "rating": 4.6,
    "ratingCount": 3986,
    "reviewCount": 952,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Telescopic Piston",
    "tags": [
      "Telescopic Piston",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676085978_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676085978_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676085978_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676085978_4.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676085978_5.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676085978_6.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 910,
    "shopifyId": 9376676020442,
    "handle": "ultimate-experience-joly",
    "title": "Dragon Shaker Experience Cup",
    "name": "dragon ≡ƒÉ▓Shaker",
    "shortName": "Dragon Shaker Experience Cup",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 259,
    "sellPrice": "₹259.00",
    "mrp": 2899,
    "originalPrice": 2899,
    "mrpPrice": "₹2,899.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.7,
    "ratingCount": 4303,
    "reviewCount": 1031,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Sensory Experience",
    "tags": [
      "Sensory Experience",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676020442_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676020442_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676020442_3.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 911,
    "shopifyId": 9376675954906,
    "handle": "joly-x-lander",
    "title": "Dragon Strokker X-Lander",
    "name": "dragon ≡ƒÉ▓ strokker",
    "shortName": "Dragon Strokker X-Lander",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 279,
    "sellPrice": "₹279.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.8,
    "ratingCount": 4620,
    "reviewCount": 1110,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Spiral Chamber",
    "tags": [
      "Spiral Chamber",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675954906_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675954906_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675954906_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675954906_4.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 912,
    "shopifyId": 9376675856602,
    "handle": "joly-x-sensational",
    "title": "Dragon Telescopic Auto Piston",
    "name": "dragon ≡ƒÉ▓ Telescopic",
    "shortName": "Dragon Telescopic Auto Piston",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 289,
    "sellPrice": "₹289.00",
    "mrp": 2599,
    "originalPrice": 2599,
    "mrpPrice": "₹2,599.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.9,
    "ratingCount": 4937,
    "reviewCount": 1189,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Auto Piston",
    "tags": [
      "Auto Piston",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675856602_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675856602_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675856602_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675856602_4.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675856602_5.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675856602_6.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 913,
    "shopifyId": 9376675823834,
    "handle": "heat-robot-x-joly",
    "title": "Dragon Ultimate Heat Robot Cup",
    "name": "dragon ≡ƒÉ▓ultimate",
    "shortName": "Dragon Ultimate Heat Robot Cup",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2699,
    "originalPrice": 2699,
    "mrpPrice": "₹2,699.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.6,
    "ratingCount": 5254,
    "reviewCount": 1268,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Thermal Warming",
    "tags": [
      "Thermal Warming",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675823834_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675823834_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675823834_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675823834_4.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675823834_5.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675823834_6.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 914,
    "shopifyId": 9376675758298,
    "handle": "flesh-light-girls-original-vagina-angela-white-fm-051",
    "title": "Dragon Machine Textured Sleeve",
    "name": "dragon ≡ƒÉ▓ machine",
    "shortName": "Dragon Machine Textured Sleeve",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 269,
    "sellPrice": "₹269.00",
    "mrp": 2799,
    "originalPrice": 2799,
    "mrpPrice": "₹2,799.00",
    "discount": 90,
    "discountPercentage": 90,
    "offPercent": "90% off",
    "rating": 4.7,
    "ratingCount": 5571,
    "reviewCount": 1347,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Realistic Texture",
    "tags": [
      "Realistic Texture",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675758298_1.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675758298_2.jpg"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 916,
    "shopifyId": 9376675594458,
    "handle": "thrusted-joly",
    "title": "Dragon Rotating Auto Stroker",
    "name": "dragon ≡ƒÉ▓ Rotating",
    "shortName": "Dragon Rotating Auto Stroker",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 279,
    "sellPrice": "₹279.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.9,
    "ratingCount": 6205,
    "reviewCount": 1505,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Rotating Action",
    "tags": [
      "Rotating Action",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675594458_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675594458_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675594458_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675594458_4.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 917,
    "shopifyId": 9376675561690,
    "handle": "thrusting-thrillerΓäó-rotating-vibrating-male-pleasure-machine",
    "title": "Dragon Ultra Soft Thrusting Thriller",
    "name": "dragon ≡ƒÉ▓ ultra soft",
    "shortName": "Dragon Ultra Soft Thrusting Thriller",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2599,
    "originalPrice": 2599,
    "mrpPrice": "₹2,599.00",
    "discount": 88,
    "discountPercentage": 88,
    "offPercent": "88% off",
    "rating": 4.6,
    "ratingCount": 6522,
    "reviewCount": 1584,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Vibrating Thriller",
    "tags": [
      "Vibrating Thriller",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675561690_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675561690_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675561690_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675561690_4.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 918,
    "shopifyId": 9376675463386,
    "handle": "tpe-ultra-joly",
    "title": "Dragon ULTRA TPE Cup",
    "name": "dragon ≡ƒÉ▓ ULTRA",
    "shortName": "Dragon ULTRA TPE Cup",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 289,
    "sellPrice": "₹289.00",
    "mrp": 2699,
    "originalPrice": 2699,
    "mrpPrice": "₹2,699.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.7,
    "ratingCount": 6839,
    "reviewCount": 1663,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Ultra Soft TPE",
    "tags": [
      "Ultra Soft TPE",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675463386_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675463386_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675463386_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675463386_4.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675463386_5.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 919,
    "shopifyId": 9376675397850,
    "handle": "flesh-light-girls-original-usa-lotus-vagina-jenna-haze-fm-015",
    "title": "Dragon 3-in-1 Lotus Sleeve",
    "name": "dragon ≡ƒÉ▓ 3 in 1",
    "shortName": "Dragon 3-in-1 Lotus Sleeve",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 279,
    "sellPrice": "₹279.00",
    "mrp": 2799,
    "originalPrice": 2799,
    "mrpPrice": "₹2,799.00",
    "discount": 90,
    "discountPercentage": 90,
    "offPercent": "90% off",
    "rating": 4.8,
    "ratingCount": 7156,
    "reviewCount": 1742,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "3-in-1 Lotus",
    "tags": [
      "3-in-1 Lotus",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675397850_1.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675397850_2.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675397850_3.jpg"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 942,
    "shopifyId": 8887253991561,
    "handle": "hygienic-breathable-vagina-personal-care",
    "title": "Realistic Vagina Stroker Sleeve for Men (Self-Lubricating)",
    "name": "Realistic Vagina Stroker Sleeve for Men",
    "shortName": "Realistic Vagina Stroker Sleeve for Men",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Intimate Wellness",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 1999,
    "originalPrice": 1999,
    "mrpPrice": "₹1,999.00",
    "discount": 85,
    "discountPercentage": 85,
    "offPercent": "85% off",
    "rating": 4.8,
    "ratingCount": 2123,
    "reviewCount": 267,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Intimate Wellness",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a.webp?v=1791196763",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a6_a80189c8-6b2d-49cc-8d5e-865a81dd4348.webp?v=1791196763",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a5_fc883d01-1b84-4b2b-8504-bae283ce0921.webp?v=1791196763",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a3_a9079b04-4083-4419-886c-3d35478c8d3c.webp?v=1791196763",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a1_71d8e2ab-34f0-499a-b7f2-117178c57924.webp?v=1791196763",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a2_e38f0a5a-83bf-4bf2-a6cc-be3dcd0dbb20.webp?v=1791196763"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Soft and real skin touch , full of sexual pleasure",
      "3D realistic pussy – Enhanced Insertion Friction",
      "Safe TPE material – Non-toxic, harmless, and safe to use",
      "Miniature sex toys for men – Easy to carry/use"
    ],
    "details": [
      "Soft and real skin touch , full of sexual pleasure",
      "3D realistic pussy – Enhanced Insertion Friction",
      "Safe TPE material – Non-toxic, harmless, and safe to use",
      "Miniature sex toys for men – Easy to carry/use"
    ],
    "description": "• Ribbed and textured sleeve wraps around your shaft • Use the wired remote control to switch on the vibrations • Stroke and massage to climax with this ultra-soft masturbator • Indulge in lifelike sensations with the realistic opening High quality with lower price masturbators for men pleasure. Soft and real skin touch , full of sexual pleasure. 3D realistic pussy – Enhanced Insertion Friction. Safe TPE material – Non-toxic, harmless, and safe to use. Miniature sex toys for men – Easy to carry/use. 100% waterproof – Easy to clean, bathroom ready.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 924,
    "shopifyId": 8887254679689,
    "handle": "1-bigger-harder-wilder-the-explosive-vibrating-wolf-tooth-crystal-sleeve",
    "title": "1🔥 Bigger. Harder. Wilder. 🔥 💦 The Explosive Vibrating Wolf-Tooth Crystal Sleeve 💦",
    "name": "1🔥 Bigger. Harder. Wilder. 🔥 💦 The Explosive Vibrating Wolf-Tooth Crystal Sleeve 💦",
    "shortName": "1🔥 Bigger. Harder. Wilder. 🔥 💦 The...",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3180,
    "originalPrice": 3180,
    "mrpPrice": "₹3,180.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.6,
    "ratingCount": 917,
    "reviewCount": 203,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1.png?v=1791196779",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2.webp?v=1791196778",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3.png?v=1791196779",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/4.png?v=1791196779",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/5.webp?v=1791196778",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/6.webp?v=1791196778",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/7.png?v=1791196779",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/8.png?v=1791196779",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/9.png?v=1791196778",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/10.webp?v=1791196778"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "【Vibrating Penis Sleeve】 This penis sleeve is reusable and we have also installed a bullet-shaped vibrator in the head of the sleeve",
      "The powerful vibrating sensation allows you and your partner to experience different levels of pleasure during sex",
      "It also swiftly stimulates your penis and your partner's G-spot, P-spot and vagina",
      "【Authentic experience】 Vibration extenders allow you to explore a variety of sensations"
    ],
    "details": [
      "【Vibrating Penis Sleeve】 This penis sleeve is reusable and we have also installed a bullet-shaped vibrator in the head of the sleeve",
      "The powerful vibrating sensation allows you and your partner to experience different levels of pleasure during sex",
      "It also swiftly stimulates your penis and your partner's G-spot, P-spot and vagina",
      "【Authentic experience】 Vibration extenders allow you to explore a variety of sensations"
    ],
    "description": "We have installed a bullet-shaped vibrator in the head of the sleeve, which makes your penis longer and harder, allowing you to ejaculate longer and promoting a perfect sexual experience. 【Vibrating Penis Sleeve】 This penis sleeve is reusable and we have also installed a bullet-shaped vibrator in the head of the sleeve. The powerful vibrating sensation allows you and your partner to experience different levels of pleasure during sex. It also swiftly stimulates your penis and your partner's G-spot, P-spot and vagina. 【Authentic experience】 Vibration extenders allow you to explore a variety of sensations. The vibrating, thrusting cock head spreads stimulating orgasms throughout your body. Following your beat, powerful vibrations are concentrated near the tip for maximum effect, perfectly kissing her sweet spot and triggering ecstasy. 【Male Sex Toys】 The front-end penis sleeve locks your glans firmly into place, giving you intense stimulation, and the one-piece testicle ring not only holds it in place, but also slows down your blood flow, making your penis longer and harder, allowing you to ejaculate longer, and promoting a perfect sexual experience. 【Address Erectile Dysfunction (ED)】 Designed to effectively offer extra support and functionality, it continuously and repeatedly trains the penis, aiming to extend ejaculation time. This provides comprehensive training for erection and endurance. 【Enhance sexual pleasure between couples】 Sex toys for couples, we this penis sleeve needs to be used with lubricant, penis sleeve not only helps to extend male stamina, but also helps to stimulate the female clitoris, used as a male enhancement penis extender. 【Personal Lubricant Recommendation】For the best experience, we highly recommend pairing this sleeve with a water-based personal lubricant . Lubricant reduces friction, enhances comfort, and intensifies sensations for both partners. It also protects the soft TPE material of the sleeve, making it last longer and stay in perfect condition. 【Soft and flexible material】 This penis sleeve is made of TPE material, It is non-toxic, odorless and elastic, can lightly fit your skin, has outstanding tear resistance and elasticity, soft, suitable for all sizes, let you feel comfortable when playing with your partner, reusable, easy to clean, safe and reliable. 180-day money-back guarantee OUR GUARANTEE: We believe we have some of the most innovative products in the world. and we want to make sure we back that up with a risk-free 180-day guarantee. If for any reason you do not have a positive experience. we will make every effort to ensure that you are satisfied with your purchase. We want you to rest assured that there is absolutely zero risk in buying and trying out products. If you don't like it and don't feel bad. we'll do it right. We email support. If you need help. please contact us.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 925,
    "shopifyId": 8887254646921,
    "handle": "6-inch-bt-condom",
    "title": "6 Inch BT Condom",
    "name": "6 Inch BT Condom",
    "shortName": "6 Inch BT Condom",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3499,
    "originalPrice": 3499,
    "mrpPrice": "₹3,499.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.7,
    "ratingCount": 984,
    "reviewCount": 226,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Trending",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_fe18c8fc-a242-4849-9c68-87cdfbf38eef.webp?v=1791196778",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_45305ebb-394c-4160-a8ae-7c0c7ae41d78.webp?v=1791196777",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_f97af313-d187-4d1f-bf58-61e576607492.webp?v=1791196778"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "6 Inch BT Dragon Condom with Reusable Man Condom It looks like you might be referring to products related to sexual health or adult entertainment",
      "If you’re considering products like these, here are some key points to keep in mind: 1",
      "**Reusable Products**: If considering a reusable condom, verify that it is designed for multiple use and is easy to clean and maintain",
      "Ensure that it can be safely reused according to the manufacturer's instructions"
    ],
    "details": [
      "6 Inch BT Dragon Condom with Reusable Man Condom It looks like you might be referring to products related to sexual health or adult entertainment",
      "If you’re considering products like these, here are some key points to keep in mind: 1",
      "**Reusable Products**: If considering a reusable condom, verify that it is designed for multiple use and is easy to clean and maintain",
      "Ensure that it can be safely reused according to the manufacturer's instructions"
    ],
    "description": "6 Inch BT Dragon Condom with Reusable Man Condom It looks like you might be referring to products related to sexual health or adult entertainment. A \"6 Inch BT Condom\" could imply a condom designed for a specific size, while a \"Reusable Man Condom\" typically suggests a product aimed at providing an alternative to traditional disposable condoms. It's important to ensure that all sexual health products are safe, effective, and properly used to prevent sexually transmitted infections (STIs) and unintended pregnancies. If you’re considering products like these, here are some key points to keep in mind: 1. **Safety and Effectiveness**: Make sure that any condom you choose is made from safe materials (such as latex or polyurethane) and is approved by relevant health authorities. 2. **Reusable Products**: If considering a reusable condom, verify that it is designed for multiple use and is easy to clean and maintain. Ensure that it can be safely reused according to the manufacturer's instructions. 3. **Size and Fit**: Proper sizing is crucial for comfort and effectiveness. If you need a specific size (like a 6-inch option, which may refer to the length or girth), look for products specifically designed for that. 4. **Read Reviews**: Look for customer feedback and reviews to gauge the experiences of others with the product. 5. **Consult Health Professionals**: If you have questions about sexual health products, speaking with a healthcare provider can provide valuable insights and recommendations. If this was not what you were looking for, or if you have a specific question or topic in mind, feel free to provide more details!",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 904,
    "shopifyId": 9376676315354,
    "handle": "joly-intruder",
    "title": "Dragon Stick Dual Pleasure Wand",
    "name": "dragon ≡ƒÉ▓ Stick",
    "shortName": "Dragon Stick Dual Pleasure Wand",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2799,
    "originalPrice": 2799,
    "mrpPrice": "₹2,799.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.9,
    "ratingCount": 2401,
    "reviewCount": 557,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Hot Deal",
    "tags": [
      "Hot Deal",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676315354_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676315354_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676315354_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376676315354_4.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 926,
    "shopifyId": 8887254286473,
    "handle": "dildo-device",
    "title": "DILDO DEVICE",
    "name": "DILDO DEVICE",
    "shortName": "DILDO DEVICE",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Realistic Silicone Dildos",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2149,
    "originalPrice": 2149,
    "mrpPrice": "₹2,149.00",
    "discount": 86,
    "discountPercentage": 86,
    "offPercent": "86% off",
    "rating": 4.8,
    "ratingCount": 1051,
    "reviewCount": 249,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Realistic Silicone Dildos",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/8-3inch-21cm-realistic-brown-penis-cock-flexible-dildo-dual-layer-liquid-silicone-buy-dildo-online-india-450x450.webp?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/DV40-300x300-700x700.webp?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/8-3Inch-21CM-Realistic-Brown-Penis-Cock-Flexible-Dildo-Dual-Layer-Liquid-Silicone-Buy-Dildo-Online-India-13-450x450.webp?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/61nUe5GrjaL._AC_SL1500.webp?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/51qQ-GZgJ7L._SX679.webp?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/41yzdVDoVjL.jpg?v=1791196770",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/41oFuNbpVWL.jpg?v=1791196770"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "🔹 Ergonomic & Body-Safe Material Crafted from medical-grade silicone – soft, flexible, non-toxic, and easy to clean",
      "🔹 Powerful Yet Quiet Vibration Modes Multiple intensity levels and vibration patterns to enhance stimulation discreetly",
      "🔹 Partner-Friendly Men with low or no erection can use this tool to please their partner effectively, restoring intimacy and confidence",
      "🔹 Waterproof & USB Rechargeable Perfect for use in the shower or bath"
    ],
    "details": [
      "🔹 Ergonomic & Body-Safe Material Crafted from medical-grade silicone – soft, flexible, non-toxic, and easy to clean",
      "🔹 Powerful Yet Quiet Vibration Modes Multiple intensity levels and vibration patterns to enhance stimulation discreetly",
      "🔹 Partner-Friendly Men with low or no erection can use this tool to please their partner effectively, restoring intimacy and confidence",
      "🔹 Waterproof & USB Rechargeable Perfect for use in the shower or bath"
    ],
    "description": "Experience next-level intimacy and personal satisfaction with the MISIVEDA™ , a premium-grade device thoughtfully designed for both women seeking personal pleasure and men dealing with erectile dysfunction (ED). 🔹 Dual-Purpose Design Ideal for women looking for self-exploration and pleasure, as well as men experiencing ED who wish to satisfy their partner without erection. 🔹 Ergonomic & Body-Safe Material Crafted from medical-grade silicone – soft, flexible, non-toxic, and easy to clean. 🔹 Powerful Yet Quiet Vibration Modes Multiple intensity levels and vibration patterns to enhance stimulation discreetly. 🔹 Partner-Friendly Men with low or no erection can use this tool to please their partner effectively, restoring intimacy and confidence. 🔹 Waterproof & USB Rechargeable Perfect for use in the shower or bath. Convenient charging for uninterrupted enjoyment. 🔹 Discreet & Portable Compact design with silent motor – easily fits in your drawer or travel bag. Who Can Use This Product? ✅ Women seeking personal pleasure and stress relief ✅ Men with ED (Erectile Dysfunction) looking to fulfill their partner’s needs ✅ Couples aiming to explore new dimensions of intimacy Why Choose MISIVEDA ™? Because intimacy shouldn't be limited by physical challenges . Whether you're exploring solo pleasure or strengthening your bond with your partner, this device is designed to empower your intimate moments – with safety, satisfaction, and discretion.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 927,
    "shopifyId": 8887254614153,
    "handle": "6-inch-bt-dotted-condom",
    "title": "6 Inch BT Dotted Condom",
    "name": "6 Inch BT Dotted Condom",
    "shortName": "6 Inch BT Dotted Condom",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3499,
    "originalPrice": 3499,
    "mrpPrice": "₹3,499.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.5,
    "ratingCount": 1118,
    "reviewCount": 272,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_47ce827d-d15c-4e72-87d6-319e56efda1b.webp?v=1791196777",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_6b21e67d-f694-453b-8f13-f43a9e0a39ca.webp?v=1791196777",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_7aa091b1-b323-41f7-91ff-ef80f4b1b4fc.webp?v=1791196777"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "ड्रैगन कंडोम डॉटेड, जो सिलिकॉन से बना होता है, एक विशेष कंडोम है जो सेक्स के दौरान आराम और सुरक्षा प्रदान करता है",
      "इस कंडोम में छोटे-छोटे डॉट्स होते हैं, जो उत्तेजना को बढ़ाते हैं और दोनों पार्टनर्स को ज्यादा आनंद का अनुभव कराते हैं",
      "सिलिकॉन से बना होने के कारण, यह कंडोम लचीला, मजबूत और आरामदायक होता है",
      "इसके उपयोग से पुरुषों की सहनशक्ति बढ़ती है और सेक्स का समय भी अधिक होता है"
    ],
    "details": [
      "ड्रैगन कंडोम डॉटेड, जो सिलिकॉन से बना होता है, एक विशेष कंडोम है जो सेक्स के दौरान आराम और सुरक्षा प्रदान करता है",
      "इस कंडोम में छोटे-छोटे डॉट्स होते हैं, जो उत्तेजना को बढ़ाते हैं और दोनों पार्टनर्स को ज्यादा आनंद का अनुभव कराते हैं",
      "सिलिकॉन से बना होने के कारण, यह कंडोम लचीला, मजबूत और आरामदायक होता है",
      "इसके उपयोग से पुरुषों की सहनशक्ति बढ़ती है और सेक्स का समय भी अधिक होता है"
    ],
    "description": "ड्रैगन कंडोम डॉटेड, जो सिलिकॉन से बना होता है, एक विशेष कंडोम है जो सेक्स के दौरान आराम और सुरक्षा प्रदान करता है। इस कंडोम में छोटे-छोटे डॉट्स होते हैं, जो उत्तेजना को बढ़ाते हैं और दोनों पार्टनर्स को ज्यादा आनंद का अनुभव कराते हैं। सिलिकॉन से बना होने के कारण, यह कंडोम लचीला, मजबूत और आरामदायक होता है। इसके उपयोग से पुरुषों की सहनशक्ति बढ़ती है और सेक्स का समय भी अधिक होता है। इस कंडोम का डिज़ाइन पुरुषों को बेहतर नियंत्रण प्रदान करता है, जिससे उनकी टाइमिंग बढ़ती है। यह कंडोम एक सुरक्षित और संतोषजनक अनुभव सुनिश्चित करता है, जिससे दोनों पार्टनर्स को अधिक सुख मिलता है।",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 928,
    "shopifyId": 8887254319241,
    "handle": "dildo-10-inch",
    "title": "Dildo 10 inch",
    "name": "Dildo 10 inch",
    "shortName": "Dildo 10 inch",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Realistic Silicone Dildos",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3999,
    "originalPrice": 3999,
    "mrpPrice": "₹3,999.00",
    "discount": 93,
    "discountPercentage": 93,
    "offPercent": "93% off",
    "rating": 4.6,
    "ratingCount": 1185,
    "reviewCount": 295,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Trending",
    "tags": [
      "Top Rated",
      "Realistic Silicone Dildos",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_c058d745-76bd-46d3-b28b-72f6d06e0fa6.webp?v=1791196770",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_2bfe6648-601e-46c0-a6b5-98667a1982c7.webp?v=1791196770",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_71abb11b-77e7-43d9-8537-ce5ed4ec8ad7.webp?v=1791196770",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/4_5b8c3a94-4384-4faf-857e-e689adcbce54.webp?v=1791196770",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/6_7486261e-98fb-4eab-95cc-e5cc29dbe45f.webp?v=1791196771",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/5_e3cc3d7c-7118-404a-af92-26395f7d7dda.webp?v=1791196770",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/7_416e389c-7427-4d33-9150-62dbc1d46867.webp?v=1791196770"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "\"10 इंच सिलिकॉन डिल्डो\" एक उच्च गुणवत्ता वाला सेक्स टॉय है, जो शरीर के लिए सुरक्षित और आरामदायक सा��ग्री से बना है",
      "यह सिलिकॉन से बना होता है, जो मुलायम, लचीला और शरीर पर आरामदायक होता है",
      "इसका 10 इंच लंबा आकार यौन संतुष्टि के लिए उपयुक्त है",
      "इसे इस्तेमाल करना आसान है और यह पूरी तरह से शरीर के लिए सुरक्षित होता है"
    ],
    "details": [
      "\"10 इंच सिलिकॉन डिल्डो\" एक उच्च गुणवत्ता वाला सेक्स टॉय है, जो शरीर के लिए सुरक्षित और आरामदायक सा��ग्री से बना है",
      "यह सिलिकॉन से बना होता है, जो मुलायम, लचीला और शरीर पर आरामदायक होता है",
      "इसका 10 इंच लंबा आकार यौन संतुष्टि के लिए उपयुक्त है",
      "इसे इस्तेमाल करना आसान है और यह पूरी तरह से शरीर के लिए सुरक्षित होता है"
    ],
    "description": "\"10 इंच सिलिकॉन डिल्डो\" एक उच्च गुणवत्ता वाला सेक्स टॉय है, जो शरीर के लिए सुरक्षित और आरामदायक सा��ग्री से बना है। यह सिलिकॉन से बना होता है, जो मुलायम, लचीला और शरीर पर आरामदायक होता है। इसका 10 इंच लंबा आकार यौन संतुष्टि के लिए उपयुक्त है। इसे इस्तेमाल करना आसान है और यह पूरी तरह से शरीर के लिए सुरक्षित होता है। इसमें एक वास्तविक एहसास देने के लिए विशेष टेक्सचर डिज़ाइन किया गया है। यह जलरोधक और साफ करने में भी आसान है। इसका उपयोग वजाइनल या ऐनल दोनों प्रकार के उपयोग के लिए किया जा सकता है। यह लचीला होने के कारण विभिन्न प्रकार के प्रयोगों के लिए उपयुक्त है। अगर किसी व्यक्ति के पास पार्टनर नहीं है और वे 10 इंच सिलिकॉन डिल्डो का इस्तेमाल करना चाहते हैं, तो वे इसे सुरक्षित और आरामदायक तरीके से कर सकते हैं, बिना किसी परेशानी या असुविधा के। यहां कुछ सुझाव दिए गए हैं: साफ-सफाई का ध्यान रखें : सबसे पहले, यह सुनिश्चित करें कि डिल्डो साफ हो। इस्तेमाल से पहले और बाद में इसे गर्म पानी और माइल्ड सोप से धोएं ताकि यह बैक्टीरिया और संक्रमण से मुक्त हो। सही लुब्रिकेंट का इस्तेमाल करें : लुब्रिकेंट का उपयोग करने से डिल्डो का उपयोग ज्यादा आरामदायक और सहज होता है। सिलिकॉन टॉय के लिए पानी आधारित लुब्रिकेंट सबसे अच्छा होता है, क्योंकि इससे टॉय को कोई नुकसान नहीं होता। ध्यान से और आराम से उपयोग करें : इसे इस्तेमाल करते वक्त धीरे-धीरे और आराम से प्रयोग करें। अगर आप पहले बार इसे इस्तेमाल कर रहे हैं, तो शुरुआत में थोड़ा और धीरे-धीरे इसका उपयोग करें ताकि आप सहज महसूस करें। सुरक्षित स्थान पर प्रयोग करें : सुनिश्चित करें कि आप इसे सुरक्षित और आरामदायक स्थान पर उपयोग कर रहे हैं, जहां आपको कोई परेशान नहीं करेगा और आप अपने अनुभव का पूरा आनंद ले सकें। आत्म-संतुष्टि का आनंद लें : जब आप अकेले होते हैं, तो यह आपके लिए आत्म-संतुष्टि का एक तरीका हो सकता है। आप इसे अपनी इच्छाओं के अनुसार इस्तेमाल करें, अपनी शारीरिक जरूरतों और आनंद के लिए। समय का ध्यान रखें : इसका उपयोग करते वक्त ध्यान रखें कि आपको कोई असुविधा न हो। अगर आप असहज महसूस करते हैं, तो तुरंत रुकें और आराम करें। नियमित साफ-सफाई और देखभाल : डिल्डो का नियमित रूप से ध्यान रखें और उसे समय-समय पर साफ करें। ऐसा करने से यह लंबे समय तक सुरक्षित और उपयोगी रहेगा। इस प्रकार, बिना किसी परेशानी के और सुरक्षित तरीके से इसे इस्तेमाल किया जा सकता है, और यह एक स्वस्थ और आत्मसंतुष्टि का अनुभव हो सकता है।",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 930,
    "shopifyId": 8887254548617,
    "handle": "12-inch-long-foreskin-dildo-adult-sex-toy-for-women-and-men-eglng",
    "title": "12 inch Long Realistic Foreskin Dildo for Women",
    "name": "12 inch Long Realistic Foreskin Dildo for Women",
    "shortName": "12 inch Long Foreskin Dildo Adult Sex...",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Realistic Silicone Dildos",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 1999,
    "originalPrice": 1999,
    "mrpPrice": "₹1,999.00",
    "discount": 85,
    "discountPercentage": 85,
    "offPercent": "85% off",
    "rating": 4.8,
    "ratingCount": 1319,
    "reviewCount": 341,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Realistic Silicone Dildos",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a1_1c37a4c1-46fb-4a97-9481-bebc38d1fe0b.webp?v=1791196775",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a2_dee16c8b-1cf1-44cb-880d-f2ea6015b825.jpg?v=1791196775",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a3_115bbe80-68ec-4685-9b8f-e726a10f5bdd.jpg?v=1791196776",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a4_626d7da0-8e3d-4ca0-843f-42344113c90c.jpg?v=1791196775",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a5_569acb32-ae57-4e46-847d-ddea201e0e4e.jpg?v=1791196775"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Its lifelike design enhances visual realism and delivers varied, natural sensations with every use",
      "Ideal for those who prefer a more authentic, untouched experience",
      "A unique pleasure toy for men, women, and anyone seeking realism and intensity Ultra Big Dildo – The Ultimate Upgrade: Ready to take things further",
      "This thick, realistic dildo is built for deep, intense pleasure"
    ],
    "details": [
      "Its lifelike design enhances visual realism and delivers varied, natural sensations with every use",
      "Ideal for those who prefer a more authentic, untouched experience",
      "A unique pleasure toy for men, women, and anyone seeking realism and intensity Ultra Big Dildo – The Ultimate Upgrade: Ready to take things further",
      "This thick, realistic dildo is built for deep, intense pleasure"
    ],
    "description": "Realistic Uncut Design for Authentic Sensation: This large, thick dildo is crafted with a hyper-realistic uncut foreskin, faithfully replicating the look and feel of an uncircumcised penis. Its lifelike design enhances visual realism and delivers varied, natural sensations with every use. Ideal for those who prefer a more authentic, untouched experience. A unique pleasure toy for men, women, and anyone seeking realism and intensity Ultra Big Dildo – The Ultimate Upgrade: Ready to take things further? This thick, realistic dildo is built for deep, intense pleasure. Its gently curved, veiny shaft is designed to fill you up completely, while the detailed foreskin and lifelike glans add an extra layer of sensation with every thrust. Whether you're flying solo or sharing the experience, this toy delivers maximum satisfaction—intense, real, and unforgettable Extra-Large Dildo for Intense, Full-Body Pleasure: Measuring 12 inches in total length with 9 inches insertable and a thick 2.16-inch diameter, this massive dildo delivers a satisfyingly heavy, lifelike feel. Its oversized girth enhances every thrust with deep, stretched-out sensations, pushing your pleasure to the next level. Designed for size lovers seeking a truly fulfilling experience Premium Dual-Density Silicone Dildo with Powerful Suction Base: Crafted from high-quality liquid silicone, this dildo combines a firm inner core for stability with a soft, skin-like outer layer for a truly realistic feel. The flexible suction cup base provides strong, reliable hold on most smooth surfaces, making it perfect for hands-free fun in a variety of positions and settings Versatile Pleasure for Every Desire: Whether you're craving vaginal, clitoral, G-spot, or anal stimulation, this premium giant dildo delivers powerful sensations in all the right ways. Compatible with most strap-on harnesses, it’s perfect for solo adventures or couples exploring deeper intimacy. A must-have for any adult toy collection. Pro tip: Pair with water-based lube for maximum comfort and glide Discreet Packaging & Easy Cleaning: This sex toys arrives in plain, unmarked packaging. After use, cleaning is quick and effortless—simply rinse with warm water and mild soap, or use a toy cleaner to keep it fresh, hygienic, and always ready for your next experience",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 931,
    "shopifyId": 8887254384777,
    "handle": "7-inch-dragon-condom",
    "title": "7 inch Dragon Condom",
    "name": "7 inch Dragon Condom",
    "shortName": "7 inch Dragon Condom",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3499,
    "originalPrice": 3499,
    "mrpPrice": "₹3,499.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.5,
    "ratingCount": 1386,
    "reviewCount": 364,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Trending",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_3c3c5986-8d3f-4522-8a95-29bd25ef965d.webp?v=1791196772",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_1fbc198f-d04a-443b-ab67-5a3ef59d47f8.webp?v=1791196772",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_5d023465-76f8-4090-85bf-dae7c6be4259.webp?v=1791196772"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "This 7-inch reusable man condom is designed to enhance pleasure while providing safety and reliability",
      "Crafted with lifelike textures, it offers a natural feel that stimulates and excites, making every intimate moment more enjoyable",
      "Remember to follow care instructions for reuse to ensure longevity and optimal performance",
      "Enjoy a world of pleasure with the 7 Dragon Condom"
    ],
    "details": [
      "This 7-inch reusable man condom is designed to enhance pleasure while providing safety and reliability",
      "Crafted with lifelike textures, it offers a natural feel that stimulates and excites, making every intimate moment more enjoyable",
      "Remember to follow care instructions for reuse to ensure longevity and optimal performance",
      "Enjoy a world of pleasure with the 7 Dragon Condom"
    ],
    "description": "7 Dragon Condom with Realistic Texture 7 inch Reusable Man Condom Introducing the 7 Dragon Condom with Realistic Texture – the ultimate choice for those seeking a premium experience. This 7-inch reusable man condom is designed to enhance pleasure while providing safety and reliability. Crafted with lifelike textures, it offers a natural feel that stimulates and excites, making every intimate moment more enjoyable. The condom's unique design features intricate detailing that mimics the contours and sensations of real skin, ensuring a heightened experience for both partners. Made from high-quality, durable materials, the 7 Dragon Condom is not only reusable but also easy to clean, making it an eco-friendly alternative to traditional disposable options. Whether you're exploring new sensations or enhancing your intimate encounters, the 7 Dragon Condom with Realistic Texture guarantees satisfaction and pleasure. Ideal for couples looking to spice up their love life or individuals who prioritize both safety and enjoyment, this condom is a must-have addition to your collection. Remember to follow care instructions for reuse to ensure longevity and optimal performance. Enjoy a world of pleasure with the 7 Dragon Condom!",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 932,
    "shopifyId": 8887253926025,
    "handle": "penis-sleeve-cock-sleeve-vibrator-8-inch",
    "title": "Penis Sleeve Cock Sleeve Vibrator 8 inch",
    "name": "Penis Sleeve Cock Sleeve Vibrator 8 inch",
    "shortName": "Penis Sleeve Cock Sleeve Vibrator 8 inch",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 1499,
    "originalPrice": 1499,
    "mrpPrice": "₹1,499.00",
    "discount": 80,
    "discountPercentage": 80,
    "offPercent": "80% off",
    "rating": 4.6,
    "ratingCount": 1453,
    "reviewCount": 387,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a1.jpg?v=1791196761",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a2.jpg?v=1791196762",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a4.jpg?v=1791196762",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a3.jpg?v=1791196762"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Boosts Length & Girth: This reusable penis sleeve with a bullet-shaped vibrator adds 2",
      "4 inches in length and 35% thickness",
      "It offers multiple modes for synchronized stimulation",
      "With a 1-hour charge, enjoy over 60 minutes of continuous use"
    ],
    "details": [
      "Boosts Length & Girth: This reusable penis sleeve with a bullet-shaped vibrator adds 2",
      "4 inches in length and 35% thickness",
      "It offers multiple modes for synchronized stimulation",
      "With a 1-hour charge, enjoy over 60 minutes of continuous use"
    ],
    "description": "Boosts Length & Girth: This reusable penis sleeve with a bullet-shaped vibrator adds 2.4 inches in length and 35% thickness. With over 9 vibrations, it enhances your experience with customizable pleasure, perfect for stimulating the clit, g-spot, and more Ball Stretcher & Enhanced Fit: Our male sex toy features an elastic ball stretcher for a secure fit, locking balls in place to promote engorgement, increasing length and thickness. Combine with penis ring for intensified sensations and prolonged pleasure Remote Control & App Integration: Unlike other cock sleeves, the vibrators support app control for long-distance play and adding intimacy. It offers multiple modes for synchronized stimulation. A remote control is also included for hands-free enjoyment Ultra-Realistic & Body-Safe Silicone: Crafted from lifelike, skin-friendly silicone, this penis extender mimics the details and feel of a real penis. The flexible and elastic material ensures a natural experience, with excellent expansion capabilities Additional Features: FYSHAVO's adult toys penis sleeve is recommended for use with lubricants & is fully waterproof for easy clean & use. With a 1-hour charge, enjoy over 60 minutes of continuous use. A USB DC charging cable is included for convenient charging Discreet Package: Your privacy is our priority. The sex toys for men are discreetly packed with no gender-specific words. A male sex toy vibrating cock ring is ideal for a surprise gift for your partner & yourself. Couples sex toys adult sex toys & games",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 933,
    "shopifyId": 8887254220937,
    "handle": "dotted-dragon-condom",
    "title": "DOTTED DRAGON CONDOM",
    "name": "DOTTED DRAGON CONDOM",
    "shortName": "DOTTED DRAGON CONDOM",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 88,
    "discountPercentage": 88,
    "offPercent": "88% off",
    "rating": 4.7,
    "ratingCount": 1520,
    "reviewCount": 410,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2024-01-28at09.58.34_200x200_ec667061-8cf2-40f1-9a38-42f02e5e9670.jpg?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsApp_Image_2024-01-28_at_09.48.01_200x200_0997b412-b2ee-4758-a558-ba8017c5fcc2.jpg?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsApp_Image_2024-01-28_at_09.58.38_200x200_845bd4d3-dc8d-4a72-bb29-ef0690550e37.jpg?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/51qQ-GZgJ7L._SX679_6799cdf9-6adb-4da6-b7ae-f2f31d9003e4.webp?v=1791196768",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/41yzdVDoVjL_14dd84f2-0c29-4d60-bcb3-54f5a59a562f.jpg?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/41oFuNbpVWL_447bc26d-ccc2-4f9e-8b3c-17e8039bcea0.jpg?v=1791196769"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "ड्रैगन डाटिड कोंडोम के निम्नलिखित फायदे है :- यह कोंडोम फ्री साइज़ होता है",
      "इसमे dott होने के कारण महिला पार्टनर को एक्स्ट्रा प्लेशर देता है",
      "सेक्स टाइमिंग 40 से 50 मिनट तक कर देता है",
      "लिंग की लम्बाई और मोटाई दोनों एक साथ बढ़ा देता है"
    ],
    "details": [
      "ड्रैगन डाटिड कोंडोम के निम्नलिखित फायदे है :- यह कोंडोम फ्री साइज़ होता है",
      "इसमे dott होने के कारण महिला पार्टनर को एक्स्ट्रा प्लेशर देता है",
      "सेक्स टाइमिंग 40 से 50 मिनट तक कर देता है",
      "लिंग की लम्बाई और मोटाई दोनों एक साथ बढ़ा देता है"
    ],
    "description": "ड्रैगन डाटिड कोंडोम के निम्नलिखित फायदे है :- यह कोंडोम फ्री साइज़ होता है। इसमे dott होने के कारण महिला पार्टनर को एक्स्ट्रा प्लेशर देता है। सेक्स टाइमिंग 40 से 50 मिनट तक कर देता है। लिंग की लम्बाई और मोटाई दोनों एक साथ बढ़ा देता है। अनचाही प्रेगनेंसी को रोकता है, री यूजेबल होता है, सालो साल चलता है, सॉफ्ट dotted से पार्टनर के साथ ज़िन्दगी में ख़ुशी भर देता है, कोई साइड इफ़ेक्ट भी नहीं है",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 934,
    "shopifyId": 8887254352009,
    "handle": "belt-condom",
    "title": "BELT CONDOM",
    "name": "BELT CONDOM",
    "shortName": "BELT CONDOM",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3500,
    "originalPrice": 3500,
    "mrpPrice": "₹3,500.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.8,
    "ratingCount": 1587,
    "reviewCount": 433,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Trending",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsApp_Image_2024-01-28_at_09.58.32_200x200_e3e9ff9a-d12a-4e2d-ab1d-18d05fe9ac58.jpg?v=1791196771",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/DRAGON_CONDOM_WITH_RING_c030b7ce-afe3-425c-ab43-2c6e02883355.webp?v=1791196771",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsApp_Image_2025-09-07_at_23.08.59_1_4a932348-5784-4b2e-a5ce-cdb6839f6faf.webp?v=1791196771",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsApp_Image_2025-09-07_at_23.09.00_1_9da47ab0-6b81-4f99-987a-1a650342c582.webp?v=1791196771",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/51h15xRvCqL._SX679_d7e75995-7a0b-4be7-9af2-c8dd0d2c69b3.webp?v=1791196771"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "यह कोंडोम उन पुरुषों के लिए है जिनके लिंग मे बिल्कुल भी तनाव नहीं आता है",
      "बेल्ट कोंडोम को पहनकर ऐसे पुरुष घंटों तक सेक्स कर सकते है, और अपने पार्टनर को चर्मसुख का आनंद दे सकते है, ये री-यूजेबल होता, सालों साल चलता है",
      "इसका कोई साइड इफेक्ट भी नहीं है"
    ],
    "details": [
      "यह कोंडोम उन पुरुषों के लिए है जिनके लिंग मे बिल्कुल भी तनाव नहीं आता है",
      "बेल्ट कोंडोम को पहनकर ऐसे पुरुष घंटों तक सेक्स कर सकते है, और अपने पार्टनर को चर्मसुख का आनंद दे सकते है, ये री-यूजेबल होता, सालों साल चलता है",
      "इसका कोई साइड इफेक्ट भी नहीं है"
    ],
    "description": "यह कोंडोम उन पुरुषों के लिए है जिनके लिंग मे बिल्कुल भी तनाव नहीं आता है। बेल्ट कोंडोम को पहनकर ऐसे पुरुष घंटों तक सेक्स कर सकते है, और अपने पार्टनर को चर्मसुख का आनंद दे सकते है, ये री-यूजेबल होता, सालों साल चलता है। इसका कोई साइड इफेक्ट भी नहीं है। इसके अलावा ऐसी महिला भी इस कोंडोम का इस्तेमाल कर सकती है, जिनके पास पार्टनर नहीं है, और सेक्स का मज़ा लेना चाहती है, महिला इस कोंडोम को हाथ मे लेकर अच्छे से रीयल लिंग जैसा आनंद ले सकती है।",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 935,
    "shopifyId": 8887254417545,
    "handle": "6-inch-bt-dotted-condom-u4oos",
    "title": "6 Inch BT Dotted Condom",
    "name": "6 Inch BT Dotted Condom",
    "shortName": "6 Inch BT Dotted Condom",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3499,
    "originalPrice": 3499,
    "mrpPrice": "₹3,499.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.5,
    "ratingCount": 1654,
    "reviewCount": 456,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_2849ec7b-0e7a-4e87-99b2-8e5c1d2e12f8.webp?v=1791196773",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_e319e3e9-fc8a-43b5-be8d-ba75f653a217.webp?v=1791196773",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_95b8a499-1ba9-4d1b-8cdc-3ce377b361a9.webp?v=1791196773"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "ड्रैगन कंडोम डॉटेड, जो सिलिकॉन से बना होता है, एक विशेष कंडोम है जो सेक्स के दौरान आराम और सुरक्षा प्रदान करता है",
      "इस कंडोम में छोटे-छोटे डॉट्स होते हैं, जो उत्तेजना को बढ़ाते हैं और दोनों पार्टनर्स को ज्यादा आनंद का अनुभव कराते हैं",
      "सिलिकॉन से बना होने के कारण, यह कंडोम लचीला, मजबूत और आरामदायक होता ह��",
      "इसके उपयोग से पुरुषों की सहनशक्ति बढ़ती है और सेक्स का समय भी अधिक होता है"
    ],
    "details": [
      "ड्रैगन कंडोम डॉटेड, जो सिलिकॉन से बना होता है, एक विशेष कंडोम है जो सेक्स के दौरान आराम और सुरक्षा प्रदान करता है",
      "इस कंडोम में छोटे-छोटे डॉट्स होते हैं, जो उत्तेजना को बढ़ाते हैं और दोनों पार्टनर्स को ज्यादा आनंद का अनुभव कराते हैं",
      "सिलिकॉन से बना होने के कारण, यह कंडोम लचीला, मजबूत और आरामदायक होता ह��",
      "इसके उपयोग से पुरुषों की सहनशक्ति बढ़ती है और सेक्स का समय भी अधिक होता है"
    ],
    "description": "ड्रैगन कंडोम डॉटेड, जो सिलिकॉन से बना होता है, एक विशेष कंडोम है जो सेक्स के दौरान आराम और सुरक्षा प्रदान करता है। इस कंडोम में छोटे-छोटे डॉट्स होते हैं, जो उत्तेजना को बढ़ाते हैं और दोनों पार्टनर्स को ज्यादा आनंद का अनुभव कराते हैं। सिलिकॉन से बना होने के कारण, यह कंडोम लचीला, मजबूत और आरामदायक होता ह��। इसके उपयोग से पुरुषों की सहनशक्ति बढ़ती है और सेक्स का समय भी अधिक होता है। इस कंडोम का डिज़ाइन पुरुषों को बेहतर नियंत्रण प्रदान करता है, जिससे उनकी टाइमिंग बढ़ती है। यह कंडोम एक सुरक्षित और संतोषजनक अनुभव सुनिश्चित करता है, जिससे दोनों पार्टनर्स को अधिक सुख मिलता है।",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 936,
    "shopifyId": 8887254155401,
    "handle": "dragon-condom-4-tdhfj",
    "title": "Dragon condom 4\"",
    "name": "Dragon condom 4\"",
    "shortName": "Dragon condom 4\"",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3499,
    "originalPrice": 3499,
    "mrpPrice": "₹3,499.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.6,
    "ratingCount": 1721,
    "reviewCount": 479,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_54e03bab-1b0c-47e7-9cc1-71e9089662d5.webp?v=1791196767",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_258b1cfb-e391-422b-815f-a3be0ac95de5.webp?v=1791196767",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_d43fa1a3-01f0-4abf-8d78-01e5a5fd8429.webp?v=1791196767"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "ड्रैगन कंडोम (4 इंच) - सिलिकॉन से बना हुआ और टाइमिंग बढ़ाने वाला ड्रैगन कंडोम 4 इंच का आकार होता है और यह उच्च गुणवत्ता वाले सिलिकॉन से बना होता है",
      "यह कंडोम पुरुषों की यौन प्रदर्शन को बेहतर बनाने के लिए डिज़ाइन किया गया है",
      "सिलिकॉन की सामग्री इसकी मजबूती और लचीलेपन को सुनिश्चित करती है, जिससे यह उपयोग में आरामदायक और सुरक्षित होता है",
      "इसका विशेष डिज़ाइन पुरुषों के लिए यौन समय को बढ़ाने में मदद करता है"
    ],
    "details": [
      "ड्रैगन कंडोम (4 इंच) - सिलिकॉन से बना हुआ और टाइमिंग बढ़ाने वाला ड्रैगन कंडोम 4 इंच का आकार होता है और यह उच्च गुणवत्ता वाले सिलिकॉन से बना होता है",
      "यह कंडोम पुरुषों की यौन प्रदर्शन को बेहतर बनाने के लिए डिज़ाइन किया गया है",
      "सिलिकॉन की सामग्री इसकी मजबूती और लचीलेपन को सुनिश्चित करती है, जिससे यह उपयोग में आरामदायक और सुरक्षित होता है",
      "इसका विशेष डिज़ाइन पुरुषों के लिए यौन समय को बढ़ाने में मदद करता है"
    ],
    "description": "ड्रैगन कंडोम (4 इंच) - सिलिकॉन से बना हुआ और टाइमिंग बढ़ाने वाला ड्रैगन कंडोम 4 इंच का आकार होता है और यह उच्च गुणवत्ता वाले सिलिकॉन से बना होता है। यह कंडोम पुरुषों की यौन प्रदर्शन को बेहतर बनाने के लिए डिज़ाइन किया गया है। सिलिकॉन की सामग्री इसकी मजबूती और लचीलेपन को सुनिश्चित करती है, जिससे यह उपयोग में आरामदायक और सुरक्षित होता है। इसका विशेष डिज़ाइन पुरुषों के लिए यौन समय को बढ़ाने में मदद करता है। यह कंडोम आपके यौन समय को लंबे समय तक बनाए रखने में सहायक होता है, जिससे आप और आपका साथी अधिक संतुष्ट हो सकते हैं। ड्रैगन कंडोम का उपयोग करने से आपको बेहतर नियंत्रण मिलता है और यह इरेक्शन को मजबूत बनाए रखने में मदद करता है। यह कंडोम पूरी तरह से पानी और तेल आधारित लुब्रिकेंट्स के साथ उपयोग किया जा सकता है, और यह किसी भी प्रकार के एलर्जी या असुविधा का कारण नहीं बनता है। इसके अलावा, यह लंबे समय तक टिकाऊ होता है, जिससे आपको हर उपयोग में भरोसा मिलता है। मुख्य विशेषताएँ: 4 इंच का आकार उच्च गुणवत्ता वाले सिलिकॉन से बना यौन समय को बढ़ाने में सहायक मजबूत और लचीला आरामदायक और सुरक्षित उपयोग Easy to Clean & Maintain: Silicone material kaafi hygienic aur easy to clean hota hai. Yeh waterproof hai, jisse aap easily product ko warm water aur mild soap se sanitize kar sakte hain, ensuring maximum cleanliness. Discreet and Private: Yeh product discreet packaging mein aata hai, jisse aap apne privacy ko secure rakh sakte hain. Iska use personal pleasure ke liye hota hai aur yeh exclusively aapke comfort aur safety ko ensure karta hai. Durable & Long-Lasting: High-quality silicone se banne ke karan, yeh product durable hai aur long-lasting use ke liye suitable hai. Proper care ke saath, aap isse bar-bar use kar sakte hain. उपयोग: ड्रैगन कंडोम का उपयोग करने से पहले, पैक को खोलकर कंडोम को सही तरीके से पहनें। इसके बाद, इसका उपयोग यौन गतिविधियों के दौरान किया जा सकता है।",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 915,
    "shopifyId": 9376675725530,
    "handle": "stick-joly",
    "title": "Dragon Intruder Waterproof Wand",
    "name": "dragon ≡ƒÉ▓ INTRUDER",
    "shortName": "Dragon Intruder Waterproof Wand",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Strokers",
    "price": 289,
    "sellPrice": "₹289.00",
    "mrp": 2899,
    "originalPrice": 2899,
    "mrpPrice": "₹2,899.00",
    "discount": 90,
    "discountPercentage": 90,
    "offPercent": "90% off",
    "rating": 4.8,
    "ratingCount": 5888,
    "reviewCount": 1426,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Waterproof Wand",
    "tags": [
      "Waterproof Wand",
      "Dragon Series Strokers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675725530_1.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675725530_2.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675725530_3.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675725530_4.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675725530_5.webp",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675725530_6.webp"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "details": [
      "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration",
      "Ultra-realistic dual textured canal made from soft skin-like elastic TPE",
      "Hands-free ergonomic grip design with whisper-quiet operation (<45dB)",
      "Removable inner silicone/TPE sleeve for effortless cleaning and hygiene",
      "100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box"
    ],
    "description": "Intelligent high-torque motor with automatic thrusting, rotation, and multi-speed vibration. Ultra-realistic dual textured canal made from soft skin-like elastic TPE. Hands-free ergonomic grip design with whisper-quiet operation (<45dB). Removable inner silicone/TPE sleeve for effortless cleaning and hygiene. 100% Plain Discreet Packaging ΓÇô Delivered in a secure, unbranded outer box.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE + Skin-Safe ABS",
      "Functions": "Multi-speed thrusting, rotating stimulation, deep suction",
      "Power Source": "USB Rechargeable Long-Life Battery",
      "Water Resistance": "Inner sleeve 100% washable and waterproof",
      "Noise": "< 45dB Whisper Quiet Motor",
      "Packaging": "100% Discreet Non-Branded Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 937,
    "shopifyId": 8887254122633,
    "handle": "dragon-condom-6",
    "title": "DRAGON CONDOM 6\"",
    "name": "DRAGON CONDOM 6\"",
    "shortName": "DRAGON CONDOM 6\"",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 88,
    "discountPercentage": 88,
    "offPercent": "88% off",
    "rating": 4.7,
    "ratingCount": 1788,
    "reviewCount": 502,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Trending",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_84d3989c-e6c6-4b11-aa8f-689c6f53aa60.jpg?v=1791196767",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2.jpg?v=1791196767",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3.jpg?v=1791196767",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/4.webp?v=1791196766",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/5.jpg?v=1791196767"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience",
      "🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance",
      "❤️ Who Should Use MISIVEDA™",
      "Recommended for use with water-based lubricants only"
    ],
    "details": [
      "Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience",
      "🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance",
      "❤️ Who Should Use MISIVEDA™",
      "Recommended for use with water-based lubricants only"
    ],
    "description": "Unleash Your Inner Fire – With Enhanced Power, Control & Pleasure Introducing MISIVEDA™ Premium Silicone DRAGON Condom , specially engineered for men who seek more than just protection – they seek performance, confidence, and deeper satisfaction . Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience. 🔑 Key Features : 🔹 Made from 100% Premium Silicone Unlike ordinary latex condoms, MISIVEDA™ is made entirely from body-safe, medical-grade silicone — offering exceptional durability, flexibility, and a more natural feel. 🔹 Thicker Silicone Layer for Extended Performance The slightly thicker silicone surface acts as a natural barrier, reducing direct sensitivity and helping you last significantly longer during intercourse. 🔹 Girth Enhancement Effect The snug yet firm structure gently compresses and shapes the penis, resulting in a visibly thicker appearance — intensifying the experience for your partner. 🔹 Built-in Length Extension (1 Inch) A solid, extended tip adds approximately 1 inch to your penis length , allowing for deeper penetration and enhanced confidence in bed. 🔹 Reusable & Easy to Clean Unlike traditional condoms, MISIVEDA™ is washable and reusable — making it not only effective but also eco-friendly and cost-efficient. 🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance. ❤️ Who Should Use MISIVEDA™? ✅ Men seeking to improve stamina naturally ✅ Men wanting temporary enhancement in size ✅ Couples looking to add variety and intensity to their intimacy ✅ Individuals allergic to latex (latex-free solution) 📦 What's Inside the Box? 1 x MISIVEDA™ Silicone Reusable DRAGON Condom Storage case + Cleaning instructions included ⚠️ Note: This product is not a contraceptive and does not provide protection against STDs. Recommended for use with water-based lubricants only. Wash before and after every use with mild soap and warm water.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 938,
    "shopifyId": 8887254483081,
    "handle": "1-bigger-harder-wilder-the-explosive-vibrating-wolf-tooth-crystal-sleeve-ikr0c",
    "title": "1🔥 Bigger. Harder. Wilder. 🔥 💦 The Explosive Vibrating Wolf-Tooth Crystal Sleeve 💦",
    "name": "1🔥 Bigger. Harder. Wilder. 🔥 💦 The Explosive Vibrating Wolf-Tooth Crystal Sleeve 💦",
    "shortName": "1🔥 Bigger. Harder. Wilder. 🔥 💦 The...",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3180,
    "originalPrice": 3180,
    "mrpPrice": "₹3,180.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.8,
    "ratingCount": 1855,
    "reviewCount": 525,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_4c928055-276e-4e9b-b984-494443e27397.png?v=1791196774",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_ec27611f-f41c-4b5c-98fe-fab53de23352.webp?v=1791196774",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_d16434f2-4c81-4563-8a44-3243b7e6b2d5.png?v=1791196774",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/4_c3a07d86-4344-4738-9f6f-bcfba95d50ed.png?v=1791196774",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/5_762cf079-7de8-4452-b32f-6cc894bb92b4.webp?v=1791196774",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/6_91891355-3f8b-4365-b808-e78e62c39346.webp?v=1791196774",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/7_661749e8-2727-4619-913f-2eb2a6b3757e.png?v=1791196775",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/8_2e6212fa-a9aa-4697-aaa9-4ba8032736e5.png?v=1791196774",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/9_5f618854-4862-471d-b47d-d9dde7975dd2.png?v=1791196775",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/10_d2d55bb7-deea-4d51-bd15-bc75d992048c.webp?v=1791196774"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "【Vibrating Penis Sleeve】 This penis sleeve is reusable and we have also installed a bullet-shaped vibrator in the head of the sleeve",
      "The powerful vibrating sensation allows you and your partner to experience different levels of pleasure during sex",
      "It also swiftly stimulates your penis and your partner's G-spot, P-spot and vagina",
      "【Authentic experience】 Vibration extenders allow you to explore a variety of sensations"
    ],
    "details": [
      "【Vibrating Penis Sleeve】 This penis sleeve is reusable and we have also installed a bullet-shaped vibrator in the head of the sleeve",
      "The powerful vibrating sensation allows you and your partner to experience different levels of pleasure during sex",
      "It also swiftly stimulates your penis and your partner's G-spot, P-spot and vagina",
      "【Authentic experience】 Vibration extenders allow you to explore a variety of sensations"
    ],
    "description": "We have installed a bullet-shaped vibrator in the head of the sleeve, which makes your penis longer and harder, allowing you to ejaculate longer and promoting a perfect sexual experience. 【Vibrating Penis Sleeve】 This penis sleeve is reusable and we have also installed a bullet-shaped vibrator in the head of the sleeve. The powerful vibrating sensation allows you and your partner to experience different levels of pleasure during sex. It also swiftly stimulates your penis and your partner's G-spot, P-spot and vagina. 【Authentic experience】 Vibration extenders allow you to explore a variety of sensations. The vibrating, thrusting cock head spreads stimulating orgasms throughout your body. Following your beat, powerful vibrations are concentrated near the tip for maximum effect, perfectly kissing her sweet spot and triggering ecstasy. 【Male Sex Toys】 The front-end penis sleeve locks your glans firmly into place, giving you intense stimulation, and the one-piece testicle ring not only holds it in place, but also slows down your blood flow, making your penis longer and harder, allowing you to ejaculate longer, and promoting a perfect sexual experience. 【Address Erectile Dysfunction (ED)】 Designed to effectively offer extra support and functionality, it continuously and repeatedly trains the penis, aiming to extend ejaculation time. This provides comprehensive training for erection and endurance. 【Enhance sexual pleasure between couples】 Sex toys for couples, we this penis sleeve needs to be used with lubricant, penis sleeve not only helps to extend male stamina, but also helps to stimulate the female clitoris, used as a male enhancement penis extender. 【Personal Lubricant Recommendation】For the best experience, we highly recommend pairing this sleeve with a water-based personal lubricant . Lubricant reduces friction, enhances comfort, and intensifies sensations for both partners. It also protects the soft TPE material of the sleeve, making it last longer and stay in perfect condition. 【Soft and flexible material】 This penis sleeve is made of TPE material, It is non-toxic, odorless and elastic, can lightly fit your skin, has outstanding tear resistance and elasticity, soft, suitable for all sizes, let you feel comfortable when playing with your partner, reusable, easy to clean, safe and reliable. 180-day money-back guarantee OUR GUARANTEE: We believe we have some of the most innovative products in the world. and we want to make sure we back that up with a risk-free 180-day guarantee. If for any reason you do not have a positive experience. we will make every effort to ensure that you are satisfied with your purchase. We want you to rest assured that there is absolutely zero risk in buying and trying out products. If you don't like it and don't feel bad. we'll do it right. We email support. If you need help. please contact us.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 939,
    "shopifyId": 8887254188169,
    "handle": "dragon-condom-4",
    "title": "DRAGON CONDOM 4\"",
    "name": "DRAGON CONDOM 4\"",
    "shortName": "DRAGON CONDOM 4\"",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 88,
    "discountPercentage": 88,
    "offPercent": "88% off",
    "rating": 4.5,
    "ratingCount": 1922,
    "reviewCount": 198,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsApp_Image_2024-01-28_at_09.58.38_1_200x200_601bc50a-c63e-49a4-accd-e2db9c898314.jpg?v=1791196768",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2024-01-28at09.58.31_200x200_fbbd5d5b-b8ca-4102-a1dc-639422bfce92.jpg?v=1791196769",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/41yzdVDoVjL_e7ab39ca-d01e-4c7a-83e7-d5f7e2d02c7e.jpg?v=1791196768",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/51qQ-GZgJ7L._SX679_6bd1c658-73e9-4960-b2ee-b6f70e41b3af.webp?v=1791196768",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/41oFuNbpVWL_8498a096-71af-4674-b638-23bc59c270a4.jpg?v=1791196768"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience",
      "🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance",
      "❤️ Who Should Use MISIVEDA™",
      "Recommended for use with water-based lubricants only"
    ],
    "details": [
      "Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience",
      "🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance",
      "❤️ Who Should Use MISIVEDA™",
      "Recommended for use with water-based lubricants only"
    ],
    "description": "Unleash Your Inner Fire – With Enhanced Power, Control & Pleasure Introducing MISIVEDA™ Premium Silicone DRAGON Condom , specially engineered for men who seek more than just protection – they seek performance, confidence, and deeper satisfaction . Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience. 🔑 Key Features : 🔹 Made from 100% Premium Silicone Unlike ordinary latex condoms, MISIVEDA™ is made entirely from body-safe, medical-grade silicone — offering exceptional durability, flexibility, and a more natural feel. 🔹 Thicker Silicone Layer for Extended Performance The slightly thicker silicone surface acts as a natural barrier, reducing direct sensitivity and helping you last significantly longer during intercourse. 🔹 Girth Enhancement Effect The snug yet firm structure gently compresses and shapes the penis, resulting in a visibly thicker appearance — intensifying the experience for your partner. 🔹 Built-in Length Extension (1 Inch) A solid, extended tip adds approximately 1 inch to your penis length , allowing for deeper penetration and enhanced confidence in bed. 🔹 Reusable & Easy to Clean Unlike traditional condoms, MISIVEDA™ is washable and reusable — making it not only effective but also eco-friendly and cost-efficient. 🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance. ❤️ Who Should Use MISIVEDA™? ✅ Men seeking to improve stamina naturally ✅ Men wanting temporary enhancement in size ✅ Couples looking to add variety and intensity to their intimacy ✅ Individuals allergic to latex (latex-free solution) 📦 What's Inside the Box? 1 x MISIVEDA™ Silicone Reusable DRAGON Condom Storage case + Cleaning instructions included ⚠️ Note: This product is not a contraceptive and does not provide protection against STDs. Recommended for use with water-based lubricants only. Wash before and after every use with mild soap and warm water.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 940,
    "shopifyId": 8887254089865,
    "handle": "dragon-condom-8",
    "title": "DRAGON CONDOM 8\"",
    "name": "DRAGON CONDOM 8\"",
    "shortName": "DRAGON CONDOM 8\"",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 88,
    "discountPercentage": 88,
    "offPercent": "88% off",
    "rating": 4.6,
    "ratingCount": 1989,
    "reviewCount": 221,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Trending",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/dragon0_200x200_da524504-f374-494d-9bde-d8ef18790fa6.jpg?v=1791196766",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_65c9237d-d0cc-4e28-90b8-db39b0ae98eb.jpg?v=1791196766",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/8.webp?v=1791196765",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3.webp?v=1791196766",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/4.jpg?v=1791196766",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/5_9e56e46a-c4b0-4174-8867-ce0fb323dc1a.jpg?v=1791196766"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience",
      "🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance",
      "❤️ Who Should Use MISIVEDA™",
      "Recommended for use with water-based lubricants only"
    ],
    "details": [
      "Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience",
      "🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance",
      "❤️ Who Should Use MISIVEDA™",
      "Recommended for use with water-based lubricants only"
    ],
    "description": "Unleash Your Inner Fire – With Enhanced Power, Control & Pleasure Introducing MISIVEDA™ Premium Silicone DRAGON Condom , specially engineered for men who seek more than just protection – they seek performance, confidence, and deeper satisfaction . Crafted from high-grade pure silicone , this next-gen condom enhances size, improves stamina, and elevates the entire intimate experience. 🔑 Key Features : 🔹 Made from 100% Premium Silicone Unlike ordinary latex condoms, MISIVEDA™ is made entirely from body-safe, medical-grade silicone — offering exceptional durability, flexibility, and a more natural feel. 🔹 Thicker Silicone Layer for Extended Performance The slightly thicker silicone surface acts as a natural barrier, reducing direct sensitivity and helping you last significantly longer during intercourse. 🔹 Girth Enhancement Effect The snug yet firm structure gently compresses and shapes the penis, resulting in a visibly thicker appearance — intensifying the experience for your partner. 🔹 Built-in Length Extension (1 Inch) A solid, extended tip adds approximately 1 inch to your penis length , allowing for deeper penetration and enhanced confidence in bed. 🔹 Reusable & Easy to Clean Unlike traditional condoms, MISIVEDA™ is washable and reusable — making it not only effective but also eco-friendly and cost-efficient. 🔹 Secure, Comfortable Fit Ergonomically designed to fit most sizes comfortably while ensuring no slippage during performance. ❤️ Who Should Use MISIVEDA™? ✅ Men seeking to improve stamina naturally ✅ Men wanting temporary enhancement in size ✅ Couples looking to add variety and intensity to their intimacy ✅ Individuals allergic to latex (latex-free solution) 📦 What's Inside the Box? 1 x MISIVEDA™ Silicone Reusable DRAGON Condom Storage case + Cleaning instructions included ⚠️ Note: This product is not a contraceptive and does not provide protection against STDs. Recommended for use with water-based lubricants only. Wash before and after every use with mild soap and warm water.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 941,
    "shopifyId": 8887254450313,
    "handle": "6-inch-bt-condom-8gveg",
    "title": "6 Inch BT Condom",
    "name": "6 Inch BT Condom",
    "shortName": "6 Inch BT Condom",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3499,
    "originalPrice": 3499,
    "mrpPrice": "₹3,499.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.7,
    "ratingCount": 2056,
    "reviewCount": 244,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_a800ac54-de5d-4e78-9605-dc02e14a614c.webp?v=1791196773",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_e1ccede7-5135-4585-b661-ea51ed5c4ec3.webp?v=1791196774",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_bc91e30b-d653-49d5-a5a1-51811390f606.webp?v=1791196773"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "6 Inch BT Dragon Condom with Reusable Man Condom It looks like you might be referring to products related to sexual health or adult entertainment",
      "If you’re considering products like these, here are some key points to keep in mind: 1",
      "**Reusable Products**: If considering a reusable condom, verify that it is designed for multiple use and is easy to clean and maintain",
      "Ensure that it can be safely reused according to the manufacturer's instructions"
    ],
    "details": [
      "6 Inch BT Dragon Condom with Reusable Man Condom It looks like you might be referring to products related to sexual health or adult entertainment",
      "If you’re considering products like these, here are some key points to keep in mind: 1",
      "**Reusable Products**: If considering a reusable condom, verify that it is designed for multiple use and is easy to clean and maintain",
      "Ensure that it can be safely reused according to the manufacturer's instructions"
    ],
    "description": "6 Inch BT Dragon Condom with Reusable Man Condom It looks like you might be referring to products related to sexual health or adult entertainment. A \"6 Inch BT Condom\" could imply a condom designed for a specific size, while a \"Reusable Man Condom\" typically suggests a product aimed at providing an alternative to traditional disposable condoms. It's important to ensure that all sexual health products are safe, effective, and properly used to prevent sexually transmitted infections (STIs) and unintended pregnancies. If you’re considering products like these, here are some key points to keep in mind: 1. **Safety and Effectiveness**: Make sure that any condom you choose is made from safe materials (such as latex or polyurethane) and is approved by relevant health authorities. 2. **Reusable Products**: If considering a reusable condom, verify that it is designed for multiple use and is easy to clean and maintain. Ensure that it can be safely reused according to the manufacturer's instructions. 3. **Size and Fit**: Proper sizing is crucial for comfort and effectiveness. If you need a specific size (like a 6-inch option, which may refer to the length or girth), look for products specifically designed for that. 4. **Read Reviews**: Look for customer feedback and reviews to gauge the experiences of others with the product. 5. **Consult Health Professionals**: If you have questions about sexual health products, speaking with a healthcare provider can provide valuable insights and recommendations. If this was not what you were looking for, or if you have a specific question or topic in mind, feel free to provide more details!",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 920,
    "shopifyId": 9376675266778,
    "handle": "dragon-condom-for-men-6-inch-durable-size-skin-friendly-silicone-comfortable-fit-single-piece-ultra-soft-long-lasted-extra-size",
    "title": "Dragon Condom 6-Inch Silicone Sleeve",
    "name": "Dragon Condom",
    "shortName": "Dragon Condom 6-Inch Silicone Sleeve",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Condoms & Sleeves",
    "price": 259,
    "sellPrice": "₹259.00",
    "mrp": 2899,
    "originalPrice": 2899,
    "mrpPrice": "₹2,899.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.9,
    "ratingCount": 7473,
    "reviewCount": 1821,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Bestseller",
      "Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675266778_1.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675266778_2.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675266778_3.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675266778_4.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675266778_5.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675266778_6.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675266778_7.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675266778_8.jpg"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "6-Inch Extra Size Sleeve designed for superior comfort and durability",
      "Ultra-soft medical grade skin-friendly silicone provides natural sensation",
      "Ergonomic flexible ribbed exterior for enhanced intimate stimulation",
      "Reusable, washable, and 100% waterproof for easy hygiene",
      "Discreet plain packaging with zero product indication on parcel"
    ],
    "details": [
      "6-Inch Extra Size Sleeve designed for superior comfort and durability",
      "Ultra-soft medical grade skin-friendly silicone provides natural sensation",
      "Ergonomic flexible ribbed exterior for enhanced intimate stimulation",
      "Reusable, washable, and 100% waterproof for easy hygiene",
      "Discreet plain packaging with zero product indication on parcel"
    ],
    "description": "6-Inch Extra Size Sleeve designed for superior comfort and durability. Ultra-soft medical grade skin-friendly silicone provides natural sensation. Ergonomic flexible ribbed exterior for enhanced intimate stimulation. Reusable, washable, and 100% waterproof for easy hygiene. Discreet plain packaging with zero product indication on parcel.",
    "specifications": {
      "Material": "Medical Grade Ultra-Soft Silicone",
      "Length": "6 Inches (Stretchable Fit)",
      "Waterproof": "100% Fully Waterproof",
      "Reusable": "Yes, Easy to Clean with Warm Water",
      "Packaging": "100% Discreet Plain Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 921,
    "shopifyId": 9376675168474,
    "handle": "sex-toys-vibrating-massager-for-unisex",
    "title": "Vibrating Wand Massager for Women",
    "name": "Vibrating Wand Massager for Women",
    "shortName": "Vibrating Wand Massager for Women",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Vibrating Massagers",
    "price": 269,
    "sellPrice": "₹269.00",
    "mrp": 2499,
    "originalPrice": 2499,
    "mrpPrice": "₹2,499.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.6,
    "ratingCount": 7790,
    "reviewCount": 1900,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Multi-Speed Wand",
    "tags": [
      "Multi-Speed Wand",
      "Vibrating Massagers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675168474_1.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675168474_2.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675168474_3.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675168474_4.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675168474_5.jpg"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "High-power whisper-quiet motor with 8 variable speeds and 20 pattern modes",
      "Silky smooth body-safe medical silicone head that bends smoothly",
      "USB magnetic / rechargeable with 2+ hours continuous runtime",
      "IPX7 waterproof rating for easy cleaning in shower or bath",
      "100% discreet packaging with completely confidential delivery"
    ],
    "details": [
      "High-power whisper-quiet motor with 8 variable speeds and 20 pattern modes",
      "Silky smooth body-safe medical silicone head that bends smoothly",
      "USB magnetic / rechargeable with 2+ hours continuous runtime",
      "IPX7 waterproof rating for easy cleaning in shower or bath",
      "100% discreet packaging with completely confidential delivery"
    ],
    "description": "High-power whisper-quiet motor with 8 variable speeds and 20 pattern modes. Silky smooth body-safe medical silicone head that bends smoothly. USB magnetic / rechargeable with 2+ hours continuous runtime. IPX7 waterproof rating for easy cleaning in shower or bath. 100% discreet packaging with completely confidential delivery.",
    "specifications": {
      "Speeds & Modes": "8 Speeds & 20 Vibration Modes",
      "Material": "Body-Safe Medical Grade Silicone + ABS",
      "Battery": "Rechargeable Lithium-ion (USB Cable Included)",
      "Noise Level": "< 40dB Ultra Quiet",
      "Waterproof": "IPX7 Waterproof",
      "Packaging": "Confidential Discreet Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 943,
    "shopifyId": 8887254745225,
    "handle": "mousse-luxury-rabbit-vibrator",
    "title": "Mousse Luxury Rabbit Vibrator",
    "name": "Mousse Luxury Rabbit Vibrator",
    "shortName": "Mousse Luxury Rabbit Vibrator",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Luxury Vibrators & Massagers",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 1999,
    "originalPrice": 1999,
    "mrpPrice": "₹1,999.00",
    "discount": 85,
    "discountPercentage": 85,
    "offPercent": "85% off",
    "rating": 4.5,
    "ratingCount": 2190,
    "reviewCount": 290,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Trending",
    "tags": [
      "Top Rated",
      "Luxury Vibrators & Massagers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/rnxze_512.jpg?v=1791196780",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2026-09-15at9.07.53PM_1.jpg?v=1791196780",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2026-09-15at9.07.53PM_2.jpg?v=1791196780",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2026-09-15at9.07.53PM.jpg?v=1791196780",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2026-09-15at9.07.54PM.jpg?v=1791196780"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "The Luxury Rabbit Vibrator is a premium sex toy that offers a luxurious and satisfying experience",
      "It is designed to be a versatile toy that can be enjoyed by both solo users and couples",
      "The vibrator is made with a velvet touch and feel, making it smooth and comfortable to use",
      "It is also long in size, providing a deeper and more fulfilling experience"
    ],
    "details": [
      "The Luxury Rabbit Vibrator is a premium sex toy that offers a luxurious and satisfying experience",
      "It is designed to be a versatile toy that can be enjoyed by both solo users and couples",
      "The vibrator is made with a velvet touch and feel, making it smooth and comfortable to use",
      "It is also long in size, providing a deeper and more fulfilling experience"
    ],
    "description": "The Luxury Rabbit Vibrator is a premium sex toy that offers a luxurious and satisfying experience. It is designed to be a versatile toy that can be enjoyed by both solo users and couples. The vibrator is made with a velvet touch and feel, making it smooth and comfortable to use. It is also long in size, providing a deeper and more fulfilling experience. It has multiple speed settings, allowing you to customize the intensity of the vibrations to your liking. The rabbit-style external tickler is designed to hit the G-spot easily, providing powerful stimulation and helping to achieve multiple orgasms. The waterproof design makes it safe to use in the shower or bath. Overall, the Luxury Rabbit Vibrator is a high-end product that promises to deliver a unique and satisfying experience. Whether you're using it for solo play or with a partner, it is sure to provide the ultimate pleasure.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 922,
    "shopifyId": 9376675004634,
    "handle": "full-body-massager-for-women-men-rechargeable-wireless-massager-machine-for-pain-relief-handheld-massager-with-medical-grade-silicone-8-speeds-20-modes",
    "title": "Full Body Massager (8 Speeds, 20 Modes)",
    "name": "Full Body Massager for Women & Men, Rechargeable Wireless Massager Machine for Handheld Massager with Medical Grade Silicone, 8 Speeds, 20 Modes",
    "shortName": "Full Body Massager (8 Speeds, 20 Modes)",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Vibrating Massagers",
    "price": 279,
    "sellPrice": "₹279.00",
    "mrp": 2599,
    "originalPrice": 2599,
    "mrpPrice": "₹2,599.00",
    "discount": 89,
    "discountPercentage": 89,
    "offPercent": "89% off",
    "rating": 4.7,
    "ratingCount": 8107,
    "reviewCount": 1979,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "20 Modes Bestseller",
    "tags": [
      "20 Modes Bestseller",
      "Vibrating Massagers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_1.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_2.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_3.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_4.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_5.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_6.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_7.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_8.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_9.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_10.jpg",
      "https://mesho-flash-sale.vercel.app/assets/wellness/toyzone/p_9376675004634_11.jpg"
    ],
    "sizes": [
      "Standard Size (Discreet Pack)"
    ],
    "highlights": [
      "High-power whisper-quiet motor with 8 variable speeds and 20 pattern modes",
      "Silky smooth body-safe medical silicone head that bends smoothly",
      "USB magnetic / rechargeable with 2+ hours continuous runtime",
      "IPX7 waterproof rating for easy cleaning in shower or bath",
      "100% discreet packaging with completely confidential delivery"
    ],
    "details": [
      "High-power whisper-quiet motor with 8 variable speeds and 20 pattern modes",
      "Silky smooth body-safe medical silicone head that bends smoothly",
      "USB magnetic / rechargeable with 2+ hours continuous runtime",
      "IPX7 waterproof rating for easy cleaning in shower or bath",
      "100% discreet packaging with completely confidential delivery"
    ],
    "description": "High-power whisper-quiet motor with 8 variable speeds and 20 pattern modes. Silky smooth body-safe medical silicone head that bends smoothly. USB magnetic / rechargeable with 2+ hours continuous runtime. IPX7 waterproof rating for easy cleaning in shower or bath. 100% discreet packaging with completely confidential delivery.",
    "specifications": {
      "Speeds & Modes": "8 Speeds & 20 Vibration Modes",
      "Material": "Body-Safe Medical Grade Silicone + ABS",
      "Battery": "Rechargeable Lithium-ion (USB Cable Included)",
      "Noise Level": "< 40dB Ultra Quiet",
      "Waterproof": "IPX7 Waterproof",
      "Packaging": "Confidential Discreet Box"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "64.2K",
      "totalProducts": 22
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 34500
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Customer",
        "rating": 5,
        "comment": "Packaging was completely plain and discreet, no one could tell what was inside. Product quality is superb and motor is powerful!",
        "date": "2 days ago",
        "helpful": 48
      },
      {
        "id": 2,
        "user": "Rahul M.",
        "rating": 5,
        "comment": "Best deal compared to other online stores. Silicone feels very soft and realistic, easy to wash and charge. Highly recommended.",
        "date": "5 days ago",
        "helpful": 48
      },
      {
        "id": 3,
        "user": "Private Buyer",
        "rating": 4,
        "comment": "Fast 3-day delivery. Very good build quality and battery lasts a long time.",
        "date": "1 week ago",
        "helpful": 48
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 944,
    "shopifyId": 8887254057097,
    "handle": "dragon-condom-9-inch",
    "title": "Dragon Condom ( 9 INCH)",
    "name": "Dragon Condom ( 9 INCH)",
    "shortName": "Dragon Condom ( 9 INCH)",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3499,
    "originalPrice": 3499,
    "mrpPrice": "₹3,499.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.6,
    "ratingCount": 2257,
    "reviewCount": 313,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/1_08957304-714f-4325-9ffa-489415b1a5c0.webp?v=1791196765",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/2_bae65568-8b2f-43e4-9219-a463951eb5bc.webp?v=1791196765",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/3_870983e2-a946-4bbe-96f3-fcfd5651bfad.webp?v=1791196765"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "ड्रैगन कोंडोम के निम्नलिखित फायदे है :- इसको लगाने से साइज़ 9",
      "5 इंच तक हो जाता है",
      "सेक्स टाइमिंग 40 से 50 मिनट तक कर देता है",
      "लिंग के साइज की लम्बाई और मोटाई एक साथ बढ़ा देता है"
    ],
    "details": [
      "ड्रैगन कोंडोम के निम्नलिखित फायदे है :- इसको लगाने से साइज़ 9",
      "5 इंच तक हो जाता है",
      "सेक्स टाइमिंग 40 से 50 मिनट तक कर देता है",
      "लिंग के साइज की लम्बाई और मोटाई एक साथ बढ़ा देता है"
    ],
    "description": "ड्रैगन कोंडोम के निम्नलिखित फायदे है :- इसको लगाने से साइज़ 9.5 इंच तक हो जाता है। सेक्स टाइमिंग 40 से 50 मिनट तक कर देता है। लिंग के साइज की लम्बाई और मोटाई एक साथ बढ़ा देता है। अनचाही प्रेगनेंसी को रोकता है, री यूजेबल होता है, सालो साल चलता है, पार्टनर के साथ ज़िन्दगी में ख़ुशी भर देता है, कोई साइड इफ़ेक्ट भी नहीं है I",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 945,
    "shopifyId": 8887254712457,
    "handle": "12-inch-long-foreskin-dildo-adult-sex-toy-for-women-and-men",
    "title": "12 inch Long Realistic Foreskin Dildo for Women",
    "name": "12 inch Long Realistic Foreskin Dildo for Women",
    "shortName": "12 inch Long Foreskin Dildo Adult Sex...",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Realistic Silicone Dildos",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 1999,
    "originalPrice": 1999,
    "mrpPrice": "₹1,999.00",
    "discount": 85,
    "discountPercentage": 85,
    "offPercent": "85% off",
    "rating": 4.7,
    "ratingCount": 2324,
    "reviewCount": 336,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Realistic Silicone Dildos",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a1.webp?v=1791196779",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a2_9567e470-97f8-4b13-ba0b-7640d2331946.jpg?v=1791196779",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a3_3f448104-7e12-47f2-b41b-ea7b26d4fc57.jpg?v=1791196780",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a4_39d95f93-6303-4ebe-97a5-f71f76ebd274.jpg?v=1791196779",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a5.jpg?v=1791196779"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Its lifelike design enhances visual realism and delivers varied, natural sensations with every use",
      "Ideal for those who prefer a more authentic, untouched experience",
      "A unique pleasure toy for men, women, and anyone seeking realism and intensity Ultra Big Dildo – The Ultimate Upgrade: Ready to take things further",
      "This thick, realistic dildo is built for deep, intense pleasure"
    ],
    "details": [
      "Its lifelike design enhances visual realism and delivers varied, natural sensations with every use",
      "Ideal for those who prefer a more authentic, untouched experience",
      "A unique pleasure toy for men, women, and anyone seeking realism and intensity Ultra Big Dildo – The Ultimate Upgrade: Ready to take things further",
      "This thick, realistic dildo is built for deep, intense pleasure"
    ],
    "description": "Realistic Uncut Design for Authentic Sensation: This large, thick dildo is crafted with a hyper-realistic uncut foreskin, faithfully replicating the look and feel of an uncircumcised penis. Its lifelike design enhances visual realism and delivers varied, natural sensations with every use. Ideal for those who prefer a more authentic, untouched experience. A unique pleasure toy for men, women, and anyone seeking realism and intensity Ultra Big Dildo – The Ultimate Upgrade: Ready to take things further? This thick, realistic dildo is built for deep, intense pleasure. Its gently curved, veiny shaft is designed to fill you up completely, while the detailed foreskin and lifelike glans add an extra layer of sensation with every thrust. Whether you're flying solo or sharing the experience, this toy delivers maximum satisfaction—intense, real, and unforgettable Extra-Large Dildo for Intense, Full-Body Pleasure: Measuring 12 inches in total length with 9 inches insertable and a thick 2.16-inch diameter, this massive dildo delivers a satisfyingly heavy, lifelike feel. Its oversized girth enhances every thrust with deep, stretched-out sensations, pushing your pleasure to the next level. Designed for size lovers seeking a truly fulfilling experience Premium Dual-Density Silicone Dildo with Powerful Suction Base: Crafted from high-quality liquid silicone, this dildo combines a firm inner core for stability with a soft, skin-like outer layer for a truly realistic feel. The flexible suction cup base provides strong, reliable hold on most smooth surfaces, making it perfect for hands-free fun in a variety of positions and settings Versatile Pleasure for Every Desire: Whether you're craving vaginal, clitoral, G-spot, or anal stimulation, this premium giant dildo delivers powerful sensations in all the right ways. Compatible with most strap-on harnesses, it’s perfect for solo adventures or couples exploring deeper intimacy. A must-have for any adult toy collection. Pro tip: Pair with water-based lube for maximum comfort and glide Discreet Packaging & Easy Cleaning: This sex toys arrives in plain, unmarked packaging. After use, cleaning is quick and effortless—simply rinse with warm water and mild soap, or use a toy cleaner to keep it fresh, hygienic, and always ready for your next experience",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 946,
    "shopifyId": 8887254024329,
    "handle": "dual-density-silicone-stud-dildo-8-inch-realistic-dildos-from-condom-depot",
    "title": "Dual Density Silicone Stud Dildo 8 inch | Realistic Dildos from Condom Depot",
    "name": "Dual Density Silicone Stud Dildo 8 inch | Realistic Dildos from Condom Depot",
    "shortName": "Dual Density Silicone Stud Dildo 8 in...",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Dragon Series Condoms & Sleeves",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 1999,
    "originalPrice": 1999,
    "mrpPrice": "₹1,999.00",
    "discount": 85,
    "discountPercentage": 85,
    "offPercent": "85% off",
    "rating": 4.8,
    "ratingCount": 891,
    "reviewCount": 359,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Trending",
    "tags": [
      "Top Rated",
      "Dragon Series Condoms & Sleeves",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a1_b31263a2-ea09-4a06-940f-2f4b86dc81e3.webp?v=1791196764",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/a2_2013f62e-1e06-40f3-a2fd-16019d8cb044.webp?v=1791196764"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Jumbo Penis Sleeve should be in your collection for sure",
      "Buy Jumbo Penis Extender Condom Sleeve now",
      "A penis sleeve is a silicone sex toy for men used to treat erectile dysfunction or premature ejaculation to improve sexual performance",
      "It is used to increase the circumference and length of a manrsquo;s penis"
    ],
    "details": [
      "Jumbo Penis Sleeve should be in your collection for sure",
      "Buy Jumbo Penis Extender Condom Sleeve now",
      "A penis sleeve is a silicone sex toy for men used to treat erectile dysfunction or premature ejaculation to improve sexual performance",
      "It is used to increase the circumference and length of a manrsquo;s penis"
    ],
    "description": "Powerful multi-speed vibrations Powerful motor located in the tip Sturdy suction cup base with easy lift tab Waterproof: Maybe be used in or out of water Requires 2 AA batteries to operate (not included); 1-year manufacturer warranty Penis Extender Condom Sleeve is another great penis sleeve from a decent brand that will help you have a great time while you decide to spend some quality time with your partner. Jumbo Penis Extender Condom Sleeve is a superb way to put an end to all your share of worries about the size of your penis and not being able to satisfy the sexual needs of your lovely partner. We understand what kind of issues you face while getting close to your lovely partner and therefore, we suggest you buy this amazing product in order to overcome each and every major problem of your not-so-alive and affected sex life. Jumbo Penis Sleeve should be in your collection for sure. Buy Jumbo Penis Extender Condom Sleeve now ! A penis sleeve is a silicone sex toy for men used to treat erectile dysfunction or premature ejaculation to improve sexual performance. It is used to increase the circumference and length of a manrsquo;s penis. During sexual intercourse or masturbation, a penile sleeve is wrapped around the",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 947,
    "shopifyId": 8887253860489,
    "handle": "shethrill-massager",
    "title": "🔥 SheThrill Massager 💦",
    "name": "🔥 SheThrill Massager 💦",
    "shortName": "🔥 SheThrill Massager 💦",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Luxury Vibrators & Massagers",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 3499,
    "originalPrice": 3499,
    "mrpPrice": "₹3,499.00",
    "discount": 91,
    "discountPercentage": 91,
    "offPercent": "91% off",
    "rating": 4.5,
    "ratingCount": 958,
    "reviewCount": 382,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Bestseller",
    "tags": [
      "Top Rated",
      "Luxury Vibrators & Massagers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/11_cf28c864-4df6-4526-82e8-bc1524213a2e.jpg?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/22.jpg?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/33_4991f6bb-44c9-4316-be75-552be545b831.webp?v=1791196759",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/4_5b647032-3179-41df-a435-fcd67d827247.jpg?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/5_e7666710-5b37-4ef2-8104-97b8d7d848da.jpg?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/6_5147b1f8-a79a-4b3b-9894-79936264ed3b.webp?v=1791196759",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/7_e8d35fb1-2e42-4c5d-94e5-274d900b70b0.jpg?v=1791196760",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/8_02b1d890-d2cb-4671-ba31-835e0d132507.jpg?v=1791196760"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "Experience gentle comfort and full-body relaxation with this premium soft-silicone body massager",
      "Designed to reduce stress, improve blood circulation, and provide soothing relief to tired muscles",
      "Perfect for those looking for a compact, stylish, and efficient wellness device for self-care routines",
      "⚙️ Key Features: ✅ High-Quality Soft Silicone: Skin-friendly, smooth, and flexible design ensures maximum comfort"
    ],
    "details": [
      "Experience gentle comfort and full-body relaxation with this premium soft-silicone body massager",
      "Designed to reduce stress, improve blood circulation, and provide soothing relief to tired muscles",
      "Perfect for those looking for a compact, stylish, and efficient wellness device for self-care routines",
      "⚙️ Key Features: ✅ High-Quality Soft Silicone: Skin-friendly, smooth, and flexible design ensures maximum comfort"
    ],
    "description": "Experience gentle comfort and full-body relaxation with this premium soft-silicone body massager . Designed to reduce stress, improve blood circulation, and provide soothing relief to tired muscles. Perfect for those looking for a compact, stylish, and efficient wellness device for self-care routines. ⚙️ Key Features: ✅ High-Quality Soft Silicone: Skin-friendly, smooth, and flexible design ensures maximum comfort. ✅ Multiple Vibration Modes: Adjustable intensity levels to suit different relaxation needs. ✅ Ergonomic Curved Design: Reaches body contours easily for a soothing experience. ✅ USB Rechargeable: Long-lasting battery with convenient charging. ✅ Water-Resistant & Easy to Clean: Safe for everyday use and simple maintenance. ✅ Low Noise Motor: Designed for quiet, peaceful operation. 💎 Benefits: Relieves body tension and stiffness. Helps reduce stress and anxiety. Promotes better sleep and relaxation. Ideal for daily body care routines. 📦 Package Includes: 1 × Rechargeable Body Massager 1 × USB Charging Cable 1 × User Manual 💠 Why You’ll Love It: Compact, elegant, and easy to use — this body massager brings spa-like relaxation right to your home.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },
  {
    "id": 948,
    "shopifyId": 8887254581385,
    "handle": "mousse-luxury-rabbit-vibrator-eev9d",
    "title": "Mousse Luxury Rabbit Vibrator",
    "name": "Mousse Luxury Rabbit Vibrator",
    "shortName": "Mousse Luxury Rabbit Vibrator",
    "category": "adult",
    "categorySlug": "sexual-wellness",
    "subCategory": "Luxury Vibrators & Massagers",
    "price": 299,
    "sellPrice": "₹299.00",
    "mrp": 1999,
    "originalPrice": 1999,
    "mrpPrice": "₹1,999.00",
    "discount": 85,
    "discountPercentage": 85,
    "offPercent": "85% off",
    "rating": 4.6,
    "ratingCount": 1025,
    "reviewCount": 405,
    "freeDelivery": true,
    "isTrending": true,
    "isAdult": true,
    "badge": "Top Rated",
    "tags": [
      "Top Rated",
      "Luxury Vibrators & Massagers",
      "Free Delivery",
      "100% Discreet"
    ],
    "trusted": true,
    "images": [
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/rnxze_512_62d8ece5-103a-44e6-9655-a0e262a02ed0.jpg?v=1791196776",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2026-09-15at9.07.53PM_1_5227f4b1-35a6-44e6-a214-aa6b284d1941.jpg?v=1791196777",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2026-09-15at9.07.53PM_2_d215a7f6-eb18-4b80-a934-d6e8143614e2.jpg?v=1791196777",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2026-09-15at9.07.53PM_7fa07108-663d-4555-8333-e340f25eafc2.jpg?v=1791196776",
      "https://cdn.shopify.com/s/files/1/0789/9791/3737/files/WhatsAppImage2026-09-15at9.07.54PM_81cdbef2-491e-45e7-99fc-34c34d0de354.jpg?v=1791196777"
    ],
    "sizes": [
      "Standard Free Size (Discreet Pack)"
    ],
    "highlights": [
      "The Luxury Rabbit Vibrator is a premium sex toy that offers a luxurious and satisfying experience",
      "It is designed to be a versatile toy that can be enjoyed by both solo users and couples",
      "The vibrator is made with a velvet touch and feel, making it smooth and comfortable to use",
      "It is also long in size, providing a deeper and more fulfilling experience"
    ],
    "details": [
      "The Luxury Rabbit Vibrator is a premium sex toy that offers a luxurious and satisfying experience",
      "It is designed to be a versatile toy that can be enjoyed by both solo users and couples",
      "The vibrator is made with a velvet touch and feel, making it smooth and comfortable to use",
      "It is also long in size, providing a deeper and more fulfilling experience"
    ],
    "description": "The Luxury Rabbit Vibrator is a premium sex toy that offers a luxurious and satisfying experience. It is designed to be a versatile toy that can be enjoyed by both solo users and couples. The vibrator is made with a velvet touch and feel, making it smooth and comfortable to use. It is also long in size, providing a deeper and more fulfilling experience. It has multiple speed settings, allowing you to customize the intensity of the vibrations to your liking. The rabbit-style external tickler is designed to hit the G-spot easily, providing powerful stimulation and helping to achieve multiple orgasms. The waterproof design makes it safe to use in the shower or bath. Overall, the Luxury Rabbit Vibrator is a high-end product that promises to deliver a unique and satisfying experience. Whether you're using it for solo play or with a partner, it is sure to provide the ultimate pleasure.",
    "specifications": {
      "Material": "Ultra-Soft Lifelike TPE / Medical-Grade Silicone",
      "Functions": "Realistic texture, enhanced stimulation and control",
      "Water Resistance": "100% Washable and Waterproof",
      "Packaging": "100% Plain Discreet Non-Branded Box",
      "Safety": "Body-safe, phthalate-free, non-toxic"
    },
    "supplier": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "followers": "68.4K",
      "totalProducts": 26
    },
    "seller": {
      "name": "ToyZone India Official",
      "rating": 4.8,
      "orders": 38900
    },
    "reviews": [
      {
        "id": 1,
        "user": "Verified Buyer",
        "rating": 5,
        "comment": "100% discreet delivery! Arrived in a totally plain brown cardboard box with zero product name on the bill. Product quality is superb!",
        "date": "2 days ago",
        "helpful": 52
      },
      {
        "id": 2,
        "user": "Ramesh K.",
        "rating": 5,
        "comment": "Unbelievable deal for ₹299. Silicone feels very soft, comfortable and high quality. Easy to wash and store.",
        "date": "5 days ago",
        "helpful": 39
      },
      {
        "id": 3,
        "user": "Private Shopper",
        "rating": 4,
        "comment": "Fast delivery within 3 days. Super happy with the discreet packing and secret OTP delivery.",
        "date": "1 week ago",
        "helpful": 24
      }
    ],
    "flashDealEndsAt": 0
  },

  // ==========================================
  // GENERAL FASHION & LIFESTYLE PRODUCTS
  // ==========================================
// ---- WOMEN ETHNIC ----
  {
    id: 1,
    title: "Banarasi Silk Saree with Blouse Piece - Red & Gold Zari Work",
    category: "women-ethnic",
    images: [saree1, kurti1, westernDress, lehenga],
    price: 599,
    mrp: 2499,
    discount: 76,
    rating: 4.4,
    reviewCount: 3241,
    tags: ["Free Delivery", "Top Rated", "Trending"],
    trusted: true,
    seller: { name: "SilkBazaar Exports", rating: 4.7, orders: 28450 },
    description: "Luxurious Banarasi silk saree featuring traditional zari weaving. Perfect for weddings, festivals, and special occasions. Comes with matching unstitched blouse piece. The rich crimson base is adorned with intricate gold floral and paisley motifs throughout.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 4.5 * H,
    details: ["Fabric: Pure Banarasi Silk", "Includes blouse piece", "Dry clean recommended", "Length: 5.5 meters", "Color may slightly vary"],
    reviews: reviews.r1,
  },
  {
    id: 2,
    title: "Floral Cotton Kurti with Palazzo Set - Pink (S-XXL)",
    category: "women-ethnic",
    images: [kurti1, saree1, lehenga, westernDress],
    price: 299,
    mrp: 999,
    discount: 70,
    rating: 4.2,
    reviewCount: 5821,
    tags: ["Free Delivery", "Bestseller"],
    trusted: true,
    seller: { name: "FashionHub Pvt Ltd", rating: 4.5, orders: 42300 },
    description: "Breezy floral cotton kurti paired with matching palazzo pants. Perfect for daily wear, casual outings, and festive occasions. Features delicate tassel detailing on the sleeves and a subtle gold border at the hem.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isAdult: false,
    flashDealEndsAt: NOW + 7 * H,
    details: ["Fabric: 100% Pure Cotton", "Fully lined", "Machine washable", "3/4 sleeves with tassel", "Set includes: Kurti + Palazzo"],
    reviews: reviews.r3,
  },
  {
    id: 3,
    title: "Bridal Lehenga Choli - Teal Blue Heavy Embroidery with Dupatta",
    category: "women-ethnic",
    images: [lehenga, kurti1, saree1, westernDress],
    price: 1499,
    mrp: 7999,
    discount: 81,
    rating: 4.6,
    reviewCount: 1892,
    tags: ["Free Delivery", "Premium", "Wedding Special"],
    trusted: true,
    seller: { name: "BridalGlam Studio", rating: 4.8, orders: 9870 },
    description: "Stunning bridal lehenga in rich teal velvet with heavy gold zari and sequin embroidery. The set includes a fully embroidered choli blouse and sheer organza dupatta. Perfect for weddings, sangeet, and reception ceremonies.",
    sizes: ["S", "M", "L", "XL"],
    isAdult: false,
    flashDealEndsAt: NOW + 2.5 * H,
    details: ["Fabric: Velvet + Organza Dupatta", "Heavy zari & sequin embroidery", "Inner lining included", "Dry clean only", "Custom sizing available"],
    reviews: reviews.r5,
  },
  {
    id: 4,
    title: "Embroidered Anarkali Kurti Set with Dupatta - Navy Blue",
    category: "women-ethnic",
    images: [kurti1, lehenga, saree1, westernDress],
    price: 449,
    mrp: 1899,
    discount: 76,
    rating: 4.3,
    reviewCount: 4102,
    tags: ["Free Delivery", "Trending"],
    trusted: true,
    seller: { name: "EthnicBoutique", rating: 4.4, orders: 31200 },
    description: "Elegant navy blue Anarkali kurti with chikankari-style embroidery throughout. The flared silhouette and matching dupatta make this a perfect choice for parties, gatherings, and festivals.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isAdult: false,
    flashDealEndsAt: NOW + 9 * H,
    details: ["Fabric: Georgette", "Embroidery: Thread work", "Set: Kurti + Churidar + Dupatta", "Hand wash recommended", "Fully lined"],
    reviews: reviews.r2,
  },
  {
    id: 5,
    title: "Printed Chanderi Silk Saree - Festive Collection",
    category: "women-ethnic",
    images: [saree1, lehenga, kurti1, westernDress],
    price: 399,
    mrp: 1599,
    discount: 75,
    rating: 4.1,
    reviewCount: 2650,
    tags: ["Free Delivery", "Festive Pick"],
    trusted: true,
    seller: { name: "SareeMandir Co.", rating: 4.3, orders: 18700 },
    description: "Lightweight and elegant Chanderi silk saree with digital block print design. Ideal for day events, pujas, and casual festive wear. Comes with matching blouse piece.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 11 * H,
    details: ["Fabric: Chanderi Silk", "Digital block print", "Includes blouse piece", "Length: 5.5 meters", "Dry clean / gentle hand wash"],
    reviews: reviews.r4,
  },

  // ---- WOMEN WESTERN ----
  {
    id: 6,
    title: "Women's Floral Midi Dress - Olive Green, Tiered & Belted",
    category: "women-western",
    images: [westernDress, kurti1, beauty, kidsDress],
    price: 349,
    mrp: 1299,
    discount: 73,
    rating: 4.3,
    reviewCount: 3100,
    tags: ["Free Delivery", "Top Rated"],
    trusted: true,
    seller: { name: "TrendyCloset India", rating: 4.5, orders: 22800 },
    description: "Effortlessly stylish tiered midi dress with a floral print on a soft olive green base. Features V-neckline, button-down front, 3/4 puff sleeves with ruffle cuffs, and a self-tie waist belt. Perfect for brunch, dates, and casual outings.",
    sizes: ["XS", "S", "M", "L", "XL"],
    isAdult: false,
    flashDealEndsAt: NOW + 5 * H,
    details: ["Fabric: Rayon", "Machine washable", "V-neck with button placket", "Tie waist belt included", "Mid-calf length"],
    reviews: reviews.r1,
  },
  {
    id: 7,
    title: "Crop Top & High-Waist Jeans Combo - Casual Western Set",
    category: "women-western",
    images: [westernDress, beauty, kurti1, homeDecor],
    price: 499,
    mrp: 1799,
    discount: 72,
    rating: 4.4,
    reviewCount: 2780,
    tags: ["Free Delivery", "Trending", "Bestseller"],
    trusted: true,
    seller: { name: "StyleStreet Fashion", rating: 4.6, orders: 16900 },
    description: "Trendy ribbed crop top paired with high-waist slim fit denim jeans. A complete casual outfit for college, malls, and hangouts. Available in multiple color combinations.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isAdult: false,
    flashDealEndsAt: NOW + 6.5 * H,
    details: ["Top: Cotton-Lycra Ribbed", "Jeans: Stretchable Denim", "High-waist fit", "Machine washable", "Set of 2 pieces"],
    reviews: reviews.r3,
  },
  {
    id: 8,
    title: "Women's Blazer Dress - Office Formal Wear, Navy Blue",
    category: "women-western",
    images: [westernDress, lehenga, kurti1, beauty],
    price: 699,
    mrp: 2599,
    discount: 73,
    rating: 4.5,
    reviewCount: 1420,
    tags: ["Free Delivery", "Office Wear"],
    trusted: true,
    seller: { name: "ProfessionalWear Hub", rating: 4.6, orders: 8900 },
    description: "Sophisticated blazer-style dress that transitions seamlessly from boardroom to evenings out. Features a double-breasted button design, structured shoulders, and a flattering A-line silhouette.",
    sizes: ["S", "M", "L", "XL"],
    isAdult: false,
    flashDealEndsAt: NOW + 8 * H,
    details: ["Fabric: Polyester blend", "Fully lined", "Side pockets", "Belt included", "Professional dry clean recommended"],
    reviews: reviews.r5,
  },

  // ---- MEN ----
  {
    id: 9,
    title: "Men's Classic Polo T-Shirt - Navy Blue, Slim Fit",
    category: "men",
    images: [menShirt, homeDecor, beauty, westernDress],
    price: 199,
    mrp: 799,
    discount: 75,
    rating: 4.3,
    reviewCount: 7841,
    tags: ["Free Delivery", "Bestseller"],
    trusted: true,
    seller: { name: "ManStyle Apparel", rating: 4.5, orders: 65300 },
    description: "Classic polo T-shirt in premium pique cotton. Features a two-button placket, ribbed collar, and embroidered chest logo. Perfect for office casuals, outings, and everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    isAdult: false,
    flashDealEndsAt: NOW + 3 * H,
    details: ["Fabric: 100% Pique Cotton", "Slim fit cut", "2-button collar", "Machine washable", "Pre-shrunk fabric"],
    reviews: reviews.r2,
  },
  {
    id: 10,
    title: "Men's Ethnic Kurta Pajama Set - White with Blue Embroidery",
    category: "men",
    images: [menShirt, kurti1, homeDecor, westernDress],
    price: 399,
    mrp: 1499,
    discount: 73,
    rating: 4.4,
    reviewCount: 3560,
    tags: ["Free Delivery", "Festive Pick"],
    trusted: true,
    seller: { name: "EthnicMenswear", rating: 4.4, orders: 19200 },
    description: "Elegant men's kurta in pure cotton with intricate thread embroidery at the neck and cuffs. Set includes matching pajama. Ideal for festivals, pujas, and traditional events.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isAdult: false,
    flashDealEndsAt: NOW + 10 * H,
    details: ["Fabric: Cotton", "Thread embroidery at collar & sleeves", "Set: Kurta + Pajama", "Machine washable", "Regular fit"],
    reviews: reviews.r4,
  },
  {
    id: 11,
    title: "Men's Graphic Oversized T-Shirt - Streetwear Collection",
    category: "men",
    images: [menShirt, westernDress, beauty, homeDecor],
    price: 249,
    mrp: 899,
    discount: 72,
    rating: 4.2,
    reviewCount: 4230,
    tags: ["Free Delivery", "Trending", "Youth Pick"],
    trusted: true,
    seller: { name: "UrbanThreads Co.", rating: 4.3, orders: 28900 },
    description: "Drop-shoulder oversized graphic T-shirt with bold streetwear-inspired prints. Made from breathable 240 GSM cotton. A perfect statement piece for casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isAdult: false,
    flashDealEndsAt: NOW + 14 * H,
    details: ["Fabric: 240 GSM Cotton", "Oversized/drop-shoulder fit", "Screen printed graphic", "Machine washable", "Colour-fast"],
    reviews: reviews.r1,
  },
  {
    id: 12,
    title: "Men's Formal Shirt - Slim Fit, Solid White Oxford Cotton",
    category: "men",
    images: [menShirt, kurti1, westernDress, homeDecor],
    price: 349,
    mrp: 1199,
    discount: 71,
    rating: 4.5,
    reviewCount: 5680,
    tags: ["Free Delivery", "Office Essential"],
    trusted: true,
    seller: { name: "FormalFirst Shirts", rating: 4.7, orders: 38100 },
    description: "Crisp white Oxford cotton formal shirt with a point collar, chest pocket, and single-button barrel cuffs. Perfect for offices, interviews, and formal occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isAdult: false,
    flashDealEndsAt: NOW + 18 * H,
    details: ["Fabric: Oxford Cotton", "Slim-fit cut", "Point collar", "Full button placket", "Machine washable"],
    reviews: reviews.r2,
  },

  // ---- KIDS ----
  {
    id: 13,
    title: "Baby Girl Cartoon Frock Dress - Yellow Animal Print (1-7 Years)",
    category: "kids",
    images: [kidsDress, beauty, menShirt, homeDecor],
    price: 179,
    mrp: 699,
    discount: 74,
    rating: 4.5,
    reviewCount: 6280,
    tags: ["Free Delivery", "Kids Favourite", "Trending"],
    trusted: true,
    seller: { name: "TinyToes Kids Wear", rating: 4.6, orders: 41200 },
    description: "Super adorable and comfortable cotton frock dress for little girls. Features cute animal cartoon prints and a sweet bow at the waist. Soft, breathable fabric ensures all-day comfort for your baby.",
    sizes: ["1-2 Yr", "2-3 Yr", "3-4 Yr", "4-5 Yr", "5-6 Yr", "6-7 Yr"],
    isAdult: false,
    flashDealEndsAt: NOW + 6 * H,
    details: ["Fabric: 100% Soft Cotton", "Easy pull-on neck", "Soft elastic waist", "Machine washable", "Available in multiple prints"],
    reviews: reviews.r3,
  },
  {
    id: 14,
    title: "Boys Track Suit Set - Hooded Jacket + Jogger Pants",
    category: "kids",
    images: [kidsDress, menShirt, beauty, westernDress],
    price: 249,
    mrp: 999,
    discount: 75,
    rating: 4.3,
    reviewCount: 3890,
    tags: ["Free Delivery", "Active Wear"],
    trusted: true,
    seller: { name: "SportKids India", rating: 4.4, orders: 22100 },
    description: "Comfortable and stylish track suit for active kids. Includes a zippered hooded jacket and matching jogger pants with elastic waist. Perfect for play, sports, and casual outings.",
    sizes: ["2-3 Yr", "3-4 Yr", "4-5 Yr", "5-6 Yr", "6-7 Yr", "7-8 Yr"],
    isAdult: false,
    flashDealEndsAt: NOW + 12 * H,
    details: ["Fabric: Fleece + Cotton Blend", "Zippered hooded jacket", "Jogger with elastic waist", "Machine washable", "Set of 2 pieces"],
    reviews: reviews.r4,
  },
  {
    id: 15,
    title: "Baby Boy Ethnic Dhoti Kurta Set - Festive Wear",
    category: "kids",
    images: [kidsDress, kurti1, homeDecor, saree1],
    price: 299,
    mrp: 1099,
    discount: 73,
    rating: 4.6,
    reviewCount: 2740,
    tags: ["Free Delivery", "Festival Special"],
    trusted: true,
    seller: { name: "LittlePrince Ethnic", rating: 4.5, orders: 16800 },
    description: "Adorable ethnic kurta and dhoti set for baby boys. Features intricate embroidery on the kurta and a comfortable dhoti with elastic waist. Perfect for Diwali, Dussehra, and family functions.",
    sizes: ["0-6 M", "6-12 M", "1-2 Yr", "2-3 Yr", "3-4 Yr"],
    isAdult: false,
    flashDealEndsAt: NOW + 16 * H,
    details: ["Fabric: Cotton Blend", "Embroidered kurta", "Elastic waist dhoti", "Machine washable", "Set of 2"],
    reviews: reviews.r5,
  },

  // ---- HOME & KITCHEN ----
  {
    id: 16,
    title: "Ethnic Indian Cushion Cover Set of 5 - Rajasthani Block Print",
    category: "home-kitchen",
    images: [homeDecor, beauty, menShirt, westernDress],
    price: 299,
    mrp: 1199,
    discount: 75,
    rating: 4.4,
    reviewCount: 4870,
    tags: ["Free Delivery", "Home Decor", "Top Rated"],
    trusted: true,
    seller: { name: "HomeCraft Exports", rating: 4.5, orders: 31400 },
    description: "Set of 5 vibrant Rajasthani block-print cushion covers in assorted colours. Made from cotton canvas with invisible zip closure. Adds a pop of ethnic charm to any living space.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 8.5 * H,
    details: ["Material: Cotton Canvas", "Size: 16x16 inch", "Set of 5 covers", "Machine washable", "Invisible zipper"],
    reviews: reviews.r1,
  },
  {
    id: 17,
    title: "Non-Stick Cookware Set - 5 Pieces Granite Coated Induction Compatible",
    category: "home-kitchen",
    images: [homeDecor, menShirt, westernDress, beauty],
    price: 799,
    mrp: 3499,
    discount: 77,
    rating: 4.3,
    reviewCount: 2940,
    tags: ["Free Delivery", "Kitchen Essential"],
    trusted: true,
    seller: { name: "CookWell Industries", rating: 4.4, orders: 18900 },
    description: "Premium 5-piece granite-coated cookware set including frying pan, saucepan, kadhai, tawa, and lid. Safe for all cooktops including induction. PFOA-free coating ensures healthy cooking.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 20 * H,
    details: ["Granite coating (PFOA-free)", "Induction compatible", "Tempered glass lid", "Heat-resistant handles", "Set of 5 pieces"],
    reviews: reviews.r2,
  },
  {
    id: 18,
    title: "Soft Microfiber Bedsheet Set - King Size, 3-Piece",
    category: "home-kitchen",
    images: [homeDecor, kidsDress, lehenga, beauty],
    price: 399,
    mrp: 1699,
    discount: 76,
    rating: 4.2,
    reviewCount: 6120,
    tags: ["Free Delivery", "Bedroom Essential"],
    trusted: true,
    seller: { name: "SleepWell Linens", rating: 4.3, orders: 44200 },
    description: "Luxuriously soft microfiber bedsheet with 2 matching pillow covers. Beautiful floral print design. 300 thread count for a silky smooth sleep experience. Fade and wrinkle resistant.",
    sizes: ["King (60x90)", "Queen (60x78)", "Single (60x90)"],
    isAdult: false,
    flashDealEndsAt: NOW + 22 * H,
    details: ["Material: Microfiber", "300 Thread count", "Set: Bedsheet + 2 Pillow Covers", "Machine washable", "No bleach"],
    reviews: reviews.r3,
  },
  {
    id: 19,
    title: "Wooden Wall Shelf 3-Tier - Home Decor & Storage Organiser",
    category: "home-kitchen",
    images: [homeDecor, westernDress, menShirt, beauty],
    price: 499,
    mrp: 1999,
    discount: 75,
    rating: 4.5,
    reviewCount: 1890,
    tags: ["Free Delivery", "Home Decor"],
    trusted: true,
    seller: { name: "WoodCraft Decor", rating: 4.6, orders: 12400 },
    description: "Elegant 3-tier floating wall shelf in natural wood finish. Perfect for displaying plants, photo frames, books, and decorative items. Easy to install with all hardware included.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 26 * H,
    details: ["Material: Engineered Wood", "3 shelves", "Weight capacity: 5kg per shelf", "All hardware included", "Easy wall mount"],
    reviews: reviews.r4,
  },

  // ---- BEAUTY ----
  {
    id: 20,
    title: "Rose Gold Luxury Skincare Gift Set - Serum, Moisturizer & Toner",
    category: "beauty",
    images: [beauty, westernDress, homeDecor, kurti1],
    price: 599,
    mrp: 2499,
    discount: 76,
    rating: 4.6,
    reviewCount: 3840,
    tags: ["Free Delivery", "Best Seller", "Premium"],
    trusted: true,
    seller: { name: "GlowEssentials India", rating: 4.8, orders: 28900 },
    description: "Luxurious 4-piece skincare collection featuring Rose Gold Infusion Face Serum, Ultra-Hydrating Moisturizer, Balancing Toner, and Eye Cream. Formulated with hyaluronic acid, vitamin C, and niacinamide for radiant glowing skin.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 4 * H,
    details: ["4-piece set in premium box", "Key ingredients: HA + Vit C + Niacinamide", "Dermatologist tested", "Cruelty-free & vegan", "All skin types"],
    reviews: reviews.r5,
  },
  {
    id: 21,
    title: "Long Wear Lipstick Set of 6 - Matte Formula, Trending Shades",
    category: "beauty",
    images: [beauty, kurti1, homeDecor, westernDress],
    price: 249,
    mrp: 999,
    discount: 75,
    rating: 4.3,
    reviewCount: 5120,
    tags: ["Free Delivery", "Trending", "Makeup Pick"],
    trusted: true,
    seller: { name: "BeautyBazaar Direct", rating: 4.4, orders: 38200 },
    description: "Set of 6 richly pigmented matte lipsticks in trending shades. Long-wear formula that stays put for up to 12 hours. Infused with moisturizing vitamin E for comfortable all-day wear.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 7.5 * H,
    details: ["Set of 6 shades", "12-hour long wear", "Vitamin E enriched", "No paraben / no sulfate", "Dermatologically safe"],
    reviews: reviews.r1,
  },
  {
    id: 22,
    title: "Hair Growth Serum & Argan Oil Combo - Anti-Hairfall Treatment",
    category: "beauty",
    images: [beauty, homeDecor, kurti1, westernDress],
    price: 349,
    mrp: 1399,
    discount: 75,
    rating: 4.4,
    reviewCount: 4210,
    tags: ["Free Delivery", "Hair Care"],
    trusted: true,
    seller: { name: "NaturalHair Solutions", rating: 4.5, orders: 21300 },
    description: "Powerful duo of Biotin Hair Growth Serum and Pure Argan Oil. Clinically shown to reduce hair fall by 85% in 4 weeks. Strengthens hair roots, adds shine, and promotes thicker, longer hair.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 13 * H,
    details: ["2-product combo set", "Key: Biotin + Argan Oil + Castor Oil", "No harmful chemicals", "Suitable for all hair types", "Results in 4-8 weeks"],
    reviews: reviews.r2,
  },

    // ---- ADULT (18+) CATALOGUE (50 Products from LoveDepot & Durex) ----,

// ---- MORE ETHNIC ----
  {
    id: 29,
    title: "Phulkari Dupatta - Hand Embroidered, Punjab Heritage",
    category: "women-ethnic",
    images: [saree1, kurti1, lehenga, westernDress],
    price: 299,
    mrp: 1199,
    discount: 75,
    rating: 4.4,
    reviewCount: 2180,
    tags: ["Free Delivery", "Handcraft", "Heritage"],
    trusted: true,
    seller: { name: "PunjabCraft Collective", rating: 4.5, orders: 14700 },
    description: "Traditional Phulkari dupatta with vibrant hand-embroidered floral patterns on soft georgette base. A timeless piece of Punjab's textile heritage. Perfect with salwar suits, jeans, and ethnic wear.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 24 * H,
    details: ["Fabric: Georgette", "Hand embroidered Phulkari", "Dimensions: 2.2m x 0.95m", "Gentle hand wash", "Authentic artisan craft"],
    reviews: reviews.r3,
  },
  {
    id: 30,
    title: "Palazzo Pant Set 3-Piece - Kurti, Palazzo & Dupatta (XS–3XL)",
    category: "women-ethnic",
    images: [kurti1, saree1, lehenga, westernDress],
    price: 349,
    mrp: 1399,
    discount: 75,
    rating: 4.2,
    reviewCount: 4920,
    tags: ["Free Delivery", "Plus Sizes", "Bestseller"],
    trusted: true,
    seller: { name: "FashionHub Pvt Ltd", rating: 4.5, orders: 42300 },
    description: "Complete 3-piece palazzo set with printed kurti, flared palazzo pants, and matching dupatta. Available in extended plus sizes. Great for casual daily wear to semi-formal events.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    isAdult: false,
    flashDealEndsAt: NOW + 28 * H,
    details: ["3-piece set: Kurti + Palazzo + Dupatta", "Fabric: Rayon", "Plus size friendly", "Machine washable", "Available in 8 print options"],
    reviews: reviews.r4,
  },
  {
    id: 31,
    title: "Men's Pathani Suit - Cotton, Straight Cut with Full Embroidery",
    category: "men",
    images: [menShirt, kurti1, homeDecor, westernDress],
    price: 549,
    mrp: 2099,
    discount: 74,
    rating: 4.4,
    reviewCount: 2640,
    tags: ["Free Delivery", "Ethnic Wear", "Bestseller"],
    trusted: true,
    seller: { name: "EthnicMenswear", rating: 4.4, orders: 19200 },
    description: "Classic Pathani suit with full-length embroidery on the kurta. Set includes kurta and salwar. Made from premium cotton for breathability and comfort. Perfect for Eid, weddings, and formal events.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isAdult: false,
    flashDealEndsAt: NOW + 32 * H,
    details: ["Fabric: Cotton", "Full embroidery on front & neck", "Straight cut", "Set: Kurta + Salwar", "Machine washable"],
    reviews: reviews.r2,
  },
  {
    id: 32,
    title: "Kids Girls Lehenga Choli Set - Navratri Dandiya Wear",
    category: "kids",
    images: [kidsDress, saree1, lehenga, beauty],
    price: 349,
    mrp: 1299,
    discount: 73,
    rating: 4.6,
    reviewCount: 3120,
    tags: ["Free Delivery", "Festival Kids Wear"],
    trusted: true,
    seller: { name: "LittlePrince Ethnic", rating: 4.5, orders: 16800 },
    description: "Beautiful embroidered lehenga choli for girls aged 2-10 years. Perfect for Navratri, Dussehra, Garba, and family celebrations. Features mirror work and bright colors that kids love.",
    sizes: ["2-3 Yr", "3-4 Yr", "4-5 Yr", "5-6 Yr", "6-7 Yr", "7-8 Yr", "8-10 Yr"],
    isAdult: false,
    flashDealEndsAt: NOW + 36 * H,
    details: ["Fabric: Net + Satin", "Mirror work embroidery", "Set: Choli + Lehenga + Dupatta", "Machine washable", "Age: 2-10 Years"],
    reviews: reviews.r5,
  },
  {
    id: 33,
    title: "Electric Vacuum Cleaner - 2000W Powerful, HEPA Filter",
    category: "home-kitchen",
    images: [homeDecor, menShirt, beauty, westernDress],
    price: 1499,
    mrp: 5999,
    discount: 75,
    rating: 4.3,
    reviewCount: 1780,
    tags: ["Free Delivery", "Home Appliance"],
    trusted: true,
    seller: { name: "HomeAppliance Direct", rating: 4.4, orders: 11300 },
    description: "Powerful 2000W vacuum cleaner with HEPA filtration that captures 99.97% of dust particles. Lightweight design with 1.5L dustbin, 5m power cord, and multiple attachments for floors, carpets, and upholstery.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 30 * H,
    details: ["2000W suction power", "HEPA filter", "1.5L dustbin capacity", "5m power cord", "4 attachments included"],
    reviews: reviews.r1,
  },
  {
    id: 34,
    title: "Vitamin C Brightening Face Wash - Deep Pore Cleanse, 100ml",
    category: "beauty",
    images: [beauty, homeDecor, westernDress, kurti1],
    price: 149,
    mrp: 499,
    discount: 70,
    rating: 4.3,
    reviewCount: 8210,
    tags: ["Free Delivery", "Skincare Essential"],
    trusted: true,
    seller: { name: "GlowEssentials India", rating: 4.8, orders: 28900 },
    description: "Vitamin C-enriched face wash that deeply cleanses pores, brightens complexion, and reduces dark spots. Gentle enough for daily use on all skin types. Infused with turmeric and aloe vera for extra glow.",
    sizes: null,
    isAdult: false,
    flashDealEndsAt: NOW + 11.5 * H,
    details: ["100ml / 150+ uses", "Key: Vit C + Turmeric + Aloe Vera", "For all skin types", "No sulfates / parabens", "Dermatologically tested"],
    reviews: reviews.r3,
  },
  {
    id: 35,
    title: "Denim Jacket Women - Oversized with Floral Embroidery, Blue",
    category: "women-western",
    images: [westernDress, beauty, menShirt, homeDecor],
    price: 599,
    mrp: 2299,
    discount: 74,
    rating: 4.4,
    reviewCount: 2390,
    tags: ["Free Delivery", "Trending", "Winter Pick"],
    trusted: true,
    seller: { name: "TrendyCloset India", rating: 4.5, orders: 22800 },
    description: "Stylish oversized denim jacket with beautiful floral embroidery on the back and cuffs. Features button-down closure, chest pockets, and a relaxed boxy fit. A versatile layering piece for all seasons.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isAdult: false,
    flashDealEndsAt: NOW + 27 * H,
    details: ["100% Denim Cotton", "Embroidered back + cuffs", "Oversized fit", "Machine washable", "2 chest pockets"],
    reviews: reviews.r4,
  },];

export const categories = [
  { id: 'all', label: 'All Collection', icon: '✨' },
  { id: 'vibrators', label: 'Vibrators & Massagers', icon: '💖' },
  { id: 'dildos', label: 'Dildos & Realistic', icon: '🔥' },
  { id: 'dragon-condoms', label: 'Dragon Condoms', icon: '🐉' },
  { id: 'sleeves', label: 'Cock Sleeves & Rings', icon: '⚡' },
  { id: 'men', label: 'For Men & Strokers', icon: '👑' },
  { id: 'women', label: 'For Women', icon: '💋' },
  { id: 'couples', label: 'For Couples', icon: '❤️' },
  { id: 'personal-care', label: 'Personal Care & Hygiene', icon: '🌿' },
  { id: 'offers', label: 'Deals & Sale 🔥', icon: '🏷️' },
];


// Automatically configure 15 Days Return Policy on every product
products.forEach((p) => {
  p.returnPolicy = '15 Days Easy Return & Exchange';
  p.returnDays = 15;
  if (!p.tags) p.tags = [];
  if (!p.tags.includes('15 Days Return')) {
    p.tags.push('15 Days Return');
  }
  if (!p.details) p.details = [];
  if (!p.details.some((d) => typeof d === 'string' && d.toLowerCase().includes('return'))) {
    p.details.push('15 Days Easy Return & Doorstep Exchange Available');
  }
});

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

export function getRelatedProducts(currentId, category, count = 8) {
  const currentProd = products.find(p => p.id === parseInt(currentId));
  const currentGroupKey = currentProd ? getProductGroupKey(currentProd) : '';
  const filtered = products.filter(p => p.id !== parseInt(currentId) && (p.category === category || p.isAdult));
  const seenGroups = new Set();
  if (currentGroupKey) seenGroups.add(currentGroupKey);
  const uniqueGroupProds = [];
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  for (const p of shuffled) {
    const key = getProductGroupKey(p);
    if (!seenGroups.has(key)) {
      seenGroups.add(key);
      uniqueGroupProds.push(p);
    }
  }
  return uniqueGroupProds.slice(0, count);
}

export function getProductGroupKey(input) {
  const text = (typeof input === 'string') ? input : ((input && (input.title || input.name)) || '');
  const norm = text.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/s+/g, ' ').trim();
  if (norm.includes('rabbit vibrator') || norm.includes('mousse')) return 'mousse-rabbit-vibrator';
  if (norm.includes('12 inch') && norm.includes('dildo')) return '12-inch-foreskin-dildo';
  if (norm.includes('wolf tooth') || norm.includes('crystal sleeve')) return 'wolf-tooth-crystal-sleeve';
  if (norm.includes('6 inch bt dotted')) return '6-inch-bt-dotted-condom';
  if (norm.includes('6 inch bt')) return '6-inch-bt-condom';
  if (norm.includes('dragon condom 4') || norm.includes('dragon condom 4 inch')) return 'dragon-condom-4-inch';
  if (norm.includes('hygienic') && norm.includes('vagina')) return 'hygienic-vagina-care';
  return norm;
}

export function ensureNoAdjacentDuplicates(arr) {
  if (!arr || arr.length <= 1) return arr;
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    if (getProductGroupKey(result[i]) === getProductGroupKey(result[i + 1])) {
      let swapIdx = -1;
      for (let j = i + 2; j < result.length; j++) {
        const candKey = getProductGroupKey(result[j]);
        const prevKey = getProductGroupKey(result[i]);
        const nextKey = (i + 2 < result.length) ? getProductGroupKey(result[i + 2]) : null;
        if (candKey !== prevKey && (nextKey === null || candKey !== nextKey)) {
          swapIdx = j;
          break;
        }
      }
      if (swapIdx === -1) {
        for (let j = 0; j < i - 1; j++) {
          const candKey = getProductGroupKey(result[j]);
          const currentKey = getProductGroupKey(result[i + 1]);
          const prevKey = (j > 0) ? getProductGroupKey(result[j - 1]) : null;
          const nextKey = getProductGroupKey(result[j + 1]);
          if (currentKey !== prevKey && currentKey !== nextKey && candKey !== getProductGroupKey(result[i])) {
            swapIdx = j;
            break;
          }
        }
      }
      if (swapIdx !== -1) {
        const temp = result[i + 1];
        result[i + 1] = result[swapIdx];
        result[swapIdx] = temp;
      }
    }
  }
  return result;
}

export function shuffleWithoutAdjacentDuplicates(arr) {
  if (!arr || arr.length <= 1) return arr;
  for (let attempt = 0; attempt < 1000; attempt++) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    let valid = true;
    for (let i = 0; i < shuffled.length - 1; i++) {
      if (getProductGroupKey(shuffled[i]) === getProductGroupKey(shuffled[i + 1])) {
        valid = false;
        break;
      }
    }
    if (valid) return shuffled;
  }
  return ensureNoAdjacentDuplicates(arr);
}

export function isStrokerProduct(p) {
  const text = (p.title + ' ' + (p.subCategory || '') + ' ' + (p.handle || '')).toLowerCase();
  if (
    text.includes('dildo') ||
    text.includes('rabbit') ||
    text.includes('wand') ||
    text.includes('massager') ||
    text.includes('shethrill')
  ) {
    return false;
  }
  return (
    text.includes('stroker') ||
    text.includes('stoker') ||
    text.includes('cup') ||
    text.includes('piston') ||
    text.includes('thrusting') ||
    text.includes('apex') ||
    text.includes('thriller') ||
    text.includes('shaker') ||
    text.includes('textured sleeve') ||
    text.includes('lotus sleeve') ||
    text.includes('vagina stroker')
  );
}

export function isMaleAdultProduct(p) {
  return isStrokerProduct(p);
}

export function getOrganizedAdultProducts(prods) {
  if (!prods || prods.length === 0) return [];
  const adultList = prods.filter(p => p.category === 'adult' || p.isAdult);
  const strokers = adultList.filter(isStrokerProduct);
  const others = adultList.filter(p => !isStrokerProduct(p));
  const arrangedStrokers = shuffleWithoutAdjacentDuplicates(strokers);
  const arrangedOthers = shuffleWithoutAdjacentDuplicates(others);
  return [...arrangedStrokers, ...arrangedOthers];
}
