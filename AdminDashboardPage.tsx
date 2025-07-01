import React from 'react';
import type { AdminPermissions } from '@/types';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { LockIcon, UsersIcon, DollarSignIcon, CalendarIcon, BriefcaseIcon, CheckCircleIcon, XCircleIcon, HelpCircleIcon, VerifiedIcon, ClipboardListIcon } from '@/components/Icons';


interface AdminDashboardPageProps {
    permissions: AdminPermissions;
}

const systemStatusData = [
  { name: 'API پرداخت', status: 'آنلاین', icon: CheckCircleIcon, color: 'text-green-400' },
  { name: 'API پیامک', status: 'آفلاین', icon: XCircleIcon, color: 'text-red-400' },
  { name: 'تیکت‌های باز', value: '۸', icon: HelpCircleIcon, color: 'text-yellow-400' },
  { name: 'درخواست تایید هویت', value: '۱۴', icon: VerifiedIcon, color: 'text-blue-400' },
];

const revenueData = [
    { name: 'شنبه', revenue: 2100000 }, { name: 'یکشنبه', revenue: 3400000 }, { name: 'دوشنبه', revenue: 2800000 },
    { name: 'سه‌شنبه', revenue: 4100000 }, { name: 'چهارشنبه', revenue: 3800000 }, { name: 'پنجشنبه', revenue: 5200000 }, { name: 'جمعه', revenue: 1800000 }
];

const newUsersData = [
    { name: 'فروردین', users: 120, businesses: 15 },
    { name: 'اردیبهشت', users: 180, businesses: 22 },
    { name: 'خرداد', users: 250, businesses: 30 },
    { name: 'تیر', users: 210, businesses: 28 },
    { name: 'مرداد', users: 300, businesses: 45 },
];

const recentLogs = [
    { id: 1, timestamp: '۱۸:۳۰', user: 'ادمین اصلی', action: 'تنظیمات سیستم را بروزرسانی کرد.' },
    { id: 2, timestamp: '۱۷:۱۲', user: 'پیرایشگاه VIP تک', action: 'درخواست برداشت وجه ثبت کرد.' },
    { id: 3, timestamp: '۱۶:۰۵', user: 'ادمین پشتیبانی', action: 'تیکت شماره #1024 را بست.' },
    { id: 4, timestamp: '۱۴:۲۰', user: 'سیستم', action: 'کسب و کار "سالن زیبایی شاین" تایید هویت شد.' },
];


const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ permissions }) => {
    if (!permissions.canViewDashboard) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-gray-800/50 rounded-lg text-center p-10">
                <LockIcon className="w-24 h-24 text-red-500/50 mb-4" />
                <h1 className="text-3xl font-bold text-white">دسترسی محدود</h1>
                <p className="text-gray-400 mt-2">شما اجازه مشاهده این صفحه را ندارید.</p>
            </div>
        );
    }
    
    return (
        <div className="animate-fade-in space-y-8">
            <h1 className="text-3xl font-black text-white">داشبورد اصلی سایت</h1>

            {/* System Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {systemStatusData.map(item => (
                    <div key={item.name} className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center">
                        <item.icon className={`w-10 h-10 ml-4 ${item.color}`} />
                        <div>
                            <p className="text-gray-400 text-sm">{item.name}</p>
                            <p className="text-2xl font-bold text-white">{item.status || item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-white mb-4">نمودار درآمد سایت (هفته اخیر)</h2>
                    <div className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData}>
                                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                                <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={(value) => `${(value/1000000)}M`} />
                                <Tooltip cursor={{ fill: 'rgba(239, 68, 68, 0.1)' }} contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} itemStyle={{ color: '#f9fafb' }} />
                                <Bar dataKey="revenue" fill="#EF4444" radius={[4, 4, 0, 0]} name="درآمد" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                 <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-white mb-4">نمودار کاربران و کسب‌وکارهای جدید</h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={newUsersData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12}/>
                                <YAxis stroke="#9ca3af" fontSize={12} />
                                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} itemStyle={{ color: '#f9fafb' }} />
                                <Line type="monotone" dataKey="users" name="کاربران جدید" stroke="#34D399" strokeWidth={2} />
                                <Line type="monotone" dataKey="businesses" name="کسب‌وکارهای جدید" stroke="#FBBF24" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

             {/* Recent Activity & Top Businesses */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-white mb-4">برترین کسب‌وکارها (بر اساس درآمد)</h2>
                    <ul className="space-y-3">
                       <li className="flex justify-between items-center text-white p-2 rounded-md hover:bg-gray-700/50"><span>۱. پیرایشگاه VIP تک</span><span className="font-mono text-green-400">۳,۴۵۰,۰۰۰ تومان</span></li>
                       <li className="flex justify-between items-center text-white p-2 rounded-md hover:bg-gray-700/50"><span>۲. مجموعه ورزشی انقلاب</span><span className="font-mono text-green-400">۲,۸۰۰,۰۰۰ تومان</span></li>
                       <li className="flex justify-between items-center text-white p-2 rounded-md hover:bg-gray-700/50"><span>۳. سالن زیبایی شاین</span><span className="font-mono text-green-400">۲,۱۰۰,۰۰۰ تومان</span></li>
                       <li className="flex justify-between items-center text-white p-2 rounded-md hover:bg-gray-700/50"><span>۴. زمین چمن اختصاصی</span><span className="font-mono text-green-400">۱,۹۵۰,۰۰۰ تومان</span></li>
                    </ul>
                </div>
                 <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">گزارش وقایع اخیر</h2>
                        <a href="#/admin/logs" className="text-sm text-red-500 hover:text-red-400">مشاهده همه</a>
                    </div>
                     <ul className="space-y-3">
                        {recentLogs.map(log => (
                            <li key={log.id} className="flex items-center text-gray-300 text-sm">
                                <span className="font-mono text-gray-500 ml-3">{log.timestamp}</span>
                                <span className="font-semibold text-white ml-1">{log.user}:</span>
                                <span>{log.action}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;