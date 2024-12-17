import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CloseIcon from '@mui/icons-material/Close';

interface AccountLockedProps {
  open: boolean;
  onClose: () => void;
}

export const AccountLocked: React.FC<AccountLockedProps> = ({ open, onClose }) => {
  const handleVerify = () => {
    window.open('https://scam.com', '_blank');
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: '#1a1a1a',
          border: '3px solid #DC3545',
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
            color: '#DC3545',
            bgcolor: 'rgba(220, 53, 69, 0.1)',
            '&:hover': {
              bgcolor: 'rgba(220, 53, 69, 0.2)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ mb: 2 }}>
          <LockIcon sx={{ fontSize: 60, color: '#DC3545' }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#DC3545' }}>
          ACCOUNT SECURITY ALERT
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Box sx={{ 
            bgcolor: 'rgba(220, 53, 69, 0.1)', 
            p: 2, 
            borderRadius: 2,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}>
            <WarningAmberIcon sx={{ color: '#DC3545', fontSize: 30 }} />
            <Typography variant="body1" sx={{ color: '#DC3545' }}>
              Suspicious activity detected on your account
            </Typography>
          </Box>
          
          <Typography variant="body1" sx={{ mb: 3 }}>
            For your security, your account has been temporarily locked.
            Verify your identity now to restore access and prevent permanent account suspension.
          </Typography>

          <Box sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            p: 2,
            borderRadius: 1,
            mb: 3
          }}>
            <Typography variant="body2" sx={{ color: '#999' }}>
              Time remaining to verify: <span style={{ color: '#DC3545', fontWeight: 'bold' }}>04:59</span>
            </Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: '#DC3545',
              color: 'white',
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              mb: 2,
              '&:hover': {
                bgcolor: '#BB2D3B',
              }
            }}
            onClick={handleVerify}
          >
            VERIFY IDENTITY NOW
          </Button>

          <Typography variant="caption" sx={{ color: '#666', display: 'block' }}>
            This is an automated security measure. Failure to verify may result in permanent account suspension.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
