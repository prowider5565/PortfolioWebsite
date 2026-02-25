import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { DraggableCarousel } from '@/components/ui/draggable-carousel';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { ExternalLink, ChevronDown, ChevronUp, Calendar, Briefcase, Code } from 'lucide-react';
import { workExperiences } from '@/data/workExperience';

const Companies: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const toggleProjects = (id: string) => {
    setOpenProjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const date = new Date(Number(year), Number(month) - 1);
    const localeMap: Record<string, string> = {
      uz: 'uz-UZ',
      en: 'en-US',
      ru: 'ru-RU',
    };
    return date.toLocaleDateString(localeMap[i18n.language] ?? 'en-US', { year: 'numeric', month: 'short' });
  };

  const handleImageClick = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 border-b border-border/20">
          <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-5 pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                {t('companies.title')}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('companies.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-8">
              {workExperiences.map((exp) => (
                <Card key={exp.id} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all">
                  <div className="grid md:grid-cols-[200px_1fr] gap-8">
                    {/* Left: Company Info */}
                    <div className="space-y-4">
                      <div className="relative group">
                        <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                          src={exp.companyLogo}
                          alt={exp.company}
                          className="relative w-full aspect-square rounded-2xl object-cover border-2 border-border"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-lg">{exp.company}</h3>
                        <a
                          href={exp.companyWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1"
                        >
                          {t('companies.website')}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">
                              {t(`companies.experiences.${exp.id}.title`, { defaultValue: exp.title })}
                            </h2>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(`companies.experiences.${exp.id}.description`, { defaultValue: exp.description })}
                        </p>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          {t('companies.skills')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.keySkills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-secondary/50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Gallery with Draggable Carousel */}
                      {exp.gallery.length > 0 && (
                        <div>
                          <DraggableCarousel
                            images={exp.gallery}
                            onImageClick={(index) => handleImageClick(exp.gallery, index)}
                          />
                        </div>
                      )}

                      {/* Projects */}
                      {exp.projects.length > 0 && (
                        <Collapsible open={openProjects[exp.id]} onOpenChange={() => toggleProjects(exp.id)}>
                          <CollapsibleTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              <span className="font-semibold flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                {t('companies.projects')} ({exp.projects.length})
                              </span>
                              {openProjects[exp.id] ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4 space-y-3">
                            {exp.projects.map((project) => (
                              <div
                                key={project.id}
                                className="p-5 rounded-xl bg-secondary/20 border border-border/50 hover:border-primary/50 transition-all"
                              >
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <h5 className="font-bold text-foreground">
                                    {t(`companies.experiences.${exp.id}.projects.${project.id}.title`, { defaultValue: project.title })}
                                  </h5>
                                  {project.link && (
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary hover:text-primary/80 transition-colors"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                    </a>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {t(`companies.experiences.${exp.id}.projects.${project.id}.description`, {
                                    defaultValue: project.description,
                                  })}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </MainLayout>
  );
};

export default Companies;
