import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { DraggableCarousel } from '@/components/ui/draggable-carousel';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { ExternalLink, ChevronDown, ChevronUp, Calendar, Briefcase } from 'lucide-react';
import type { WorkExperience } from '@/data/workExperience';

interface WorkTimelineCardProps {
  experience: WorkExperience;
  index: number;
}

export const WorkTimelineCard: React.FC<WorkTimelineCardProps> = ({ experience, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const handleImageClick = (imgIndex: number) => {
    setLightboxIndex(imgIndex);
    setLightboxOpen(true);
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-8 items-start">
        {/* Timeline Line & Dot */}
        <div className="relative flex flex-col items-center">
          <div
            className={`w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg transition-all duration-500 ${
              isVisible ? 'scale-100' : 'scale-0'
            }`}
          />
          <div
            className={`w-0.5 h-full bg-gradient-to-b from-primary to-transparent transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ minHeight: '200px' }}
          />
        </div>

        {/* Content Card */}
        <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group mb-12">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <img
                  src={experience.companyLogo}
                  alt={experience.company}
                  className="w-16 h-16 rounded-xl object-cover border border-border"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                </div>
              </div>
              <a
                href={experience.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {experience.keySkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Gallery with Draggable Carousel */}
            {experience.gallery.length > 0 && (
              <div className="mt-4">
                <DraggableCarousel
                  images={experience.gallery}
                  onImageClick={handleImageClick}
                />
              </div>
            )}

            {/* Projects Dropdown */}
            {experience.projects.length > 0 && (
              <Collapsible open={isProjectsOpen} onOpenChange={setIsProjectsOpen} className="mt-4">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between group/btn">
                    <span className="font-semibold">
                      {isProjectsOpen ? 'Hide' : 'Show'} Projects ({experience.projects.length})
                    </span>
                    {isProjectsOpen ? (
                      <ChevronUp className="w-4 h-4 transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 transition-transform" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-3">
                  {experience.projects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 rounded-lg bg-secondary/20 border border-border/50 hover:border-primary/50 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-foreground">{project.title}</h4>
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
                      <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
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
        </Card>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={experience.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
};
