set -e

npm run build

cd dist

git init
git add -A
git commit -m 'd'
git push -f git@github.com:AlexMurrr/time_of_work.git master:gh-pages
cd -