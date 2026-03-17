import { Card } from '@/components/ui/card';
import { Shield, Eye, Users, Zap } from 'lucide-react';

const WhyChoose = () => {
  const advantages = [
    { icon: Shield, title: 'Expertise unique', description: '6+ ans, ex-journaliste & growth hacker' },
    { icon: Eye, title: 'Suivi transparent', description: 'En temps réel via un espace dédié' },
    { icon: Users, title: 'Réseau médias', description: 'Direct & qualifié, 80K+ contacts' },
    { icon: Zap, title: 'Style audacieux', description: 'Tech, innovation & résultats concrets' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">L'avantage PressIT</p>
          <h2 className="section-title">Pourquoi choisir PressIT ?</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Vous êtes une entreprise innovante, mais votre agence RP est coincée dans le passé ? 🚀 Passez à la vitesse supérieure !
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="card-elegant p-8 text-center">
                <Icon className="w-12 h-12 text-accent mx-auto mb-5" />
                <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
