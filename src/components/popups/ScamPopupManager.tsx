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

  // Show popup on initial load
  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentPopup(getRandomPopup());
      setShowPopup(true);
    }
  }, []);

  // Show popup on category change
  useEffect(() => {
    if (location.pathname.startsWith('/category/')) {
      setCurrentPopup(getRandomPopup());
      setShowPopup(true);
    }
  }, [location.pathname]);

  // Show popup every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPopup(getRandomPopup());
      setShowPopup(true);
    }, POPUP_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

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
