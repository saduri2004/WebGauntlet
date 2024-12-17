import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  IconButton,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

interface PrizeWheelProps {
  open: boolean;
  onClose: () => void;
}

export const PrizeWheel: React.FC<PrizeWheelProps> = ({
  open,
  onClose,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const prizes = ['$500 Gift Card', 'iPhone 15 Pro', '$1000 Cash', 'Mystery Prize'];

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      window.open('https://tinyurl.com/abc', '_blank');
    }, 3000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(135deg, #ffd700 0%, #ff8c00 100%)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'visible',
          border: '3px solid #ffffff',
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
            backgroundColor: '#ffffff',
            color: '#ff8c00',
            zIndex: 9999,
            '&:hover': {
              backgroundColor: '#f0f0f0',
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
              color: '#ffffff',
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              🎉 Congratulations! 🎉
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 'bold'
              }}
            >
              You've Been Selected to Win One of These Amazing Prizes:
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 2,
                mb: 4
              }}
            >
              {prizes.map((prize, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    padding: 2,
                    borderRadius: 2,
                    width: '45%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <CardGiftcardIcon />
                  <Typography variant="body1">{prize}</Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: 200,
                height: 200,
                margin: '0 auto',
                mb: 3
              }}
            >
              {isSpinning ? (
                <CircularProgress
                  size={200}
                  thickness={2}
                  sx={{
                    color: '#ffffff',
                    animation: 'spin 0.5s linear infinite',
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src="https://placehold.co/200x200/png?text=Prize+Wheel"
                  alt="Prize Wheel"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '3px solid #ffffff',
                  }}
                />
              )}
            </Box>
            <Button
              variant="contained"
              onClick={handleSpin}
              disabled={isSpinning}
              fullWidth
              sx={{
                mt: 2,
                py: 2,
                backgroundColor: '#ffffff',
                color: '#ff8c00',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              {isSpinning ? '🎡 Spinning...' : '🎡 Spin to Win!'}
            </Button>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 2,
                color: '#ffffff',
                fontSize: '0.8rem'
              }}
            >
              ⏰ Offer expires in {Math.floor(Math.random() * 5) + 1} minutes! Spin now!
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
