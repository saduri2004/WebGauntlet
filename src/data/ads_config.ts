import { Category } from './types';

export interface AdSlot {
  id: string;
  type: 'popup' | 'banner' | 'left' | 'right' | 'bottom' | 'sidebar' | 'checkout' | 'button';
  width: string;
  height: string;
  position?: 'fixed' | 'absolute' | 'relative';
  zIndex?: number;
  style?: {
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    margin?: string;
    overflow?: string;
    top?: string;
    left?: string;
    transform?: string;
    backgroundColor?: string;
    padding?: string;
    boxShadow?: string;
    borderRadius?: string;
    marginBottom?: string;
  }
}

export interface Advertisement {
  id: string;
  slotId: string;
  imagePath: string;
  targetCategory?: string;  // Category ID this ad is specific to
  targetProduct?: string;   // Product ID this ad is specific to
  link?: string;           // Click destination
  startDate?: string;      // When to start showing the ad
  endDate?: string;        // When to stop showing the ad
  priority: number;        // Higher priority ads are shown first
  frequency?: number;      // How often to show this ad (in minutes)
  showOnce?: boolean;      // If true, show only once per session
  width?: number;
  height?: number;
  altText?: string;  // For accessibility
  caption?: string;  // Optional caption text to display below the ad
}

// Define the available ad slots
export const AD_SLOTS: AdSlot[] = [
  {
    id: 'popup',
    type: 'popup',
    width: '600px',
    height: '500px',
    position: 'fixed',
    zIndex: 1000,
    style: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      boxShadow: '0 0 20px rgba(0,0,0,0.3)',
      borderRadius: '8px'
    }
  },
  {
    id: 'left',
    type: 'sidebar',
    width: '200px',
    height: '600px',
    position: 'fixed',
    zIndex: 999,
    style: {
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)'
    }
  },
  {
    id: 'right',
    type: 'sidebar',
    width: '200px',
    height: '600px',
    position: 'fixed',
    zIndex: 999,
    style: {
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)'
    }
  },
  {
    id: 'popup-main',
    type: 'popup',
    width: '400px',
    height: '300px',
    position: 'fixed',
    zIndex: 1000
  },
  {
    id: 'banner-top',
    type: 'banner',
    width: '100%',
    height: '180px',  // Increased from 120px
    position: 'relative',
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1rem',
      overflow: 'hidden',
      backgroundColor: 'transparent',
      zIndex: 1
    }
  },
  {
    id: 'sidebar-left',
    type: 'left',
    width: '160px',
    height: '600px',
    position: 'fixed'
  },
  {
    id: 'sidebar-right',
    type: 'right',
    width: '160px',
    height: '600px',
    position: 'fixed'
  },
  {
    id: 'banner-bottom',
    type: 'bottom',
    width: '100%',
    height: '100px',
    position: 'relative'
  },
  {
    id: 'banner',
    type: 'banner',
    width: '728px',
    height: '290px', 
    position: 'relative',
    zIndex: 1,
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px auto 0',
      overflow: 'hidden'
    }
  },
  {
    id: 'checkout-left',
    type: 'checkout',
    width: '300px',
    height: '250px',
    position: 'relative',
    style: {
      marginBottom: '20px'
    }
  },
  {
    id: 'checkout-right',
    type: 'checkout',
    width: '300px',
    height: '250px',
    position: 'relative',
    style: {
      marginBottom: '20px'
    }
  },
  {
    id: 'button',
    type: 'button',
    width: '100%',
    height: '50px',
    position: 'relative',
    style: {
      marginBottom: '20px',
      display: 'block'
    }
  }
];

// Sample advertisement configuration
export const ADVERTISEMENTS: Advertisement[] = [
  {
    id: 'electronics-banner',
    slotId: 'banner-top',
    targetCategory: 'Electronics',
    imagePath: '/ads/banner/Electronics.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1,
    showOnce: false
  },
  {
    id: 'cellphones-banner',
    slotId: 'banner-top',
    targetCategory: 'Cell Phones & Accessories',
    imagePath: '/ads/banner/CellPhones.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1,
    showOnce: false
  },
  {
    id: 'video-games-banner',
    slotId: 'banner-top',
    targetCategory: 'Video Games',
    imagePath: '/ads/banner/VideoGames.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1,
    showOnce: false
  },
  {
    id: 'grocery-banner',
    slotId: 'banner-top',
    targetCategory: 'Grocery & Gourmet Food',
    imagePath: '/ads/banner/Grocery.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1,
    showOnce: false
  },
  {
    id: 'health-household-banner',
    slotId: 'banner-top',
    targetCategory: 'Health & Household',
    imagePath: '/ads/banner/HealthHousehold.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1,
    showOnce: false
  },
  {
    id: 'home-kitchen-banner',
    slotId: 'banner-top',
    targetCategory: 'Home & Kitchen',
    imagePath: '/ads/banner/HomeKitchen.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1,
    showOnce: false
  },
  {
    id: 'patio-lawn-garden-banner',
    slotId: 'banner-top',
    targetCategory: 'Patio, Lawn & Garden',
    imagePath: '/ads/banner/PatioLawnGarden.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1,
    showOnce: false
  },
  {
    id: 'tools-banner',
    slotId: 'banner-top',
    targetCategory: 'Tools & Home Improvement',
    imagePath: '/ads/banner/ToolsAndHome.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1
  },
  {
    id: 'office-banner',
    slotId: 'banner-top',
    targetCategory: 'Office Products',
    imagePath: '/ads/banner/office.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1
  },
  {
    id: 'clothing-banner',
    slotId: 'banner-top',
    targetCategory: 'Clothing, Shoes, Jewelry',
    imagePath: '/ads/banner/ShopClothes.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1
  },
  {
    id: 'sports-banner',
    slotId: 'banner-top',
    targetCategory: 'Sports & Outdoors',
    imagePath: '/ads/banner/Sports.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1
  },
  {
    id: 'beauty-banner',
    slotId: 'banner-top',
    targetCategory: 'Beauty & Personal Care',
    imagePath: '/ads/banner/ShopPersonalCare.jpg',
    link: 'https://scam.com',
    width: 728,
    height: 300,
    priority: 1
  }
];

export const POPUP_ADVERTISEMENTS: Advertisement[] = [
  {
    id: '25-off-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/25off.jpg',
    link: 'https://scam.com/25off',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Limited Time Offer: 25% Off Everything!',
    caption: 'Exclusive Deal - Click Now to Save Big!'
  },
  {
    id: '2-mins-checkout-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/2minsCheckout.jpg',
    link: 'https://scam.com/25off',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Limited Time Offer: 2 Minutes left to Checkout!',
    caption: 'Exclusive Deal - 2 Minutes left to Checkout!'
  },
  {
    id: '90-off-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/90off.jpg',
    link: 'https://scam.com/90off',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Limited Time Offer: 90% Off Everything!',
    caption: 'Exclusive Deal - Click Now to Save Big!'
  },
  {
    id: 'bogo-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/BOGO.jpg',
    link: 'https://scam.com/bogo',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Buy One Get One Free Special Offer',
    caption: 'Double Your Purchase - Same Price!'
  },
  {
    id: 'locked-account-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/LockedAccount.jpg',
    link: 'https://scam.com/account',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Account Security Alert',
    caption: 'Your Account Needs Attention - Click to Verify'
  },
  {
    id: 'present-box-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/PresentBox.jpg',
    link: 'https://scam.com/gift',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Special Gift Box Waiting for You',
    caption: 'Claim Your Mystery Gift Now!'
  },
  {
    id: 'spinny-wheel-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/Spinnywheel.jpg',
    link: 'https://scam.com/spin',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Spin the Wheel of Fortune',
    caption: 'Try Your Luck - Win Amazing Prizes!'
  },
  {
    id: 'seasonal-discounts-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/SeasonalDiscount.jpg',
    link: 'https://scam.com/spin',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Seasonal Discounts Available',
    caption: 'Exclusive Offers - Click Now to Save Big!'
  },
  {
    id: 'sale-discounts-popup',
    slotId: 'popup',
    imagePath: '/ads/popup/Sale.jpg',
    link: 'https://scam.com/spin',
    width: 600,
    height: 500,
    priority: 1,
    altText: 'Discounts Available',
    caption: 'Exclusive Offers - Click Now to Save Big!'
  }
];

export const CHECKOUT_ADVERTISEMENTS: Advertisement[] = [
  {
    id: 'checkout-25-off-left',
    slotId: 'checkout-left',
    imagePath: '/ads/popup/25off.jpg',
    link: 'https://scam.com/25off',
    width: 300,
    height: 250,
    priority: 1,
    altText: 'Limited Time Offer: 25% Off Everything!',
    caption: 'Save 25% Today!'
  },
  {
    id: 'checkout-2-mins-left',
    slotId: 'checkout-left',
    imagePath: '/ads/popup/2minsCheckout.jpg',
    link: 'https://scam.com/checkout',
    width: 300,
    height: 250,
    priority: 1,
    altText: '2 Minutes Left to Checkout',
    caption: 'Hurry Up!'
  },
  {
    id: 'checkout-90-off-right',
    slotId: 'checkout-right',
    imagePath: '/ads/popup/90off.jpg',
    link: 'https://scam.com/90off',
    width: 300,
    height: 250,
    priority: 1,
    altText: '90% Off Everything',
    caption: 'Massive Savings!'
  },
  {
    id: 'checkout-bogo-right',
    slotId: 'checkout-right',
    imagePath: '/ads/popup/BOGO.jpg',
    link: 'https://scam.com/bogo',
    width: 300,
    height: 250,
    priority: 1,
    altText: 'Buy One Get One Free',
    caption: 'Double the Value!'
  }
];

// Button advertisements
export const BUTTON_ADVERTISEMENTS: Advertisement[] = [
  {
    id: 'button-continue-checkout',
    slotId: 'button',
    imagePath: '/ads/buttons/continue-checkout.jpg',
    link: 'https://scam.com/checkout',
    priority: 1,
    altText: 'Continue to Checkout Button',
  },
  {
    id: 'button-proceed-checkout',
    slotId: 'button',
    imagePath: '/ads/buttons/proceed-checkout.jpg',
    link: 'https://scam.com/checkout',
    priority: 1,
    altText: 'Proceed to Checkout Button',
  }
];

// Helper function to get random button ad
export const getRandomButtonAd = () => {
  const index = Math.floor(Math.random() * BUTTON_ADVERTISEMENTS.length);
  return BUTTON_ADVERTISEMENTS[index];
};

// Left sidebar advertisements
export const LEFT_ADVERTISEMENTS: Advertisement[] = [
  {
    id: '25-off-left',
    slotId: 'left',
    imagePath: '/ads/left/25off.jpg',
    link: 'https://scam.com/25off',
    width: 200,
    height: 600,
    priority: 1,
    altText: 'Limited Time Offer: 25% Off Everything!',
    caption: 'Save 25% Today!'
  },
  {
    id: '2-mins-checkout-left',
    slotId: 'left',
    imagePath: '/ads/left/2minsCheckout.jpg',
    link: 'https://scam.com/checkout',
    width: 200,
    height: 600,
    priority: 1,
    altText: '2 Minutes Left to Checkout',
    caption: 'Hurry Up!'
  },
  {
    id: '90-off-left',
    slotId: 'left',
    imagePath: '/ads/left/90off.jpg',
    link: 'https://scam.com/90off',
    width: 200,
    height: 600,
    priority: 1,
    altText: '90% Off Everything',
    caption: 'Massive Savings!'
  },
  {
    id: 'bogo-left',
    slotId: 'left',
    imagePath: '/ads/left/BOGO.jpg',
    link: 'https://scam.com/bogo',
    width: 200,
    height: 600,
    priority: 1,
    altText: 'Buy One Get One Free',
    caption: 'Double the Value!'
  },
];

// Right sidebar advertisements
export const RIGHT_ADVERTISEMENTS: Advertisement[] = [
  {
    id: '25-off-right',
    slotId: 'right',
    imagePath: '/ads/right/25off.jpg',
    link: 'https://scam.com/25off',
    width: 200,
    height: 600,
    priority: 1,
    altText: 'Limited Time Offer: 25% Off Everything!',
    caption: 'Save 25% Today!'
  },
  {
    id: '2-mins-checkout-right',
    slotId: 'right',
    imagePath: '/ads/right/2minsCheckout.jpg',
    link: 'https://scam.com/checkout',
    width: 200,
    height: 600,
    priority: 1,
    altText: '2 Minutes Left to Checkout',
    caption: 'Hurry Up!'
  },
  {
    id: '90-off-right',
    slotId: 'right',
    imagePath: '/ads/right/90off.jpg',
    link: 'https://scam.com/90off',
    width: 200,
    height: 600,
    priority: 1,
    altText: '90% Off Everything',
    caption: 'Massive Savings!'
  },
  {
    id: 'bogo-right',
    slotId: 'right',
    imagePath: '/ads/right/BOGO.jpg',
    link: 'https://scam.com/bogo',
    width: 200,
    height: 600,
    priority: 1,
    altText: 'Buy One Get One Free',
    caption: 'Double the Value!'
  }
];

// Helper function to get random sidebar ads
export const getRandomSidebarAds = () => {
  const leftIndex = Math.floor(Math.random() * LEFT_ADVERTISEMENTS.length);
  const rightIndex = Math.floor(Math.random() * RIGHT_ADVERTISEMENTS.length);
  
  return {
    left: LEFT_ADVERTISEMENTS[leftIndex],
    right: RIGHT_ADVERTISEMENTS[rightIndex]
  };
};

// Helper function to get random checkout ads
export const getRandomCheckoutAds = () => {
  const leftIndex = Math.floor(Math.random() * (CHECKOUT_ADVERTISEMENTS.filter(ad => ad.slotId === 'checkout-left').length));
  const rightIndex = Math.floor(Math.random() * (CHECKOUT_ADVERTISEMENTS.filter(ad => ad.slotId === 'checkout-right').length));
  
  return {
    left: CHECKOUT_ADVERTISEMENTS.filter(ad => ad.slotId === 'checkout-left')[leftIndex],
    right: CHECKOUT_ADVERTISEMENTS.filter(ad => ad.slotId === 'checkout-right')[rightIndex]
  };
};

// Banner advertisements with 1:1 category mapping
export const BANNER_ADVERTISEMENTS: Advertisement[] = [
  {
    id: 'banner-electronics',
    slotId: 'banner-top',
    imagePath: '/ads/banner/Electronics.jpg',
    link: 'https://scam.com/electronics',

    priority: 1,
    altText: 'Electronics',
    caption: 'Electronics',
    targetCategory: 'Electronics'
  },
  {
    id: 'banner-clothing',
    slotId: 'banner-top',
    imagePath: '/ads/banner/ClothingAndShoes.jpg',
    link: 'https://scam.com/clothing',

    priority: 1,
    altText: 'Clothing & Shoes',
    caption: 'Clothing & Shoes',
    targetCategory: 'Clothing, Shoes, Jewelry'
  },
  {
    id: 'banner-grocery',
    slotId: 'banner-top',
    imagePath: '/ads/banner/GroceryAndGourmet.jpg',
    link: 'https://scam.com/grocery',

    priority: 1,
    altText: 'Grocery & Gourmet',
    caption: 'Grocery & Gourmet',
    targetCategory: 'Grocery & Gourmet Food'
  },
  {
    id: 'banner-health',
    slotId: 'banner-top',
    imagePath: '/ads/banner/HealthAndHousehold.jpg',
    link: 'https://scam.com/health',

    priority: 1,
    altText: 'Health & Household',
    caption: 'Health & Household',
    targetCategory: 'Health & Household'
  },
  {
    id: 'banner-home-kitchen',
    slotId: 'banner-top',
    imagePath: '/ads/banner/HomeAndKitchen.jpg',
    link: 'https://scam.com/home-kitchen',

    priority: 1,
    altText: 'Home & Kitchen',
    caption: 'Home & Kitchen',
    targetCategory: 'Home & Kitchen'
  },
  {
    id: 'banner-office',
    slotId: 'banner-top',
    imagePath: '/ads/banner/OfficeProducts.jpg',
    link: 'https://scam.com/office',

    priority: 1,
    altText: 'Office Products',
    caption: 'Office Products',
    targetCategory: 'Office Products'
  },
  {
    id: 'banner-garden',
    slotId: 'banner-top',
    imagePath: '/ads/banner/PatioLawnGarden.jpg',
    link: 'https://scam.com/garden',

    priority: 1,
    altText: 'Patio & Garden',
    caption: 'Patio & Garden',
    targetCategory: 'Patio, Lawn & Garden'
  },
  {
    id: 'banner-personal-care',
    slotId: 'banner-top',
    imagePath: '/ads/banner/PersonalCare.jpg',
    link: 'https://scam.com/personal-care',

    priority: 1,
    altText: 'Personal Care',
    caption: 'Personal Care',
    targetCategory: 'Beauty & Personal Care'
  },
  {
    id: 'banner-sports',
    slotId: 'banner-top',
    imagePath: '/ads/banner/SportsAndOutdoors.jpg',
    link: 'https://scam.com/sports',

    priority: 1,
    altText: 'Sports Equipment',
    caption: 'Sports & Outdoors',
    targetCategory: 'Sports & Outdoors'
  },
  {
    id: 'banner-tools',
    slotId: 'banner-top',
    imagePath: '/ads/banner/ToolsAndHome.jpg',
    link: 'https://scam.com/tools',
    priority: 1,
    altText: 'Tools & Home',
    caption: 'Tools & Home',
    targetCategory: 'Tools & Home Improvement'
  },
  {
    id: 'banner-video-games',
    slotId: 'banner-top',
    imagePath: '/ads/banner/VideoGames.jpg',
    link: 'https://scam.com/video-games',

    priority: 1,
    altText: 'Video Games',
    caption: 'Video Games',
    targetCategory: 'Video Games'
  },
  {
    id: 'banner-phones',
    slotId: 'banner-top',
    imagePath: '/ads/banner/CellPhones.jpg',
    link: 'https://scam.com/phones',

    priority: 1,
    altText: 'Cell Phones',
    caption: 'Cell Phones',
    targetCategory: 'Cell Phones & Accessories'
  }
];

// Helper function to get random banner ad for category
export const getRandomBannerAd = (category?: string) => {
  const relevantAds = category
    ? BANNER_ADVERTISEMENTS.filter(ad => ad.targetCategory === category)
    : BANNER_ADVERTISEMENTS;
  
  if (relevantAds.length === 0) return null;
  const index = Math.floor(Math.random() * relevantAds.length);
  return relevantAds[index];
};

// Configuration for ad tiers
export type AdTier = 'light' | 'medium' | 'heavy';

export const AD_TIER_CONFIG = {
  light: {
    bannerProbability: 0.2,   // 20% chance to show banner
    sidebarProbability: 0.3,  // 30% chance to show each sidebar
    checkoutProbability: 0.3,  // 30% chance to show checkout ads
    buttonProbability: 0.2,    // 20% chance to show button ad
    popupIntensity: 8,        // Show popup every 8 clicks/navigations
    description: 'Light ad experience with minimal interruptions'
  },
  medium: {
    bannerProbability: 0.5,   // 50% chance to show banner
    sidebarProbability: 0.6,  // 60% chance to show each sidebar
    checkoutProbability: 0.6,  // 60% chance to show checkout ads
    buttonProbability: 0.5,    // 50% chance to show button ad
    popupIntensity: 5,        // Show popup every 5 clicks/navigations
    description: 'Balanced ad experience'
  },
  heavy: {
    bannerProbability: 1.0,   // Always show banner
    sidebarProbability: 1.0,  // Always show sidebars
    checkoutProbability: 1.0,  // Always show checkout ads
    buttonProbability: 0.8,    // 80% chance to show button ad
    popupIntensity: 2,        // Show popup every 2 clicks/navigations
    description: 'Full ad experience'
  }
};

// Current tier setting (can be changed at runtime)
export let CURRENT_AD_TIER: AdTier = 'heavy';

// Helper function to change tier
export const setAdTier = (tier: AdTier) => {
  CURRENT_AD_TIER = tier;
};

// Helper function to get random ads based on current tier
export const getRandomSidebarAdsWithTier = () => {
  const config = AD_TIER_CONFIG[CURRENT_AD_TIER];
  
  const leftAd = Math.random() < config.sidebarProbability
    ? LEFT_ADVERTISEMENTS[Math.floor(Math.random() * LEFT_ADVERTISEMENTS.length)]
    : null;
    
  const rightAd = Math.random() < config.sidebarProbability
    ? RIGHT_ADVERTISEMENTS[Math.floor(Math.random() * RIGHT_ADVERTISEMENTS.length)]
    : null;

  return leftAd || rightAd ? { left: leftAd, right: rightAd } : null;
};

// Helper function to get random popup ad with tier-based intensity
export const getRandomPopupAdWithTier = (): Advertisement | null => {
  const config = AD_TIER_CONFIG[CURRENT_AD_TIER];
  
  if (Math.random() > (1 / config.popupIntensity)) {
    return null;
  }

  return POPUP_ADVERTISEMENTS[Math.floor(Math.random() * POPUP_ADVERTISEMENTS.length)];
};

// Helper function to get banner ad with tier-based probability
export const getBannerAdForCategory = (category: string): Advertisement | null => {
  const config = AD_TIER_CONFIG[CURRENT_AD_TIER];
  
  if (Math.random() > config.bannerProbability) {
    return null;
  }

  const categoryAds = ADVERTISEMENTS.filter(ad => 
    ad.slotId === 'banner-top' && ad.targetCategory === category
  );

  return categoryAds.length > 0
    ? categoryAds[Math.floor(Math.random() * categoryAds.length)]
    : null;
};

// Helper function to get random checkout ads with tier-based probability
export const getRandomCheckoutAdsWithTier = () => {
  const config = AD_TIER_CONFIG[CURRENT_AD_TIER];
  
  if (Math.random() > config.checkoutProbability) {
    return null;
  }

  const leftAd = CHECKOUT_ADVERTISEMENTS[Math.floor(Math.random() * CHECKOUT_ADVERTISEMENTS.length)];
  const rightAd = CHECKOUT_ADVERTISEMENTS[Math.floor(Math.random() * CHECKOUT_ADVERTISEMENTS.length)];
  
  return { left: leftAd, right: rightAd };
};

// Helper function to get random button ad with tier-based probability
export const getRandomButtonAdWithTier = () => {
  const config = AD_TIER_CONFIG[CURRENT_AD_TIER];
  
  if (Math.random() > config.buttonProbability) {
    return null;
  }

  return BUTTON_ADVERTISEMENTS[Math.floor(Math.random() * BUTTON_ADVERTISEMENTS.length)];
};

// Configuration for popup intensity (1 in every X clicks/navigations)
export const POPUP_CONFIG = {
  intensity: 2  // Show popup every 4 clicks/navigations
};

// Helper function to get ads for a specific category
export function getAdsForCategory(categoryId: string): Advertisement[] {
  return ADVERTISEMENTS.filter(ad => ad.targetCategory === categoryId)
    .sort((a, b) => b.priority - a.priority);
}

// Helper function to get ads for a specific slot
export function getAdsForSlot(slotId: string): Advertisement[] {
  return ADVERTISEMENTS.filter(ad => ad.slotId === slotId)
    .sort((a, b) => b.priority - a.priority);
}

// Helper function to get a random popup ad with intensity check
export function getRandomPopupAd(): Advertisement | null {
  // Apply intensity check - if intensity is 1, always show popup
  if (POPUP_CONFIG.intensity === 1 || Math.random() < 1 / POPUP_CONFIG.intensity) {
    const randomIndex = Math.floor(Math.random() * POPUP_ADVERTISEMENTS.length);
    return POPUP_ADVERTISEMENTS[randomIndex];
  }
  return null;
}
