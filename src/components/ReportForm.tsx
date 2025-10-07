import { useState, useEffect } from 'react';
import { MapPin, Send, Loader, Map } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { WaterReport } from '../types';
import MapSelector from './MapSelector';

export default function ReportForm() {
  const [formData, setFormData] = useState<Partial<WaterReport>>({
    meter_number: '',
    first_name: '',
    last_name: '',
    address: '',
    phone: '',
    issue_type: 'fuite',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showMapSelector, setShowMapSelector] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('water_reports')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        meter_number: '',
        first_name: '',
        last_name: '',
        address: '',
        phone: '',
        issue_type: 'fuite',
        description: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Erreur lors de l\'envoi du signalement. Veuillez réessayer.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Impossible d\'obtenir votre position. Veuillez vérifier vos paramètres de localisation.');
        }
      );
    } else {
      alert('La géolocalisation n\'est pas supportée par votre navigateur.');
    }
  };

  const openMapSelector = () => {
    setShowMapSelector(true);
  };

  const handleMapConfirm = (lat: number, lng: number) => {
    setFormData({
      ...formData,
      latitude: lat,
      longitude: lng,
    });
    setShowMapSelector(false);
  };

  return (
    <section id="signalement" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-3 text-center">
            Formulaire de Signalement
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Remplissez ce formulaire pour signaler une panne ou une fuite
          </p>

          {success && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
              <p className="text-green-700 font-medium">
                Votre signalement a été enregistré avec succès. Nos équipes vont le traiter dans les plus brefs délais.
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Numéro de Compteur *
                </label>
                <input
                  type="text"
                  name="meter_number"
                  value={formData.meter_number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Ex: 123456789"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom du client *
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Votre prénom sur la facture"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom du client *
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Votre nom sur la facture"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+216 XX XXX XXX"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Votre adresse complète"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Localisation GPS
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="flex items-center gap-2 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Obtenir ma position actuelle
                </button>
                <button
                  type="button"
                  onClick={openMapSelector}
                  className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Map className="w-5 h-5" />
                  Sélectionner sur la Carte
                </button>
              </div>
              {formData.latitude && formData.longitude && (
                <div className="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <p className="text-sm text-green-700 font-medium">
                    Position enregistrée: {formData.latitude.toFixed(6)}, {formData.longitude.toFixed(6)}
                  </p>
                </div>
              )}
              <p className="mt-2 text-xs text-gray-500">
                Cliquez sur "Sélectionner sur la Carte" pour choisir la position exacte
              </p>
            </div>

            {showMapSelector && (
              <MapSelector
                initialLat={formData.latitude || 36.8065}
                initialLng={formData.longitude || 10.1815}
                onConfirm={handleMapConfirm}
                onClose={() => setShowMapSelector(false)}
              />
            )}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Type de Panne *
              </label>
              <select
                name="issue_type"
                value={formData.issue_type}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="fuite">Fuite d'eau</option>
                <option value="panne_compteur">Panne de compteur</option>
                <option value="interruption_eau">Interruption d'eau</option>
                <option value="basse_pression">Basse pression</option>
                <option value="eau_trouble">Eau trouble</option>
                <option value="eau_colore">Eau colorée</option>
                <option value="casse_conduite_principale">Casse de conduite principale</option>
                <option value="debardement">Débordement d’eau sur la voie publique</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description du Problème *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Décrivez en détail le problème rencontré..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer le Signalement
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
