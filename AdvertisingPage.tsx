import React from 'react';
import { MegaphoneIcon, CheckCircleIcon } from '@/components/Icons';

const AdvertisingPage: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
                <MegaphoneIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h1 className="text-4xl font-black text-white">تبلیغات</h1>
                <p className="text-gray-400 mt-2">کسب و کار خود را به هزاران کاربر جدید معرفی کنید</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Ad Options */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-white mb-4">۱. نوع تبلیغ خود را انتخاب کنید</h2>
                        <div className="space-y-4">
                            {/* Option 1 */}
                            <label className="flex items-start bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                                <input type="checkbox" className="mt-1 form-checkbox h-5 w-5 bg-gray-900 border-gray-600 text-red-600 focus:ring-red-500" />
                                <div className="mr-4">
                                    <h3 className="font-semibold text-white">تبلیغات در رزرویتو</h3>
                                    <p className="text-sm text-gray-400">نمایش در صفحه اصلی، نتایج جستجو و پیشنهادات ویژه.</p>
                                </div>
                            </label>
                            {/* Option 2 */}
                             <label className="flex items-start bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                                <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-900 border-gray-600 text-red-600 focus:ring-red-500 mt-1" />
                                <div className="mr-4">
                                    <h3 className="font-semibold text-white">تبلیغات در سایت‌های دیگر</h3>
                                    <p className="text-sm text-gray-400">همکاری با سایت‌های پربازدید برای نمایش بنر شما (شامل هزینه طراحی پوستر).</p>
                                </div>
                            </label>
                            {/* Option 3 */}
                             <label className="flex items-start bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                                <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-900 border-gray-600 text-red-600 focus:ring-red-500 mt-1" />
                                <div className="mr-4">
                                    <h3 className="font-semibold text-white">تبلیغات پیامکی</h3>
                                    <p className="text-sm text-gray-400">ارسال پیامک تبلیغاتی به کاربران هدف در منطقه شما.</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    
                    <div className="bg-gray-800 p-6 rounded-lg">
                         <h2 className="text-xl font-bold text-white mb-4">۲. بودجه و متن (در صورت نیاز)</h2>
                         <div className="space-y-4">
                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">بودجه کل (تومان)</label>
                                <input type="number" id="budget" placeholder="مثلا: ۵۰۰,۰۰۰" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500"/>
                            </div>
                             <div>
                                <label htmlFor="sms-text" className="block text-sm font-medium text-gray-300 mb-2">متن پیامک (اختیاری)</label>
                                <textarea id="sms-text" rows={3} placeholder="متن پیامک تبلیغاتی خود را اینجا بنویسید..." className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500"></textarea>
                            </div>
                         </div>
                    </div>
                    <button className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300">
                        پرداخت و شروع کمپین
                    </button>
                </div>

                {/* Status & History */}
                <div className="bg-gray-800 p-6 rounded-lg h-fit">
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-3">وضعیت کمپین‌ها</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-semibold text-white">کمپین ویژه عید</h3>
                                <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded-full">فعال</span>
                            </div>
                            <p className="text-sm text-gray-400">نوع: تبلیغ در رزرویتو (ویژه)</p>
                            <p className="text-sm text-gray-400">بودجه: ۱,۲۰۰,۰۰۰ تومان</p>
                            <p className="text-sm text-gray-400">پایان: ۱۴ روز دیگر</p>
                        </div>
                         <div className="bg-gray-700 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-semibold text-white">کمپین تابستانه</h3>
                                <span className="text-xs font-bold bg-gray-500/20 text-gray-400 px-2 py-1 rounded-full">پایان یافته</span>
                            </div>
                            <p className="text-sm text-gray-400">نوع: تبلیغات پیامکی</p>
                            <p className="text-sm text-gray-400">بودجه: ۳۵۰,۰۰۰ تومان</p>
                        </div>
                    </div>
                    <a href="#" className="text-center block mt-4 text-red-500 hover:text-red-400 font-semibold text-sm">مشاهده جزئیات و قیمت‌ها</a>
                </div>
            </div>
        </div>
    );
};

export default AdvertisingPage;
