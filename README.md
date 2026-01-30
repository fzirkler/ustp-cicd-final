# USTP CI/CD Tetris

This repository contains the Tetris project for the USTP CI/CD final assignment.  
The application is automatically built, tested, and published whenever a matching tag (`vX.X.X`) is pushed.

BLAAA

---

## GitHub Page

The application is available here:

**https://fzirkler.github.io/ustp-cicd-final/**

---

## Local Development

### Requirements
- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Start the application locally

```bash
npm run dev
```

### Build the application

```bash
npm run build
```

The build output will be located in the /dist directory.

### Run tests

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

*This project is part of the USTP CI/CD course and is intended solely for educational purposes.*
