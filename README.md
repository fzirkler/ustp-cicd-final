# USTP CI/CD Tetris

Dieses Repository enthält das Tetris‑Projekt für die USTP CI/CD‑Abschlussaufgabe.  
Die Anwendung wird automatisch gebaut, getestet und veröffentlicht, sobald ein passender Tag (`vX.X.X`) gepusht wird.

---

## GitHub Page

Die Anwendung ist hier erreichbar:

 **https://fzirkler.github.io/ustp-cicd-final/**

---

## Lokale Entwicklung

### Voraussetzungen
- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Anwendung lokal starten

```bash
npm run dev
```

### Anwendung builden

```bash
npm run build
```
Der Build befindet sich anschließend im /dist Verzeichnis.

### Test ausführen
 
```bash
npm test
```

---

## CI/CD Status

### Build
[![Build & Publish](https://github.com/fzirkler/ustp-cicd-final/actions/workflows/build.yml/badge.svg?event=push)](https://github.com/fzirkler/ustp-cicd-final/actions/workflows/build.yml)

### Release
[![Publish Release on Tag](https://github.com/fzirkler/ustp-cicd-final/actions/workflows/release.yml/badge.svg)](https://github.com/fzirkler/ustp-cicd-final/actions/workflows/release.yml)

### Dependabot
[![Dependabot Updates](https://github.com/fzirkler/ustp-cicd-final/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/fzirkler/ustp-cicd-final/actions/workflows/dependabot/dependabot-updates)

---
*Dieses Projekt ist Teil der USTP CI/CD Lehrveranstaltung und dient ausschließlich zu Ausbildungszwecken.*
