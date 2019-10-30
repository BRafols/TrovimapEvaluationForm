#!/bin/bash

echo 'npm version patch'
npm version patch

echo 'fetching version'
releaseBranch=v$(cat package.json | grep "\"version\"" | head -1 | awk -F: '{print $2}' | sed 's/[",]//g' | tr -d '[[:space:]]')

echo 'adding git files'
echo 'old version' $releaseBranch
git add .

echo 'commit files'
git commit -m "version patch"

echo 'beforeTag' 
git tag -a $releaseBranch -m 'release'

echo 'beforePush'
git push origin $releaseBranch