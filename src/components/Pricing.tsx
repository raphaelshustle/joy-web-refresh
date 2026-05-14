import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const offers = [
    {
      name: '3 MOIS',
      price: '3 250€',
      period: '/mois',
      features: [
        'Relations presse illimitées',
        '2 attachés de presse dédiés',
        '2 actions recommandées/mois',
        'Suivi en temps réel 24/7',
      ],
      highlighted: false,
    },
    {
      name: '6 MOIS',
      price: '2 850€',
      period: '/mois',
      features: [
        'Relations presse illimitées',
        '2 attachés de presse dédiés',
        'Campagne non consécutive possible',
        'Suivi en temps réel 24/7',
        'Résultats garantis ou remboursé',
      ],
      highlighted: true,
      badge: 'RECOMMANDÉ',
    },
  ];

  return (
    <section id="tarifs" className="section-padding bg-light-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <p className="text-accent font-semibold text-lg mb-4">Offre & Tarifs</p>
          <h2 className="section-title">Des forfaits transparents</h2>
          <p className="text-brand-pink font-semibold text-lg">
            Résultats garantis ou remboursé
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20 max-w-4xl mx-auto">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`card-elegant p-10 relative ${
                offer.highlighted ? 'ring-2 ring-accent shadow-elegant scale-[1.02]' : ''
              }`}
            >
              {offer.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white px-5 py-2 rounded-lg text-sm font-bold">
                    {offer.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 font-heading">{offer.name}</h3>
                <span className="text-5xl font-black text-foreground">{offer.price}</span>
                <span className="text-muted-foreground text-lg ml-1">{offer.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {offer.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://taap.it/StaAQHd"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center rounded-lg font-semibold py-4 transition-all duration-200 ${
                  offer.highlighted
                    ? 'btn-accent'
                    : 'btn-primary'
                }`}
              >
                Réserver un appel
              </a>
            </Card>
          ))}
        </div>

        <Card className="card-elegant p-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-accent text-center font-heading">NOS GARANTIES</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-lg mb-2">Résultats garantis</h4>
              <p className="text-muted-foreground text-sm">Minimum de retombées respecté ou remboursement total</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-lg mb-2">Réactivité 24h</h4>
              <p className="text-muted-foreground text-sm">Toute demande urgente traitée sous 24h ouvrées</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-bold text-lg mb-2">Transparence totale</h4>
              <p className="text-muted-foreground text-sm">Accès en temps réel à toutes nos actions via votre espace</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
