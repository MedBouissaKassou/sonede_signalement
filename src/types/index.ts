export interface WaterReport {
  id?: string;
  meter_number: string;
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  latitude?: number;
  longitude?: number;
  issue_type: 'fuite' | 'panne_compteur' | 'interruption_eau' | 'basse_pression' | 'eau_trouble' | 'eau_colore' | 'casse_conduite_principale' | 'debardement'| 'autre';
  description: string;
  status?: 'en_attente' | 'en_cours' | 'resolu';
  created_at?: string;
  updated_at?: string;
}

export interface Intervention {
  id: number;
  title: string;
  image: string;
  description: string;
}
