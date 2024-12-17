import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface OrderConfirmationProps {
  open: boolean;
  onClose: () => void;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: '#ffffff',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'visible',
        },
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#666',
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
            }}
          >
            <CheckCircleIcon 
              sx={{ 
                fontSize: 60, 
                mb: 2, 
                color: '#4CAF50'
              }} 
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              Order Confirmed!
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#666' }}
            >
              Thank you for your order. You will receive a confirmation email shortly.
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
