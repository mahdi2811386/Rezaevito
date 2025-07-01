import React from 'react';
import { CloseIcon, HomeIcon, UserIcon, CalendarIcon, GiftIcon, BookOpenIcon, UsersIcon, StarIcon, LogOutIcon } from './Icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const sidebarItems = [
  { name: 'صفحه اصلی', href: '#/', icon: HomeIcon },
  { name: 'پروفایل کاربری', href: '#/profile', icon: UserIcon },
  { name: 'رزرو های من', href: '#/bookings', icon: CalendarIcon },
  { name: 'باشگاه وفاداری', href: '#/loyalty', icon: StarIcon },
  { name: 'تخفیف ها', href: '#/discounts', icon: GiftIcon },
  { name: 'مجله', href: '#/magazine', icon: BookOpenIcon },
  { name: 'دعوت از دوستان', href: '#/invite', icon: UsersIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onLogout }) => {
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
          <a href="#/" onClick={onClose}><img src="/logo.png" alt="رزرویتو لوگو" className="h-8 w-auto" /></a>
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
                  <span className="font-semibold">{item.name}</span>
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

export default Sidebar;