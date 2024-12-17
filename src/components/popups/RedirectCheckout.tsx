import React from 'react';
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
import SecurityIcon from '@mui/icons-material/Security';

interface RedirectCheckoutProps {
  open: boolean;
  onClose: () => void;
}

export const RedirectCheckout: React.FC<RedirectCheckoutProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'visible'
        }
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
            color: '#43cea2',
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
            }}
          >
            <SecurityIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Secure Checkout
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              We're redirecting you to our secure payment partner
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <CircularProgress sx={{ color: 'white' }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Please do not close this window. You will be redirected automatically.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={onClose}
              sx={{
                bgcolor: 'white',
                color: '#43cea2',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Cancel Redirect
            </Button>
            <Typography
              variant="body2"
              sx={{
                mt: 3,
                opacity: 0.8,
              }}
            >
              All transactions are secured and encrypted
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
