import { Droplets, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-xl">SONEDE</h3>
                <p className="text-sm text-blue-200">Service de Signalement</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Société Nationale d'Exploitation et de Distribution des Eaux.
              Au service des Tunisiens depuis 1968.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+216 71 887 000</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">sonede@sonede.com.tn</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Tunis, Tunisie</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#signalement" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Signaler un Problème
                </a>
              </li>
              <li>
                <a href="#a-propos" className="text-blue-100 hover:text-white transition-colors text-sm">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#interventions" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Nos Interventions
                </a>
              </li>
            </ul>
          </div>
        </div>

        

        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
  <div className="relative w-full">
    <div className="rounded-2xl overflow-hidden shadow-2xl">
      <img
        src="https://i.ibb.co/FbF8nC6L/LOCALISATION.png"
        alt="Infrastructure d'eau SONEDE"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="relative w-full">
    <div className="rounded-2xl overflow-hidden shadow-2xl">
      <img
        src="https://i.ibb.co/tTGjNwbX/Reseau.jpg"
        alt="Infrastructure d'eau SONEDE"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
      </div>
      <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} SONEDE - Tous droits réservés
          </p>
        </div>
    </footer>
  );
}
