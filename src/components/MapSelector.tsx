import { useEffect, useRef, useState } from 'react';
import { X, Check } from 'lucide-react';

interface MapSelectorProps {
  initialLat?: number;
  initialLng?: number;
  onConfirm: (lat: number, lng: number) => void;
  onClose: () => void;
}

export default function MapSelector({ initialLat = 36.8065, initialLng = 10.1815, onConfirm, onClose }: MapSelectorProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedLat, setSelectedLat] = useState(initialLat);
  const [selectedLng, setSelectedLng] = useState(initialLng);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      setMapError(true);
    };

    script.onload = () => {
      if (mapRef.current && window.google) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: initialLat, lng: initialLng },
          zoom: 13,
          mapTypeControl: true,
          streetViewControl: false,
        });

        const marker = new google.maps.Marker({
          position: { lat: initialLat, lng: initialLng },
          map: map,
          draggable: true,
          title: 'Faites glisser pour sélectionner la position',
        });

        marker.addListener('dragend', () => {
          const position = marker.getPosition();
          if (position) {
            setSelectedLat(position.lat());
            setSelectedLng(position.lng());
          }
        });

        map.addListener('click', (e: google.maps.MapMouseEvent) => {
          if (e.latLng) {
            marker.setPosition(e.latLng);
            setSelectedLat(e.latLng.lat());
            setSelectedLng(e.latLng.lng());
          }
        });
      }
    };

    if (!window.google) {
      document.head.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [initialLat, initialLng]);

  const handleConfirm = () => {
    onConfirm(selectedLat, selectedLng);
  };

  if (mapError) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-blue-900">Carte Interactive</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            La carte interactive nécessite une configuration supplémentaire. Utilisez le bouton "Sélectionner sur Google Maps" pour ouvrir Google Maps dans un nouvel onglet.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-blue-900">Sélectionner la Position</h3>
            <p className="text-sm text-gray-600 mt-1">
              Cliquez sur la carte ou faites glisser le marqueur
            </p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div ref={mapRef} className="w-full flex-1 min-h-[400px]" />

        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="mb-3 text-sm text-gray-700">
            <span className="font-semibold">Position sélectionnée:</span> {selectedLat.toFixed(6)}, {selectedLng.toFixed(6)}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleConfirm}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Confirmer la Position
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
