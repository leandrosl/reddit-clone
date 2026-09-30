#!/usr/bin/env sh
set -eu

if [ ! -f package.json ]; then
  echo "A aplicação React não foi encontrada em ./webapp."
  echo "Coloque o projeto React nesse diretório e execute novamente."
  exit 1
fi

if [ ! -d node_modules ] || [ -z "$(find node_modules -mindepth 1 -maxdepth 1 -print -quit 2>/dev/null)" ]; then
  if [ -f package-lock.json ]; then
    npm ci
  else
    npm install
  fi
fi

if node -e "process.exit(require('./package.json').scripts?.dev ? 0 : 1)"; then
  exec npm run dev -- --host 0.0.0.0 --port 5173
fi

exec npm start
