#!/bin/bash

# Function Abstracting Prompts

promptValue() {
 read -p "$1"": " val
 echo $val
}

feature=
status=
tags=

while [ -z "$feature" ]
do
    feature=$(promptValue "Enter Feature Name")
done

while [ -z "$status" ]
do
    status=$(promptValue "Enter Status (use,avoid or caution)")
    case $status in
        use|avoid|caution) : ;;
        *)                 status= ;;
    esac
done

while [ -z "$tags" ]
do
    tags=$(promptValue "Enter Tags (one or more of: gtie6 gtie7 gtie8 nopolyfill polyfill fallback)")
    if [ -n "$tags" ]
    then
      set $(echo $tags)
      while [ $# -gt 0 ]
      do
          case "$1" in
            gtie6|gtie7|gtie8|nopolyfill|pollyfill|fallback)  shift ;;
            *)              echo "Unknown Tag: $1" 1>&2; tags= ; break ;;
          esac
      done
    fi
done

# Creating markdown file in posts folder
POSTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/posts"

[ -e "$POSTS_DIR/$feature.md" ] && echo "$feature.md already exists" && exit 1

cat > $POSTS_DIR/$feature.md <<EOF
feature: $feature
status: $status
tags: $tags
polyfillurls:

…
EOF

echo "Created file $POSTS_DIR/$feature.md" 1>&2

# Open it in your editor for adding content
[ -n "$EDITOR" ] && $EDITOR "$POSTS_DIR/$feature.md"