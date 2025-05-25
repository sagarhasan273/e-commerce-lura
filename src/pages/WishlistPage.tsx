import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const handleAddToCart = (productId: number) => {
    const product = wishlistItems.find(item => item.id === productId);
    if (product) {
      addToCart(product, 1);
      removeFromWishlist(productId);
    }
  };
  
  if (wishlistItems.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="max-w-md mx-auto">
          <Heart size={64} className="mx-auto text-primary-300 mb-4" />
          <h1 className="text-2xl font-semibold mb-4">Your Wishlist is Empty</h1>
          <p className="text-primary-600 mb-8">
            Save items you love for later by clicking the heart icon on any product.
          </p>
          <Link to="/e-commerce-lura/products">
            <Button variant="primary" size="lg">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">My Wishlist</h1>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        {/* Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-primary-100 bg-primary-50">
          <div className="col-span-6">
            <span className="font-medium">Product</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="font-medium">Price</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="font-medium">Status</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="font-medium">Actions</span>
          </div>
        </div>
        
        {/* Wishlist Items */}
        {wishlistItems.map(item => (
          <div 
            key={item.id} 
            className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-primary-100 items-center"
          >
            {/* Product */}
            <div className="col-span-1 md:col-span-6 flex items-center">
              <Link to={`/products/${item.id}`} className="w-20 h-20 mr-4 flex-shrink-0">
                <img 
                  src={item.images[0]} 
                  alt={item.name} 
                  className="w-full h-full object-cover rounded-md"
                />
              </Link>
              <div>
                <Link 
                  to={`/products/${item.id}`}
                  className="font-medium text-primary-900 hover:text-accent-500 transition-colors"
                >
                  {item.name}
                </Link>
                
                {/* Mobile: Price & Status */}
                <div className="md:hidden mt-1 flex justify-between">
                  <span className="text-primary-600">${item.price.toFixed(2)}</span>
                  <span className={`text-sm ${item.inStock ? 'text-success-500' : 'text-error-500'}`}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                {/* Mobile Actions */}
                <div className="flex gap-2 mt-2 md:hidden">
                  <button 
                    onClick={() => handleAddToCart(item.id)}
                    className="btn btn-accent py-1 px-3 text-sm"
                    disabled={!item.inStock}
                  >
                    <ShoppingBag size={14} className="mr-1" />
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="btn btn-outline py-1 px-3 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            
            {/* Price - Desktop */}
            <div className="hidden md:flex md:col-span-2 justify-center">
              <span className="text-primary-800">${item.price.toFixed(2)}</span>
            </div>
            
            {/* Status - Desktop */}
            <div className="hidden md:flex md:col-span-2 justify-center">
              <span className={`${item.inStock ? 'text-success-500' : 'text-error-500'}`}>
                {item.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            {/* Actions - Desktop */}
            <div className="hidden md:flex md:col-span-2 justify-center gap-2">
              <button 
                onClick={() => handleAddToCart(item.id)}
                className="btn btn-accent py-1 px-3 text-sm"
                disabled={!item.inStock}
              >
                <ShoppingBag size={14} className="mr-1" />
                Add
              </button>
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="btn btn-outline py-1 px-3 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        
        {/* Actions */}
        <div className="p-4 flex justify-between">
          <button 
            onClick={clearWishlist}
            className="text-primary-600 hover:text-primary-800 text-sm font-medium"
          >
            Clear Wishlist
          </button>
          
          <Link to="/e-commerce-lura/products" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;