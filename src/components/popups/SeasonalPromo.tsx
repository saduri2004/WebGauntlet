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

interface SeasonalPromoProps {
  open: boolean;
  onClose: () => void;
}

export const SeasonalPromo: React.FC<SeasonalPromoProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
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
            }}
          >
            🎄 Holiday Special! 🎁
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Celebrate the Season with
            <br />
            AMAZING DEALS
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Up to 50% OFF
            <br />
            + Free Gift Wrapping
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
                color: '#185a9d',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Shop Holiday Deals
            </Button>
          </Box>
          <Typography
            variant="body2"
            sx={{
              mt: 3,
              opacity: 0.8,
            }}
          >
            *While supplies last. Exclusions may apply.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
