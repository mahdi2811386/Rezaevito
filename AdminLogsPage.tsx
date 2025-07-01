import React from 'react';
import type { AdminPermissions } from '@/types';
import { ClipboardListIcon, LockIcon } from '@/components/Icons';

interface PageProps {
    permissions: AdminPermissions;
}

const mockLogs = [
    { id: 1, timestamp: '۱۴۰۳/۰۵/۱۵ - ۱۸:۳۰:۰۵', user: 'ادمین اصلی', action: 'تنظیمات سیستم را بروزرسانی کرد.', type: 'settings' },
    { id: 2, timestamp: '۱۴۰۳/۰۵/۱۵ - ۱۷:۱۲:۴۴', user: 'پیرایشگاه VIP تک', action: 'درخواست برداشت وجه به مبلغ ۵,۰۰۰,۰۰۰ تومان ثبت کرد.', type: 'finance' },
    { id: 3, timestamp: '۱۴۰۳/۰۵/۱۵ - ۱۶:۰۵:۱۰', user: 'ادمین پشتیبانی', action: 'تیکت شماره #1024 را بست.', type: 'support' },
    { id: 4, timestamp: '۱۴۰۳/۰۵/۱۵ - ۱۴:۲۰:۰۰', user: 'سیستم', action: 'کسب و کار "سالن زیبایی شاین" تایید هویت شد.', type: 'verification' },
    { id: 5, timestamp: '۱۴۰۳/۰۵/۱۴ - ۲۲:۱۰:۱۸', user: 'ادمین اصلی', action: 'مقاله "۵ نکته مهم" را در مجله منتشر کرد.', type: 'news' },
    { id: 6, timestamp: '۱۴۰۳/۰۵/۱۴ - ۱۹:۰۰:۰۳', user: 'مجموعه ورزشی انقلاب', action: 'کمپین تبلیغاتی جدیدی را با بودجه ۱,۲۰۰,۰۰۰ تومان شروع کرد.', type: 'advertising' },
];

const getActionColor = (type: string) => {
    switch(type) {
        case 'settings': return 'bg-purple-500/20 text-purple-400';
        case 'finance': return 'bg-green-500/20 text-green-400';
        case 'support': return 'bg-blue-500/20 text-blue-400';
        case 'verification': return 'bg-yellow-500/20 text-yellow-400';
        case 'news': return 'bg-indigo-500/20 text-indigo-400';
        case 'advertising': return 'bg-pink-500/20 text-pink-400';
        default: return 'bg-gray-500/20 text-gray-400';
    }
}

const AdminLogsPage: React.FC<PageProps> = ({ permissions }) => {
    if (!permissions.canViewLogs) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-gray-800/50 rounded-lg text-center p-10">
                <LockIcon className="w-24 h-24 text-red-500/50 mb-4" />
                <h1 className="text-3xl font-bold text-white">دسترسی محدود</h1>
                <p className="text-gray-400 mt-2">شما اجازه مشاهده گزارش وقایع را ندارید.</p>
            </div>
        );
    }
    
    return (
        <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
            <div className="text-center">
                <ClipboardListIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h1 className="text-4xl font-black text-white">گزارش وقایع سیستم</h1>
                <p className="text-gray-400 mt-2">تاریخچه کامل فعالیت‌های انجام شده در پلتفرم</p>
            </div>

            {/* Filters */}
            <div className="bg-gray-800 p-4 rounded-lg">
                <div className="grid md:grid-cols-4 gap-4">
                    <input type="text" placeholder="جستجو بر اساس کاربر یا فعالیت..." className="bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
                    <input type="date" className="bg-gray-700 border-gray-600 rounded-lg p-3 text-gray-400" />
                    <select className="bg-gray-700 border-gray-600 rounded-lg p-3 text-white focus:ring-red-500 focus:border-red-500">
                        <option>همه انواع</option>
                        <option>مالی</option>
                        <option>پشتیبانی</option>
                        <option>تایید هویت</option>
                        <option>تنظیمات</option>
                    </select>
                    <button className="bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
                        فیلتر
                    </button>
                </div>
            </div>

            {/* Logs Table */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-700/50">
                            <tr>
                                <th className="p-4 font-semibold text-sm text-gray-300">زمان</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">کاربر</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">فعالیت</th>
                                <th className="p-4 font-semibold text-sm text-gray-300 text-center">نوع</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockLogs.map((log) => (
                                <tr key={log.id} className="border-b border-gray-700 last:border-0 hover:bg-gray-700/30 transition-colors">
                                    <td className="p-4 text-gray-300 font-mono text-sm whitespace-nowrap">{log.timestamp}</td>
                                    <td className="p-4 text-white font-medium">{log.user}</td>
                                    <td className="p-4 text-gray-200">{log.action}</td>
                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${getActionColor(log.type)}`}>
                                            {log.type}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminLogsPage;