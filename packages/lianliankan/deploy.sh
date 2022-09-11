#!/usr/bin/env sh

# abort on errors
set -e

# build
#npm run build

# navigate into the build output directory
cd dist/

# if you are deploying to a custom domain
#echo 'iro.nyan.my.id' > CNAME

#cd -

#git add dist/ -f
git add . -f
git commit -m 'deployer(gh-pages): deploy to github pages'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:laughing-team/planet.git main:gh-pages

git push  -f git@github.com:gxkai/gxkai.github.io.git main
