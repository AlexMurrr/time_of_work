set -e

npm run build

cd dist

git add -A
git commit -m 'd'
git push -f git@github.com:AlexMurrr/vueTimeOfWork.git master:gh-pages
cd -