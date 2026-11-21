// =========================================================================
// SS SOLUTIONS — সহজ রেট ও সেটিংস ফাইল (rate_config.js)
// =========================================================================
// কার্ডের দাম বদলাতে হলে শুধু নিচের CARD_PRICE সংখ্যাটি বদলে সেভ করুন।
// পুরো HTML কোড আর বারবার এডিট করতে হবে না!
// =========================================================================

window.SS_RATE_CONFIG = {
  // প্রতিটি কার্ড জেনারেট করার রেট (১ ক্রেডিট = ১ টাকা)
  CARD_PRICE: 13,

  // আপনার Google Apps Script Deploy করা Web App URL
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxp4PfzH94BkRb71BLG1aiiPSYRaXwb9zP2ceJQy6YjOWra8Dvs-xYuDfFJodP5B_HVUg/exec',

  // আপনার UPI ID ও নাম (রিচার্জ QR-এর জন্য)
  ADMIN_UPI_ID: '9088046626@pthdfc',
  ADMIN_UPI_NAME: 'Sk raihan',

  // শুধু UPI পেমেন্টের UTR ভেরিফিকেশন পাঠানোর জন্য (ওয়েবসাইটে কোথাও দেখাবে না)
  ADMIN_WHATSAPP: '919038401071'
};
