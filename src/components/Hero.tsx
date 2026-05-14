const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-background">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <p className="text-accent font-semibold text-lg mb-6 tracking-wide uppercase">
          Agence de Relations Presse 2.0
        </p>

        <h1 className="hero-text mb-8">
          Your Words, <span className="gradient-text">Amplified</span>
          <br />
          Your Brand, <span className="gradient-text">Elevated</span>
        </h1>

        <p className="subtitle mb-12 max-w-3xl mx-auto text-xl">
          Empowering Your Brand Through Strategic Storytelling
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://taap.it/StaAQHd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-lg !px-10 !py-4"
          >
            Elevate Your Brand
          </a>
          <a
            href="#services"
            className="btn-primary text-lg !px-10 !py-4"
          >
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
