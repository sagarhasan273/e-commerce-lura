import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromotionBanner from '../components/home/PromotionBanner';
import ProductGrid from '../components/products/ProductGrid';
import { getNewArrivals, getOnSaleProducts } from '../data/products';

const HomePage: React.FC = () => {
  const newArrivals = getNewArrivals(4);
  const onSaleProducts = getOnSaleProducts(4);
  
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ProductGrid 
            products={newArrivals} 
            title="New Arrivals" 
            showViewAll={true} 
            viewAllLink="/products?newArrival=true"
          />
        </div>
      </section>
      
      <PromotionBanner />
      
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container-custom">
          <ProductGrid 
            products={onSaleProducts} 
            title="On Sale" 
            showViewAll={true} 
            viewAllLink="/products?onSale=true"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;