/*
  # Création de la table des signalements de compteurs d'eau

  1. Nouvelles Tables
    - `water_reports`
      - `id` (uuid, clé primaire) - Identifiant unique du signalement
      - `meter_number` (text) - Numéro du compteur d'eau
      - `first_name` (text) - Prénom du client
      - `last_name` (text) - Nom du client
      - `address` (text) - Adresse du client
      - `phone` (text) - Numéro de téléphone
      - `latitude` (numeric) - Latitude GPS
      - `longitude` (numeric) - Longitude GPS
      - `issue_type` (text) - Type de panne (fuite, panne compteur, interruption eau, autre)
      - `description` (text) - Description détaillée du problème
      - `status` (text) - Statut du signalement (en attente, en cours, résolu)
      - `created_at` (timestamptz) - Date de création
      - `updated_at` (timestamptz) - Date de mise à jour

  2. Sécurité
    - Activer RLS sur la table `water_reports`
    - Ajouter une politique permettant à tout le monde de créer des signalements
    - Ajouter une politique permettant à tout le monde de lire les signalements (données publiques)

  3. Notes Importantes
    - Les signalements sont publics car il s'agit d'un service communautaire
    - Le statut par défaut est "en attente"
    - Les timestamps sont automatiquement gérés
*/

CREATE TABLE IF NOT EXISTS water_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  meter_number text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  address text NOT NULL,
  phone text NOT NULL,
  latitude numeric,
  longitude numeric,
    issue_type text NOT NULL CHECK (issue_type IN ('fuite', 'panne_compteur', 'interruption_eau', 'basse_pression', 'eau_trouble', 'eau_colore', 'casse_conduite_principale', 'debardement', 'autre')),
  description text NOT NULL,
  status text DEFAULT 'en_attente' CHECK (status IN ('en_attente', 'en_cours', 'resolu')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE water_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create water reports"
  ON water_reports
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read water reports"
  ON water_reports
  FOR SELECT
  TO anon
  USING (true);

-- Index pour améliorer les performances de recherche
CREATE INDEX IF NOT EXISTS idx_water_reports_status ON water_reports(status);
CREATE INDEX IF NOT EXISTS idx_water_reports_created_at ON water_reports(created_at DESC);