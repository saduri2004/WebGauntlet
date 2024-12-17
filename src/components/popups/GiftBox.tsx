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
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

interface GiftBoxProps {
  open: boolean;
  onClose: () => void;
}

export const GiftBox: React.FC<GiftBoxProps> = ({
  open,
  onClose,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const prizes = ['$500 Gift Card', 'iPhone 15 Pro', '$1000 Cash', 'Mystery Prize'];
  const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpening(false);
      window.open('https://tinyurl.com/abc', '_blank');
    }, 2000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
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
              py: 3,
              px: 2,
              color: '#ffffff',
            }}
          >
            <Typography
              variant="h5"
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
              variant="body1"
              sx={{
                mb: 3,
                fontWeight: 'bold'
              }}
            >
              You've Been Selected to Receive a Special Gift!
            </Typography>
            <Box
              sx={{
                position: 'relative',
                width: 120,
                height: 120,
                margin: '0 auto',
                mb: 3,
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
              onClick={handleOpen}
            >
              {isOpening ? (
                <CircularProgress
                  size={80}
                  thickness={4}
                  sx={{
                    color: '#ffffff',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: -5,
                    marginLeft: -5,
                  }}
                />
              ) : (
                <CardGiftcardIcon
                  sx={{
                    fontSize: 120,
                    color: '#ffffff',
                    animation: 'bounce 2s infinite',
                    '@keyframes bounce': {
                      '0%, 100%': {
                        transform: 'translateY(0)',
                      },
                      '50%': {
                        transform: 'translateY(-10px)',
                      },
                    },
                  }}
                />
              )}
            </Box>
            <Button
              variant="contained"
              onClick={handleOpen}
              disabled={isOpening}
              fullWidth
              sx={{
                py: 1.5,
                backgroundColor: '#ffffff',
                color: '#ff8c00',
                fontWeight: 'bold',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              {isOpening ? '🎁 Opening...' : '🎁 Open Your Gift!'}
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
              ⏰ Gift expires in {Math.floor(Math.random() * 5) + 1} minutes!
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
