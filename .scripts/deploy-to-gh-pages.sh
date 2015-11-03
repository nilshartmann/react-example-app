#! /bin/bash
# This deploys the *local* version of this project to the 'gh-pages' branch in the remote github repository
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
SHORTCOMMIT=`echo $COMMIT|cut -b-5`

# Create fresh distribution files
npm run dist

# checkout remote repository to
rm -rf $TMPDIR/react-passwordfield-example
git clone -b gh-pages https://github.com/nilshartmann/react-example-app $TMPDIR/react-passwordfield-example

rm -rf $TMPDIR/react-passwordfield-example/dist
cp -r ./public/* $TMPDIR/react-passwordfield-example
sed 's/COMMITID/'${SHORTCOMMIT}'/g' ./.scripts/index-gh-pages.html>$TMPDIR/react-passwordfield-example/index.html

git --git-dir=$TMPDIR/react-passwordfield-example/.git --work-tree=$TMPDIR/react-passwordfield-example add -A
git --git-dir=$TMPDIR/react-passwordfield-example/.git --work-tree=$TMPDIR/react-passwordfield-example commit -m "Deployed to gh-pages from commit $COMMIT"
git --git-dir=$TMPDIR/react-passwordfield-example/.git --work-tree=$TMPDIR/react-passwordfield-example push
