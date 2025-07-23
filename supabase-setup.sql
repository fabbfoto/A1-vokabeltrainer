-- Supabase Setup für A1 Vokabeltrainer
-- Korrigierte Version für 409 Conflict Problem

-- 1. Progress Tabelle erstellen
CREATE TABLE IF NOT EXISTS progress (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    trainer_type TEXT NOT NULL DEFAULT 'basis',
    progress_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Unique Constraint für User + Trainer Type
    UNIQUE(user_id, trainer_type)
);

-- 2. Indexe für bessere Performance
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_trainer_type ON progress(trainer_type);
CREATE INDEX IF NOT EXISTS idx_progress_user_trainer ON progress(user_id, trainer_type);

-- 3. Row Level Security aktivieren
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- 4. Alte Policies löschen (falls vorhanden)
DROP POLICY IF EXISTS "Users can manage their own progress" ON progress;
DROP POLICY IF EXISTS "Users can view their own progress" ON progress;
DROP POLICY IF EXISTS "Users can insert their own progress" ON progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON progress;

-- 5. Neue, verbesserte Policies erstellen
-- Policy für SELECT (Lesen)
CREATE POLICY "Users can view their own progress" ON progress
    FOR SELECT USING (auth.uid() = user_id);

-- Policy für INSERT (Einfügen)
CREATE POLICY "Users can insert their own progress" ON progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy für UPDATE (Aktualisieren)
CREATE POLICY "Users can update their own progress" ON progress
    FOR UPDATE USING (auth.uid() = user_id);

-- Policy für DELETE (Löschen)
CREATE POLICY "Users can delete their own progress" ON progress
    FOR DELETE USING (auth.uid() = user_id);

-- 6. Trigger für updated_at automatisch setzen
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_progress_updated_at 
    BEFORE UPDATE ON progress 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 7. Funktion zum sicheren Upsert (INSERT oder UPDATE)
CREATE OR REPLACE FUNCTION upsert_progress(
    p_user_id UUID,
    p_trainer_type TEXT,
    p_progress_data JSONB
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO progress (user_id, trainer_type, progress_data)
    VALUES (p_user_id, p_trainer_type, p_progress_data)
    ON CONFLICT (user_id, trainer_type)
    DO UPDATE SET 
        progress_data = p_progress_data,
        updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 8. Berechtigungen für die Funktion
GRANT EXECUTE ON FUNCTION upsert_progress(UUID, TEXT, JSONB) TO authenticated;

-- 9. Test-Daten (optional)
-- INSERT INTO progress (user_id, trainer_type, progress_data) 
-- VALUES (
--     '00000000-0000-0000-0000-000000000000'::UUID,
--     'basis',
--     '{"test": "data"}'::JSONB
-- );

-- 10. Verifikation
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies 
WHERE tablename = 'progress';

-- 11. RLS Status prüfen
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables 
WHERE tablename = 'progress'; 