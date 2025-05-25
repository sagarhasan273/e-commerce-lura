import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Twitter, Facebook, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">LUXE</h3>
            <p className="text-primary-300 mb-4">
              Premium quality products curated for the modern lifestyle. Discover the perfect balance of style, comfort, and functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-primary-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=1" className="text-primary-300 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?category=2" className="text-primary-300 hover:text-white transition-colors">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/products?onSale=true" className="text-primary-300 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-300">
                <Mail size={16} />
                <span>support@luxe.com</span>
              </li>
              <li className="flex items-center gap-2 text-primary-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">We Accept</h5>
              <div className="flex space-x-2">
                <CreditCard size={28} className="text-primary-300" />
                <CreditCard size={28} className="text-primary-300" />
                <CreditCard size={28} className="text-primary-300" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-6 text-center md:text-left md:flex justify-between items-center">
          <p className="text-primary-400 text-sm">
            &copy; {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-primary-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;