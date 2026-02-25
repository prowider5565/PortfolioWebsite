import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AutoCarousel } from '@/components/ui/auto-carousel';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Terminal, Database, Server, Code, ArrowRight, User, Plus, Minus } from 'lucide-react';

const heroImages = [
  'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9nm8vnfi3668.jpg',
  'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9nnovg30sdmo.jpg',
  'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9nnq51oqi134.jpg',
  'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9nnq8jypq8sg.jpg',
];

const initialSkills = ['Django REST', 'FastAPI', 'Flask', 'PostgreSQL', 'DevOps', 'Python', 'Nest.js', 'Microservices'];

const allSkills = [
  'Python',
  'Node.js',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Database ORMs',
  'Django REST',
  'FastAPI',
  'Flask',
  'Nest.js',
  'Redis',
  'WebSockets',
  'Caching',
  'RabbitMQ',
  'OAuth 2.0',
  'SSL',
  'NGINX',
  'Docker',
  'Kubernetes',
  'Ubuntu',
  'System Administration',
  'Cloud Computing',
  'AWS (EC2, S3, R53)',
  'Microservices',
];

const skillLogoSlugMap: Record<string, string> = {
  Python: 'python',
  'Django REST': 'django',
  FastAPI: 'fastapi',
  Flask: 'flask',
  PostgreSQL: 'postgresql',
  'Nest.js': 'nestjs',
  'Node.js': 'nodedotjs',
  MySQL: 'mysql',
  MongoDB: 'mongodb',
  Redis: 'redis',
  RabbitMQ: 'rabbitmq',
  NGINX: 'nginx',
  Docker: 'docker',
  Kubernetes: 'kubernetes',
  Ubuntu: 'ubuntu',
  'AWS (EC2, S3, R53)': 'amazonwebservices',
};

const getSkillLogoUrl = (skill: string) => {
  const slug = skillLogoSlugMap[skill];
  if (!slug) {
    return null;
  }
  return `https://cdn.simpleicons.org/${slug}`;
};

export const Hero = () => {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const displayedSkills = showAllSkills ? allSkills : initialSkills;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 min-h-[90vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-5 pointer-events-none" />
      <div 
        className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)`,
          left: '10%',
          top: '20%'
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${-mousePos.x * 0.03}px, ${-mousePos.y * 0.03}px)`,
          right: '15%',
          bottom: '10%'
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-medium animate-pulse">
              <Terminal className="w-4 h-4" />
              <span>{t('hero.available')}</span>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-primary font-mono tracking-widest uppercase text-sm font-bold ml-1">{t('hero.architect')}</p>
                <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
                  {t('hero.fullName')}
                </h2>
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none font-royal italic text-primary glow-text py-2">
                  {t('hero.foreignName')}
                </h1>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {t('hero.title')}
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {displayedSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-1.5 text-sm bg-secondary/50 border-border hover:bg-primary/20 hover:text-primary transition-all cursor-default">
                  <span className="inline-flex items-center gap-2">
                    {getSkillLogoUrl(skill) ? (
                      <img
                        src={getSkillLogoUrl(skill) ?? ''}
                        alt={`${skill} logo`}
                        className="w-4 h-4 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <Code className="w-3.5 h-3.5" />
                    )}
                    {skill}
                  </span>
                </Badge>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="px-4 py-1.5 h-auto text-sm border-border hover:bg-primary/20 hover:text-primary transition-all"
              >
                {showAllSkills ? (
                  <>
                    <Minus className="w-3 h-3 mr-1" />
                    {t('hero.showLessSkills')}
                  </>
                ) : (
                  <>
                    <Plus className="w-3 h-3 mr-1" />
                    {t('hero.showMoreSkills')}
                  </>
                )}
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 text-lg font-semibold group rounded-full" asChild>
                <a href="/projects">
                  {t('hero.viewProjects')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold border-border hover:bg-secondary rounded-full" asChild>
                <a href="/about">{t('hero.aboutMe')}</a>
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-8 pt-10 opacity-60">
              <div className="flex items-center gap-2 group cursor-help">
                <Server className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">{t('hero.backendArchitecture')}</span>
              </div>
              <div className="flex items-center gap-2 group cursor-help">
                <Database className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">{t('hero.dataIntegrity')}</span>
              </div>
              <div className="flex items-center gap-2 group cursor-help">
                <Code className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">{t('hero.cleanCode')}</span>
              </div>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Outer Glows and Decorations */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              
              <AutoCarousel
                images={heroImages}
                interval={2000}
                className="relative w-[332px] h-[416px] md:w-[416px] md:h-[585px] z-10"
                onImageClick={handleImageClick}
              />
              
              {/* Floating Decorative Badge */}
              <div className="absolute -bottom-8 -left-8 bg-card/80 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-2xl hidden lg:block z-20 animate-float">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">{t('hero.identity')}</p>
                    <p className="text-base font-bold text-foreground">{t('hero.foreignName')}</p>
                    <p className="text-[10px] text-muted-foreground">{t('hero.role')}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-primary/30 rounded-tr-[2rem] -translate-y-2 translate-x-2 z-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={heroImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};
