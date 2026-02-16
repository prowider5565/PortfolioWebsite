import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/40 py-8 md:py-12 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t('footer.builtBy')} <span className="font-bold text-foreground">Mateo Versace</span>. 
          &copy; 2026 Personal Portfolio Website. {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">{t('footer.twitter')}</a>
          <a href="#" className="hover:text-primary transition-colors">{t('footer.github')}</a>
          <a href="#" className="hover:text-primary transition-colors">{t('footer.linkedin')}</a>
        </div>
      </div>
    </footer>
  );
};
