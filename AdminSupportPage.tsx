import React from 'react';
import type { AdminPermissions } from '@/types';
import { HelpCircleIcon, LockIcon } from '@/components/Icons';

interface PageProps {
    permissions: AdminPermissions;
}

const AdminSupportPage: React.FC<PageProps> = ({ permissions }) => {
     if (!permissions.canManageSupport) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-gray-800/50 rounded-lg text-center p-10">
                <LockIcon className="w-24 h-24 text-red-500/50 mb-4" />
                <h1 className="text-3xl font-bold text-white">دسترسی محدود</h1>
                <p className="text-gray-400 mt-2">شما اجازه مدیریت پشتیبانی را ندارید.</p>
            </div>
        );
    }
    return (
        <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
                <HelpCircleIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h1 className="text-4xl font-black text-white">بخش پشتیبانی</h1>
                <p className="text-gray-400 mt-2">مدیریت و پاسخ به تیکت‌های ارسالی کاربران و کسب‌وکارها</p>
            </div>
             <div className="bg-gray-800 p-6 rounded-lg text-center">
                <p className="text-white">این بخش در حال توسعه است...</p>
                <p className="text-gray-400 mt-2">در این قسمت، لیست تیکت‌های پشتیبانی و ابزارهای لازم برای پاسخ‌دهی به آن‌ها قرار خواهد گرفت.</p>
            </div>
        </div>
    );
};

export default AdminSupportPage;