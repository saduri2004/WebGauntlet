import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Advertisement } from './Advertisement';
import {
  AD_SLOTS,
  ADVERTISEMENTS,
  getRandomPopupAdWithTier,
  getRandomSidebarAdsWithTier,
  getRandomCheckoutAdsWithTier,
  getRandomButtonAdWithTier,
  getBannerAdForCategory,
  CURRENT_AD_TIER
} from '../../data/ads_config';
import { RootState } from '../../store/store';

// Global popup state to prevent multiple popups
let isPopupShowing = false;

interface AdManagerProps {
  categoryId?: string;
  showCheckoutAds?: boolean;
  showButtonAd?: boolean;
  showBannerAd?: boolean;
}

export const AdManager: React.FC<AdManagerProps> = ({ 
  categoryId, 
  showCheckoutAds = false,
  showButtonAd = false,
  showBannerAd = false
}) => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopupAd, setCurrentPopupAd] = useState<any>(null);
  const [sidebarAds, setSidebarAds] = useState<{left: any, right: any} | null>(null);
  const [checkoutAds, setCheckoutAds] = useState<{left: any, right: any} | null>(null);
  const [buttonAd, setButtonAd] = useState<any>(null);
  const [bannerAd, setBannerAd] = useState<any>(null);
  
  // Get the currently selected category from the products state
  const selectedCategory = useSelector((state: RootState) => 
    state.products.filters.category
  );

  // Use either the prop categoryId or the selected category from filters
  const currentCategory = categoryId || selectedCategory;

  // Show random sidebar ads on mount and when tier changes
  useEffect(() => {
    setSidebarAds(getRandomSidebarAdsWithTier());
  }, [CURRENT_AD_TIER]);

  // Show random checkout ads on mount and when tier changes
  useEffect(() => {
    if (showCheckoutAds) {
      setCheckoutAds(getRandomCheckoutAdsWithTier());
    }
  }, [showCheckoutAds, CURRENT_AD_TIER]);

  // Show random button ad on mount and when tier changes
  useEffect(() => {
    if (showButtonAd) {
      setButtonAd(getRandomButtonAdWithTier());
    }
  }, [showButtonAd, CURRENT_AD_TIER]);

  // Show a random popup on navigation or category change
  useEffect(() => {
    const popup = getRandomPopupAdWithTier();
    if (popup && !isPopupShowing) {
      isPopupShowing = true;
      setCurrentPopupAd(popup);
      setShowPopup(true);
    }
  }, [location.pathname, currentCategory, CURRENT_AD_TIER]);

  // Show banner ad for current category
  useEffect(() => {
    if (showBannerAd && currentCategory) {
      const categoryMap: { [key: string]: string } = {
        'electronics': 'Electronics',
        'cell-phones-accessories': 'Cell Phones & Accessories',
        'video-games': 'Video Games',
        'grocery-gourmet-food': 'Grocery & Gourmet Food',
        'health-household': 'Health & Household',
        'home-kitchen': 'Home & Kitchen',
        'patio-lawn-garden': 'Patio, Lawn & Garden',
        'tools-home-improvement': 'Tools & Home Improvement',
        'office-products': 'Office Products',
        'clothing-shoes-jewelry': 'Clothing, Shoes, Jewelry',
        'sports-outdoors': 'Sports & Outdoors',
        'beauty-personal-care': 'Beauty & Personal Care'
      };
      
      const formattedCategory = categoryMap[currentCategory];
      if (formattedCategory) {
        const ad = getBannerAdForCategory(formattedCategory);
        setBannerAd(ad);
      } else {
        setBannerAd(null);
      }
    }
  }, [showBannerAd, currentCategory, CURRENT_AD_TIER]);

  // Handle popup close
  const handlePopupClose = () => {
    setShowPopup(false);
    setCurrentPopupAd(null);
    isPopupShowing = false;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (showPopup) {
        isPopupShowing = false;
      }
    };
  }, [showPopup]);

  return (
    <>
      {/* Banner Ad */}
      {showBannerAd && bannerAd && (
        <Box 
          sx={{ 
            width: '100%', 
            maxHeight: '180px',
            position: 'relative',
            mt: 2,
            mb: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          <Advertisement
            key={`banner-${bannerAd.id}`}
            ad={bannerAd}
            slot={AD_SLOTS.find(slot => slot.id === 'banner-top')!}
          />
        </Box>
      )}

      {/* Button Ad */}
      {showButtonAd && buttonAd && (
        <Box sx={{ width: '100%', mb: 2 }}>
          <Advertisement
            ad={buttonAd}
            slot={AD_SLOTS.find(slot => slot.id === 'button')!}
          />
        </Box>
      )}

      {/* Popup Ad */}
      {showPopup && currentPopupAd && (
        <Advertisement
          key={`popup-${currentPopupAd.id}`}
          ad={currentPopupAd}
          slot={AD_SLOTS.find(slot => slot.id === 'popup')!}
          onClose={handlePopupClose}
        />
      )}

      {/* Sidebar Ads */}
      {sidebarAds?.left && (
        <Advertisement
          ad={sidebarAds.left}
          slot={AD_SLOTS.find(slot => slot.id === 'left')!}
        />
      )}
      {sidebarAds?.right && (
        <Advertisement
          ad={sidebarAds.right}
          slot={AD_SLOTS.find(slot => slot.id === 'right')!}
        />
      )}

      {/* Checkout Ads */}
      {showCheckoutAds && checkoutAds && (
        <Grid container spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Advertisement
              ad={checkoutAds.left}
              slot={AD_SLOTS.find(slot => slot.id === 'checkout-left')!}
            />
          </Grid>
          <Grid item xs={6}>
            <Advertisement
              ad={checkoutAds.right}
              slot={AD_SLOTS.find(slot => slot.id === 'checkout-right')!}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};
