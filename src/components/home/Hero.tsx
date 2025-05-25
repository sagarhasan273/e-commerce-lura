import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-primary-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30"></div>
      
      <div className="relative container-custom py-20 md:py-28">
        <div className="max-w-xl">
          <p className="text-accent-400 font-medium mb-2 animate-fade-in">NEW COLLECTION 2025</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-in">
            Elevate Your Everyday
          </h1>
          <p className="text-primary-200 text-lg md:text-xl mb-8 max-w-md animate-slide-up">
            Discover thoughtfully designed products for modern living, crafted with exceptional materials and attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/e-commerce-lura/products">
              <Button 
                variant="accent" 
                size="lg" 
                rightIcon={<ArrowRight size={18} />}
                className="shadow-lg"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/e-commerce-lura/products?category=1">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-opacity-20"
              >
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;