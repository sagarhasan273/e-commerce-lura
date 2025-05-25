import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategorySection: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-900 mb-3">Shop by Category</h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Explore our carefully curated collections, each featuring premium products designed with purpose.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category) => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-primary-900"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-primary-200 mb-4">{category.description}</p>
                <span className="inline-block text-white font-medium border-b border-white pb-1 transition-all group-hover:border-accent-400 group-hover:text-accent-400">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {categories.slice(3, 5).map((category) => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[16/9] bg-primary-900"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-primary-200 mb-4">{category.description}</p>
                <span className="inline-block text-white font-medium border-b border-white pb-1 transition-all group-hover:border-accent-400 group-hover:text-accent-400">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;