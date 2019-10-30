#!/bin/bash

npm version patch

releaseBranch=v$(cat package.json | grep "\"version\"" | head -1 | awk -F: '{print $2}' | sed 's/[",]//g' | tr -d '[[:space:]]')

git add .
git commit -m "version patch"

git tag -a $releaseBranch -m 'release'
git push origin $releaseBranch