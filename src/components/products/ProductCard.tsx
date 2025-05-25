import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  return (
    <Link 
      to={`/products/${product.id}`} 
      className="group"
    >
      <div className="card product-card-animation overflow-hidden">
        {/* Product Image */}
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Labels */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.onSale && (
              <span className="bg-error-500 text-white text-xs font-medium px-2 py-1 rounded">
                Sale
              </span>
            )}
            {product.newArrival && (
              <span className="bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
                New
              </span>
            )}
          </div>
          
          {/* Actions */}
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
            <button 
              onClick={handleAddToCart}
              className="text-primary-800 hover:text-accent-500 transition-colors flex items-center gap-1 text-sm font-medium"
            >
              <ShoppingBag size={16} />
              Add to Cart
            </button>
            
            <button 
              onClick={handleWishlistToggle}
              className={`transition-colors ${isInWishlist(product.id) ? 'text-accent-500' : 'text-primary-400 hover:text-accent-500'}`}
            >
              <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-3">
          <h3 className="font-medium text-primary-800 mb-1 line-clamp-1">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div>
              {product.onSale ? (
                <div className="flex items-center gap-2">
                  <span className="text-accent-600 font-semibold">${product.price.toFixed(2)}</span>
                  <span className="text-primary-400 line-through text-sm">${product.originalPrice?.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-primary-800 font-semibold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center text-sm">
              <span className="text-accent-500">★</span>
              <span className="ml-1 text-primary-600">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;