import Hero from '../components/Hero';
import Navbar from '../components/navbar';
import Features from '../components/Features';
import Testimoinals from '../components/Testimoinals';
import Pricing from '../components/pricing';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Butt from '../components/Button';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimoinals />
      <Pricing />
      <Newsletter />
      <Footer />


    </div>
  );

}