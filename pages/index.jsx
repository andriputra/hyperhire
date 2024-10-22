import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PreviousWorks from '../components/PreviousWorks';
import Process from '../components/Process';
import ContactForm from '../components/ContactForm';
import '../styles/global.css';
import Scrollto from '../components/Scrollto';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Scrollto/>
      <Navbar />
      <Hero />
      <Features />
      <PreviousWorks />
      <Process />
      <ContactForm />
    </div>
  );
}
