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
    dispatch(addToCart({
      id: productId,
      name: productName,
      price: parseFloat(productPrice.replace('$', '')),
      image: productImage,
      quantity: quantity,
      variant: selectedVariant
    }));
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
            color: '#667eea',
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
            <ShoppingCartIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Quick Purchase
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
                      color: '#ffffff',
                      fontWeight: 'bold',
                    }}
                  >
                    {productPrice}
                  </Typography>
                  {selectedVariant && (
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Selected: {selectedVariant.name}
                    </Typography>
                  )}
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Quantity: {quantity}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              size="large"
              onClick={handleBuyNow}
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
                mb: 2,
              }}
            >
              Add to Cart
            </Button>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
              }}
            >
              Secure payment • Money-back guarantee
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
