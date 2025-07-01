import React, { useState } from 'react';
import { VerifiedIcon, UploadIcon, CheckCircleIcon, XCircleIcon } from '@/components/Icons';


const VerificationPage: React.FC = () => {
    // Mock status: 'pending', 'verified', 'rejected'
    const [verificationStatus, setVerificationStatus] = useState<'pending' | 'verified' | 'rejected'>('pending'); 
    const rejectionReason = "تصویر کارت ملی خوانا نیست. لطفاً تصویر واضح‌تری آپلود کنید.";

    return (
        <div className="max-w-3xl mx-auto animate-fade-in space-y-8">
            <div className="text-center">
                <VerifiedIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h1 className="text-4xl font-black text-white">احراز هویت</h1>
                <p className="text-gray-400 mt-2">برای فعال‌سازی کامل پنل و امکان تسویه حساب، لطفا مدارک خود را بارگذاری کنید.</p>
            </div>
            
            {verificationStatus === 'verified' && (
                 <div className="bg-green-500/20 border-l-4 border-green-500 text-green-300 p-4 rounded-lg flex items-center">
                    <CheckCircleIcon className="w-8 h-8 ml-4"/>
                    <div>
                        <h3 className="font-bold">احراز هویت شما با موفقیت انجام شده است.</h3>
                        <p className="text-sm">پنل شما کاملا فعال است و می‌توانید درخواست تسویه حساب ثبت کنید.</p>
                    </div>
                </div>
            )}

            {verificationStatus === 'rejected' && (
                 <div className="bg-red-500/20 border-l-4 border-red-500 text-red-300 p-4 rounded-lg flex items-center">
                    <XCircleIcon className="w-8 h-8 ml-4"/>
                    <div>
                        <h3 className="font-bold">احراز هویت شما رد شد.</h3>
                        <p className="text-sm">دلیل: {rejectionReason}</p>
                    </div>
                </div>
            )}
            
            <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                 <div>
                    <h2 className="text-xl font-bold text-white mb-2">۱. مدارک هویتی</h2>
                    <p className="text-sm text-gray-400 mb-4">لطفا تصویر واضح از کارت ملی یا صفحه اول شناسنامه خود را آپلود کنید.</p>
                    <label htmlFor="id-upload" className="w-full cursor-pointer bg-gray-700 text-white py-3 px-4 rounded-lg text-center hover:bg-gray-600 transition-colors flex items-center justify-center border-2 border-dashed border-gray-600">
                        <UploadIcon className="w-6 h-6 ml-2" />
                        <span>آپلود کارت ملی / شناسنامه</span>
                    </label>
                    <input id="id-upload" type="file" className="hidden" />
                </div>

                <div>
                    <h2 className="text-xl font-bold text-white mb-2">۲. مجوز کسب و کار</h2>
                     <p className="text-sm text-gray-400 mb-4">تصویر جواز کسب یا مدرک مرتبط را بارگذاری نمایید.</p>
                    <label htmlFor="license-upload" className="w-full cursor-pointer bg-gray-700 text-white py-3 px-4 rounded-lg text-center hover:bg-gray-600 transition-colors flex items-center justify-center border-2 border-dashed border-gray-600">
                        <UploadIcon className="w-6 h-6 ml-2" />
                        <span>آپلود مجوز کسب و کار</span>
                    </label>
                     <input id="license-upload" type="file" className="hidden" />
                </div>
                
                 <div>
                    <h2 className="text-xl font-bold text-white mb-2">۳. اطلاعات بانکی</h2>
                     <p className="text-sm text-gray-400 mb-4">شماره شبا باید به نام صاحب کسب و کار ثبت شده در سیستم باشد.</p>
                    <div className="space-y-3">
                         <input type="text" placeholder="نام و نام خانوادگی صاحب حساب" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500"/>
                         <div className="relative">
                            <input type="text" placeholder="شماره شبا" dir="ltr" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 pr-10 focus:ring-red-500 focus:border-red-500 text-left"/>
                            <span className="absolute top-1/2 -translate-y-1/2 right-3 font-bold text-gray-400">IR</span>
                         </div>
                    </div>
                </div>
            </div>

            <button 
                disabled={verificationStatus === 'pending'}
                className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors text-lg disabled:bg-gray-600 disabled:cursor-wait"
            >
                {verificationStatus === 'pending' ? 'مدارک در حال بررسی است...' : 'ارسال و ثبت نهایی'}
            </button>
        </div>
    );
};

export default VerificationPage;