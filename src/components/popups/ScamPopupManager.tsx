import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LockedAccount } from './LockedAccount';
import { GiftBox } from './GiftBox';
import { EmailDiscount } from './EmailDiscount';

const POPUP_INTERVAL = 30000; // 30 seconds

export const ScamPopupManager: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopup, setCurrentPopup] = useState<number>(0);
  const location = useLocation();

  const getRandomPopup = () => Math.floor(Math.random() * 3);

  // Don't show popups on checkout page
  const shouldShowPopups = !location.pathname.includes('/checkout');

  // Show popup on initial load
  useEffect(() => {
    if (location.pathname === '/' && shouldShowPopups) {
      setCurrentPopup(getRandomPopup());
      setShowPopup(true);
    }
  }, []);

  // Show popup on category change
  useEffect(() => {
    if (location.pathname.startsWith('/category/') && shouldShowPopups) {
      setCurrentPopup(getRandomPopup());
      setShowPopup(true);
    }
  }, [location.pathname]);

  // Show popup every 30 seconds
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (shouldShowPopups) {
      intervalId = setInterval(() => {
        setCurrentPopup(getRandomPopup());
        setShowPopup(true);
      }, POPUP_INTERVAL);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [location.pathname]);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!shouldShowPopups) {
    return null;
  }

  return (
    <>
      <LockedAccount 
        open={showPopup && currentPopup === 0} 
        onClose={handleClose} 
      />
      <GiftBox 
        open={showPopup && currentPopup === 1} 
        onClose={handleClose} 
      />
      <EmailDiscount 
        open={showPopup && currentPopup === 2} 
        onClose={handleClose} 
      />
    </>
  );
};
