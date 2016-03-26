#!/bin/bash

declare -r PRIVATE_KEY_FILE_NAME='github_deploy_key'

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# Decrypt the file containing the private key

openssl aes-256-cbc \
    -K  $encrypted_ca2180397773_key \
    -iv $encrypted_ca2180397773_iv \
    -in "$(dirname "$BASH_SOURCE")/${PRIVATE_KEY_FILE_NAME}.enc" \
    -out ~/.ssh/$PRIVATE_KEY_FILE_NAME -d

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# Enable SSH authentication

chmod 600 ~/.ssh/$PRIVATE_KEY_FILE_NAME \
  && printf '%s\n' \
    "Host github.com" \
    "  IdentityFile ~/.ssh/$PRIVATE_KEY_FILE_NAME" \
    "  LogLevel ERROR" >> ~/.ssh/config

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# Update the content from the `gh-pages` branch

$(npm bin)/travis-after-all && \
  $(npm bin)/update-branch --commands "npm run build" \
                           --commit-message "Hey GitHub, this content is for you! [skip ci]" \
                           --directory "build" \
                           --distribution-branch "gh-pages" \
                           --source-branch "master"
