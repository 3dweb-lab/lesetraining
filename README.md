# Lumo Lesetraining

Gamifiziertes Lesetraining in Deutsch, Englisch und Russisch: Lesetempo-Test, Pacer, Skimming, Scanning, Blickspanne, SQ3R, eigene Texte und Wikipedia live.

## Auf GitHub Pages veröffentlichen

1. Auf github.com oben rechts **+** → **New repository**. Name z. B. `lesetraining`, Sichtbarkeit **Public** (GitHub Pages ist für private Repositorys nur mit bezahltem Konto möglich). **Create repository**.
2. Im neuen Repository auf **uploading an existing file** klicken. Den **Inhalt** dieses Ordners hineinziehen, also `index.html`, `sw.js`, `manifest.webmanifest`, `README.md` sowie die Ordner `icons` und `texts`. Dann **Commit changes**.
3. **Settings** → **Pages** → bei *Branch* `main` und `/ (root)` wählen → **Save**.
4. Nach ein bis zwei Minuten ist die App erreichbar unter `https://DEIN-NAME.github.io/lesetraining/`.

## Auf dem Android-Handy installieren

Seite in Chrome öffnen → Menü (drei Punkte) → **App installieren** bzw. **Zum Startbildschirm hinzufügen**. Danach startet Lumo wie eine normale App, auch offline.

## Fortschritt

- Dein Fortschritt wird nur auf dem Gerät gespeichert, nicht im Repository.
- **Einstellungen → Sicherung**: Fortschritt als Text oder Datei exportieren und auf einem anderen Gerät einlesen. Beide Stände werden zusammengeführt.
- **Einstellungen → Mit GitHub synchronisieren**: automatischer Abgleich über eine private Gist-Notiz. Dafür einen *Fine-grained token* mit der Berechtigung **Gists: Read and write** anlegen (Anleitung in der App). Der Schlüssel wird nur auf dem jeweiligen Gerät gespeichert und landet nie im Repository.

## Aktualisieren

Neue Dateien einfach erneut hochladen und dabei die alten ersetzen. Bei jedem Update wird in `sw.js` die Versionsnummer (`CACHE="lumo-v…"`) erhöht. Die App holt sich die neue Version beim nächsten Start; aktiv ist sie spätestens beim übernächsten Öffnen.

## Texte

Die Übungstexte liegen in `texts/de.json`, `texts/en.json` und `texts/ru.json`. Wikipedia-Texte stehen unter der Lizenz CC BY-SA 4.0; die App zeigt Quelle und Link bei jedem Artikel an.
