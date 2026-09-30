#!/usr/bin/env sh
set -eu

if [ ! -f composer.json ] || [ ! -f artisan ]; then
  echo "A aplicação Laravel não foi encontrada em ./api."
  echo "Coloque o projeto Laravel nesse diretório e execute novamente."
  exit 1
fi

if [ ! -f vendor/autoload.php ]; then
  composer install --no-interaction --prefer-dist
fi

if [ ! -f .env ] && [ -f .env.example ]; then
  cp .env.example .env
fi

if ! grep -q '^APP_KEY=base64:' .env 2>/dev/null; then
  php artisan key:generate --force
fi

exec php artisan serve --host=0.0.0.0 --port=8000
