import Header from './components/Header';
import Hero from './components/Hero';
import ReportForm from './components/ReportForm';
import About from './components/About';
import Interventions from './components/Interventions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Interventions />
      <ReportForm />
      <Footer />
    </div>
  );
}

export default App;
