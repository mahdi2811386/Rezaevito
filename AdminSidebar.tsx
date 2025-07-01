import React from 'react';
import type { AdminPermissions } from '@/types';
import { CloseIcon, DashboardIcon, UsersIcon, DollarSignIcon, VerifiedIcon, HelpCircleIcon, BookOpenIcon, MegaphoneIcon, LogOutIcon, LockIcon, SettingsIcon, ClipboardListIcon } from '../Icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  permissions: AdminPermissions;
}

const AdminSidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onLogout, permissions }) => {
  const sidebarItems = [
    { name: 'داشبورد اصلی', href: '#/admin/dashboard', icon: DashboardIcon, permissionKey: 'canViewDashboard' },
    { name: 'مدیریت ادمین‌ها', href: '#/admin/users', icon: UsersIcon, permissionKey: 'canManageUsers' },
    { name: 'مدیریت مالی', href: '#/admin/finance', icon: DollarSignIcon, permissionKey: 'canManageFinance' },
    { name: 'تایید هویت', href: '#/admin/verification', icon: VerifiedIcon, permissionKey: 'canManageVerification' },
    { name: 'پشتیبانی', href: '#/admin/support', icon: HelpCircleIcon, permissionKey: 'canManageSupport' },
    { name: 'امور خبری', href: '#/admin/news', icon: BookOpenIcon, permissionKey: 'canManageNews' },
    { name: 'امور تبلیغات', href: '#/admin/advertising', icon: MegaphoneIcon, permissionKey: 'canManageAdvertising' },
    { name: 'گزارش وقایع', href: '#/admin/logs', icon: ClipboardListIcon, permissionKey: 'canViewLogs'},
    { name: 'تنظیمات سیستم', href: '#/admin/settings', icon: SettingsIcon, permissionKey: 'canManageSystemSettings' },
  ];

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
          <a href="#/admin/dashboard" onClick={onClose} className="flex items-center gap-2">
            <img src="/logo.png" alt="رزرویتو لوگو" className="h-8 w-auto" />
            <span className="text-lg font-bold text-white">مدیریت</span>
          </a>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-2 flex flex-col h-[calc(100%-65px)]">
          <ul className="flex-grow">
            {sidebarItems.map(item => (
              <li key={item.name}>
                {permissions[item.permissionKey as keyof AdminPermissions] ? (
                   <a href={item.href} onClick={onClose} className="flex items-center p-3 my-1 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200">
                      <item.icon className="w-6 h-6 ml-4 text-red-500" />
                      <span className="font-semibold text-sm">{item.name}</span>
                   </a>
                ) : (
                   <div className="flex items-center p-3 my-1 text-gray-500 rounded-lg cursor-not-allowed">
                      <LockIcon className="w-6 h-6 ml-4 text-gray-600" />
                      <span className="font-semibold text-sm">{item.name}</span>
                   </div>
                )}
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

export default AdminSidebar;