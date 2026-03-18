import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-lighter-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">Contactez notre équipe</p>
          <h2 className="section-title">Prêt à amplifier votre impact ?</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Prêt à rendre votre marque inoubliable ? Discutons-en.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="card-elegant p-10">
            <h3 className="text-2xl font-bold mb-8 font-heading">Nos Coordonnées</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent" />
                <a href="mailto:raphael@pressitagency.com" className="text-muted-foreground text-lg hover:text-foreground transition-colors">
                  raphael@pressitagency.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent" />
                <a href="tel:+33756957745" className="text-muted-foreground text-lg hover:text-foreground transition-colors">
                  +33 7 56 95 77 45
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-muted-foreground text-lg">Paris, France</span>
              </div>
            </div>
          </Card>

          <Card className="card-elegant p-10 text-center flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 font-heading">Planifions votre succès</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Réservez un appel découverte de 30 minutes pour discuter de vos objectifs RP
            </p>
            <a
              href="https://taap.it/7NMToA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full text-center block"
            >
              Réservez votre appel
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
