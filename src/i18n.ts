import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        services: 'Services',
        howItWorks: 'How it Works',
        safety: 'Safety',
        earnings: 'Earnings',
        download: 'Get App'
      },
      hero: {
        title: 'MOVE AT THE\nSPEED OF LIFE',
        subtitle: 'The Super App Revolution',
        description: 'Experience urban mobility 1000% redefined. One app for rides, food, groceries, deliveries, and more.',
        cta: 'Download Now'
      },
      services: {
        subtitle: 'SERVICES',
        title: 'One App, Three Ways to Use',
        description: 'Choose your path and start using today',
        customer: 'Customer',
        customerDesc: 'Shop, ride, and deliver - all in one place',
        customerFeatures: [
          'Browse restaurants, groceries, pharmacies',
          'Add items to cart, checkout with currency',
          'Request rides or deliveries',
          'Purchase credits via mobile money',
          'Optional subscription for perks',
          'Referral credits'
        ],
        merchant: 'Store / Merchant',
        merchantDesc: 'Grow your business with thousands of customers',
        merchantFeatures: [
          'Upload products, set prices in currency',
          'Manage inventory, receive orders',
          'Earn currency from sales',
          'Pay platform commissions',
          'Optional subscription for lower rates',
          'Merchant onboarding support'
        ],
        driver: 'Driver / Rider',
        driverDesc: 'Earn money with rides and deliveries',
        driverFeatures: [
          'Maintain account balance in credits',
          'Purchase credits via mobile money',
          'Accept ride/delivery requests',
          'Earn currency from completed services',
          '10% commission per transaction',
          'Optional subscription for lower commissions',
          'Driver recruitment bonuses'
        ]
      },
      benefits: {
        title: 'Choose Your Path',
        customerTitle: 'Customer',
        customerFor: 'Everyone who needs rides, food, groceries, or deliveries.',
        merchantTitle: 'Store / Merchant',
        merchantFor: 'Restaurants, shops, and businesses wanting to reach more customers.',
        driverTitle: 'Driver / Rider',
        driverFor: 'Drivers with vehicles who want to earn income.',
      },
      download: {
        title: 'Download Now',
        subtitle: 'Get the EazyRide Super App',
        button: 'Download APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! Mobility Global Inc. | Designed for the Next Billion',
        description: 'Designing the architecture of urban movement. Leading the evolution from Eazyride to the worlds most trusted Super App.',
        contact: 'Contact',
        support: 'Support Center',
        press: 'Press Relations',
        safety: 'Safety Hub',
        newsletter: 'Newsletter',
        newsletterDesc: 'Stay updated with our latest city launches and features.'
      }
    }
  },
  so: {
    translation: {
      nav: {
        services: 'Adeegyada',
        howItWorks: 'Sidee Ay U Shaqeysaa',
        safety: 'Badbaadinta',
        earnings: 'Heshiyayaasha',
        download: 'Get App'
      },
      hero: {
        title: 'MOVE EE\nDIDA LIFKA',
        subtitle: 'Super App-ka',
        description: 'Experience urban mobility 1000% redefined. App keliya wado, cunto,ader, iyo more.',
        cta: 'Hadda Degso'
      },
      services: {
        subtitle: 'ADEEGINTA',
        title: 'App keliya, Saddex Shaqo',
        description: 'Dooro jidadkaaga oo bilow isticmaalka',
        customer: 'Macmiil',
        customerDesc: 'Iibso, wado, ama soo/guri - dhamaan hal meel',
        customerFeatures: [
          'Raadi malays, yaabaha, pharmacy-ga',
          'Ku dar dukumoobiyaha, iibso',
          'Wado ama soo-guri dalbasho',
          'Ishiiska mobile money',
          'Xisaabinta ikhtiyaariga ah',
          'Referral credits'
        ],
        merchant: 'Dukaaneer / Store',
        merchantDesc: 'Korporusha ganacsigaagaarka adan milic badan',
        merchantFeatures: [
          'Soo geli sawirrada, qiimaha dhig',
          'Maaree inventory-ga, geli dalbasho',
          'Hesho lacag ka ganacsatada',
          'Bixiicommission-ga platform-ka',
          'Xisaabinta ikhtiyaariga ah',
          'Taageerada merchant onboarding'
        ],
        driver: 'Darawalka / Rider',
        driverDesc: 'Soo haayso lacagtaada adiga oo wadayn ama soo-gurin',
        driverFeatures: [
          'Hay account balance-kaaga',
          'Ishiiska mobile money',
          'Aqbal dalbashooyinka wado/soo-guri',
          'Hesho lacag ka shaqo-dhamaystiran',
          '10% commission-ga shaqo kasta',
          'Xisaabinta ikhtiyaariga ah',
          'Bonus-yasha recruitment-ka'
        ]
      },
      benefits: {
        title: 'Dooro Jidadkaaga',
        customerTitle: 'Macmiil',
        customerFor: 'Qof kasta oo u baahan wado, cunto,ader.',
        merchantTitle: 'Dukaaneer / Store',
        merchantFor: 'Restaurants, dukaamada, iyo ganacsiyada ee doonaya in ay gaadhaan macmiileen badan.',
        driverTitle: 'Darawalka / Rider',
        driverFor: 'Darawallada gaadiidka ee doonaya in ay soo haaystaan lacag.',
      },
      download: {
        title: 'Hadda Degso',
        subtitle: 'Super App-ka soo degso',
        button: 'Soo Degso APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! Mobility Global Inc.',
        description: 'Designing the architecture of urban movement.',
        contact: 'Xidhiidhinta',
        support: 'Taageerada',
        press: 'Warbaahinta',
        safety: 'Badbaadinta',
        newsletter: 'Warbixin',
        newsletterDesc: 'Stay updated with our latest launches.'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        services: 'الخدمات',
        howItWorks: 'كيف يعمل',
        safety: 'الامان',
        earnings: 'الارباح',
        download: 'تحميل التطبيق'
      },
      hero: {
        title: 'تحرك بسرعة\nالحياة',
        subtitle: 'تطبيق السوبر',
        description: 'تطبيق واحد للركوب والطعام والتوصيل والمزيد.',
        cta: 'تحميل الآن'
      },
      services: {
        subtitle: 'الخدمات',
        title: 'تطبيق واحد ثلاثة أوضاع',
        description: 'اختر طريقتك وابدأ الآن',
        customer: 'عميل',
        customerDesc: 'تسوق،اركب،وشغّل - كل شيء في مكان واحد',
        customerFeatures: [
          'تصفح المطاعم والمواد الغذائية والصيدليات',
          'أضف للسلة والدفع بالعملة المحلية',
          'اطلب ركوب أو توصيل',
          'شراء الرصيد عبر المحفظة',
          'اشتراك اختياري للمزايا',
          'رصيد الإحالة'
        ],
        merchant: 'تاجر / متجر',
        merchantDesc: 'نمّ أعمالك مع آلاف العملاء',
        merchantFeatures: [
          'ارفع صور المنتجات وحدد الأسعار بالعملة',
          'إدارة المخزون واستلام الطلبات',
          'Earn currency from المبيعات',
          'دفع عمولات المنصة',
          'اشتراك اختياري لأسعار أقل',
          'دعم تسجيل التجار'
        ],
        driver: 'سائق / رايدر',
        driverDesc: 'اربح المال من الركوب والتوصيل',
        driverFeatures: [
          'حافظ على رصيد الحساب',
          'شراء الرصيد عبر المحفظة',
          'قبول طلبات الركوب والتوصيل',
          'Earn currency من الخدمات المكتملة',
          '10% عمولة لكل معاملة',
          'اشتراك اختياري لعمولات أقل',
          'مكافآت توظيف السائقين'
        ]
      },
      benefits: {
        title: 'اختر طريقتك',
        customerTitle: 'عميل',
        customerFor: 'كل من يحتاج ركوب أو طعام أو توصيل.',
        merchantTitle: 'تاجر / متجر',
        merchantFor: 'المطاعم والمحلات التجارية التي تريد الوصول لمزيد من العملاء.',
        driverTitle: 'سائق / رايدر',
        driverFor: 'السائقون الذين يريدون الدخل.',
      },
      download: {
        title: 'تحميل الآن',
        subtitle: 'تحميل التطبيق',
        button: 'تحميل APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! Mobility Global Inc.',
        description: 'تصميم حركة حضرية.',
        contact: 'التواصل',
        support: 'الدعم',
        press: 'الصحافة',
        safety: 'الامان',
        newsletter: 'النشرة',
        newsletterDesc: 'ابق على اطلاع باخر اخبارنا.'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
