import os
import re
import hashlib

VOCAB_DIRS = [
    ".",  # Root
]

def generate_id(main_topic, sub_topic, german, index):
    base = f"{main_topic}-{sub_topic}-{german}-{index}"
    # Hash für Eindeutigkeit und Kürze
    return hashlib.md5(base.encode("utf-8")).hexdigest()[:16]

def fix_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Finde alle Vokabel-Objekte (vereinfachte Annahme: { ... } as Noun/Verb/Adjective/...)
    pattern = re.compile(r"({[^{}]*?german\s*:\s*\"([^\"]+)\"[^{}]*?english\s*:\s*\"([^\"]+)\"[^{}]*?})\s+as\s+(\w+)", re.DOTALL)
    matches = list(pattern.finditer(content))
    if not matches:
        return 0

    new_content = content
    added = 0

    for idx, match in enumerate(matches):
        obj_str, german, english, wordtype = match.groups()
        # Prüfe, ob id: ... schon vorhanden ist
        if re.search(r"id\s*:", obj_str):
            continue
        # Versuche, das Thema/Subthema aus dem Dateinamen zu erraten
        filename = os.path.basename(filepath)
        main_topic = filename.replace("vokabular_", "").replace(".ts", "")
        sub_topic = "all"
        # Generiere ID
        new_id = generate_id(main_topic, sub_topic, german, idx)
        # Füge id: createWordId("...") als erste Eigenschaft ein
        obj_fixed = "{ id: createWordId(\"" + f"{main_topic}-{sub_topic}-{new_id}" + "\"), " + obj_str[1:]
        new_content = new_content.replace(obj_str, obj_fixed)
        added += 1

    if added > 0:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
    return added

def main():
    total = 0
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.startswith("vokabular_") and file.endswith(".ts"):
                path = os.path.join(root, file)
                fixed = fix_file(path)
                if fixed:
                    print(f"{file}: {fixed} IDs ergänzt")
                total += fixed
    print(f"==> Insgesamt {total} IDs ergänzt.")

if __name__ == "__main__":
    main() 