import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;
  
  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag size={64} className="mx-auto text-primary-300 mb-4" />
          <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
          <p className="text-primary-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-primary-100 bg-primary-50">
              <div className="col-span-6">
                <span className="font-medium">Product</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Price</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Quantity</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-medium">Total</span>
              </div>
            </div>
            
            {/* Cart Items */}
            {cartItems.map(item => (
              <div 
                key={item.product.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-primary-100 items-center"
              >
                {/* Product */}
                <div className="col-span-1 md:col-span-6 flex items-center">
                  <Link to={`/products/${item.product.id}`} className="w-20 h-20 mr-4 flex-shrink-0">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <div>
                    <Link 
                      to={`/products/${item.product.id}`}
                      className="font-medium text-primary-900 hover:text-accent-500 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    
                    {/* Mobile: Price */}
                    <div className="md:hidden mt-1">
                      <span className="text-primary-600">${item.product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Price - Desktop */}
                <div className="hidden md:block md:col-span-2 text-center">
                  <span className="text-primary-800">${item.product.price.toFixed(2)}</span>
                </div>
                
                {/* Quantity */}
                <div className="col-span-1 md:col-span-2 flex justify-center">
                  <div className="flex items-center">
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border border-primary-300 rounded-l-md bg-primary-50"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <div className="w-10 h-8 flex items-center justify-center border-t border-b border-primary-300 bg-white">
                      {item.quantity}
                    </div>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-primary-300 rounded-r-md bg-primary-50"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Total */}
                <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end">
                  <span className="md:hidden">Total:</span>
                  <div className="flex items-center">
                    <span className="font-medium text-primary-900 mr-3">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-primary-500 hover:text-error-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Cart Actions */}
            <div className="p-4 flex justify-between">
              <button 
                onClick={clearCart}
                className="text-primary-600 hover:text-primary-800 text-sm font-medium"
              >
                Clear Cart
              </button>
              
              <Link to="/products" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-primary-600">Subtotal</span>
                <span className="text-primary-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-600">Shipping</span>
                <span className="text-primary-900">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-600">Tax</span>
                <span className="text-primary-900">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-primary-200 pt-3 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-xl">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Link to="/checkout">
              <Button variant="accent" size="lg" fullWidth>
                Proceed to Checkout
              </Button>
            </Link>
            
            <div className="mt-4 text-center text-sm text-primary-500">
              Secure checkout powered by Stripe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;