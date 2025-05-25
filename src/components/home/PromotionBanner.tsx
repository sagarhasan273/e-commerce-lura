import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const PromotionBanner: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Summer Collection 2025
            </h2>
            <p className="text-white text-lg max-w-xl mb-6">
              Explore our latest arrivals, designed for the warmer days ahead. Limited quantities available.
            </p>
            <Link to="/products?newArrival=true">
              <Button variant="accent" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;