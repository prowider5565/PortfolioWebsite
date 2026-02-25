import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Calendar, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState<null | { key: string; image: string }>(null);

  const birthDate = new Date(2005, 0, 1);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  const profileImage =
    'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9nm8vnfi3668.jpg';

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
    {
      key: 'ielts',
      image: '/images/certificates/IELTS.png',
    },
  ];
  const ieltsCertificate = certifications.find((cert) => cert.key === 'ielts');
  const regularCertificates = certifications.filter((cert) => cert.key !== 'ielts');

  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <section className="relative py-20 md:py-32 border-b border-border/20">
          <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-5 pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img
                    src={profileImage}
                    alt="Abdusamad Abdullaxanov"
                    className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl border-2 border-border shadow-2xl object-cover"
                  />
                </div>

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

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t('about.biography')}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t('about.description')}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('about.age')}</p>
                        <p className="font-semibold">
                          {age} {t('about.years')}
                        </p>
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
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  {t('about.certifications')}
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {regularCertificates.map((cert) => (
                    <Card key={cert.key} className="bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-3 space-y-3">
                        <button
                          type="button"
                          onClick={() => setSelectedCertificate(cert)}
                          className="w-full text-left cursor-pointer"
                        >
                          <img
                            src={cert.image}
                            alt={t(`about.certifications_list.${cert.key}.title`)}
                            className="w-full h-44 md:h-52 object-cover rounded-xl border border-border/60"
                          />
                          <p className="pt-3 text-sm font-semibold">
                            {t(`about.certifications_list.${cert.key}.title`)}
                          </p>
                        </button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {ieltsCertificate && (
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                    <CardContent className="p-3 h-full">
                      <button
                        type="button"
                        onClick={() => setSelectedCertificate(ieltsCertificate)}
                        className="w-full text-left cursor-pointer h-full flex flex-col"
                      >
                        <img
                          src={ieltsCertificate.image}
                          alt={t(`about.certifications_list.${ieltsCertificate.key}.title`)}
                          className="w-full flex-1 min-h-0 object-cover rounded-xl border border-border/60"
                        />
                        <p className="pt-3 text-sm font-semibold shrink-0">
                          {t(`about.certifications_list.${ieltsCertificate.key}.title`)}
                        </p>
                      </button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

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
                <CardContent>
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-3">
                      <p className="text-lg text-muted-foreground">{t('about.degree')}</p>
                      <p className="text-sm font-medium text-primary">September 2025 - May 2030</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Program Status:</span> In progress
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Faculty:</span> Zarafshon, Navoi
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Focus Areas:</span> Backend, Machine learning,
                        Distributed Systems, Data Analytics
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('about.graduationYear')}: {t('about.graduationYearValue')}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-[64ch]">
                        Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti (TATU)
                        1955-yilda tashkil etilgan Oʻzbekistonning Toshkent shahridagi yetakchi davlat
                        universitetidir. U dasturiy taʼminot muhandisligi, kiberxavfsizlik va telekommunikatsiya
                        sohalariga ixtisoslashgan AKT sohasidagi yetakchi muassasa boʻlib, mintaqadagi eng yaxshi
                        universitetlar qatoridan joy olgan.
                      </p>
                    </div>
                    <img
                      src="/images/logo/tatu.png"
                      alt="TATU logo"
                      className="w-80 h-80 md:w-[25rem] md:h-[25rem] object-contain shrink-0"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Dialog open={Boolean(selectedCertificate)} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
        <DialogContent className="max-w-3xl">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle>{t(`about.certifications_list.${selectedCertificate.key}.title`)}</DialogTitle>
                <DialogDescription>
                  {t(`about.certifications_list.${selectedCertificate.key}.issuer`)} -{' '}
                  {t(`about.certifications_list.${selectedCertificate.key}.year`)}
                </DialogDescription>
              </DialogHeader>
              <img
                src={selectedCertificate.image}
                alt={t(`about.certifications_list.${selectedCertificate.key}.title`)}
                className="w-full max-h-[75vh] object-contain rounded-xl border border-border/60"
              />
              <div className="flex justify-end">
                <Button type="button" variant="outline" onClick={() => setSelectedCertificate(null)}>
                  {t('about.closeCertificate')}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default About;
