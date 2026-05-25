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
        subtitle: "Somalia's Super App",
        description: 'One app for rides, food delivery, car rental and more. Starting from Las Anod, expanding to all major cities in Somalia.',
        cta: 'Download Now'
      },
      services: {
        subtitle: 'OUR SERVICES',
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
      download: {
        title: 'Download Now',
        subtitle: 'Get the EazyRide Super App',
        button: 'Download APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! EazyRide Somalia | Building the Future of Transportation',
        description: 'Transforming urban mobility across Somalia. Starting with Las Anod, expanding everywhere.',
        contact: 'Contact',
        support: 'Support Center',
        press: 'Partners',
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
        subtitle: 'Super App-ka Soomaaliya',
        description: 'App keliya wado, cunto, iyo more. Las Anod ayay bilowdoontaa, waxayna ku fidi doontaa magaalooyinka Somalia.',
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
      download: {
        title: 'Hadda Degso',
        subtitle: 'Super App-ka soo degso',
        button: 'Soo Degso APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! EazyRide Somalia',
        description: 'Designing the architecture of urban movement.',
        contact: 'Xidhiidhinta',
        support: 'Taageerada',
        press: 'Partners',
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
        subtitle: 'تطبيق الصومال',
        description: 'تطبيق واحد للركوب والطعام والمزيد. نبدأ من ليس انود ونوسع لجميع المدن.',
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
      download: {
        title: 'تحميل الآن',
        subtitle: 'تحميل التطبيق',
        button: 'تحميل APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! EazyRide Somalia',
        description: 'تصميم حركة حضرية.',
        contact: 'التواصل',
        support: 'الدعم',
        press: 'الشركاء',
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
