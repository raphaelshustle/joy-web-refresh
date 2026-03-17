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
    <section className="bg-lighter-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">Data Doesn't Lie.</p>
          <h2 className="section-title">Agence de relation presse 2.0</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-elegant p-6 text-center">
              <div className="stat-number mb-3">{stat.number}</div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
