-- Supabase Setup für A1 Vokabeltrainer
-- Führe diese Befehle in der Supabase SQL Editor aus

-- 1. Erstelle die progress Tabelle
CREATE TABLE IF NOT EXISTS progress (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  trainer_type TEXT NOT NULL DEFAULT 'basis',
  progress_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Erstelle Indexe für bessere Performance
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_trainer_type ON progress(trainer_type);

-- 3. Aktiviere Row Level Security (RLS)
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- 4. Erstelle RLS Policy für sicheren Zugriff
-- Benutzer können nur ihre eigenen Daten sehen/bearbeiten
DROP POLICY IF EXISTS "Users can manage their own progress" ON progress;
CREATE POLICY "Users can manage their own progress" ON progress
  FOR ALL USING (auth.uid() = user_id);

-- 5. Erstelle eine Funktion zum automatischen Aktualisieren des updated_at Feldes
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 6. Erstelle Trigger für automatisches updated_at
DROP TRIGGER IF EXISTS update_progress_updated_at ON progress;
CREATE TRIGGER update_progress_updated_at
    BEFORE UPDATE ON progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 7. Teste die Tabelle (optional)
-- INSERT INTO progress (user_id, trainer_type, progress_data) 
-- VALUES ('00000000-0000-0000-0000-000000000000', 'test', '{"test": "data"}');

-- 8. Zeige die erstellte Tabelle
SELECT * FROM progress LIMIT 1; 