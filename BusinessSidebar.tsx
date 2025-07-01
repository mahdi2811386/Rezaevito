import React from 'react';
import { CloseIcon, DashboardIcon, SettingsIcon, BarChart2Icon, DollarSignIcon, CalendarIcon, TagIcon, StarIcon, VerifiedIcon, HelpCircleIcon, MegaphoneIcon, MessageSquareIcon, LogOutIcon } from '../Icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const sidebarItems = [
  { name: 'داشبورد', href: '#/business/dashboard', icon: DashboardIcon },
  { name: 'پنل کسب و کار', href: '#/business/settings', icon: SettingsIcon },
  { name: 'منشی هوشمند', href: '#/business/assistant', icon: BarChart2Icon },
  { name: 'بخش مالی', href: '#/business/finance', icon: DollarSignIcon },
  { name: 'رزرو های انجام شده', href: '#/business/bookings', icon: CalendarIcon },
  { name: 'مدیریت تخفیف', href: '#/business/discounts', icon: TagIcon },
  { name: 'اشتراک من', href: '#/business/subscription', icon: StarIcon },
  { name: 'تبلیغات', href: '#/business/advertising', icon: MegaphoneIcon },
  { name: 'نظرات کاربران', href: '#/business/reviews', icon: MessageSquareIcon },
  { name: 'احراز هویت', href: '#/business/verification', icon: VerifiedIcon },
  { name: 'پشتیبانی', href: '#/business/support', icon: HelpCircleIcon },
];

const BusinessSidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onLogout }) => {
   const handleLogoutClick = () => {
    onClose();
    onLogout();
  };
  
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <a href="#/business/dashboard" onClick={onClose} className="flex items-center gap-2">
            <img src="/logo.png" alt="رزرویتو لوگو" className="h-8 w-auto" />
            <span className="text-lg font-bold text-white">کسب‌وکار</span>
          </a>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-2 flex flex-col h-[calc(100%-65px)]">
          <ul className="flex-grow">
            {sidebarItems.map(item => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center p-3 my-1 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  <item.icon className="w-6 h-6 ml-4 text-red-500" />
                  <span className="font-semibold text-sm">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="p-2 border-t border-gray-700">
            <button onClick={handleLogoutClick} className="w-full flex items-center p-3 text-gray-400 rounded-lg hover:bg-red-800 hover:text-white transition-colors duration-200">
                <LogOutIcon className="w-6 h-6 ml-4" />
                <span className="font-semibold text-sm">خروج از حساب</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default BusinessSidebar;