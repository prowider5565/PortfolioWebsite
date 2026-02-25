import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DraggableCarousel } from '@/components/ui/draggable-carousel';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { ExternalLink, Lock } from 'lucide-react';

const projects = [
  {
    key: 'constructionCrm',
    url: 'http://77.237.245.47:3401/',
    images: [
      '/projectImages/ConstructionCRM1.png',
      '/projectImages/ConstructionCRM2.png',
      '/projectImages/ConstructionCRM3.png',
    ],
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'React', 'Docker', 'RBAC'],
    credentials: { login: 'admin', password: 'admin123' },
  },
  {
    key: 'posSystem',
    url: 'https://pos-front-v2.vercel.app',
    images: [
      '/projectImages/POSSystem1.png',
      '/projectImages/POSSystem2.png',
      '/projectImages/POSSystem3.png',
      '/projectImages/POSSystem4.png',
    ],
    technologies: ['React', 'PostgreSQL', 'FIFO Inventory', 'Debt Management'],
    credentials: { login: 'admin', password: '123123123' },
  },
  {
    key: 'carting',
    url: 'https://carting.uz',
    images: [
      '/projectImages/Carting1.png',
      '/projectImages/Carting2.png',
      '/projectImages/Carting3.png',
    ],
    technologies: ['Logistics', 'Transport Booking', 'Web Platform', 'Mobile App'],
  },
  {
    key: 'mymdcard',
    url: 'https://mymdcard.com',
    images: [
      '/projectImages/MyMDCard1.png',
      '/projectImages/MyMDCard2.png',
    ],
    technologies: ['Django REST Framework', 'React.js', 'PostgreSQL', 'JWT + MFA', 'NFC/QR'],
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxImages, setLightboxImages] = React.useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const handleImageClick = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <section className="relative py-20 md:py-28 border-b border-border/20">
          <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-5 pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t('projectsPage.title')}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('projectsPage.subtitle')}</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.key} className="bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl">{t(`projectsPage.items.${project.key}.title`)}</CardTitle>
                      <Button asChild size="sm" className="shrink-0">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          {t('projectsPage.openProject')}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>

                    <DraggableCarousel
                      images={project.images}
                      onImageClick={(index) => handleImageClick(project.images, index)}
                      className="w-full"
                    />
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`projectsPage.items.${project.key}.description`)}
                    </p>

                    {project.credentials && (
                      <div className="rounded-xl border border-border/60 bg-secondary/30 p-4 space-y-2">
                        <p className="text-sm font-semibold flex items-center gap-2">
                          <Lock className="w-4 h-4 text-primary" />
                          {t('projectsPage.demoCredentials')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t('projectsPage.login')}: <span className="font-medium text-foreground">{project.credentials.login}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t('projectsPage.password')}: <span className="font-medium text-foreground">{project.credentials.password}</span>
                        </p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <p className="text-sm font-semibold">{t('projectsPage.technologies')}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

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

export default Projects;
