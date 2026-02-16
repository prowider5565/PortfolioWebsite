import React from 'react';
import { useTranslation } from 'react-i18next';
import { WorkTimelineCard } from './WorkTimelineCard';
import { workExperiences } from '@/data/workExperience';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const WorkTimeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-[0.03] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('companies.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through innovative teams and cutting-edge projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperiences.map((experience, index) => (
            <WorkTimelineCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="/companies">
              {t('companies.viewAll')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
