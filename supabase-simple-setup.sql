-- Einfaches Supabase Setup für A1 Vokabeltrainer
-- Minimale Tabellen und Policies

-- 1. Progress Tabelle erstellen (falls nicht vorhanden)
CREATE TABLE IF NOT EXISTS progress (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    trainer_type TEXT NOT NULL DEFAULT 'basis',
    progress_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, trainer_type)
);

-- 2. Anonymous Users Tabelle erstellen (falls nicht vorhanden)
CREATE TABLE IF NOT EXISTS anonymous_users (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    is_anonymous BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Einfache Indexe
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_anonymous_users_username ON anonymous_users(username);

-- 4. Row Level Security aktivieren
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE anonymous_users ENABLE ROW LEVEL SECURITY;

-- 5. Alte Policies löschen (falls vorhanden)
DROP POLICY IF EXISTS "Users can view their own progress" ON progress;
DROP POLICY IF EXISTS "Users can insert their own progress" ON progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON progress;
DROP POLICY IF EXISTS "Users can delete their own progress" ON progress;

DROP POLICY IF EXISTS "Users can view their own anonymous data" ON anonymous_users;
DROP POLICY IF EXISTS "Users can insert their own anonymous data" ON anonymous_users;
DROP POLICY IF EXISTS "Users can update their own anonymous data" ON anonymous_users;
DROP POLICY IF EXISTS "Users can delete their own anonymous data" ON anonymous_users;

-- 6. Einfache Policies für Progress (ohne UUID-Cast)
CREATE POLICY "Users can view their own progress" ON progress
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own progress" ON progress
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own progress" ON progress
    FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can delete their own progress" ON progress
    FOR DELETE USING (auth.uid()::text = user_id::text);

-- 7. Einfache Policies für Anonymous Users (ohne UUID-Cast)
CREATE POLICY "Users can view their own anonymous data" ON anonymous_users
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own anonymous data" ON anonymous_users
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own anonymous data" ON anonymous_users
    FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can delete their own anonymous data" ON anonymous_users
    FOR DELETE USING (auth.uid()::text = user_id::text);

-- 8. Trigger für updated_at
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

-- 9. Berechtigungen
GRANT ALL ON progress TO authenticated;
GRANT ALL ON anonymous_users TO authenticated;
GRANT USAGE ON SEQUENCE progress_id_seq TO authenticated;
GRANT USAGE ON SEQUENCE anonymous_users_id_seq TO authenticated;

-- 10. Status anzeigen
SELECT 'Progress Tabelle erstellt' as status, 
       (SELECT COUNT(*) FROM progress) as progress_count;

SELECT 'Anonymous Users Tabelle erstellt' as status, 
       (SELECT COUNT(*) FROM anonymous_users) as users_count; 