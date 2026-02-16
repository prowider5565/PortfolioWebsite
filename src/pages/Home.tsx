import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout/MainLayout';
import { Hero } from '@/components/home/Hero';
import { WorkTimeline } from '@/components/work/WorkTimeline';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Hero />
      
      {/* Services Section */}
      <section className="container py-20 border-t border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-2xl bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {t('services.pythonBackend.title')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('services.pythonBackend.description')}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {t('services.devopsCloud.title')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('services.devopsCloud.description')}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {t('services.iotEngineering.title')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('services.iotEngineering.description')}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {t('services.mentorship.title')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('services.mentorship.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <WorkTimeline />
    </MainLayout>
  );
};

export default Home;
