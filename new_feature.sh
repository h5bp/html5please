#!/bin/bash

# Function Abstracting Prompts

promptValue() {
 read -p "$1"": " val
 echo $val
}

feature=
status=
tags=
kind=

while [ -z "$feature" ]
do
    feature=$(promptValue "Enter Feature Name")
done

# Make feature name slug friendly
feature=$(
  echo $feature   | 
  # Use sed to replace spaces with hyphens
  sed -e "s/ /-/" | 
  # BSD sed doesn't accept \L, so use tr instead for case conversion
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
    tags=$(promptValue "Enter Tags (one or more of: gtie6,gtie7,gtie8,nopolyfill,polyfill, or fallback)")
    if [ -n "$tags" ]
    then
      set $(echo $tags)
      while [ $# -gt 0 ]
      do
          case "$1" in
            gtie6|gtie7|gtie8|nopolyfill|polyfill|fallback)  shift ;;
            *)              echo "Unknown Tag: $1" 1>&2; tags= ; break ;;
          esac
      done
    fi
done

while [ -z "$kind" ]
do
    kind=$(promptValue "Enter Type (css,html,js,dom or svg)")
    case $kind in
        css|html|js|dom|svg) : ;;
        *)                 kind= ;;
    esac
done


# Creating markdown file in posts folder
POSTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/posts"

[ -e "$POSTS_DIR/$feature.md" ] && echo "$feature.md already exists" && exit 1

cat > $POSTS_DIR/$feature.md <<EOF
feature: $feature
status: $status
tags: $tags
kind: $kind
polyfillurls:

…
EOF

echo "Created file $POSTS_DIR/$feature.md" 1>&2

# Open it in your editor for adding content
[ -n "$EDITOR" ] && $EDITOR "$POSTS_DIR/$feature.md"
