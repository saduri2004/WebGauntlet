import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Slider,
  Rating,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  Checkbox,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { RootState } from '../store/store';
import { setFilters, clearFilters } from '../store/slices/productsSlice';

const ProductFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, filters, brands, features } = useSelector((state: RootState) => state.products);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    dispatch(setFilters({ priceRange: newValue as [number, number] }));
  };

  const handleRatingChange = (event: Event, newValue: number | null) => {
    if (newValue !== null) {
      dispatch(setFilters({ minRating: newValue }));
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Category selected:', event.target.value);
    dispatch(setFilters({ category: event.target.value }));
  };

  const handleFeatureChange = (feature: string) => {
    const updatedFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    dispatch(setFilters({ features: updatedFeatures }));
  };

  const handleBrandChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setFilters({ brand: event.target.value as string }));
  };

  const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setFilters({ sortBy: event.target.value as string }));
  };

  const handleAvailabilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ inStock: event.target.checked }));
  };

  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      {/* Sort Options */}
      <Box sx={{ mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={filters.sortBy}
            onChange={handleSortChange}
            label="Sort By"
          >
            <MenuItem value="relevance">Relevance</MenuItem>
            <MenuItem value="price_low">Price: Low to High</MenuItem>
            <MenuItem value="price_high">Price: High to Low</MenuItem>
            <MenuItem value="rating">Highest Rated</MenuItem>
            <MenuItem value="newest">New Arrivals</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Categories */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup value={filters.category} onChange={handleCategoryChange}>
              <FormControlLabel value="" control={<Radio />} label="All Categories" />
              {categories.map((category) => (
                <FormControlLabel
                  key={category.id}
                  value={category.id}
                  control={<Radio />}
                  label={category.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Price Range */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={filters.priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            sx={{ mt: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2">${filters.priceRange[0]}</Typography>
            <Typography variant="body2">${filters.priceRange[1]}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Rating Filter */}
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Minimum Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Rating
            value={filters.minRating}
            onChange={handleRatingChange}
            precision={0.5}
          />
        </AccordionDetails>
      </Accordion>

      {/* Brands */}
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Brands</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <Select
              value={filters.brand}
              onChange={handleBrandChange}
              displayEmpty
            >
              <MenuItem value="">All Brands</MenuItem>
              {brands.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Features */}
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {features.map((feature) => (
              <Chip
                key={feature}
                label={feature}
                onClick={() => handleFeatureChange(feature)}
                color={filters.features.includes(feature) ? 'primary' : 'default'}
                sx={{ m: 0.5 }}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Availability */}
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.inStock}
              onChange={handleAvailabilityChange}
            />
          }
          label="In Stock Only"
        />
      </Box>

      <Button
        variant="outlined"
        fullWidth
        onClick={() => dispatch(clearFilters())}
        sx={{ mt: 2 }}
      >
        Clear Filters
      </Button>
    </Paper>
  );
};

export default ProductFilters;
