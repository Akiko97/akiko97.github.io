#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Akiko97/akiko97.github.io.git master:gh-pages
cd -