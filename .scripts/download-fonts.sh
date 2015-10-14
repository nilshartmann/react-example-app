#!/bin/sh
FONTS_DIR=./public/fonts
mkdir -p $FONTS_DIR

curl http://fonts.googleapis.com/css?family=Roboto:400,500,700,300 >$FONTS_DIR/google-fonts.css

FONTURL=http:\\/\\/fonts.gstatic.com

for i in `cat $FONTS_DIR/google-fonts.css | grep url | cut -d "(" -f 4 | cut -d ")" -f 1`; do

  # Host abschneiden

  TARGET=`echo $i|sed 's/'${FONTURL}'//'`
  echo TARGET: $TARGET

  TARGET_FILE=$FONTS_DIR$TARGET

  TARGET_DIR=`dirname $TARGET_FILE`

  mkdir -p $TARGET_DIR

  curl $i -o $TARGET_FILE
done
sed 's/'${FONTURL}\\/'//' $FONTS_DIR/google-fonts.css >$FONTS_DIR/google-fonts-offline.css
rm $FONTS_DIR/google-fonts.css
