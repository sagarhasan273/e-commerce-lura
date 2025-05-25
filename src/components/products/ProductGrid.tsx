import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../data/products';

interface ProductGridProps {
  products: Product[];
  title?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  title, 
  showViewAll = false, 
  viewAllLink = '/e-commerce-lura/products'
}) => {
  return (
    <div className="mb-10">
      {title && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-primary-900">{title}</h2>
          
          {showViewAll && (
            <a 
              href={viewAllLink} 
              className="text-primary-700 hover:text-accent-500 transition-colors text-sm font-medium"
            >
              View All
            </a>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-10 text-primary-500">
          No products found.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;