import React from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface CheckoutNowProps {
  open: boolean;
  onClose: () => void;
}

export const CheckoutNow: React.FC<CheckoutNowProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
          borderRadius: '16px',
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white',
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
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Complete Your Purchase Now!
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            🎁 Get FREE Express Shipping
            <br />
            When you checkout in the next 15 minutes!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={onClose}
              sx={{
                bgcolor: '#2ecc71',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: '#27ae60',
                },
              }}
            >
              Checkout Now
            </Button>
          </Box>
          <Typography
            variant="body2"
            sx={{
              mt: 3,
              opacity: 0.8,
            }}
          >
            *Limited time offer. Terms and conditions apply.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
