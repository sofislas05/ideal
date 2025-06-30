# Guía de instalación

### Instalar Visual Studio Code (VS Code)
- Descarga oficial: [VS Code Download](https://code.visualstudio.com/download)

### Instalar Node.js
- Descarga oficial: [Node.js Download](https://nodejs.org/en/download)

```bash
# Descargar e instalar nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Descargar e instalar Node.js:
nvm install --lts

# Verificar la versión the Node.js:
node -v 
nvm current 

# Verificar la versión de npm:
npm -v
```

### Instalar pnpm

```bash
npm install -g pnpm
pnpm install
```

## Para ejecutar en local:
```bash
pnpm run dev
```
