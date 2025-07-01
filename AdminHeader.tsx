import React from 'react';
import { MenuIcon } from '../Icons';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm shadow-md z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-4 space-x-reverse">
             {/* Can add admin-specific quick actions here later */}
          </div>
          
          {/* Center Section (Logo) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#/admin/dashboard">
                <img src="/logo.png" alt="رزرویتو لوگو" className="h-10 w-auto" />
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Open sidebar"
            >
              <MenuIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;