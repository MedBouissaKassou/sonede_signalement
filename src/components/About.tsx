import { Building2, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="a-propos" className="py-16 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-3 text-center">
            À Propos
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Votre partenaire pour l'eau potable en Tunisie
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">À Propos de la SONEDE</h3>
                    <p className="text-gray-700 leading-relaxed">
                      La Société Nationale d'Exploitation et de Distribution des Eaux (SONEDE)
                      assure la production et la distribution de l'eau potable sur l'ensemble
                      du territoire tunisien depuis 1968.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">À Propos de la plateforme</h3>
                    <p className="text-gray-700 leading-relaxed">
                      La plateforme offre aux utilisateurs la possibilité de rapporter aisément les anomalies dans le système de distribution d'eau de la                          SONEDE – Tunis Sud.
                      Avec la carte interactive, les équipes ont la possibilité d'identifier et de résoudre rapidement les problèmes signalés.
                      En vous impliquant, vous participez à une gestion plus efficace de l'eau et à la sauvegarde de ce bien indispensable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Notre Engagement</h3>
                    <p className="text-gray-700 leading-relaxed">
                       Nous nous engageons à fournir un service de qualité à tous nos abonnés
                      et à intervenir rapidement en cas de panne ou de fuite. Notre service
                      de signalement en ligne facilite la communication et accélère nos interventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Infrastructure d'eau SONEDE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold text-blue-600">50+</p>
                <p className="text-gray-700 font-medium">Années d'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
