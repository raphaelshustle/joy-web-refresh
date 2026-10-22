import { Card } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import founderImg from '@/assets/founder.jpg';

const Founder = () => {
  const kpis = [
    { value: '55+', label: 'Clients accompagnés' },
    { value: '70K', label: 'Contacts journalistes' },
    { value: '17 500', label: 'Médias français' },
  ];

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
                  src={founderImg}
                  alt="Raphaël Sabouraud - Fondateur PressIT Agency"
                  className="w-32 h-32 object-cover rounded-full border-4 border-accent/20"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 font-heading">Founder</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  6+ ans d'expérience en growth hacking et relations presse.
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

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-card border-2 border-foreground rounded-2xl px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_hsl(var(--foreground))]"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-accent font-heading leading-none">
                    {kpi.value}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founder;
