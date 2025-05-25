import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, ShoppingCart, Share2, ArrowLeft, Plus, Minus, Check, ChevronRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import ProductGrid from '../components/products/ProductGrid';
import { getProductById, getRelatedProducts } from '../data/products';
import { getCategoryById } from '../data/categories';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(parseInt(productId || '0'));
  const relatedProducts = getRelatedProducts(parseInt(productId || '0'));
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors ? product.colors[0] : undefined
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes ? product.sizes[0] : undefined
  );
  const [currentImage, setCurrentImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  
  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedColor(product.colors ? product.colors[0] : undefined);
      setSelectedSize(product.sizes ? product.sizes[0] : undefined);
      setCurrentImage(0);
      setAddedToCart(false);
    }
  }, [product]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    addToCart(product, quantity);
    setAddedToCart(true);
    
    // Reset added state after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };
  
  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
        <Link to="/e-commerce-lura/products">
          <Button variant="primary">Browse Products</Button>
        </Link>
      </div>
    );
  }
  
  const category = getCategoryById(product.category);
  
  return (
    <div className="pb-16">
      {/* Breadcrumbs */}
      <div className="bg-primary-50 py-3">
        <div className="container-custom">
          <div className="flex items-center text-sm text-primary-600">
            <Link to="/e-commerce-lura/" className="hover:text-primary-800">Home</Link>
            <ChevronRight size={14} className="mx-1" />
            <Link to="/e-commerce-lura/products" className="hover:text-primary-800">Products</Link>
            {category && (
              <>
                <ChevronRight size={14} className="mx-1" />
                <Link 
                  to={`/products?category=${category.id}`}
                  className="hover:text-primary-800"
                >
                  {category.name}
                </Link>
              </>
            )}
            <ChevronRight size={14} className="mx-1" />
            <span className="text-primary-800">{product.name}</span>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <Link to="/e-commerce-lura/products" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6">
          <ArrowLeft size={16} className="mr-1" /> Back to Products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square overflow-hidden bg-white rounded-lg mb-4">
              <img 
                src={product.images[currentImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.onSale && (
                <span className="absolute top-4 left-4 bg-error-500 text-white text-sm font-medium px-2 py-1 rounded">
                  Sale
                </span>
              )}
              
              {product.newArrival && (
                <span className="absolute top-4 right-4 bg-accent-500 text-white text-sm font-medium px-2 py-1 rounded">
                  New
                </span>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      currentImage === index ? 'border-accent-500' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-semibold text-primary-900 mb-2">{product.name}</h1>
            
            {/* Price */}
            <div className="mb-4">
              {product.onSale ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-primary-900">${product.price.toFixed(2)}</span>
                  <span className="text-lg text-primary-500 line-through">${product.originalPrice?.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-2xl font-semibold text-primary-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < Math.floor(product.rating) ? "text-accent-500" : "text-primary-200"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-primary-600">{product.rating.toFixed(1)}</span>
              <span className="mx-2 text-primary-300">|</span>
              <span className="text-primary-600">{product.reviews} reviews</span>
            </div>
            
            {/* Description */}
            <p className="text-primary-700 mb-6">{product.shortDescription}</p>
            
            {/* Color Selection */}
            {product.colors && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Color: {selectedColor}</h3>
                <div className="flex gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                        selectedColor === color 
                          ? 'border-accent-500' 
                          : 'border-primary-300 hover:border-primary-400'
                      }`}
                      aria-label={`Select ${color}`}
                    >
                      <div 
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color.toLowerCase() }}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Size: {selectedSize}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                        selectedSize === size 
                          ? 'border-accent-500 bg-accent-50 text-accent-700' 
                          : 'border-primary-300 hover:border-primary-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Quantity:</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-primary-300 rounded-l-md bg-primary-50"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <div className="w-16 h-10 flex items-center justify-center border-t border-b border-primary-300 bg-white">
                  {quantity}
                </div>
                <button 
                  onClick={increaseQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-primary-300 rounded-r-md bg-primary-50"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button 
                variant={addedToCart ? "primary" : "accent"}
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                leftIcon={addedToCart ? <Check size={18} /> : <ShoppingCart size={18} />}
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={handleWishlistToggle}
                leftIcon={<Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />}
                className={isInWishlist(product.id) ? 'text-accent-500 border-accent-500' : ''}
              >
                Wishlist
              </Button>
            </div>
            
            {/* Product Details */}
            <div className="border-t border-primary-200 pt-6 mb-6">
              <h3 className="font-semibold mb-3">Product Details</h3>
              <p className="text-primary-700 whitespace-pre-line">{product.description}</p>
            </div>
            
            {/* Share */}
            <div className="flex items-center">
              <Share2 size={16} className="text-primary-600 mr-2" />
              <span className="text-primary-600">Share this product</span>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;