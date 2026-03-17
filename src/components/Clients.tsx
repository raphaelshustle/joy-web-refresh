import { Card } from '@/components/ui/card';

const Clients = () => {
  const clients = [
    'Decathlon', 'Mangopay', 'Amazon AWS', 'Qonto', 'Defacto', 'Fygr',
    'Têtu Magazine', 'Alegria.tech', 'Impact.com', 'Morgan Stanley Partners',
    'UltraEdge', 'Julian Jacob (QVEMA)', 'HR Engine', 'Initial',
    'Le Wagon', 'Napta', 'Le Grand Palais immersif', 'Milla Group',
    'Gambette Box', 'Ekip', 'Native Spaces', 'Forbes',
  ];

  return (
    <section id="clients" className="bg-lighter-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">Ils nous font confiance</p>
          <h2 className="section-title">+80 000 journalistes ciblés • +600 retombées/an</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="p-5 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-0.5 bg-card border-2 border-border"
            >
              <p className="font-semibold text-foreground text-sm">{client}</p>
            </Card>
          ))}
        </div>

        <p className="text-center mt-10 text-lg text-accent font-semibold">Et bien d'autres !</p>
      </div>
    </section>
  );
};

export default Clients;
