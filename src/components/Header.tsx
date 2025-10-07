import { Droplets } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Droplets className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">SONEDE</h1>
              <p className="text-sm text-blue-100">Signalement des Pannes</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('signalement')}
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Signaler
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="hover:text-blue-100 transition-colors font-medium"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('interventions')}
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Interventions
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
