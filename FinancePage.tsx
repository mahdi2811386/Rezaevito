import React from 'react';
import { DollarSignIcon } from '@/components/Icons';

const transactions = [
    { id: 1, type: 'واریز', date: '۱۴۰۳/۰۵/۱۲', amount: '+ ۲,۵۰۰,۰۰۰', status: 'موفق' },
    { id: 2, type: 'برداشت', date: '۱۴۰۳/۰۵/۱۰', amount: '- ۵,۰۰۰,۰۰۰', status: 'موفق' },
    { id: 3, type: 'واریز', date: '۱۴۰۳/۰۵/۰۵', amount: '+ ۱,۸۰۰,۰۰۰', status: 'موفق' },
    { id: 4, type: 'برداشت', date: '۱۴۰۳/۰۵/۰۱', amount: '- ۳,۰۰۰,۰۰۰', status: 'در حال بررسی' },
];

const FinancePage: React.FC = () => {
    const walletBalance = 7500000;

    return (
        <div className="max-w-4xl mx-auto animate-fade-in space-y-8">
            <div className="text-center">
                <DollarSignIcon className="w-16 h-16 mx-auto text-green-500 mb-4" />
                <h1 className="text-4xl font-black text-white">بخش مالی</h1>
                <p className="text-gray-400 mt-2">موجودی خود را مدیریت کرده و درخواست برداشت ثبت کنید</p>
            </div>

            {/* Wallet Balance & Withdrawal */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="text-gray-300 text-lg">موجودی کیف پول شما</p>
                <p className="text-5xl font-black text-white my-2">{walletBalance.toLocaleString('fa-IR')} <span className="text-3xl text-gray-400">تومان</span></p>
                
                <div className="mt-8 border-t border-gray-700 pt-6">
                    <h2 className="text-xl font-bold text-white mb-4">درخواست برداشت موجودی</h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="number" 
                            placeholder="مبلغ برداشت (تومان)" 
                            className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500"
                        />
                        <button className="w-full sm:w-auto bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors">
                            ثبت درخواست
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">تسویه حساب‌ها در روزهای زوج انجام می‌شود. حداقل مبلغ قابل برداشت ۱۰۰,۰۰۰ تومان است.</p>
                </div>
            </div>

            {/* Transactions History */}
            <div className="bg-gray-800 rounded-lg">
                <h2 className="text-xl font-bold text-white p-6">گزارش واریز و برداشت</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-700/50">
                            <tr>
                                <th className="p-4 font-semibold text-sm text-gray-300">نوع تراکنش</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">تاریخ</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">مبلغ (تومان)</th>
                                <th className="p-4 font-semibold text-sm text-gray-300">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((t) => (
                                <tr key={t.id} className="border-b border-gray-700 last:border-0">
                                    <td className="p-4">
                                        <span className={`font-semibold ${t.type === 'واریز' ? 'text-green-400' : 'text-red-400'}`}>
                                            {t.type}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-300">{t.date}</td>
                                    <td className="p-4 text-white font-mono">{t.amount}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                            t.status === 'موفق' ? 'bg-green-500/20 text-green-400' 
                                            : t.status === 'در حال بررسی' ? 'bg-yellow-500/20 text-yellow-400'
                                            : 'bg-red-500/20 text-red-400'
                                        }`}>
                                            {t.status}
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

export default FinancePage;
