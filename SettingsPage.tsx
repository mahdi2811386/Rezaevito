import React from 'react';
import { SettingsIcon, UploadIcon, MapPinIcon, CameraIcon, ClockIcon, PlusCircleIcon } from '@/components/Icons';

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in space-y-8">
      <div className="text-center">
        <SettingsIcon className="w-16 h-16 mx-auto text-red-500 mb-4" />
        <h1 className="text-4xl font-black text-white">پنل کسب و کار</h1>
        <p className="text-gray-400 mt-2">اطلاعات کسب و کار خود را اینجا مدیریت و ویرایش کنید</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg space-y-6">
        {/* Basic Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">اطلاعات پایه</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img src="https://picsum.photos/seed/business_logo/100/100" className="w-24 h-24 rounded-full object-cover border-2 border-gray-600" />
              <div>
                <label htmlFor="logo-upload" className="cursor-pointer bg-gray-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-600 transition-colors flex items-center">
                  <UploadIcon className="w-5 h-5 ml-2" />
                  آپلود لوگو
                </label>
                <input id="logo-upload" type="file" className="hidden" />
              </div>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="اسم کسب و کار" defaultValue="پیرایشگاه VIP تک" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
              <input type="text" placeholder="اسم مدیریت" defaultValue="علی رضایی" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
              <select className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500">
                <option>آرایشگاه مردانه</option>
                <option>آرایشگاه زنانه</option>
                <option>سالن ورزشی</option>
                <option>زمین ورزشی</option>
              </select>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center"><MapPinIcon className="w-6 h-6 ml-2"/>آدرس</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="استان" defaultValue="تهران" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
            <input type="text" placeholder="شهر" defaultValue="تهران" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
            <textarea placeholder="جزئیات آدرس" rows={3} className="md:col-span-2 w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500">خیابان ولیعصر، نرسیده به میدان تجریش، کوچه...</textarea>
            <button className="md:col-span-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
              <MapPinIcon className="w-5 h-5 ml-2" />
              انتخاب از روی نقشه
            </button>
          </div>
        </div>
        
        {/* Gallery */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center"><CameraIcon className="w-6 h-6 ml-2"/>گالری تصاویر</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                <img src="https://picsum.photos/seed/gallery1/200/200" className="rounded-lg object-cover w-full h-24"/>
                <img src="https://picsum.photos/seed/gallery2/200/200" className="rounded-lg object-cover w-full h-24"/>
                <img src="https://picsum.photos/seed/gallery3/200/200" className="rounded-lg object-cover w-full h-24"/>
                <div className="border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center w-full h-24 cursor-pointer hover:bg-gray-700">
                    <UploadIcon className="w-8 h-8 text-gray-500"/>
                </div>
            </div>
        </div>


        {/* Working Hours */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center"><ClockIcon className="w-6 h-6 ml-2"/>ساعات کاری و سانس‌ها</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input type="time" defaultValue="09:00" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 text-gray-400" />
            <input type="time" defaultValue="21:00" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 text-gray-400" />
            <input type="number" placeholder="مدت زمان هر سانس (دقیقه)" defaultValue="30" className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:ring-red-500 focus:border-red-500" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center"><PlusCircleIcon className="w-6 h-6 ml-2"/>خدمات</h2>
            <div className="space-y-2">
                <div className="flex gap-2"><input type="text" defaultValue="کوتاهی مو" className="w-full bg-gray-700 p-2 rounded"/><input type="text" defaultValue="250000" className="w-1/3 bg-gray-700 p-2 rounded"/></div>
                <div className="flex gap-2"><input type="text" defaultValue="رنگ مو" className="w-full bg-gray-700 p-2 rounded"/><input type="text" defaultValue="800000" className="w-1/3 bg-gray-700 p-2 rounded"/></div>
            </div>
           <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center">
              <PlusCircleIcon className="w-5 h-5 ml-2" />
              افزودن خدمت جدید
            </button>
        </div>
      </div>
      
      <button className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors text-lg">
        ذخیره تغییرات
      </button>

    </div>
  );
};

export default SettingsPage;
