import React from 'react';
import { MenuIcon, SwitchHorizontalIcon } from '../Icons';

interface BusinessHeaderProps {
  onMenuClick: () => void;
  onToggleRole: () => void;
}

const BusinessHeader: React.FC<BusinessHeaderProps> = ({ onMenuClick, onToggleRole }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm shadow-md z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <button 
                onClick={onToggleRole}
                className="flex items-center text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                title="تغییر به پنل مشتری"
              >
                <SwitchHorizontalIcon className="w-5 h-5 ml-2" />
                <span>پنل مشتری</span>
            </button>
          </div>
          
          {/* Center Section (Logo) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#/business/dashboard">
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

export default BusinessHeader;