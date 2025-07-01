import React from 'react';
import { TagIcon, PlusCircleIcon } from '@/components/Icons';

const activeDiscounts = [
    { id: 1, code: 'SUMMER20', discount: '۲۰٪', type: 'سانس‌های صبح', expiry: '۱۴۰۳/۰۶/۳۱', usage: 15 },
    { id: 2, code: 'FIRST-VISIT', discount: '۵۰,۰۰۰ تومان', type: 'اولین رزرو', expiry: 'نامحدود', usage: 122 },
];
const inactiveDiscounts = [
    { id: 3, code: 'EID-OFFER', discount: '۱۵٪', type: 'همه خدمات', expiry: '۱۴۰۳/۰۵/۱۰', usage: 87 },
];

const DiscountsPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
            <div className="text-center">
                <TagIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h1 className="text-4xl font-black text-white">مدیریت تخفیف‌ها</h1>
                <p className="text-gray-400 mt-2">با ارائه تخفیف، مشتریان بیشتری جذب کنید</p>
            </div>

            {/* Add New Discount */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                    <PlusCircleIcon className="w-6 h-6 ml-2 text-red-500" />
                    ایجاد کد تخفیف جدید
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input type="text" placeholder="کد تخفیف (مثلا: REZERVITO50)" className="bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
                    <input type="text" placeholder="مقدار (٪ یا تومان)" className="bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
                    <input type="date" placeholder="تاریخ انقضا" className="bg-gray-700 border-gray-600 rounded-lg p-3 text-gray-400" />
                     <select className="bg-gray-700 border-gray-600 rounded-lg p-3 text-white focus:ring-red-500 focus:border-red-500">
                        <option>اعمال روی همه</option>
                        <option>سانس‌های خاص</option>
                        <option>روزهای خاص</option>
                        <option>خدمات خاص</option>
                    </select>
                </div>
                 <button className="mt-4 w-full md:w-auto bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors">
                    افزودن
                </button>
            </div>

            {/* Active Discounts Table */}
            <div className="bg-gray-800 rounded-lg">
                <h2 className="text-xl font-bold text-white p-6">کدهای تخفیف فعال</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-700/50">
                            <tr>
                                <th className="p-4 font-semibold text-sm text-gray-300">کد</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">مقدار</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">نوع اعمال</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">تاریخ انقضا</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">تعداد استفاده</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activeDiscounts.map((d) => (
                                <tr key={d.id} className="border-b border-gray-700 last:border-0">
                                    <td className="p-4 font-mono text-yellow-400">{d.code}</td>
                                    <td className="p-4 text-white">{d.discount}</td>
                                    <td className="p-4 text-gray-300">{d.type}</td>
                                    <td className="p-4 text-gray-300">{d.expiry}</td>
                                    <td className="p-4 text-gray-300">{d.usage}</td>
                                    <td className="p-4">
                                        <button className="text-red-500 hover:text-red-400">غیرفعال کردن</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Inactive Discounts Table */}
             <div className="bg-gray-800 rounded-lg opacity-60">
                <h2 className="text-xl font-bold text-white p-6">کدهای تخفیف غیرفعال/منقضی شده</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-700/50">
                             <tr>
                                <th className="p-4 font-semibold text-sm text-gray-300">کد</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">مقدار</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">نوع اعمال</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">تاریخ انقضا</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">تعداد استفاده</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                             {inactiveDiscounts.map((d) => (
                                <tr key={d.id} className="border-b border-gray-700 last:border-0">
                                    <td className="p-4 font-mono text-gray-500">{d.code}</td>
                                    <td className="p-4 text-gray-400">{d.discount}</td>
                                    <td className="p-4 text-gray-400">{d.type}</td>
                                    <td className="p-4 text-gray-400">{d.expiry}</td>
                                    <td className="p-4 text-gray-400">{d.usage}</td>
                                    <td className="p-4">
                                        <button className="text-green-500 hover:text-green-400">فعال کردن مجدد</button>
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

export default DiscountsPage;
