import { AlertTriangle, Droplets, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById('signalement');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Droplets className="w-16 h-16 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Signalement des Pannes et Fuites
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Service en ligne de la Société Nationale d'Exploitation et de Distribution des Eaux (SONEDE).
            Signalez rapidement toute anomalie concernant votre compteur d'eau.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <AlertTriangle className="w-10 h-10 text-sky-500 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Signalement Rapide</h3>
              <p className="text-gray-600 text-sm">
                Remplissez le formulaire en quelques minutes
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Phone className="w-10 h-10 text-sky-500 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Suivi en Temps Réel</h3>
              <p className="text-gray-600 text-sm">
                Suivez l'état de votre signalement
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Droplets className="w-10 h-10 text-sky-500 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Intervention Rapide</h3>
              <p className="text-gray-600 text-sm">
                Nos équipes interviennent dans les plus brefs délais
              </p>
            </div>
          </div>
          <button
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Signaler un Problème
          </button>
        </div>
      </div>
    </section>
  );
}
