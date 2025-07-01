import React from 'react';
import { CalendarIcon, XCircleIcon } from '@/components/Icons';
import type { BookingRequest } from '@/types';


const mockBookings: BookingRequest[] = [
  { id: 1, customerName: 'علی رضایی', time: '۱۸:۳۰', service: 'کوتاهی مو', phone: '۰۹۱۲۳۴۵۶۷۸۹' },
  { id: 2, customerName: 'سارا محمدی', time: '۱۴:۰۰', service: 'رنگ و مش', phone: '۰۹۱۲۳۴۵۶۷۸۸' },
  { id: 3, customerName: 'نیما افشار', time: '۲۰:۰۰', service: 'پکیج داماد', phone: '۰۹۱۲۳۴۵۶۷۸۷' },
  { id: 4, customerName: 'مریم احمدی', time: '۱۱:۳۰', service: 'کراتین', phone: '۰۹۱۲۳۴۵۶۷۸۶' },
  { id: 5, customerName: 'رضا قاسمی', time: '۱۶:۰۰', service: 'کوتاهی مو', phone: '۰۹۱۲۳۴۵۶۷۸۵' },
];

const BookingsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
            <CalendarIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
            <h1 className="text-4xl font-black text-white">رزروهای انجام شده</h1>
            <p className="text-gray-400 mt-2">لیست رزروهای مشتریان خود را مدیریت کنید</p>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 p-4 rounded-lg mb-8">
            <div className="grid md:grid-cols-4 gap-4">
                <input type="text" placeholder="جستجو بر اساس نام..." className="bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
                <input type="date" className="bg-gray-700 border-gray-600 rounded-lg p-3 text-gray-400" />
                <input type="time" className="bg-gray-700 border-gray-600 rounded-lg p-3 text-gray-400" />
                <button className="bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    جستجو
                </button>
            </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-right">
                    <thead className="bg-gray-700/50">
                    <tr>
                        <th className="p-4 font-semibold text-sm text-gray-300">نام مشتری</th>
                        <th className="p-4 font-semibold text-sm text-gray-300">ساعت</th>
                        <th className="p-4 font-semibold text-sm text-gray-300">خدمات</th>
                        <th className="p-4 font-semibold text-sm text-gray-300">شماره تلفن</th>
                        <th className="p-4 font-semibold text-sm text-gray-300 text-center">عملیات</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockBookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-700 last:border-0 hover:bg-gray-700/30 transition-colors">
                            <td className="p-4 text-white font-medium">{booking.customerName}</td>
                            <td className="p-4 text-gray-300">{booking.time}</td>
                            <td className="p-4 text-gray-300">{booking.service}</td>
                            <td className="p-4 text-gray-300" dir="ltr">{booking.phone}</td>
                            <td className="p-4 text-center">
                                <button className="text-red-500 hover:text-red-400 transition-colors" title="لغو رزرو">
                                    <XCircleIcon className="w-6 h-6" />
                                </button>
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

export default BookingsPage;