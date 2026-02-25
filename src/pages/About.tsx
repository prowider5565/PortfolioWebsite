import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, BookOpen, Award, Heart, Lightbulb, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const profileImage = 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9nm8vnfi3668.jpg';

  const interests = [
    { key: 'backend', icon: '🏗️' },
    { key: 'devops', icon: '⚙️' },
    { key: 'ai', icon: '🤖' },
    { key: 'teaching', icon: '👨‍🏫' },
    { key: 'opensource', icon: '💻' },
    { key: 'cloud', icon: '☁️' },
  ];

  const learningTopics = [
    { key: 'microservices', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
    { key: 'kubernetes', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
    { key: 'ai', color: 'bg-green-500/10 text-green-500 border-green-500/20' },
    { key: 'scalability', color: 'bg-orange-500/10 text-orange-500 border-orange-500/20' },
  ];

  const certifications = [
    {
      key: 'pythonProgramming',
      image: '/images/certificates/PythonProgramming.jpg',
    },
    {
      key: 'computerLiteracy',
      image: '/images/certificates/ComputerLiteracy.jpg',
    },
    {
      key: 'ideathon',
      image: '/images/certificates/Ideathon.jpg',
    },
    {
      key: 'letterOfAppreciation',
      image: '/images/certificates/LetterOfAppreciation.jpg',
    },
  ];

  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 border-b border-border/20">
          <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-5 pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Profile Image */}
                <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img
                    src={profileImage}
                    alt="Abdusamad Abdullaxanov"
                    className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl border-2 border-border shadow-2xl object-cover"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div>
                    <p className="text-primary font-mono tracking-widest uppercase text-sm font-bold mb-2">
                      {t('about.intro')}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
                      Abdusamad Abdullaxanov
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary font-royal italic">
                      Mateo Versace
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {t('about.description')}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('about.age')}</p>
                        <p className="font-semibold">22 {t('about.years')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('about.location')}</p>
                        <p className="font-semibold">Namangan, Uzbekistan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('about.birthplace')}</p>
                        <p className="font-semibold">Namangan, Uzbekistan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('about.currentlyLearning')}</p>
                        <p className="font-semibold">Microservices & AI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  {t('about.interests')}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interests.map((interest) => (
                  <Card key={interest.key} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{interest.icon}</span>
                        <p className="text-lg font-semibold">{t(`about.interests_list.${interest.key}`)}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Currently Learning Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                  <BookOpen className="w-8 h-8 text-primary" />
                  {t('about.currentlyLearning')}
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {learningTopics.map((topic) => (
                  <Badge
                    key={topic.key}
                    variant="outline"
                    className={`px-6 py-3 text-base font-semibold border-2 ${topic.color}`}
                  >
                    {t(`about.learning.${topic.key}`)}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  {t('about.education')}
                </h2>
              </div>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">{t('about.university')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lg text-muted-foreground">{t('about.degree')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('about.graduationYear')}: {t('about.graduationYearValue')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  {t('about.certifications')}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-4 pb-0">
                      <img
                        src={cert.image}
                        alt={t(`about.certifications_list.${cert.key}.title`)}
                        className="w-full h-44 object-cover rounded-xl border border-border/60"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-lg">{t(`about.certifications_list.${cert.key}.title`)}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      <p className="text-sm text-muted-foreground">{t(`about.certifications_list.${cert.key}.issuer`)}</p>
                      <p className="text-xs text-muted-foreground">{t(`about.certifications_list.${cert.key}.year`)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default About;
