#!/usr/bin/env bash

set -eu -o pipefail

main() {
  case "$(uname)" in
  Darwin) install-deps-homebrew ;;
  Linux) install-deps-linux ;;
  *) exit 1 ;;
  esac
}

install-deps-homebrew() {
  brew install \
    libxi \
    libx11 \
    pkg-config
}

install-deps-linux() {
  if [[ "$(id -u)" -ne 0 ]]; then
    exec sudo bash "${BASH_SOURCE[0]:-$0}"
  fi

  if command -v apt-get >/dev/null; then
    install-deps-apt-get
  else
    exit 1
  fi
}

install-deps-apt-get() {
  apt-get update

  DEBIAN_FRONTEND=noninteractive apt-get install -y \
    build-essential \
    python \
    pkg-config \
    libx11-6 \
    libx11-dev \
    libxi6 \
    libxi-dev \
    libglx-mesa0 \
    libglx-dev \
    libglew-dev \
    libegl1-mesa-dev
}

main "$@"