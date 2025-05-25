import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Lock } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      clearCart();
      navigate('/checkout/success');
    }, 1500);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
        <p className="text-primary-600 mb-8">
          Add some items to your cart before proceeding to checkout.
        </p>
        <Link to="/e-commerce-lura/products">
          <Button variant="primary">
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-primary-700 mb-1">
                  Street Address*
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-primary-700 mb-1">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-primary-700 mb-1">
                    State/Province*
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-primary-700 mb-1">
                    ZIP/Postal Code*
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
              
              <div className="mb-4">
                <label htmlFor="cardName" className="block text-sm font-medium text-primary-700 mb-1">
                  Name on Card*
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-primary-700 mb-1">
                  Card Number*
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    required
                    className="input pr-10"
                  />
                  <CreditCard size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expDate" className="block text-sm font-medium text-primary-700 mb-1">
                    Expiration Date*
                  </label>
                  <input
                    type="text"
                    id="expDate"
                    name="expDate"
                    value={formData.expDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-primary-700 mb-1">
                    Security Code (CVV)*
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    required
                    className="input"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex items-center text-primary-600">
                <Lock size={16} className="mr-2" />
                <span className="text-sm">Your payment information is encrypted and secure.</span>
              </div>
            </div>
            
            <div className="mt-6 lg:hidden">
              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                fullWidth
                isLoading={isProcessing}
              >
                {isProcessing ? "Processing..." : `Complete Order • $${total.toFixed(2)}`}
              </Button>
              
              <div className="mt-4 text-center text-sm text-primary-500">
                By completing your purchase, you agree to our <a href="#" className="underline">Terms of Service</a>
              </div>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="max-h-64 overflow-auto mb-4">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex py-3 border-b border-primary-100">
                  <div className="w-16 h-16 mr-3 flex-shrink-0">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-sm">{item.product.name}</p>
                    <p className="text-primary-600 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
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
            
            <div className="hidden lg:block">
              <Button 
                onClick={handleSubmit} 
                variant="accent" 
                size="lg" 
                fullWidth
                isLoading={isProcessing}
              >
                {isProcessing ? "Processing..." : "Complete Order"}
              </Button>
              
              <div className="mt-4 text-center text-sm text-primary-500">
                By completing your purchase, you agree to our <a href="#" className="underline">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;