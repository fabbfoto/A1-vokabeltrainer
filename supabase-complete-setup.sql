-- Vollständiges Supabase Setup für A1 Vokabeltrainer
-- Alle notwendigen Tabellen und Funktionen

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

-- 2. Anonymous Users Tabelle erstellen
CREATE TABLE IF NOT EXISTS anonymous_users (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    is_anonymous BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Indexe für bessere Performance
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_trainer_type ON progress(trainer_type);
CREATE INDEX IF NOT EXISTS idx_progress_user_trainer ON progress(user_id, trainer_type);
CREATE INDEX IF NOT EXISTS idx_anonymous_users_username ON anonymous_users(username);
CREATE INDEX IF NOT EXISTS idx_anonymous_users_user_id ON anonymous_users(user_id);

-- 4. Row Level Security aktivieren
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE anonymous_users ENABLE ROW LEVEL SECURITY;

-- 5. Alte Policies löschen (falls vorhanden)
DROP POLICY IF EXISTS "Users can manage their own progress" ON progress;
DROP POLICY IF EXISTS "Users can view their own progress" ON progress;
DROP POLICY IF EXISTS "Users can insert their own progress" ON progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON progress;
DROP POLICY IF EXISTS "Users can delete their own progress" ON progress;

DROP POLICY IF EXISTS "Users can manage their own anonymous data" ON anonymous_users;
DROP POLICY IF EXISTS "Users can view their own anonymous data" ON anonymous_users;
DROP POLICY IF EXISTS "Users can insert their own anonymous data" ON anonymous_users;
DROP POLICY IF EXISTS "Users can update their own anonymous data" ON anonymous_users;
DROP POLICY IF EXISTS "Users can delete their own anonymous data" ON anonymous_users;

-- 6. Neue Policies für Progress Tabelle
CREATE POLICY "Users can view their own progress" ON progress
    FOR SELECT USING (auth.uid()::uuid = user_id);

CREATE POLICY "Users can insert their own progress" ON progress
    FOR INSERT WITH CHECK (auth.uid()::uuid = user_id);

CREATE POLICY "Users can update their own progress" ON progress
    FOR UPDATE USING (auth.uid()::uuid = user_id);

CREATE POLICY "Users can delete their own progress" ON progress
    FOR DELETE USING (auth.uid()::uuid = user_id);

-- 7. Neue Policies für Anonymous Users Tabelle
CREATE POLICY "Users can view their own anonymous data" ON anonymous_users
    FOR SELECT USING (auth.uid()::uuid = user_id);

CREATE POLICY "Users can insert their own anonymous data" ON anonymous_users
    FOR INSERT WITH CHECK (auth.uid()::uuid = user_id);

CREATE POLICY "Users can update their own anonymous data" ON anonymous_users
    FOR UPDATE USING (auth.uid()::uuid = user_id);

CREATE POLICY "Users can delete their own anonymous data" ON anonymous_users
    FOR DELETE USING (auth.uid()::uuid = user_id);

-- 8. Trigger für updated_at automatisch setzen
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

CREATE TRIGGER update_anonymous_users_updated_at 
    BEFORE UPDATE ON anonymous_users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 9. Funktion zum sicheren Upsert für Progress
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

-- 10. Funktion zum sicheren Upsert für Anonymous Users
CREATE OR REPLACE FUNCTION upsert_anonymous_user(
    p_user_id UUID,
    p_username TEXT,
    p_email TEXT
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO anonymous_users (user_id, username, email)
    VALUES (p_user_id, p_username, p_email)
    ON CONFLICT (user_id)
    DO UPDATE SET 
        username = p_username,
        email = p_email,
        updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 11. Berechtigungen für die Funktionen
GRANT EXECUTE ON FUNCTION upsert_progress(UUID, TEXT, JSONB) TO authenticated;
GRANT EXECUTE ON FUNCTION upsert_anonymous_user(UUID, TEXT, TEXT) TO authenticated;

-- 12. Verifikation
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies 
WHERE tablename IN ('progress', 'anonymous_users');

-- 13. Tabellen-Status anzeigen
SELECT 
    table_name,
    table_type
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('progress', 'anonymous_users'); 