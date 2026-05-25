import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './i18n';
import { 
  Car, 
  Wallet, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Zap, 
  Users, 
  Globe, 
  Award, 
  Star, 
  PlayCircle,
  ShoppingCart,
  Store,
  Truck,
  MapPin,
  Building2,
  Handshake,
  TrendingUp
} from 'lucide-react';

const APK_URL = 'https://github.com/rickross0/eazyride-super-app/raw/master/EazyRide-Haye-v5.1.0.apk';

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-[2.5rem] ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ subtitle, title, description, center = false }: { subtitle: string, title: string, description?: string, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-yellow-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-zinc-500 text-xl max-w-2xl leading-relaxed"
      >
        {description}
      </motion.p>
    )}
  </div>
);

const Navbar = ({ t }: { t: any }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 px-6 py-4 ${scrolled ? 'top-2' : 'top-0'}`}
    >
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 px-8 py-4 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform">
            <span className="text-black font-black text-xl italic">H!</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">Haye!</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: t('nav.services'), href: '#services' },
            { name: t('location.subtitle'), href: '#location' },
            { name: t('nav.partners'), href: '#partners' }
          ].map((item) => (
            <a key={item.name} href={item.href} className="text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">
              {item.name}
            </a>
          ))}
          <button onClick={() => window.open(APK_URL, '_blank')} className="bg-white text-black px-6 py-2.5 rounded-full font-black text-xs uppercase hover:bg-yellow-500 transition-all hover:scale-105 active:scale-95 shadow-xl">
            {t('nav.download')}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = ({ t }: { t: any }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.08),_transparent_70%)]" />
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[120vw] h-[120vw] border border-white/[0.03] rounded-full absolute animate-pulse" />
        <div className="w-[90vw] h-[90vw] border border-white/[0.05] rounded-full absolute" />
        <div className="w-[60vw] h-[60vw] border border-white/[0.07] rounded-full absolute" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full mb-8"
        >
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
          <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em]">{t('hero.subtitle')}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3.5rem,10vw,9rem)] font-black text-white leading-[0.85] tracking-tighter mb-10"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-light"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={() => window.open(APK_URL, '_blank')} className="bg-yellow-500 text-black px-10 py-4 rounded-full font-black text-lg uppercase hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.4)]">
            {t('hero.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Services = ({ t }: { t: any }) => {
  const services = [
    { icon: Car, title: t('services.customer'), desc: t('services.customerDesc'), features: t('services.customerFeatures'), color: 'yellow' },
    { icon: Store, title: t('services.merchant'), desc: t('services.merchantDesc'), features: t('services.merchantFeatures'), color: 'green' },
    { icon: Truck, title: t('services.driver'), desc: t('services.driverDesc'), features: t('services.driverFeatures'), color: 'blue' }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle={t('services.subtitle')} title={t('services.title')} description={t('services.description')} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={service.title} className="p-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-16 h-16 rounded-2xl bg-${service.color}-500/20 flex items-center justify-center mb-6`}
              >
                <service.icon className={`w-8 h-8 text-${service.color}-500`} />
              </motion.div>
              <h3 className="text-2xl font-black text-white mb-2">{service.title}</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {(service.features || []).map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationSection = ({ t }: { t: any }) => {
  const cities = t('location.cities') || [];
  
  return (
    <section id="location" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-500/5 to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading subtitle={t('location.subtitle')} title={t('location.title')} description={t('location.description')} center />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-[3rem] p-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <MapPin className="w-8 h-8 text-yellow-500" />
            <span className="text-yellow-500 font-black uppercase tracking-widest text-sm">{t('location.firstCity')}</span>
          </div>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">{t('location.lasAnod')}</h3>
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-6 py-3 rounded-full">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Live Now</span>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          </div>
        </motion.div>

        <div className="mt-16">
          <h4 className="text-center text-zinc-500 font-bold uppercase tracking-widest text-sm mb-8">{t('location.comingSoon')}</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city: string, i: number) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-zinc-400 font-bold text-sm"
              >
                {city}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnersSection = ({ t }: { t: any }) => {
  const benefits = t('partners.benefits') || [];
  
  return (
    <section id="partners" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle={t('partners.subtitle')} title={t('partners.title')} description={t('partners.description')} center />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-[3rem] p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Handshake className="w-10 h-10 text-yellow-500" />
              <div>
                <h3 className="text-2xl font-black text-white">{t('partners.investorTitle')}</h3>
                <p className="text-zinc-500 text-sm">{t('partners.investorDesc')}</p>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-yellow-500" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <h4 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-8">{t('partners.shareTitle')}</h4>
            
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-zinc-900 border border-white/10 mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-black text-white mb-2">65</div>
                  <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">EazyRide</div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-black text-black">35%</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-black text-yellow-500">35%</div>
                <div className="text-zinc-500 text-xs font-bold uppercase">Investor</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">65%</div>
                <div className="text-zinc-500 text-xs font-bold uppercase">EazyRide</div>
              </div>
            </div>

            <button className="mt-10 bg-yellow-500 text-black px-10 py-4 rounded-full font-black text-lg uppercase hover:bg-white transition-all active:scale-95">
              {t('partners.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatSection = () => (
  <section className="py-20 px-6 border-y border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Active Cities', value: '1+', icon: MapPin },
          { label: 'Active Drivers', value: '500+', icon: Car },
          { label: 'Rides Completed', value: '50K+', icon: TrendingUp },
          { label: 'Partner Investment', value: '35%', icon: Handshake }
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <stat.icon className="w-6 h-6 text-yellow-500 mx-auto mb-3" />
            <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BentoFeatures = () => (
  <section id="safety" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeading subtitle="WHY EAZYRIDE" title="Built for Safety & Trust" />
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: ShieldCheck, title: 'Verified Drivers', desc: 'All drivers undergo strict background checks', color: 'yellow' },
          { icon: Zap, title: 'Real-Time Tracking', desc: 'Track your ride from pickup to dropoff', color: 'blue' },
          { icon: Star, title: 'Rated & Reviewed', desc: 'Rate your experience to maintain quality', color: 'green' }
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
          >
            <feature.icon className={`w-10 h-10 text-${feature.color}-500 mb-4`} />
            <h3 className="text-xl font-black text-white mb-2">{feature.title}</h3>
            <p className="text-zinc-500 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PartnerCTA = ({ t }: { t: any }) => (
  <section className="py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-yellow-500/20 border border-yellow-500/30 rounded-[3rem] p-16"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Ready to Transform Your City?</h2>
        <p className="text-zinc-400 text-xl mb-10 max-w-xl mx-auto">
          Join us in bringing modern transportation to cities across Somalia. Apply now to become a city partner.
        </p>
        <button className="bg-yellow-500 text-black px-12 py-5 rounded-full font-black text-lg uppercase hover:bg-white transition-all active:scale-95">
          {t('partners.cta')}
        </button>
      </motion.div>
    </div>
  </section>
);

const Footer = ({ t }: { t: any }) => (
  <footer className="bg-black pt-32 pb-16 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16 mb-24">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
              <span className="text-black font-black text-xl italic">H!</span>
            </div>
            <span className="text-3xl font-black tracking-tighter text-white">Haye!</span>
          </div>
          <p className="text-zinc-500 text-xl max-w-sm leading-relaxed mb-6">
            {t('footer.description')}
          </p>
          <p className="text-yellow-500 text-sm font-bold">{t('footer.email')}</p>
        </div>
        
        <div className="md:col-span-2 space-y-8">
          <h4 className="text-white font-black uppercase tracking-widest text-xs">{t('services.customer')}</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-bold uppercase tracking-widest">
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Download App</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Sign Up</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Help Center</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2 space-y-8">
          <h4 className="text-white font-black uppercase tracking-widest text-xs">{t('footer.contact')}</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-bold uppercase tracking-widest">
            <li><a href="#" className="hover:text-yellow-500 transition-colors">{t('footer.support')}</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">{t('footer.press')}</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">{t('footer.safety')}</a></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-8">
          <h4 className="text-white font-black uppercase tracking-widest text-xs">{t('footer.newsletter')}</h4>
          <p className="text-zinc-600 text-xs leading-relaxed">{t('footer.newsletterDesc')}</p>
          <div className="flex gap-2">
            <button onClick={() => window.open(APK_URL, '_blank')} className="bg-yellow-500 p-3 rounded-xl text-black flex-1 font-black text-xs uppercase">{t('download.button')}</button>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          {t('footer.copyright')}
        </p>
      </div>
    </div>
  </footer>
);

const LanguageSwitcher = ({ lang, setLang }: { lang: string, setLang: (l: string) => void }) => {
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'so', label: 'SO' },
    { code: 'ar', label: 'ع' }
  ];

  return (
    <motion.div 
      className="fixed right-4 bottom-24 z-50 flex flex-col gap-2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      {languages.map((langObj) => (
        <motion.button
          key={langObj.code}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLang(langObj.code)}
          className={`w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center cursor-pointer ${lang === langObj.code ? 'bg-yellow-500 text-black glow-pulse' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}
        >
          {langObj.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="bg-black text-white font-['Inter'] selection:bg-yellow-500 selection:text-black antialiased">
      <Navbar t={t} />
      <Hero t={t} />
      <Services t={t} />
      <StatSection />
      <BentoFeatures />
      <LocationSection t={t} />
      <PartnersSection t={t} />
      <PartnerCTA t={t} />
      <Footer t={t} />
      
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-yellow-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] bg-zinc-800/10 blur-[100px] rounded-full" />
      </div>

      <LanguageSwitcher lang={lang} setLang={setLang} />
    </div>
  );
}
