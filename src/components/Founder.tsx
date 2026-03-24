import { Card } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import raphaelImg from '@/assets/raphael.png';

const Founder = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Raphaël Sabouraud</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Ex-growth hacker devenu attaché de presse 2.0 — une agence dirigée par un expert dans la croissance de startups
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant p-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3 flex justify-center">
                <img
                  src={raphaelImg}
                  alt="Raphaël Sabouraud - Fondateur PressIT Agency"
                  className="w-32 h-32 object-cover rounded-full border-4 border-accent/20"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 font-heading">Founder</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  6+ ans d'expérience en growth hacking et relations presse. Pool de 30 attachés de presse freelances spécialistes.
                </p>
              </div>
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <a
                  href="https://www.linkedin.com/in/raphaelsabouraud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-blue hover:opacity-80 rounded-lg transition-opacity"
                >
                  <Linkedin className="w-7 h-7 text-white" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founder;
