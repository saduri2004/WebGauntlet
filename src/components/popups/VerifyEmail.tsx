import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
  IconButton,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';

interface VerifyEmailProps {
  open: boolean;
  onClose: () => void;
}

export const VerifyEmail: React.FC<VerifyEmailProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    if (email) {
      setIsVerifying(true);
      setTimeout(() => {
        window.open('https://scam.com', '_blank');
        setIsVerifying(false);
      }, 1500);
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
          background: 'linear-gradient(135deg, #4CAF50 0%, #45A049 100%)',
          border: '3px solid #FFD700',
        }
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', color: 'white', pt: 4, position: 'relative' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#FFD700',
            bgcolor: 'rgba(255, 215, 0, 0.1)',
            '&:hover': {
              bgcolor: 'rgba(255, 215, 0, 0.2)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ mb: 2 }}>
          <MailIcon sx={{ fontSize: 60, color: '#FFD700' }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Verify Your Email
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, color: '#E8F5E9' }}>
          To continue with your purchase, please verify your email address
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center', color: 'white', pt: 2 }}>
          <Box sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.1)', 
            p: 3, 
            borderRadius: 2,
            mb: 3
          }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              🎉 Special offer unlocked! Verify now to receive:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              • 20% OFF your first purchase
              <br />
              • Free express shipping
              <br />
              • Exclusive VIP access
            </Typography>
          </Box>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                bgcolor: 'white',
                '& fieldset': {
                  borderColor: '#FFD700',
                },
                '&:hover fieldset': {
                  borderColor: '#FFD700',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFD700',
                },
              },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            disabled={isVerifying}
            sx={{
              bgcolor: '#FFD700',
              color: '#000',
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              mb: 2,
              '&:hover': {
                bgcolor: '#FFC000',
              }
            }}
            onClick={handleVerify}
          >
            {isVerifying ? (
              <CircularProgress size={24} sx={{ color: '#000' }} />
            ) : (
              'VERIFY & CLAIM OFFER'
            )}
          </Button>

          <Typography variant="caption" sx={{ color: '#E8F5E9', display: 'block' }}>
            *Limited time offer. Verify now before this exclusive deal expires!
          </Typography>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 1 }}>
            <Box sx={{ 
              width: 12, 
              height: 12, 
              borderRadius: '50%',
              bgcolor: '#FFD700',
            }} />
            <Box sx={{ 
              width: 12, 
              height: 12, 
              borderRadius: '50%',
              bgcolor: 'rgba(255, 215, 0, 0.5)',
            }} />
            <Box sx={{ 
              width: 12, 
              height: 12, 
              borderRadius: '50%',
              bgcolor: 'rgba(255, 215, 0, 0.3)',
            }} />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
