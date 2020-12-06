# Visual Studio Code Setup

## Extensions

### General Editing Extensions

- Vim
- EditorConfig for VS Code
- Code Spell Checker
- Path Intellisense
- File Watcher
- Sourcery

### Coding

- [Better Comments](https://github.com/aaron-bond/better-comments)

### Extensions for C

- [C/C++ for Visual Studio Code](https://github.com/Microsoft/vscode-cpptools)

### Extensions for Python

- Python
- pylance
- Visual Studio IntelliCode

### Extensions for Javascript

- ESLint
- [JavaScript Debugger (Nightly)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly) -> [screenshot](https://code.visualstudio.com/updates/v1_43#_new-javascript-debugger)

### Docker

- docker

## Themes

- [Horizon Theme](https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode)
- [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
- [C/C++ Themes](https://github.com/Microsoft/vscode-cpptools)
- [Earthbound Themes](https://github.com/benbusby/earthbound-themes)
- [Github Light Theme](https://github.com/chuling/vscode-theme-github-light)
- [Linux Themes for Visual Studio Code](https://github.com/rdnlsmith/vscode-linux-themes)
- [Panda Theme](https://github.com/tinkertrain/panda-syntax-vscode)
- [Remedy](https://github.com/robertrossmann/vscode-remedy)

## Fonts

- [Cascadia Code](https://github.com/microsoft/cascadia-code)
- [Courier Prime](https://quoteunquoteapps.com/courierprime/)
- [Fira Code](https://github.com/tonsky/FiraCode)
- [Hasklig](https://github.com/i-tu/Hasklig/)
- [IBM Plex](https://github.com/IBM/plex)

## Install Python Requirements

In this initial setup, two packages are required:

- flake8
- black
- yapf
- rope
- notebook
- pytest
- pytest-benchmark
- line_profiler
- memory_profiler
- psutil

```console
$ python3 -m venv ./venv
```

```console
$ pip install -r requirements.txt
```
