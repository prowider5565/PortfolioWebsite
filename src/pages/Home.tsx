import React from 'react';
import { useTranslation } from 'react-i18next';
import { CloudCog, Cpu, GraduationCap, Server } from 'lucide-react';
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
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Server className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {t('services.pythonBackend.title')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('services.pythonBackend.description')}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <CloudCog className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {t('services.devopsCloud.title')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('services.devopsCloud.description')}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {t('services.iotEngineering.title')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('services.iotEngineering.description')}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
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
      <WorkTimeline limit={2} />
    </MainLayout>
  );
};

export default Home;
