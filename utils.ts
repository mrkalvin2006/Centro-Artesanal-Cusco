import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe2, Sparkles, Loader2 } from 'lucide-react';
import { Language, useLanguage } from '../lib/LanguageContext';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'ES', label: 'Español', flag: '🇵🇪' },
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'PT', label: 'Português', flag: '🇧🇷' },
  { code: 'RU', label: 'Русский', flag: '🇷🇺' },
];

export function WelcomeGate() {
  const { lang, setLang, t } = useLanguage();
  const [visible, setVisible] = useState(() => sessionStorage.getItem('cac_welcome_seen') !== 'true');
  const [loading, setLoading] = useState(false);

  const enterSite = () => {
    setLoading(true);
    window.setTimeout(() => {
      sessionStorage.setItem('cac_welcome_seen', 'true');
      setVisible(false);
      setLoading(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-4 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_36%)]" />

          <motion.div
            initial={{ y: 28, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-mystic-gold/25 bg-mystic-darker/95 shadow-[0_30px_120px_rgba(0,0,0,0.7)]"
          >
            <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[250px] overflow-hidden bg-mystic-gray">
                <img
                  src="/logo.png"
                  alt="Centro Artesanal Cusco"
                  className="absolute left-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.45)]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.26),transparent_58%)]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-mystic-darker to-transparent md:hidden" />
              </div>

              <div className="p-7 sm:p-9">
                {loading ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex min-h-[330px] flex-col items-center justify-center text-center"
                  >
                    <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-mystic-gold/25 bg-mystic-gold/10">
                      <Loader2 className="h-12 w-12 animate-spin text-mystic-gold" />
                    </div>
                    <p className="font-serif text-2xl text-white">{t('loadingText')}</p>
                    <div className="mt-6 h-1.5 w-52 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-mystic-gold"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.1 }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-mystic-gold/25 bg-mystic-gold/10 px-3 py-1 text-sm font-medium text-mystic-gold">
                      <Sparkles className="h-4 w-4" />
                      {t('welcomeKicker')}
                    </div>

                    <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                      {t('welcomeTitle')}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-mystic-light/75">
                      {t('welcomeText')}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-medium text-mystic-gold">
                      <Globe2 className="h-4 w-4" />
                      {t('welcomeChoose')}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {languages.map((item) => (
                        <button
                          key={item.code}
                          onClick={() => setLang(item.code)}
                          className={`rounded-2xl border px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-mystic-gold hover:bg-mystic-gold/10 ${
                            lang === item.code
                              ? 'border-mystic-gold bg-mystic-gold/15 text-mystic-gold shadow-[0_0_24px_rgba(212,175,55,0.14)]'
                              : 'border-white/10 bg-white/[0.03] text-white'
                          }`}
                        >
                          <span className="mr-2 text-lg">{item.flag}</span>
                          <span className="font-semibold">{item.label}</span>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={enterSite}
                      className="mt-7 w-full rounded-2xl bg-mystic-gold px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-mystic-gold-light"
                    >
                      {t('welcomeEnter')}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
