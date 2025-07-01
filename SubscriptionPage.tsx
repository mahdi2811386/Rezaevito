import React from 'react';
import type { SubscriptionPlan } from '@/types';
import { StarIcon, CheckCircleIcon } from '@/components/Icons';


const plans: SubscriptionPlan[] = [
    {
        name: 'عادی',
        commission: 9,
        features: ['نمایش در لیست عمومی', 'دریافت نظرات کاربران', 'پشتیبانی تیکتی'],
        isCurrent: false,
    },
    {
        name: 'طلایی',
        commission: 7,
        features: ['تمام ویژگی‌های عادی', 'نمایش در بخش پیشنهادی', 'اولویت در پشتیبانی'],
        isCurrent: true,
        isRecommended: true,
    },
    {
        name: 'پلاتینیوم',
        commission: 6,
        features: ['تمام ویژگی‌های طلایی', 'دسترسی به منشی هوشمند', 'تبلیغات دوره‌ای رایگان'],
        isCurrent: false,
    }
]

const SubscriptionPage: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-fade-in">
             <div className="text-center mb-12">
                <StarIcon className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
                <h1 className="text-4xl font-black text-white">اشتراک من</h1>
                <p className="text-gray-400 mt-2">با ارتقای اشتراک، از امکانات بیشتری بهره‌مند شوید و کارمزد کمتری بپردازید</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-end">
                {plans.map(plan => (
                     <div key={plan.name} className={`bg-gray-800 p-8 rounded-2xl border-2 transition-all duration-300 ${plan.isCurrent ? 'border-red-500 scale-105 shadow-2xl' : 'border-gray-700'}`}>
                        {plan.isRecommended && (
                             <div className="text-center mb-4">
                                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">پیشنهاد ویژه</span>
                            </div>
                        )}
                        <h2 className={`text-3xl font-bold text-center mb-2 ${plan.isCurrent ? 'text-red-500' : 'text-white'}`}>{plan.name}</h2>
                        <p className="text-center text-gray-400 mb-6">{plan.commission}% کارمزد</p>
                        
                        <ul className="space-y-3 mb-8">
                            {plan.features.map(feature => (
                                <li key={feature} className="flex items-center text-gray-300">
                                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button disabled={plan.isCurrent} className={`w-full font-bold py-3 px-4 rounded-lg transition-colors ${plan.isCurrent 
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                            : 'bg-red-600 text-white hover:bg-red-700'}`
                        }>
                            {plan.isCurrent ? 'اشتراک فعلی شما' : 'انتخاب و ارتقا'}
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SubscriptionPage;