import { Wrench, Clock, CheckCircle } from 'lucide-react';
import type { Intervention } from '../types';

const interventions: Intervention[] = [
  {
    id: 1,
    title: 'Réparation de Fuites',
    image: 'https://images.ctfassets.net/j4m9q0fykyy4/2wXqdUducIO1jJYsiFPfoh/aabb9c45283255c26acd0f3f98089cb2/2020-03-Siphon-qui-fuit-scaled.jpg?fm=webp&q=80&w=768',
    description: 'Nos équipes techniques interviennent rapidement pour réparer toute fuite détectée sur le réseau ou chez les abonnés. Nous utilisons des équipements modernes pour minimiser les désagréments et garantir une réparation durable.',
  },
  {
    id: 2,
    title: 'Remplacement de Compteurs',
    image: 'https://www.leaders.com.tn/uploads/content/thumbnails/172465920243_content.jpg',
    description: 'En cas de panne ou de dysfonctionnement de votre compteur d\'eau, nos techniciens procèdent à son remplacement dans les meilleurs délais. Nous assurons l\'installation de compteurs certifiés et précis.',
  },
  {
    id: 3,
    title: 'Maintenance Préventive',
    image: 'https://mobility-work.com/wp-content/uploads/2016/11/maintenance-preventive.jpg',
    description: 'Notre programme de maintenance préventive permet d\'identifier et de résoudre les problèmes potentiels avant qu\'ils ne deviennent critiques. Cela garantit la continuité du service et la qualité de l\'eau distribuée.',
  },
  {
    id: 4,
    title: 'Gestion des Interruptions',
    image: 'https://i.ibb.co/SwJSZ1Ww/sonede.jpg',
    description: 'En cas d\'interruption d\'eau programmée ou d\'urgence, nous coordonnons nos interventions pour rétablir le service le plus rapidement possible. Nous informons les abonnés concernés via tous les canaux disponibles.',
  },
  {
    id: 5,
    title: 'Extension du Réseau',
    image: 'https://www.siarce.fr/wp-content/uploads/2023/11/Le-reseau-deau-potable-1200x630.jpg',
    description: 'La SONEDE travaille continuellement à l\'extension et à la modernisation du réseau de distribution pour atteindre de nouvelles zones et améliorer la qualité du service dans les régions existantes.',
  },
  {
    id: 6,
    title: 'Contrôle Pression',
    image: 'https://www.cdiscount.com/pdt2/3/6/2/1/550x550/zer7315364576362/rw/compteur-de-pression-d-eau-mini-manometre-basse-p.jpg',
    description: 'Nos laboratoires effectuent des analyses régulières pour garantir la qualité de l\'eau distribuée. Nous suivons rigoureusement les normes nationales et internationales pour assurer la sécurité de nos abonnés.',
  },
];

export default function Interventions() {
  return (
    <section id="interventions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-3 text-center">
            Nos Interventions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Découvrez les différents types d'interventions réalisées par nos équipes
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interventions.map((intervention) => (
              <div
                key={intervention.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={intervention.image}
                    alt={intervention.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-lg">
                    {intervention.id === 1 && <Wrench className="w-5 h-5" />}
                    {intervention.id === 2 && <CheckCircle className="w-5 h-5" />}
                    {intervention.id === 3 && <Clock className="w-5 h-5" />}
                    {intervention.id === 4 && <Wrench className="w-5 h-5" />}
                    {intervention.id === 5 && <CheckCircle className="w-5 h-5" />}
                    {intervention.id === 6 && <Clock className="w-5 h-5" />}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {intervention.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {intervention.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
