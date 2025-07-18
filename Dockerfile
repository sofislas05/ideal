# --- Etapa Base: Configura la versión de Node.js y pnpm ---
FROM node:20-slim AS base

# Configura el HOME de pnpm y lo añade al PATH.
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Habilita Corepack para gestionar pnpm.
RUN corepack enable

# --- Etapa de Dependencias (deps): Instala node_modules para Astro ---
# Esta etapa instala todas las dependencias. Se cacheará y reutilizará
# siempre que package.json y pnpm-lock.yaml no cambien.
FROM base AS deps
WORKDIR /app

# Copia solo los archivos de definición de dependencias para aprovechar la caché.
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias. Usamos --frozen-lockfile porque el lockfile
# local ya estará sincronizado gracias a los pasos previos.
RUN pnpm install --frozen-lockfile

# --- Etapa de Desarrollo (dev): Copia código y levanta el servidor de desarrollo ---
# Esta es la imagen final para tu entorno de desarrollo dockerizado.
FROM base AS dev
WORKDIR /app

# Copia los node_modules ya instalados de la etapa 'deps'.
COPY --from=deps /app/node_modules ./node_modules
COPY pnpm-lock.yaml ./pnpm-lock.yaml
COPY package.json ./package.json

# Copia el resto del código fuente de tu aplicación.
# ¡Aquí está tu código que trabajarás en local!
COPY . .

# Expone el puerto en el que la aplicación Astro escuchará en modo dev.
# El comando 'pnpm run dev' de Astro por defecto escucha en el puerto 4321.
EXPOSE 4321

# Comando para iniciar la aplicación Astro en modo desarrollo.
# Esto es equivalente a tu 'pnpm run dev' local.
CMD ["pnpm", "run", "dev", "--", "--host", "0.0.0.0"]