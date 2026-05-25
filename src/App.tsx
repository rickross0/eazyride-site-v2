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
  Truck
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
            { name: t('nav.howItWorks'), href: '#how' },
            { name: t('nav.safety'), href: '#safety' },
            { name: t('nav.earnings'), href: '#earnings' }
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
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button onClick={() => window.open(APK_URL, '_blank')} className="flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:bg-yellow-500 transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <Download size={24} />
            {t('hero.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Services = ({ t }: { t: any }) => {
  const serviceCards = [
    { key: 'customer', icon: ShoppingCart, color: 'cyan' },
    { key: 'merchant', icon: Store, color: 'gold' },
    { key: 'driver', icon: Truck, color: 'green' }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle={t('services.subtitle')} 
          title={t('services.title')} 
          description={t('services.description')}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {serviceCards.map((card, i) => {
            const features = t(`services.${card.key}Features`, { returnObjects: true });
            const Icon = card.icon;
            const colorClass = card.color === 'cyan' ? 'text-cyan border-cyan/30 hover:border-cyan' : card.color === 'gold' ? 'text-yellow-500 border-yellow-500/30 hover:border-yellow-500' : 'text-green-500 border-green-500/30 hover:border-green-500';
            return (
              <motion.div 
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl border ${colorClass} bg-white/[0.02] backdrop-blur-xl transition-all`}
              >
                <Icon size={48} className={colorClass.split(' ')[0]} />
                <h3 className="text-2xl font-black text-white mt-4 mb-2">{t(`services.${card.key}`)}</h3>
                <p className="text-zinc-500 mb-6">{t(`services.${card.key}Desc`)}</p>
                <ul className="space-y-3">
                  {Array.isArray(features) && features.map((feat: string, j: number) => (
                    <li key={j} className="text-sm text-zinc-500 flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${card.color === 'cyan' ? 'bg-cyan' : card.color === 'gold' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BentoFeatures = () => (
  <section id="ecosystem" className="py-32 px-6 bg-gradient-to-b from-black to-zinc-950">
    <div className="max-w-7xl mx-auto">
      <SectionHeading 
        subtitle="ECOSYSTEM" 
        title="Built for the Next Billion" 
        description="Every feature designed with purpose. Every interaction built for trust."
      />
      <div className="grid md:grid-cols-3 gap-6">
        <GlassCard className="md:col-span-2 p-10 border-l-4 border-l-yellow-500">
          <ShieldCheck className="text-yellow-500 mb-6" size={48} />
          <h3 className="text-3xl font-black text-white mb-4">Safety First Architecture</h3>
          <p className="text-zinc-500 text-lg leading-relaxed">Real-time trip monitoring, SOS emergency protocols, and verified driver networks ensure every journey is protected.</p>
        </GlassCard>
        <GlassCard className="p-10 border-l-4 border-l-cyan-500">
          <Wallet className="text-cyan-500 mb-6" size={48} />
          <h3 className="text-2xl font-black text-white mb-4">Haye! Pay</h3>
          <p className="text-zinc-500">Seamless EVC & Zaad integration for instant, fee-free transfers.</p>
        </GlassCard>
        <GlassCard className="p-10 border-l-4 border-l-green-500">
          <Globe className="text-green-500 mb-6" size={48} />
          <h3 className="text-2xl font-black text-white mb-4">Local Scale</h3>
          <p className="text-zinc-500">Operations in 10+ cities across Somalia and expanding.</p>
        </GlassCard>
        <GlassCard className="md:col-span-2 p-10 border-l-4 border-l-purple-500">
          <Award className="text-purple-500 mb-6" size={48} />
          <h3 className="text-3xl font-black text-white mb-4">Elite Rewards</h3>
          <p className="text-zinc-500 text-lg leading-relaxed">Earn points on every ride. Redeem for free rides, partner perks, and premium upgrades.</p>
        </GlassCard>
        <GlassCard className="p-10 border-l-4 border-l-pink-500">
          <Star className="text-pink-500 mb-6" size={48} />
          <h3 className="text-2xl font-black text-white mb-4">4.9★ Rating</h3>
          <p className="text-zinc-500">Industry-leading satisfaction across 1M+ trips completed.</p>
        </GlassCard>
      </div>
    </div>
  </section>
);

const StatSection = () => {
  const stats = [
    { label: 'Downloads', val: '1M+' },
    { label: 'Partners', val: '50K+' },
    { label: 'Cities', val: '10+' },
    { label: 'Trips', val: '5M+' }
  ];

  return (
    <section className="py-24 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl font-black text-white mb-2">{stat.val}</div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-zinc-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const PartnerCTA = ({ t }: { t: any }) => (
  <section id="partners" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading 
            subtitle="PARTNERS" 
            title={t('benefits.title')} 
          />
          <div className="space-y-8">
            <GlassCard className="p-8 border-l-4 border-l-cyan-500">
               <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">{t('benefits.customerTitle')}</h4>
               <p className="text-zinc-500 text-sm">{t('benefits.customerFor')}</p>
            </GlassCard>
            <GlassCard className="p-8 border-l-4 border-l-yellow-500">
               <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">{t('benefits.merchantTitle')}</h4>
               <p className="text-zinc-500 text-sm">{t('benefits.merchantFor')}</p>
            </GlassCard>
            <GlassCard className="p-8 border-l-4 border-l-green-500">
               <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">{t('benefits.driverTitle')}</h4>
               <p className="text-zinc-500 text-sm">{t('benefits.driverFor')}</p>
            </GlassCard>
            <button onClick={() => window.open(APK_URL, '_blank')} className="flex items-center gap-3 text-white font-black uppercase tracking-widest hover:text-yellow-500 transition-colors">
              {t('download.button')} <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <GlassCard className="p-8 border-l-4 border-l-yellow-500">
             <div className="flex justify-between items-center mb-4">
               <div className="text-zinc-500 font-bold uppercase text-xs tracking-widest">10%</div>
               <div className="text-yellow-500 font-black text-2xl">{t('benefits.driverTitle')}</div>
             </div>
             <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
               <div className="bg-yellow-500 h-full w-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
             </div>
          </GlassCard>
          <GlassCard className="p-8 border-l-4 border-l-green-500">
             <div className="flex justify-between items-center mb-4">
               <div className="text-zinc-500 font-bold uppercase text-xs tracking-widest">{t('download.size')}</div>
               <div className="text-green-500 font-black text-2xl">Super App</div>
             </div>
             <div className="flex gap-2">
               {[1,2,3,4,5,6,7].map(i => <div key={i} className="flex-1 h-8 bg-green-500/20 rounded-md" />)}
             </div>
          </GlassCard>
        </div>
      </div>
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
          <p className="text-zinc-500 text-xl max-w-sm leading-relaxed mb-10">
            {t('footer.description')}
          </p>
        </div>
        
        <div className="md:col-span-2 space-y-8">
          <h4 className="text-white font-black uppercase tracking-widest text-xs">{t('services.customer')}</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-bold uppercase tracking-widest">
            <li><a href="#" className="hover:text-yellow-500 transition-colors">{t('services.customer')}</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">{t('services.merchant')}</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">{t('services.driver')}</a></li>
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
