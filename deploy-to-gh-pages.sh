#! /bin/bash

# git status eval from: http://stackoverflow.com/a/2658301
if  [[ $(git diff --shortstat 2> /dev/null | tail -n1) != "" ]]; then
	echo "Uncommitted changes. Please commit before deploying to gh-pages";
	# exit 1;
fi;
if [ `git status --porcelain 2>/dev/null| grep "^??" | wc -l` != "0" ]; then
	echo "Untracked files. Please commit before deploying to gh-pages";
	exit 1;
fi;

COMMIT=`git rev-parse HEAD`

# Create fresh distribution files
npm run dist

# checkout remote repository to
rm -rf $TMPDIR/react-passwordfield-example
git clone -b gh-pages . $TMPDIR/react-passwordfield-example
rm -rf $TMPDIR/react-passwordfield-example/dist

cp -r ./public/* $TMPDIR/react-passwordfield-example
cd $TMPDIR/react-passwordfield-example
git add -A
git commit -m "Deployed to gh-pages from commit $COMMIT"
git push https://github.com/nilshartmann/react-passwordfield-example gh-pages:gh-pages
