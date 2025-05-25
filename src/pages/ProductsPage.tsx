import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, X, Grid, List } from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid';
import Button from '../components/ui/Button';
import { Product, products } from '../data/products';
import { categories, getCategoryById } from '../data/categories';

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState<{
    featured: boolean;
    newArrival: boolean;
    onSale: boolean;
  }>({
    featured: false,
    newArrival: false,
    onSale: false,
  });
  
  const location = useLocation();
  
  // Parse query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const featuredParam = params.get('featured');
    const newArrivalParam = params.get('newArrival');
    const onSaleParam = params.get('onSale');
    
    // Reset filters
    const newFilters = {
      featured: featuredParam === 'true',
      newArrival: newArrivalParam === 'true',
      onSale: onSaleParam === 'true',
    };
    
    setSelectedFilters(newFilters);
    setSelectedCategory(categoryParam ? parseInt(categoryParam) : null);
    
  }, [location.search]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Category filter
    if (selectedCategory !== null) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Special filters
    if (selectedFilters.featured) {
      result = result.filter(product => product.featured);
    }
    
    if (selectedFilters.newArrival) {
      result = result.filter(product => product.newArrival);
    }
    
    if (selectedFilters.onSale) {
      result = result.filter(product => product.onSale);
    }
    
    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For demo purposes, we'll assume higher IDs are newer products
        result.sort((a, b) => b.id - a.id);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      // Default is 'featured'
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, selectedFilters, sortBy]);
  
  // Get category name for title
  const categoryName = selectedCategory 
    ? getCategoryById(selectedCategory)?.name 
    : 'All Products';
  
  const toggleFilter = (filter: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };
  
  const handlePriceChange = (index: number, value: number) => {
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };
  
  const resetFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 500]);
    setSelectedFilters({
      featured: false,
      newArrival: false,
      onSale: false,
    });
    setSortBy('featured');
  };
  
  return (
    <div>
      {/* Header */}
      <div className="bg-primary-100 py-8 mb-8">
        <div className="container-custom">
          <h1 className="text-3xl font-semibold text-primary-900">{categoryName}</h1>
        </div>
      </div>
      
      <div className="container-custom">
        <div className="md:flex gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-primary-600 hover:text-accent-500"
                  >
                    Reset
                  </button>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="all-categories" 
                        name="category"
                        checked={selectedCategory === null}
                        onChange={() => setSelectedCategory(null)}
                        className="mr-2"
                      />
                      <label htmlFor="all-categories">All Categories</label>
                    </div>
                    
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input 
                          type="radio" 
                          id={`category-${category.id}`} 
                          name="category"
                          checked={selectedCategory === category.id}
                          onChange={() => setSelectedCategory(category.id)}
                          className="mr-2"
                        />
                        <label htmlFor={`category-${category.id}`}>{category.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-primary-600">Min: ${priceRange[0]}</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="500" 
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-primary-600">Max: ${priceRange[1]}</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="500" 
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Special Filters */}
                <div>
                  <h4 className="font-medium mb-2">Special</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="featured" 
                        checked={selectedFilters.featured}
                        onChange={() => toggleFilter('featured')}
                        className="mr-2"
                      />
                      <label htmlFor="featured">Featured</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="new-arrivals" 
                        checked={selectedFilters.newArrival}
                        onChange={() => toggleFilter('newArrival')}
                        className="mr-2"
                      />
                      <label htmlFor="new-arrivals">New Arrivals</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="on-sale" 
                        checked={selectedFilters.onSale}
                        onChange={() => toggleFilter('onSale')}
                        className="mr-2"
                      />
                      <label htmlFor="on-sale">On Sale</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap justify-between items-center">
              <div className="flex items-center mb-2 md:mb-0">
                <Button 
                  variant="outline" 
                  className="md:hidden mr-2"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                </Button>
                
                <span className="text-primary-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <div>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="input py-1 px-3"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
                
                {/* View Toggle */}
                <div className="hidden md:flex border border-primary-200 rounded-md overflow-hidden">
                  <button 
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary-100' : 'bg-white'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid size={18} />
                  </button>
                  <button 
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary-100' : 'bg-white'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Products */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
      
      {/* Mobile Filters Sidebar */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
        showFilters ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="absolute inset-0 bg-primary-900 opacity-50" onClick={() => setShowFilters(false)}></div>
        <div className="relative bg-white h-full w-3/4 max-w-xs p-4 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">Filters</h3>
            <button onClick={() => setShowFilters(false)}>
              <X size={20} />
            </button>
          </div>
          
          {/* Filter content - same as desktop */}
          {/* Categories */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Categories</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="all-categories-mobile" 
                  name="category-mobile"
                  checked={selectedCategory === null}
                  onChange={() => setSelectedCategory(null)}
                  className="mr-2"
                />
                <label htmlFor="all-categories-mobile">All Categories</label>
              </div>
              
              {categories.map(category => (
                <div key={category.id} className="flex items-center">
                  <input 
                    type="radio" 
                    id={`category-${category.id}-mobile`} 
                    name="category-mobile"
                    checked={selectedCategory === category.id}
                    onChange={() => setSelectedCategory(category.id)}
                    className="mr-2"
                  />
                  <label htmlFor={`category-${category.id}-mobile`}>{category.name}</label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Price Range</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-primary-600">Min: ${priceRange[0]}</label>
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm text-primary-600">Max: ${priceRange[1]}</label>
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Special Filters */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Special</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="featured-mobile" 
                  checked={selectedFilters.featured}
                  onChange={() => toggleFilter('featured')}
                  className="mr-2"
                />
                <label htmlFor="featured-mobile">Featured</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="new-arrivals-mobile" 
                  checked={selectedFilters.newArrival}
                  onChange={() => toggleFilter('newArrival')}
                  className="mr-2"
                />
                <label htmlFor="new-arrivals-mobile">New Arrivals</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="on-sale-mobile" 
                  checked={selectedFilters.onSale}
                  onChange={() => toggleFilter('onSale')}
                  className="mr-2"
                />
                <label htmlFor="on-sale-mobile">On Sale</label>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="primary" 
              onClick={() => setShowFilters(false)}
              fullWidth
            >
              Apply Filters
            </Button>
            <Button 
              variant="outline" 
              onClick={resetFilters}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;