import React from 'react';
import { BarChart2Icon, DownloadIcon, PieChartIcon, TrendingUpIcon, DollarSignIcon } from '@/components/Icons';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const dailyData = [
    { name: 'شنبه', revenue: 450 }, { name: 'یکشنبه', revenue: 600 }, { name: 'دوشنبه', revenue: 750 },
    { name: 'سه‌شنبه', revenue: 500 }, { name: 'چهارشنبه', revenue: 900 }, { name: 'پنجشنبه', revenue: 1200 }, { name: 'جمعه', revenue: 300 }
];

const serviceData = [
    { name: 'کوتاهی مو', value: 400 }, { name: 'رنگ مو', value: 300 },
    { name: 'کراتین', value: 500 }, { name: 'پاکسازی پوست', value: 200 }
];
const COLORS = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6'];

const AssistantPage: React.FC = () => {
    const monthlyGoal = 30000000;
    const currentRevenue = 12500000;
    const progress = (currentRevenue / monthlyGoal) * 100;
    
    return (
        <div className="max-w-7xl mx-auto animate-fade-in space-y-8">
            <div className="text-center">
                <BarChart2Icon className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h1 className="text-4xl font-black text-white">منشی هوشمند</h1>
                <p className="text-gray-400 mt-2">تحلیل هوشمند کسب و کار شما برای تصمیم‌گیری بهتر</p>
            </div>

            {/* Monthly Goal */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4">هدف این ماه: ۳۰,۰۰۰,۰۰۰ تومان</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                    <div className="bg-gradient-to-r from-red-600 to-red-400 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                    <span className="text-green-400">درآمد: {currentRevenue.toLocaleString('fa-IR')} تومان</span>
                    <span className="text-yellow-400">باقیمانده: {(monthlyGoal - currentRevenue).toLocaleString('fa-IR')} تومان</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Charts */}
                <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-white mb-4">جزئیات درآمد روزانه (هفته اخیر)</h2>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dailyData}>
                                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                                <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={(value) => `${value/1000}k`} />
                                <Tooltip cursor={{ fill: 'rgba(239, 68, 68, 0.1)' }}/>
                                <Bar dataKey="revenue" fill="#EF4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                 {/* Service Pie Chart */}
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-white mb-4">خدمات پردرآمد</h2>
                    <div className="h-72">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={serviceData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" nameKey="name" label={(entry) => entry.name}>
                                    {serviceData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Detailed Stats & Actions */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm text-gray-400">پردرآمدترین روز</p>
                        <p className="text-xl font-bold text-white mt-1">پنجشنبه</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm text-gray-400">پردرآمدترین ساعت</p>
                        <p className="text-xl font-bold text-white mt-1">۱۸:۰۰ - ۲۰:۰۰</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm text-gray-400">کم‌درآمدترین روز</p>
                        <p className="text-xl font-bold text-white mt-1">جمعه</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm text-gray-400">کم‌درآمدترین ساعت</p>
                        <p className="text-xl font-bold text-white mt-1">۱۰:۰۰ - ۱۲:۰۰</p>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-6">
                     <h3 className="text-lg font-bold text-white mb-2">پیشنهاد هوشمند</h3>
                     <p className="text-gray-300">
                        برای افزایش درآمد در روز <span className="font-bold text-red-400">جمعه</span> و ساعات <span className="font-bold text-red-400">۱۰ تا ۱۲</span>، پیشنهاد می‌شود یک تخفیف <span className="font-bold text-green-400">۲۰ درصدی</span> روی "پاکسازی پوست" اعمال کنید.
                     </p>
                     <a href="#/business/discounts" className="inline-block mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                        ایجاد تخفیف
                    </a>
                </div>
            </div>

            {/* Reporting & Support */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-white mb-4">گزارش‌گیری</h2>
                    <p className="text-gray-400 mb-4">گزارش تحلیلی و کامل از عملکرد کسب و کار خود در بازه زمانی دلخواه دریافت کنید.</p>
                     <div className="flex items-center space-x-2 space-x-reverse">
                        <input type="date" className="bg-gray-700 border-gray-600 rounded-lg p-2 text-white w-full"/>
                        <input type="date" className="bg-gray-700 border-gray-600 rounded-lg p-2 text-white w-full"/>
                    </div>
                    <button className="w-full mt-4 bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center">
                        <DownloadIcon className="w-5 h-5 ml-2" />
                        دریافت گزارش PDF
                    </button>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-white mb-4">ارتباط با کارشناسان</h2>
                    <p className="text-gray-400 mb-4">برای تحلیل دقیق‌تر و دریافت مشاوره اختصاصی، با کارشناسان بازرگانی ما در ارتباط باشید.</p>
                     <textarea rows={2} placeholder="موضوع خود را به طور خلاصه شرح دهید..." className="w-full bg-gray-700 border-gray-600 rounded-lg p-2 focus:ring-red-500 focus:border-red-500"></textarea>
                    <button className="w-full mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                        ثبت درخواست ارتباط
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AssistantPage;