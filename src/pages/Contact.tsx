import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Send, Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+998 50 004 22 80',
      href: 'tel:+998500042280',
      color: 'text-green-500',
    },
    {
      icon: Send,
      label: t('contact.telegram'),
      value: '@mateo2280',
      href: 'https://t.me/mateo2280',
      color: 'text-blue-500',
    },
    {
      icon: Instagram,
      label: t('contact.instagram'),
      value: '@prowider5565',
      href: 'https://instagram.com/prowider5565',
      color: 'text-pink-500',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'prowider.dev@gmail.com',
      href: 'mailto:prowider.dev@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'mateo-versace',
      href: 'https://linkedin.com/in/mateo-versace',
      color: 'text-blue-600',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'prowider5565',
      href: 'https://github.com/prowider5565',
      color: 'text-foreground',
    },
  ];

  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 border-b border-border/20">
          <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-5 pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* QR Code Image */}
              <div className="flex justify-center mb-16">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img
                    src="https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9noer6gfl5vk.png"
                    alt="Contact QR Code"
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl border-2 border-border shadow-2xl object-cover"
                  />
                </div>
              </div>

              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <Card
                      key={contact.label}
                      className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-secondary/50 ${contact.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                            {contact.label}
                          </h3>
                          <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2 group/link"
                          >
                            <span className="truncate">{contact.value}</span>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0" />
                          </a>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  {t('contact.reachOut')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild className="rounded-full">
                    <a href="mailto:prowider.dev@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      {t('contact.email')}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full">
                    <a href="https://t.me/mateo2280" target="_blank" rel="noopener noreferrer">
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.telegram')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Contact;
