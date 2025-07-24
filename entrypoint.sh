#!/bin/sh

# Esto asegura que el script es ejecutable y que cualquier error lo detenga
set -e

# Log para depuración
echo "Starting Astro dev server..."

# Ejecuta el comando de desarrollo de Astro.
# El "--host 0.0.0.0" asegura que Astro escuche en todas las interfaces.
# "$@" pasa cualquier argumento adicional que se le dé al contenedor.
exec pnpm run dev -- --host 0.0.0.0 "$@"