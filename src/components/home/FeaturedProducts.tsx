import React from 'react';
import ProductGrid from '../products/ProductGrid';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <section className="py-12 md:py-16 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-900 mb-3">Featured Products</h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Discover our most popular items, selected for their exceptional quality and design.
          </p>
        </div>
        
        <ProductGrid 
          products={featuredProducts} 
          showViewAll={true} 
          viewAllLink="/e-commerce-lura/products?featured=true"
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;