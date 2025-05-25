import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';

// Mock user data
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  joined: 'January 2023',
};

// Mock order data
const orderHistory = [
  {
    id: 'ORD-1234567',
    date: 'May 15, 2024',
    total: 299.99,
    status: 'Delivered',
    items: [
      {
        id: 1,
        name: 'Premium Leather Weekender Bag',
        price: 299.99,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
  {
    id: 'ORD-9876543',
    date: 'April 2, 2024',
    total: 289.98,
    status: 'Delivered',
    items: [
      {
        id: 3,
        name: 'Organic Cotton Crewneck Sweater',
        price: 89.99,
        image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 7,
        name: 'Handcrafted Leather Wallet',
        price: 89.99,
        image: 'https://images.pexels.com/photos/2079175/pexels-photo-2079175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 11,
        name: 'Premium Leather Belt',
        price: 69.99,
        image: 'https://images.pexels.com/photos/3374942/pexels-photo-3374942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
];

type Tab = 'profile' | 'orders' | 'settings';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">My Profile</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                <div className="w-24 h-24 rounded-full bg-primary-200 text-primary-700 flex items-center justify-center text-3xl font-bold mb-4 sm:mb-0 sm:mr-6">
                  {userData.name.charAt(0)}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">{userData.name}</h3>
                  <p className="text-primary-600">{userData.email}</p>
                  <p className="text-sm text-primary-500 mt-1">Member since {userData.joined}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Account Information</h4>
                  <div className="bg-primary-50 rounded-md p-4">
                    <div className="mb-3">
                      <label className="block text-sm text-primary-600 mb-1">Full Name</label>
                      <p>{userData.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-primary-600 mb-1">Email Address</label>
                      <p>{userData.email}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Default Shipping Address</h4>
                  <div className="bg-primary-50 rounded-md p-4">
                    <p>123 Main Street</p>
                    <p>Apt 4B</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                    
                    <button className="text-accent-500 text-sm font-medium mt-3">
                      Edit Address
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-primary-100">
                <Button variant="primary">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        );
      
      case 'orders':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Order History</h2>
            
            {orderHistory.length > 0 ? (
              <div className="space-y-6">
                {orderHistory.map(order => (
                  <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4 bg-primary-50 border-b border-primary-100 flex flex-wrap justify-between">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-primary-600">Placed on {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                        <p className={`text-sm ${
                          order.status === 'Delivered' ? 'text-success-500' : 'text-accent-500'
                        }`}>
                          {order.status}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      {order.items.map(item => (
                        <div key={item.id} className="flex py-3 border-b border-primary-100 last:border-0">
                          <div className="w-16 h-16 mr-3 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-primary-600">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="ml-2">
                            <button className="text-sm text-accent-500 hover:text-accent-600">
                              View Product
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-primary-50 border-t border-primary-100 flex justify-between">
                      <Button variant="outline" size="sm">
                        Order Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Track Package
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <Package size={48} className="mx-auto text-primary-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Orders Yet</h3>
                <p className="text-primary-600 mb-6">
                  When you place orders, they will appear here.
                </p>
                <a
                  href="/e-commerce-lura/products"
                  className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                >
                  Start Shopping
                </a>
              </div>
            )}
          </div>
        );
      
      case 'settings':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-medium mb-4">Email Preferences</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="order-updates" 
                    checked={true}
                    className="mr-3"
                  />
                  <label htmlFor="order-updates">Order updates and receipts</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="promotions" 
                    checked={true}
                    className="mr-3"
                  />
                  <label htmlFor="promotions">Promotions and sales</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="new-products" 
                    checked={false}
                    className="mr-3"
                  />
                  <label htmlFor="new-products">New product announcements</label>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="primary" size="sm">
                  Save Preferences
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-4">Security</h3>
              
              <div className="space-y-4">
                <Button variant="outline" fullWidth className="justify-start">
                  Change Password
                </Button>
                <Button variant="outline" fullWidth className="justify-start">
                  Two-Factor Authentication
                </Button>
                <Button variant="outline" fullWidth className="justify-start text-error-500 border-error-500 hover:bg-error-50">
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
            <div className="p-6 bg-primary-800 text-white">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-medium">{userData.name}</p>
                  <p className="text-sm text-primary-200">{userData.email}</p>
                </div>
              </div>
            </div>
            
            <nav className="p-2">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                  activeTab === 'profile' 
                    ? 'bg-primary-100 text-primary-800' 
                    : 'text-primary-600 hover:bg-primary-50'
                }`}
              >
                <User size={18} className="mr-3" />
                My Profile
              </button>
              
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                  activeTab === 'orders' 
                    ? 'bg-primary-100 text-primary-800' 
                    : 'text-primary-600 hover:bg-primary-50'
                }`}
              >
                <Package size={18} className="mr-3" />
                Order History
              </button>
              
              <a 
                href="/wishlist"
                className="w-full text-left px-4 py-3 rounded-md flex items-center text-primary-600 hover:bg-primary-50"
              >
                <Heart size={18} className="mr-3" />
                Wishlist
              </a>
              
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                  activeTab === 'settings' 
                    ? 'bg-primary-100 text-primary-800' 
                    : 'text-primary-600 hover:bg-primary-50'
                }`}
              >
                <Settings size={18} className="mr-3" />
                Settings
              </button>
              
              <button 
                className="w-full text-left px-4 py-3 rounded-md flex items-center text-primary-600 hover:bg-primary-50"
              >
                <LogOut size={18} className="mr-3" />
                Sign Out
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;