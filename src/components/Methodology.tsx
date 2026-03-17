import { Card } from '@/components/ui/card';
import { Rocket, Target, Megaphone, BarChart3 } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      number: '01',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Kick-off stratégique',
      description: 'Définition des objectifs et stratégie média',
    },
    {
      number: '02',
      icon: <Target className="w-8 h-8" />,
      title: 'Ciblage journalistes & liste VIP',
      description: 'Création d\'une base de 700+ contacts qualifiés',
    },
    {
      number: '03',
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Activation : CP, tribunes, events',
      description: 'Déploiement des actions de relations presse',
    },
    {
      number: '04',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Suivi & reporting en temps réel',
      description: 'Espace personnalisé de suivi des retombées',
    },
  ];

  return (
    <section id="methode" className="section-padding bg-light-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">Notre méthode</p>
          <h2 className="section-title">4 étapes pour des résultats garantis</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="card-elegant p-8 text-center relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-6xl font-black text-accent/10 group-hover:text-accent/20 transition-colors font-heading">
                {step.number}
              </div>
              <div className="text-accent mb-5 flex justify-center relative z-10">{step.icon}</div>
              <h3 className="text-lg font-bold mb-3 relative z-10 font-heading">{step.title}</h3>
              <p className="text-muted-foreground text-sm relative z-10">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
