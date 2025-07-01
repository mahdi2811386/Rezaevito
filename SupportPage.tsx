import React from 'react';
import { HelpCircleIcon } from '@/components/Icons';

const supportTickets = [
    { id: 1, subject: 'مشکل درگاه پرداخت', status: 'پاسخ داده شده', lastUpdate: '۱۴۰۳/۰۵/۱۲' },
    { id: 2, subject: 'درخواست تغییر ساعات کاری', status: 'در حال بررسی', lastUpdate: '۱۴۰۳/۰۵/۱۴' },
    { id: 3, subject: 'گزارش خطا در بخش نظرات', status: 'بسته شده', lastUpdate: '۱۴۰۳/۰۵/۰۹' },
];

const SupportPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in space-y-8">
        <div className="text-center">
            <HelpCircleIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
            <h1 className="text-4xl font-black text-white">پشتیبانی</h1>
            <p className="text-gray-400 mt-2">هر سوال یا مشکلی دارید، ما اینجا هستیم تا به شما کمک کنیم</p>
        </div>

        {/* New Ticket Form */}
        <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">ارسال درخواست جدید</h2>
            <form className="space-y-4">
                <select className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 text-white focus:ring-red-500 focus:border-red-500">
                    <option>-- انتخاب موضوع --</option>
                    <option>فنی و مشکلات سایت</option>
                    <option>مالی و تسویه حساب</option>
                    <option>مدیریت پنل و رزروها</option>
                    <option>پیشنهادات</option>
                    <option>سایر موارد</option>
                </select>
                 <input type="text" placeholder="عنوان درخواست" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500"/>
                <textarea rows={5} placeholder="شرح کامل موضوع..." className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500"></textarea>
                <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    ارسال درخواست
                </button>
            </form>
        </div>

        {/* Ticket History */}
        <div className="bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold text-white p-6">وضعیت درخواست‌های ارسالی</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-right">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th className="p-4 font-semibold text-sm text-gray-300">موضوع</th>
                            <th className="p-4 font-semibold text-sm text-gray-300">آخرین بروزرسانی</th>
                            <th className="p-4 font-semibold text-sm text-gray-300">وضعیت</th>
                            <th className="p-4 font-semibold text-sm text-gray-300"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {supportTickets.map(ticket => (
                            <tr key={ticket.id} className="border-b border-gray-700 last:border-0">
                                <td className="p-4 text-white font-medium">{ticket.subject}</td>
                                <td className="p-4 text-gray-300">{ticket.lastUpdate}</td>
                                <td className="p-4">
                                     <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                        ticket.status === 'پاسخ داده شده' ? 'bg-green-500/20 text-green-400' 
                                        : ticket.status === 'در حال بررسی' ? 'bg-yellow-500/20 text-yellow-400'
                                        : 'bg-gray-500/20 text-gray-400'
                                    }`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="p-4 text-center">
                                    <a href="#" className="text-red-500 hover:text-red-400 font-semibold text-sm">مشاهده</a>
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

export default SupportPage;
