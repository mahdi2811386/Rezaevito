import React from 'react';
import type { Article } from '@/types';
import { BookOpenIcon } from '../components/Icons';


const articles: Article[] = [
  { id: 1, title: '۵ نکته برای انتخاب بهترین سالن ورزشی', excerpt: 'قبل از ثبت‌نام در یک باشگاه، این موارد را در نظر بگیرید تا بهترین نتیجه را بگیرید.', imageUrl: 'https://picsum.photos/seed/article1/400/300' },
  { id: 2, title: 'جدیدترین مدل‌های موی مردانه در سال ۲۰۲۴', excerpt: 'با ترندهای روز آشنا شوید و استایل جدیدی را تجربه کنید.', imageUrl: 'https://picsum.photos/seed/article2/400/300' },
  { id: 3, title: 'چگونه یک روتین مراقبت از پوست داشته باشیم؟', excerpt: 'راز داشتن پوستی سالم و درخشان در این چند قدم ساده نهفته است.', imageUrl: 'https://picsum.photos/seed/article3/400/300' },
  { id: 4, title: 'فواید ماساژ برای ورزشکاران', excerpt: 'چگونه ریکاوری خود را سریع‌تر کنید و از آسیب‌دیدگی جلوگیری نمایید.', imageUrl: 'https://picsum.photos/seed/article4/400/300' },
  { id: 5, title: 'معرفی بهترین زمین‌های چمن مصنوعی تهران', excerpt: 'یک راهنمای کامل برای علاقه‌مندان به فوتبال.', imageUrl: 'https://picsum.photos/seed/article5/400/300' },
  { id: 6, title: 'رنگ موی تابستان امسال چیست؟', excerpt: 'با جدیدترین ترندهای رنگ مو برای خانم‌ها آشنا شوید.', imageUrl: 'https://picsum.photos/seed/article6/400/300' },
];


const MagazinePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
            <BookOpenIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
            <h1 className="text-4xl font-black text-white">مجله <span className="text-red-600">رزرویتو</span></h1>
            <p className="text-gray-400 mt-2">آخرین اخبار، مقالات و نکات مفید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden group shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                 <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                   <p className="text-gray-400 mb-4 h-20 overflow-hidden">{article.excerpt}</p>
                   <a href="#" className="font-semibold text-red-500 hover:text-red-400">ادامه مطلب &larr;</a>
                 </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default MagazinePage;