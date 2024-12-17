import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  IconButton,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MailIcon from '@mui/icons-material/Mail';

interface EmailDiscountProps {
  open: boolean;
  onClose: () => void;
}

export const EmailDiscount: React.FC<EmailDiscountProps> = ({
  open,
  onClose,
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://tinyurl.com/abc', '_blank');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
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
            color: '#2E7D32',
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
              color: 'white',
            }}
          >
            <LocalOfferIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              🎯 Exclusive Offer! 🎯
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: '#ffffff',
                fontWeight: 'bold'
              }}
            >
              Get 80% OFF Your Next Purchase!
            </Typography>
            <Box
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 2,
                p: 3,
                mb: 3
              }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                ✨ Enter your email to unlock:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: 'left'
                }}
              >
                <Typography component="li" sx={{ mb: 1 }}>
                  ✅ Instant 80% discount code
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  ✅ Free shipping on all orders
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  ✅ VIP early access to sales
                </Typography>
                <Typography component="li">
                  ✅ Exclusive member-only deals
                </Typography>
              </Box>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                InputProps={{
                  startAdornment: <MailIcon sx={{ mr: 1, color: '#2E7D32' }} />,
                  sx: {
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 2,
                  backgroundColor: '#ffffff',
                  color: '#2E7D32',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                🎁 Get My Discount Now! 🎁
              </Button>
            </Box>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 2,
                color: '#ffffff',
                fontSize: '0.8rem'
              }}
            >
              ⚡ Flash sale! Only {Math.floor(Math.random() * 50) + 10} discount codes remaining!
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
