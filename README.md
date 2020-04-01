# Visual Studio Code Setup

## Extensions

### General Editing Extensions

- Vim
- EditorConfig for VS Code
- Code Spell Checker
- Path Intellisense

### Extensions for Python

- Python
- Visual Studio IntelliCode

### Extensions for Javascript

- ESLint
- [JavaScript Debugger (Nightly)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly) -> [screenshot](https://code.visualstudio.com/updates/v1_43#_new-javascript-debugger)

## Themes

- [Horizon Theme](https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode)
- [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

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

```console
$ python3 -m venv ./venv
```

```console
$ pip install -r requirements.txt
```
