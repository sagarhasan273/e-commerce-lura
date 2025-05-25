import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, ShoppingCart, Heart, User, Menu, X, ChevronDown 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();
  
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Would handle search in a real app
    console.log('Searching for:', searchQuery);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-primary-50'
      }`}
    >
      <div className="container-custom">
        {/* Top Bar */}
        <div className="py-2 text-center text-sm border-b border-primary-100 hidden md:block">
          <p>Free shipping on orders over $50 | Fast delivery</p>
        </div>
        
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/e-commerce-lura/" className="text-2xl font-semibold text-primary-900">
            LURA
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/e-commerce-lura/" className="nav-link">Home</Link>
            <div className="relative group">
              <button 
                className="nav-link flex items-center gap-1"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                Shop <ChevronDown size={16} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute bg-white shadow-lg rounded-md p-4 min-w-48 grid grid-cols-2 gap-2 transition-all duration-200 ${
                isCategoryOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/e-commerce-lura/products?category=${category.id}`}
                    className="hover:text-accent-500 py-1"
                    onClick={() => setIsCategoryOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/e-commerce-lura/products" className="nav-link">All Products</Link>
          </nav>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:block max-w-xs w-full">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="input pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-500"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
          
          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/e-commerce-lura/wishlist" className="text-primary-700 hover:text-accent-500 transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/e-commerce-lura/account" className="text-primary-700 hover:text-accent-500 transition-colors">
              <User size={20} />
            </Link>
            <Link 
              to="/e-commerce-lura/cart" 
              className="text-primary-700 hover:text-accent-500 transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary-800" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-custom py-4 flex justify-between items-center border-b">
          <Link to="/e-commerce-lura/" className="text-2xl font-semibold text-primary-900">
            LURA
          </Link>
          <button 
            className="text-primary-800" 
            onClick={toggleMenu}
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="container-custom py-4">
          <form onSubmit={handleSearch} className="relative mb-6">
            <input
              type="text"
              placeholder="Search products..."
              className="input pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-500"
            >
              <Search size={18} />
            </button>
          </form>
          
          <nav className="flex flex-col space-y-4">
            <Link to="/e-commerce-lura/" className="py-2 border-b border-primary-100">Home</Link>
            <Link to="/e-commerce-lura/products" className="py-2 border-b border-primary-100">All Products</Link>
            
            {/* Categories */}
            <div className="py-2 border-b border-primary-100">
              <button 
                className="flex items-center justify-between w-full"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span>Categories</span>
                <ChevronDown size={16} className={isCategoryOpen ? 'rotate-180' : ''} />
              </button>
              
              <div className={`mt-2 ml-4 space-y-2 ${isCategoryOpen ? 'block' : 'hidden'}`}>
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/e-commerce-lura/products?category=${category.id}`}
                    className="block py-1"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/e-commerce-lura/wishlist" className="py-2 border-b border-primary-100 flex items-center gap-2">
              <Heart size={18} /> Wishlist
            </Link>
            <Link to="/e-commerce-lura/account" className="py-2 border-b border-primary-100 flex items-center gap-2">
              <User size={18} /> My Account
            </Link>
            <Link to="/e-commerce-lura/cart" className="py-2 border-b border-primary-100 flex items-center gap-2">
              <ShoppingCart size={18} /> Cart ({cartItemsCount})
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;