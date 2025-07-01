import React, { useState } from 'react';
import { MessageSquareIcon, StarIcon, CheckCircleIcon, XCircleIcon } from '@/components/Icons';
import type { BusinessReview } from '@/types';

const mockReviews: BusinessReview[] = [
    { id: 1, customerName: 'علی رضایی', comment: 'کارشون عالی و حرفه‌ای بود. حتما دوباره میام.', rating: 5, status: 'approved' },
    { id: 2, customerName: 'سارا محمدی', comment: 'محیط تمیز و برخورد پرسنل خوب بود، فقط کمی تاخیر داشتند.', rating: 4, status: 'approved' },
    { id: 3, customerName: 'نیما افشار', comment: 'همه چیز خوب بود.', rating: 4, status: 'pending' },
    { id: 4, customerName: 'کاربر ۱۲۳', comment: 'اصلا راضی نبودم.', rating: 1, status: 'rejected' },
];

const ReviewsPage: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
    
    const filteredReviews = mockReviews.filter(review => filter === 'all' || review.status === filter);

    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, i) => (
            <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} />
        ));
    };

    return (
        <div className="max-w-5xl mx-auto animate-fade-in space-y-8">
            <div className="text-center">
                <MessageSquareIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h1 className="text-4xl font-black text-white">نظرات کاربران</h1>
                <p className="text-gray-400 mt-2">بازخورد مشتریان، کلید رشد شماست</p>
            </div>

            {/* Filters */}
            <div className="flex justify-center bg-gray-800 p-2 rounded-lg">
                <button onClick={() => setFilter('all')} className={`px-4 py-2 text-sm font-semibold rounded-md ${filter === 'all' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>همه</button>
                <button onClick={() => setFilter('pending')} className={`px-4 py-2 text-sm font-semibold rounded-md ${filter === 'pending' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>در انتظار تایید</button>
                <button onClick={() => setFilter('approved')} className={`px-4 py-2 text-sm font-semibold rounded-md ${filter === 'approved' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>تایید شده</button>
                <button onClick={() => setFilter('rejected')} className={`px-4 py-2 text-sm font-semibold rounded-md ${filter === 'rejected' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>تایید نشده</button>
            </div>
            
            {/* Site Suggestions */}
            <div className="bg-gradient-to-r from-red-500/20 to-gray-800 border-r-4 border-red-500 p-4 rounded-lg">
                <h3 className="font-bold text-white mb-1">پیشنهاد رزرویتو:</h3>
                <p className="text-gray-300 text-sm">بر اساس نظرات، مشتریان از برخورد شما رضایت دارند! برای بهبود امتیاز، روی مدیریت زمان و کاهش تاخیرها تمرکز کنید.</p>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
                {filteredReviews.map(review => (
                    <div key={review.id} className="bg-gray-800 p-5 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-bold text-white">{review.customerName}</p>
                                <div className="flex items-center my-1">
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                {review.status === 'pending' && (
                                    <>
                                        <button className="text-green-400 hover:text-green-300" title="تایید نظر"><CheckCircleIcon className="w-6 h-6"/></button>
                                        <button className="text-red-500 hover:text-red-400" title="رد نظر"><XCircleIcon className="w-6 h-6"/></button>
                                    </>
                                )}
                                {review.status === 'approved' && <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded-full">تایید شده</span>}
                                {review.status === 'rejected' && <span className="text-xs font-bold bg-red-500/20 text-red-400 px-2 py-1 rounded-full">تایید نشده</span>}
                            </div>
                        </div>
                        <p className="text-gray-300 mt-2 italic">"{review.comment}"</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ReviewsPage;