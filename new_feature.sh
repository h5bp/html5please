#!/bin/bash

# Function Abstracting Prompts

promptValue() {
 read -p "$1"": " val
 echo $val
}

feature=
featureslug=
status=
tags=
kind=

while [ -z "$feature" ]
do
    feature=$(promptValue "Enter Feature Name")
done

# Make feature name slug friendly
featureslug=$(
  echo $feature   | 
  # Use sed to replace spaces with hyphens
  sed -E -e "s/ +/-/" -e "s/[^A-Za-z0-9\-]//g" |

  # BSD sed doesnt accept \L, so use tr instead for case conversion
  tr "[A-Z]" "[a-z]"
)

while [ -z "$status" ]
do
    status=$(promptValue "Enter Status (use,avoid, or caution)")
    case $status in
        use|avoid|caution) : ;;
        *)                 status= ;;
    esac
done

while [ -z "$tags" ]
do
    tags=$(promptValue "Enter Tags (one or more of: gtie6,gtie7,gtie8,prefixes,polyfill, fallback, or none)")
    if [ -n "$tags" ]
    then
      set $(echo $tags)
      while [ $# -gt 0 ]
      do
          case "$1" in
            gtie6|gtie7|gtie8|gtie9|prefixes|polyfill|fallback|noie|nomobile|nooldmobile|none)  shift ;;
            *)              echo "Unknown Tag: $1" 1>&2; tags= ; break ;;
          esac
      done
    fi
done

while [ -z "$kind" ]
do
    kind=$(promptValue "Enter Type (css,html,js,api or svg)")
    case $kind in
        css|html|js|api|svg) : ;;
        *)                 kind= ;;
    esac
done


# Creating markdown file in posts folder
POSTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/posts"

[ -e "$POSTS_DIR/$featureslug.md" ] && echo "$featureslug.md already exists" && exit 1

cat > $POSTS_DIR/$featureslug.md <<EOF
feature: $feature
status: $status
tags: $tags
kind: $kind
polyfillurls:

…
EOF

echo "Created file $POSTS_DIR/$featureslug.md" 1>&2

# Open it in your editor for adding content
[ -n "$EDITOR" ] && $EDITOR "$POSTS_DIR/$featureslug.md"
