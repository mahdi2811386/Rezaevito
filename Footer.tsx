import React from 'react';
import { InstagramIcon, TelegramIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <img src="/logo.png" alt="رزرویتو لوگو" className="h-12 w-auto mb-4 mx-auto md:mx-0" />
            <p className="max-w-xs mx-auto md:mx-0">
              ساده‌ترین راه برای رزرو آنلاین سالن‌های ورزشی، آرایشگاه‌ها و مراکز خدماتی. در هر زمان و هر مکان، وقت خود را رزرو کنید.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">لینک‌های سریع</h4>
            <ul>
              <li className="mb-2"><a href="#/about" className="hover:text-red-500 transition-colors">درباره ما</a></li>
              <li className="mb-2"><a href="#/" className="hover:text-red-500 transition-colors">همکاری با ما</a></li>
              <li className="mb-2"><a href="#/terms" className="hover:text-red-500 transition-colors">قوانین و مقررات</a></li>
              <li className="mb-2"><a href="#/faq" className="hover:text-red-500 transition-colors">سوالات متداول</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">تماس با ما</h4>
            <div className="flex justify-center md:justify-end space-x-6 space-x-reverse">
              <a href="mailto:rezervitoo@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <MailIcon className="w-7 h-7" />
              </a>
              <a href="https://instagram.com/rezervito" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <InstagramIcon className="w-7 h-7" />
              </a>
              <a href="https://t.me/rezervito" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <TelegramIcon className="w-7 h-7" />
              </a>
            </div>
             <p className="mt-4 text-sm">ایمیل: <a href="mailto:rezervitoo@gmail.com" className="hover:text-red-500">rezervitoo@gmail.com</a></p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} رزرویتو. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;