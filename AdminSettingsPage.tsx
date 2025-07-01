import React, { useState } from 'react';
import type { AdminPermissions } from '@/types';
import { SettingsIcon, LockIcon } from '@/components/Icons';

interface PageProps {
    permissions: AdminPermissions;
}

const ToggleSwitch: React.FC<{ enabled: boolean, setEnabled: (enabled: boolean) => void }> = ({ enabled, setEnabled }) => {
    return (
        <div 
            onClick={() => setEnabled(!enabled)} 
            className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors duration-300 ${enabled ? 'bg-red-600' : 'bg-gray-600'}`}
        >
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
        </div>
    );
};

const AdminSettingsPage: React.FC<PageProps> = ({ permissions }) => {
    const [isPaymentGatewayEnabled, setPaymentGatewayEnabled] = useState(true);

    if (!permissions.canManageSystemSettings) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-gray-800/50 rounded-lg text-center p-10">
                <LockIcon className="w-24 h-24 text-red-500/50 mb-4" />
                <h1 className="text-3xl font-bold text-white">دسترسی محدود</h1>
                <p className="text-gray-400 mt-2">شما اجازه مدیریت تنظیمات سیستم را ندارید.</p>
            </div>
        );
    }
    
    return (
        <div className="max-w-4xl mx-auto animate-fade-in space-y-8">
            <div className="text-center mb-8">
                <SettingsIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h1 className="text-4xl font-black text-white">تنظیمات سیستم</h1>
                <p className="text-gray-400 mt-2">مدیریت کلیدهای API و سرویس‌های جانبی</p>
            </div>

            {/* Zarinpal Settings */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4">تنظیمات درگاه پرداخت (زرین‌پال)</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="zarinpal-api" className="block text-sm font-medium text-gray-300 mb-2">کلید API (Merchant Code)</label>
                        <input type="text" id="zarinpal-api" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" />
                    </div>
                     <div className="flex items-center justify-between">
                        <span className="text-gray-300">فعال / غیرفعال کردن پرداخت</span>
                        <ToggleSwitch enabled={isPaymentGatewayEnabled} setEnabled={setPaymentGatewayEnabled} />
                    </div>
                    <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        تست اتصال
                    </button>
                </div>
            </div>

            {/* SMS Panel Settings */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4">تنظیمات پنل پیامکی</h2>
                <div className="space-y-4">
                     <div>
                        <label htmlFor="sms-api-key" className="block text-sm font-medium text-gray-300 mb-2">کلید API</label>
                        <input type="text" id="sms-api-key" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" placeholder="کلید API پنل پیامکی شما" />
                    </div>
                     <div>
                        <label htmlFor="sms-api-secret" className="block text-sm font-medium text-gray-300 mb-2">کلید مخفی (Secret)</label>
                        <input type="password" id="sms-api-secret" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" placeholder="••••••••••••••••" />
                    </div>
                     <div>
                        <label htmlFor="sms-sender" className="block text-sm font-medium text-gray-300 mb-2">شماره فرستنده</label>
                        <input type="text" id="sms-sender" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" placeholder="مثال: 5000400012345" />
                    </div>
                    <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        تست ارسال پیامک
                    </button>
                </div>
            </div>
            
            <button className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors text-lg">
                ذخیره تغییرات
            </button>
        </div>
    );
};

export default AdminSettingsPage;