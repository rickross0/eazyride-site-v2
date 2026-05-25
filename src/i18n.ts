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
        download: 'Get App',
        partners: 'Partners'
      },
      hero: {
        title: 'MOVE AT THE\nSPEED OF LIFE',
        subtitle: 'Somalia\'s Super App',
        description: 'One app for rides, food delivery, car rental and more. Starting from Las Anod, expanding to all major cities in Somalia.',
        cta: 'Download Now'
      },
      services: {
        subtitle: 'OUR SERVICES',
        title: 'Everything You Need, One App',
        description: 'From daily commutes to food delivery - we\'ve got you covered',
        customer: 'Riders',
        customerDesc: 'Request rides, order food, rent cars - all in one place',
        customerFeatures: [
          'Request rides (Bajaj & Car)',
          'Order food from local restaurants',
          'Rent cars for self-drive',
          'Real-time ride tracking',
          'In-app wallet payments',
          'SOS emergency button'
        ],
        merchant: 'Stores & Restaurants',
        merchantDesc: 'Grow your business with thousands of customers',
        merchantFeatures: [
          'List your products and menu',
          'Receive orders in real-time',
          'NFC & PIN order verification',
          'Track deliveries',
          'Manage inventory',
          'Secure payment processing'
        ],
        driver: 'Drivers',
        driverDesc: 'Earn income with rides and deliveries',
        driverFeatures: [
          'Accept ride & delivery requests',
          'Real-time navigation',
          'Earn based on distance/time',
          'Weekly earnings dashboard',
          'Vehicle management',
          'Instant wallet withdrawals'
        ]
      },
      location: {
        subtitle: 'OUR REACH',
        title: 'Starting in Las Anod, Expanding Across Somalia',
        description: 'We are currently live in Las Anod with plans to expand to all major cities in Somalia, including Mogadishu and beyond.',
        firstCity: 'First City',
        lasAnod: 'Las Anod',
        comingSoon: 'Coming Soon',
        cities: ['Mogadishu', 'Hargeisa', 'Bosaso', 'Berbera', 'Kismayo', 'Baidoa', 'Galkayo', 'Beledweyne']
      },
      partners: {
        subtitle: 'INVESTMENT OPPORTUNITY',
        title: 'Partner With Us',
        description: 'Join us in bringing modern transportation to cities across Somalia. We are seeking local partners to invest in their cities.',
        investorTitle: 'Become a City Partner',
        investorDesc: 'Invest in your city and own a stake in the local operations',
        benefits: [
          '35% ownership stake in your city',
          'Proven technology platform',
          'Brand recognition & support',
          'Training & operations guidance',
          'Ongoing technical support'
        ],
        shareTitle: 'Investment Structure',
        investorShare: '35% - Investor',
        eazyrideShare: '65% - EazyRide',
        cta: 'Apply Now'
      },
      download: {
        title: 'Get Started',
        subtitle: 'Download the EazyRide Super App',
        button: 'Download APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! EazyRide Somalia | Building the Future of Transportation',
        description: 'Transforming urban mobility across Somalia. Starting with Las Anod, expanding everywhere.',
        contact: 'Contact',
        support: 'Support',
        press: 'Partners',
        safety: 'Safety',
        newsletter: 'Newsletter',
        newsletterDesc: 'Stay updated with our latest city launches.',
        email: 'contact@eazyride.so'
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
        download: 'Get App',
        partners: 'Bulshayaal'
      },
      hero: {
        title: 'MOVE EE\nDIDA LIFKA',
        subtitle: 'Super App-ka Soomaaliya',
        description: 'App keliya wado, cunto, iyo more. Las Anod ayay bilowdoontaa,waxayna ku fidi doontaa magaalooyinka Somaliland.',
        cta: 'Hadda Degso'
      },
      services: {
        subtitle: 'ADEEGINTA',
        title: 'Wax Walba Aaad U Bahday, App Keliya',
        description: 'Ka soo bidi kasta ilaa cunto - waxaanu kugulaagnay',
        customer: 'Riders',
        customerDesc: 'Dalbo wado, order cunto, iyo rental gadiid - dhamaan hal meel',
        customerFeatures: [
          'Dalbo wadooyin (Bajaj & Car)',
          'Order cunto卫生部 restaurants',
          'Rent gadiid ama',
          'Track wado real-time',
          'Bixinta app-ka',
          'Badbaadinta SOS'
        ],
        merchant: 'Dukaamada & Restaurant',
        merchantDesc: 'Korporusha ganacsigaagaarka adan milic badan',
        merchantFeatures: [
          'Soo geli alaabtaada',
          'Hel orders real-time',
          'NFC & PIN verification',
          'Track deliveries',
          'Maaree inventory',
          'Bixinta安全'
        ],
        driver: 'Darawallada',
        driverDesc: 'Soo haayso lacagtaada wadooyinka iyo deliveries',
        driverFeatures: [
          'Aqbal ride & delivery requests',
          'Navigation real-time',
          'Earn based distance/time',
          'Dashboard earnings',
          'Maaree gaadiidka',
          'Withdrawals'
        ]
      },
      location: {
        subtitle: 'GOOBINTA',
        title: 'Las Anod Oo Bilow ah, Oo Ku Fidinta Somalia',
        description: 'Waxaanu niyadsanay Las Anod waxaana plans ku fidinaysaa magaalooyinka Somaliland oo dhan.',
        firstCity: 'Magaalada Koowaad',
        lasAnod: 'Las Anod',
        comingSoon: 'ima soo bandhigin',
        cities: ['Mogadishu', 'Hargeisa', 'Bosaso', 'Berbera', 'Kismayo', 'Baidoa', 'Galkayo', 'Beledweyne']
      },
      partners: {
        subtitle: 'FURSAD SOSAASH',
        title: 'Nagu Soo Biir',
        description: 'Noogu soo biir waxaanu u keenaynaa transporyasha casriga ah magaalooyinka Soomaaliya. Waxaanu raadineynaa partners local si ay ugu investaan magaalooyinkooda.',
        investorTitle: 'Noqo Partner Magaalada',
        investorDesc: 'Invest your city and own stake local operations',
        benefits: [
          '35% stake magaaldaada',
          'Platform technology',
          'Brand recognition & support',
          'Training & guidance',
          'Technical support'
        ],
        shareTitle: 'Investment Structure',
        investorShare: '35% - Investor',
        eazyrideShare: '65% - EazyRide',
        cta: 'Apply Now'
      },
      download: {
        
        title: 'Super App-ka soo degso',
        button: 'Soo Degso APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! EazyRide Somalia',
        description: 'Transforming urban mobility.',
        contact: 'Xidhiidhinta',
        support: 'Taageerada',
        press: 'Partners',
        safety: 'Badbaadinta',
        newsletter: 'Warbixin',
        newsletterDesc: 'Stay updated.',
        email: 'contact@eazyride.so'
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
        download: 'تحميل',
        partners: 'الشركاء'
      },
      hero: {
        title: 'تحرك بسرعة\nالحياة',
        subtitle: 'تطبيق الصومال',
        description: 'تطبيق واحد للركوب والطعام والمزيد. نبدأ من ليس انود ونوسع لجميع المدن.',
        cta: 'تحميل الآن'
      },
      services: {
        subtitle: 'خدماتنا',
        title: 'كل ما تحتاجه في تطبيق واحد',
        description: 'من الركوب اليومي لتوصيل الطعام - نحن هنا',
        customer: 'الركاب',
        customerDesc: 'اطلب ركوب، اطلب طعام، استاجر سيارة',
        customerFeatures: [
          'اطلب ركوب (باجاج او سيارة)',
          'اطلب طعام من المطاعم',
          'استاجر سيارة',
          'تتبع الرحلة',
          'الدفع من المحفظة',
          'زر الطوارئ'
        ],
        merchant: 'المطاعم والمتاجر',
        merchantDesc: 'نم أعمالك مع آلاف العملاء',
        merchantFeatures: [
          'انشر منتجاتك',
          'استلم الطلبات',
          'التحقق عبر NFC',
          'تتبع التوصيل',
          'ادارة المخزون',
          'الدفع الامن'
        ],
        driver: 'السائقون',
        driverDesc: 'اربح من الركوب والتوصيل',
        driverFeatures: [
          'قبل طلبات الركوب',
          'الملاحة المباشرة',
          'الارباح حسب المسافة',
          'لوحة الارباح',
          'ادارة السيارة',
          'السحب الفوري'
        ]
      },
      location: {
        subtitle: 'تغطيتنا',
        title: 'نبدأ من ليس انود ونوسع للصومال',
        Description: 'نحن الان في ليس انود مع خطط للتوسع.',
        firstCity: 'المدينةالاولى',
        lasAnod: 'ليس انود',
        comingSoon: 'قريبا',
        cities: ['مقديشو', 'هرجيسا', 'بوساسو', 'بربرة', 'كمبالي', 'بايو', 'كالكو', 'بلدوين']
      },
      partners: {
        subtitle: 'فرصة الاستثمار',
        title: 'شاركنا',
        description: 'انضم الينا لجلب النقل الحديث للمدنالصومالية.',
        investorTitle: 'شريك المدينة',
        investorDesc: 'استثمر في مدينتك واملك حصة محلية',
        benefits: [
          '35% حصة في مدينتك',
          'منصة تقنية',
          'الدعم والتدريب',
          'دعم فني مستمر'
        ],
        shareTitle: 'هيكل الاستثمار',
        investorShare: '35% - المستثمر',
        eazyrideShare: '65% - EazyRide',
        cta: 'قدم الآن'
      },
      download: {
        title: 'ابدأ',
        subtitle: 'تحميل التطبيق',
        button: 'تحميل APK',
        size: '~120 MB'
      },
      footer: {
        copyright: '© 2026 Haye! EazyRide Somalia',
        description: 'نحول النقل الحضري.',
        contact: 'التواصل',
        support: 'الدعم',
        press: 'الشركاء',
        safety: 'الامان',
        newsletter: 'النشرة',
        newsletterDesc: 'ابق على اطلاع.',
        email: 'contact@eazyride.so'
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
