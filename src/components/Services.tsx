import { Card } from '@/components/ui/card';
import { PenTool, Megaphone, BookOpen, Send, Calendar, DollarSign, Rocket, AlertTriangle, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <PenTool className="w-7 h-7" />,
      title: 'Rédaction de communiqués de presse',
      description: 'Nous créons des communiqués percutants, adaptés à vos objectifs de publication, avec une recherche approfondie et des sujets captivants.',
    },
    {
      icon: <Megaphone className="w-7 h-7" />,
      title: 'Campagnes RP clé en main',
      description: 'Rédaction, sélection des médias ciblés, diffusion et gestion des campagnes d\'emailing et d\'appels. Suivi en temps réel via un espace sécurisé.',
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: 'Rédaction de tribunes',
      description: 'Positionnez-vous comme leader de votre secteur grâce à des tribunes publiées dans des médias prestigieux.',
    },
    {
      icon: <Send className="w-7 h-7" />,
      title: 'Diffusion CP & Tribune',
      description: 'Nous contactons les médias et journalistes les plus pertinents parmi nos 80 000 contacts en France.',
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: 'Événement de presse',
      description: 'Choix du lieu, budget, logistique, discours, invitation des journalistes et suivi post-événement.',
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Articles sponsorisés',
      description: 'Planification budgétaire, négociations régies et suivi des publications pour vos campagnes sponsorisées.',
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: 'Lancement de marque',
      description: 'Coordination complète du lancement avec retombées médiatiques ciblées en TV, radio, presse en ligne et papier.',
    },
    {
      icon: <AlertTriangle className="w-7 h-7" />,
      title: 'Communication de crise',
      description: 'Soutien PR urgent avec un attaché de presse dédié, média training et rédaction stratégique.',
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: 'Media Training',
      description: 'Formation sur mesure pour gérer vos émotions, captiver votre auditoire et briller en interview.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">Nos offres</p>
          <h2 className="section-title">Tout ce que nous pouvons faire pour vous</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="card-elegant p-8 h-full">
              <div className="text-accent mb-5">{service.icon}</div>
              <h3 className="font-bold text-lg mb-3 font-heading">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
