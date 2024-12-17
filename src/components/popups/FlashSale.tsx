import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface FlashSaleProps {
  open: boolean;
  onClose: () => void;
}

export const FlashSale: React.FC<FlashSaleProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
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
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'pulse 1.5s infinite',
            }}
          >
            🔥 FLASH SALE ALERT! 🔥
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Limited Time Only!
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Get an EXTRA 30% OFF
            <br />
            Use Code: FLASH30
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
                bgcolor: 'white',
                color: '#ff4e50',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Shop Now
            </Button>
          </Box>
          <Typography
            variant="body2"
            sx={{
              mt: 3,
              opacity: 0.8,
            }}
          >
            *Offer valid for the next 2 hours only
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
