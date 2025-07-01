import React from 'react';
import type { FC } from 'react';
import type { BusinessStats, BookingRequest } from '@/types';
import { 
    DollarSignIcon, 
    CalendarIcon, 
    XCircleIcon, 
    CheckCircleIcon,
    SettingsIcon,
    BarChart2Icon,
    TagIcon,
    StarIcon,
    VerifiedIcon,
    HelpCircleIcon,
    MegaphoneIcon,
    MessageSquareIcon,
} from '@/components/Icons';

// Mock Data
const stats: BusinessStats = {
    todayRevenue: 450000,
    todayBookings: 3,
};

const bookingRequests: BookingRequest[] = [
    { id: 1, customerName: 'کیانوش صالحی', time: '۱۷:۰۰', service: 'کوتاهی مو', phone: '۰۹۱۲۰۰۰۰۰۰۰' },
    { id: 2, customerName: 'زهرا اکبری', time: '۱۸:۰۰', service: 'رنگ مو', phone: '۰۹۱۲۰۰۰۰۰۰۱' },
];

const managementWidgets = [
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
]

// Components
const StatCard: FC<{ icon: React.ElementType, title: string, value: string, color: string }> = ({ icon: Icon, title, value, color }) => (
    <div className="bg-gray-800 p-6 rounded-xl flex items-center justify-between shadow-lg">
        <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <Icon className={`w-10 h-10 ${color}`} />
    </div>
);

const DashboardPage: FC = () => {
    return (
        <div className="animate-fade-in space-y-8">
            <h1 className="text-3xl font-black text-white">داشبورد مدیریتی</h1>

            {/* Stats Section */}
            <div className="grid md:grid-cols-2 gap-6">
                <StatCard 
                    icon={DollarSignIcon} 
                    title="درآمد امروز" 
                    value={`${stats.todayRevenue.toLocaleString('fa-IR')} تومان`}
                    color="text-green-500"
                />
                <StatCard 
                    icon={CalendarIcon} 
                    title="رزروهای امروز" 
                    value={`${stats.todayBookings.toLocaleString('fa-IR')} مورد`}
                    color="text-blue-500"
                />
            </div>

            {/* Recent Booking Requests */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-white mb-4">آخرین رزروهای درخواستی</h2>
                <div className="space-y-4">
                    {bookingRequests.length > 0 ? bookingRequests.map(req => (
                        <div key={req.id} className="bg-gray-700/50 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between">
                            <div>
                                <p className="font-semibold text-white">{req.customerName} - ساعت {req.time}</p>
                                <p className="text-sm text-gray-300">خدمت: {req.service}</p>
                            </div>
                            <div className="flex items-center space-x-3 space-x-reverse mt-3 sm:mt-0">
                                <button className="text-sm text-gray-300 hover:text-white">مشاهده جزئیات</button>
                                <button className="p-2 bg-red-600/20 text-red-400 rounded-full hover:bg-red-600/40"><XCircleIcon className="w-5 h-5"/></button>
                                <button className="p-2 bg-green-600/20 text-green-400 rounded-full hover:bg-green-600/40"><CheckCircleIcon className="w-5 h-5"/></button>
                            </div>
                        </div>
                    )) : (
                        <p className="text-center text-gray-400 py-4">در حال حاضر درخواست رزرو جدیدی وجود ندارد.</p>
                    )}
                </div>
            </div>

            {/* Management Widgets */}
             <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-white mb-4">خلاصه وضعیت و دسترسی سریع</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {managementWidgets.map(widget => (
                        <a 
                            key={widget.name} 
                            href={widget.href}
                            className="bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-red-600/50 hover:-translate-y-1 transition-all duration-200"
                        >
                            <widget.icon className="w-8 h-8 mb-2 text-red-500" />
                            <span className="font-semibold text-white text-sm">{widget.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;