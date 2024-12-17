import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CloseIcon from '@mui/icons-material/Close';

interface PrizeSelectorProps {
  open: boolean;
  onClose: () => void;
}

const prizes = [
  { id: 1, name: 'iPhone 15 Pro', image: '📱', value: '$999' },
  { id: 2, name: 'PlayStation 5', image: '🎮', value: '$499' },
  { id: 3, name: 'AirPods Pro', image: '🎧', value: '$249' },
];

export const PrizeSelector: React.FC<PrizeSelectorProps> = ({ open, onClose }) => {
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null);

  const handleSelect = (prizeId: number) => {
    setSelectedPrize(prizeId);
    setTimeout(() => {
      window.open('https://scam.com', '_blank');
    }, 1000);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(135deg, #6B66FF 0%, #4834DF 100%)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'visible',
          border: '3px solid #FFD700',
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
            color: '#6B66FF',
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
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <CardGiftcardIcon sx={{ fontSize: 40, color: '#FFD700', mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
              🎉 Congratulations! 🎉
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, color: '#E6E6FF' }}>
              You've been selected to receive one of these amazing prizes!
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {prizes.map((prize) => (
                <Grid item xs={12} sm={4} key={prize.id}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: selectedPrize === prize.id ? '#FFD700' : 'white',
                      transform: selectedPrize === prize.id ? 'scale(1.05)' : 'none',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                      }
                    }}
                    onClick={() => handleSelect(prize.id)}
                  >
                    <Typography variant="h2" sx={{ mb: 1 }}>
                      {prize.image}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {prize.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Value: {prize.value}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Select Prize
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Typography
              variant="body2"
              sx={{
                mt: 3,
                color: '#E6E6FF',
                opacity: 0.8,
              }}
            >
              *Limited time offer. Select your prize now!
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
