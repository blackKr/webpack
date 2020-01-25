#!/usr/bin/env bash

if [ $# -ne 1 ] || ( [ "x$1" != 'xtest' ] && [ "x$1" != 'xbeta' ] && [ "x$1" != 'xpro' ]); then
  echo "Usage : $0 test/beta/pro" >&2
  exit 1
fi

file="utils/config.js"

if [ -x "$file" ] ;then
  rm -r $file
fi

touch "$file"

if [ "x$1" == 'xtest' ] ;then
  cp utils/config.test.js $file
elif [ "x$1" == 'xbeta' ] ;then
  cp utils/config.beta.js $file
else
  cp utils/config.pro.js $file
fi
