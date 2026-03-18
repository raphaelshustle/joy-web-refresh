const Statistics = () => {
  const stats = [
    { number: '55+', label: 'Clients' },
    { number: '70K', label: 'Contacts journalistes' },
    { number: '17 500', label: 'Médias Français' },
    { number: '700K+', label: 'Données internationales' },
    { number: '100%', label: 'Suivi transparent' },
    { number: '100%', label: 'Campagnes sur mesure' },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-lg mb-3 tracking-wide uppercase">Data Doesn't Lie.</p>
          <h2 className="section-title">Agence de relation presse 2.0</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card border-2 border-foreground rounded-2xl px-6 py-8 text-center min-w-[150px] flex-1 basis-[calc(33.33%-1rem)] lg:basis-[calc(16.66%-1rem)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_hsl(var(--foreground))]"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 font-heading">
                {stat.number}
              </div>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
