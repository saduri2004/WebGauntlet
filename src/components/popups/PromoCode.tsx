import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MoneyIcon from '@mui/icons-material/Money';

interface PromoCodeProps {
  open: boolean;
  onClose: () => void;
}

export const PromoCode: React.FC<PromoCodeProps> = ({ open, onClose }) => {
  const [countdown, setCountdown] = useState(299); // 4:59 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  const handleApplyDiscount = () => {
    window.location.href = 'https://tinyurl.com/abc';
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #ff6b6b 10px, #ff6b6b 20px)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'visible',
          animation: 'pulse 1.5s infinite',
          border: '5px solid gold',
        },
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: -10,
            top: -10,
            backgroundColor: 'white',
            color: '#ff4e50',
            zIndex: 9999,
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Box
            sx={{
              textAlign: 'center',
              py: 4,
              px: 2,
              color: 'white',
              position: 'relative',
            }}
          >
            <Box 
              sx={{ 
                position: 'absolute',
                top: 10,
                left: 10,
                padding: '5px 10px',
                background: '#ff0000',
                color: '#ffff00',
                border: '2px solid #ffff00',
                borderRadius: '5px',
                transform: 'rotate(-15deg)',
                animation: 'flash 0.5s infinite',
                '@keyframes flash': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 },
                },
              }}
            >
              NOT A SCAM!!!
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
              <MoneyIcon sx={{ fontSize: 60, animation: 'spin 2s linear infinite' }} />
              <CurrencyBitcoinIcon sx={{ fontSize: 60, animation: 'spin 2s linear infinite' }} />
              <LocalOfferIcon sx={{ fontSize: 60, animation: 'spin 2s linear infinite' }} />
              <EmojiEventsIcon sx={{ fontSize: 60, animation: 'spin 2s linear infinite' }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                animation: 'rainbow 2s linear infinite',
                '@keyframes rainbow': {
                  '0%': { color: '#ff0000' },
                  '20%': { color: '#ffff00' },
                  '40%': { color: '#00ff00' },
                  '60%': { color: '#00ffff' },
                  '80%': { color: '#ff00ff' },
                  '100%': { color: '#ff0000' },
                },
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}
            >
              🎯 CONGRATULATIONS!!! YOU'VE BEEN SELECTED! 🎯
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                animation: 'blink 0.5s infinite',
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 },
                },
              }}
            >
              ⚡️ YOU ARE THE 1,000,000th VISITOR!!! ⚡️
            </Typography>
            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.9)',
                py: 2,
                px: 4,
                borderRadius: 2,
                display: 'inline-block',
                mb: 4,
                border: '3px dashed #ffff00',
                boxShadow: '0 0 20px rgba(255,255,0,0.5)',
                animation: 'shake 0.5s infinite',
                '@keyframes shake': {
                  '0%, 100%': { transform: 'translate(0, 0) rotate(0)' },
                  '25%': { transform: 'translate(5px, 5px) rotate(5deg)' },
                  '75%': { transform: 'translate(-5px, 5px) rotate(-5deg)' },
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: '#ff0000',
                  letterSpacing: 2,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                WIN $500 FREE!!!
              </Typography>
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                animation: 'marquee 5s linear infinite',
                whiteSpace: 'nowrap',
                '@keyframes marquee': {
                  '0%': { transform: 'translateX(100%)' },
                  '100%': { transform: 'translateX(-100%)' },
                },
              }}
            >
              🔥 FREE IPHONE 15 PRO MAX + $500 AMAZON GIFT CARD + 90% OFF YOUR ORDER! 🔥
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{ 
                mb: 4,
                color: '#ffff00',
                fontWeight: 'bold',
                animation: 'pulse 1s infinite',
              }}
            >
              ⏰ HURRY! Offer expires in {minutes}:{seconds.toString().padStart(2, '0')} ⏰
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleApplyDiscount}
              sx={{
                bgcolor: '#ffff00',
                color: '#ff0000',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                py: 2,
                px: 6,
                borderRadius: '25px',
                border: '2px solid #ff0000',
                boxShadow: '0 0 20px rgba(255,255,0,0.5)',
                '&:hover': {
                  bgcolor: '#ff0000',
                  color: '#ffff00',
                  border: '2px solid #ffff00',
                },
                animation: 'bounce 1s infinite',
                '@keyframes bounce': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              🎁 CLAIM YOUR $500 NOW! 🎁
            </Button>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 2,
                color: '#ffff00',
                fontSize: '0.7rem',
                animation: 'blink 1s infinite',
              }}
            >
              *NO CREDIT CARD REQUIRED! 100% REAL! NOT CLICKBAIT! TRUSTED BY MILLIONS!*
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
