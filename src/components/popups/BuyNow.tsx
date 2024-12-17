import React from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  IconButton,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

interface BuyNowProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  productPrice: string;
  productImage: string;
  productId: string;
  selectedVariant?: any;
  quantity?: number;
}

export const BuyNow: React.FC<BuyNowProps> = ({
  open,
  onClose,
  productName,
  productPrice,
  productImage,
  productId,
  selectedVariant,
  quantity = 1,
}) => {
  const dispatch = useDispatch();

  const handleBuyNow = () => {
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
          background: 'linear-gradient(135deg, #ff0000 0%, #990000 100%)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'visible',
          border: '3px solid #ffff00',
          animation: 'pulse 2s infinite'
        },
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.02)',
          },
          '100%': {
            transform: 'scale(1)',
          },
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
            backgroundColor: '#ffff00',
            color: '#ff0000',
            zIndex: 9999,
            '&:hover': {
              backgroundColor: '#ffff99',
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
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                animation: 'blink 1s infinite'
              }}
            >
              🔥 EXCLUSIVE OFFER! 🔥
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#ffff00',
                mb: 2,
                fontWeight: 'bold'
              }}
            >
              ⚠️ WARNING: Only {Math.floor(Math.random() * 5) + 1} items left! Act fast! ⚠️
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <Box
                  component="img"
                  src={productImage}
                  alt={productName}
                  sx={{
                    width: '100%',
                    maxWidth: 200,
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ mb: 2, fontWeight: 'bold' }}
                  >
                    {productName}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: '#ffff00',
                      fontWeight: 'bold',
                      textDecoration: 'line-through'
                    }}
                  >
                    Was: ${(parseFloat(productPrice.replace('$', '')) * 2).toFixed(2)}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 2,
                      color: '#ffffff',
                      fontWeight: 'bold',
                      animation: 'shake 0.5s infinite'
                    }}
                  >
                    NOW: {productPrice}
                  </Typography>
                  {selectedVariant && (
                    <Typography variant="body1" sx={{ mb: 1, color: '#ffff00' }}>
                      Selected: {selectedVariant.name}
                    </Typography>
                  )}
                  <Typography variant="body1" sx={{ mb: 2, color: '#ffff00' }}>
                    Quantity: {quantity}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              sx={{
                color: '#ffff00',
                mb: 2,
                fontStyle: 'italic'
              }}
            >
              🎁 FREE BONUS: Get a mystery gift worth $500 with your purchase!
            </Typography>
            <Button
              variant="contained"
              onClick={handleBuyNow}
              fullWidth
              sx={{
                mt: 2,
                py: 2,
                backgroundColor: '#ffff00',
                color: '#ff0000',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                '&:hover': {
                  backgroundColor: '#ffff99',
                },
                animation: 'shake 0.5s infinite',
                '@keyframes shake': {
                  '0%': { transform: 'translateX(0)' },
                  '25%': { transform: 'translateX(-5px)' },
                  '75%': { transform: 'translateX(5px)' },
                  '100%': { transform: 'translateX(0)' }
                }
              }}
            >
              🔒 PURCHASE NOW - 99% OFF! 🔒
            </Button>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 2,
                color: '#ffff00',
                fontSize: '0.7rem'
              }}
            >
              ⏰ Limited time offer! Expires in {Math.floor(Math.random() * 10) + 1} minutes!
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
