import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Services from '@/components/Services';
import Methodology from '@/components/Methodology';
import Clients from '@/components/Clients';
import WhyChoose from '@/components/WhyChoose';
import Founder from '@/components/Founder';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Services />
        <Methodology />
        <Clients />
        <WhyChoose />
        <Founder />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
