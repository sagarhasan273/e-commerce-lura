import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container-custom py-16 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-primary-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-primary-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/e-commerce-lura/">
            <Button variant="primary" leftIcon={<Home size={18} />}>
              Back to Home
            </Button>
          </Link>
          <Link to="/e-commerce-lura/products">
            <Button variant="outline" leftIcon={<Search size={18} />}>
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;