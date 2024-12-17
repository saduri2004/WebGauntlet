import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DiscountIcon from '@mui/icons-material/Discount';
import SavingsIcon from '@mui/icons-material/Savings';

interface PromoPopupProps {
  open: boolean;
  onClose: () => void;
  type: 'discount' | 'offer' | 'savings';
}

const promoContent = {
  discount: {
    title: 'EXCLUSIVE DISCOUNT! 🎉',
    subtitle: 'Limited Time Offer',
    description: 'Use code SAVE20 for 20% off your entire purchase!',
    icon: DiscountIcon,
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    buttonText: 'Apply Discount',
  },
  offer: {
    title: 'Special Deal! 💫',
    subtitle: 'Buy More, Save More',
    description: 'Add 3 items to your cart and get 1 FREE!',
    icon: LocalOfferIcon,
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)',
    buttonText: 'Shop More',
  },
  savings: {
    title: 'Flash Sale! ⚡',
    subtitle: 'Next 30 Minutes Only',
    description: 'Free shipping on orders over $50!',
    icon: SavingsIcon,
    gradient: 'linear-gradient(135deg, #2196F3 0%, #03A9F4 100%)',
    buttonText: 'Continue Shopping',
  },
};

export const PromoPopup: React.FC<PromoPopupProps> = ({
  open,
  onClose,
  type,
}) => {
  const content = promoContent[type];
  const Icon = content.icon;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          background: content.gradient,
          position: 'relative',
          overflow: 'visible',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: -10,
          top: -10,
          backgroundColor: 'white',
          '&:hover': { backgroundColor: '#f5f5f5' },
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            py: 4,
            textAlign: 'center',
          }}
        >
          <Icon sx={{ fontSize: 60, mb: 2 }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {content.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 2,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              opacity: 0.9,
            }}
          >
            {content.subtitle}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: '80%',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            {content.description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={onClose}
            sx={{
              bgcolor: 'white',
              color: '#333',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  transform: 'scale(1)',
                  boxShadow: '0 0 0 0 rgba(255,255,255,0.7)',
                },
                '70%': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 0 10px rgba(255,255,255,0)',
                },
                '100%': {
                  transform: 'scale(1)',
                  boxShadow: '0 0 0 0 rgba(255,255,255,0)',
                },
              },
            }}
          >
            {content.buttonText}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
