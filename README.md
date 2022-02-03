# Visual Studio Code Setup

## Extensions

### General Editing Extensions

- Vim
- EditorConfig for VS Code
- Code Spell Checker
- Path Intellisense
- File Watcher
- Sourcery
- YAML
- Power Mode

### Coding

- [Better Comments](https://github.com/aaron-bond/better-comments)
- Todo Tree

### Extensions for C

- [C/C++ for Visual Studio Code](https://github.com/Microsoft/vscode-cpptools)

### Extensions for Python

- Python
- Jupyter
- pylance
- Visual Studio IntelliCode
- Python Docstring Generator
- Visual Studio IntelliCode API Usage Examples

### Extensions for Data Analysis

- Excel Viewer
- SandDance for VSCode

### Extensions for Javascript

- ESLint
- [JavaScript Debugger (Nightly)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly) -> [screenshot](https://code.visualstudio.com/updates/v1_43#_new-javascript-debugger)
- Prettier
  - eslint-plugin-prettier
  - eslint-config-prettier
- npm
- Quokka
- Import Cost
- TODO Highlight

### C

- [CMake Tools](https://github.com/microsoft/vscode-cmake-tools)
- [Better C++ Syntax](https://github.com/jeff-hykin/cpp-textmate-grammar)

### Docker

- docker

### Others

- REST Client
- Thunder Client
- CodeSnap
- MySQL

## Themes

- [Horizon Theme](https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode)
- [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
- [C/C++ Themes](https://github.com/Microsoft/vscode-cpptools)
- [Earthbound Themes](https://github.com/benbusby/earthbound-themes)
- [GitHub Theme](https://github.com/primer/github-vscode-theme)
- [Github Light Theme](https://github.com/chuling/vscode-theme-github-light)
- [Linux Themes for Visual Studio Code](https://github.com/rdnlsmith/vscode-linux-themes)
- [Panda Theme](https://github.com/tinkertrain/panda-syntax-vscode)
- [Remedy](https://github.com/robertrossmann/vscode-remedy)
- [Winter is Coming](https://github.com/johnpapa/vscode-winteriscoming)
- [Bearded Theme](https://github.com/BeardedBear/bearded-theme)

## Fonts

- [Cascadia Code](https://github.com/microsoft/cascadia-code)
- [Courier Prime](https://quoteunquoteapps.com/courierprime/)
- [Fira Code](https://github.com/tonsky/FiraCode)
- [Hasklig](https://github.com/i-tu/Hasklig/)
- [IBM Plex](https://github.com/IBM/plex)
- [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)

## Install Python Requirements

In this initial setup, two packages are required:

- ipykernel
- flake8
- black(in use)
- yapf
- rope
- [PrettyErrors](https://github.com/onelivesleft/PrettyErrors)
- bandit
- notebook
- pytest
- pytest-benchmark
- line_profiler
- memory_profiler
- psutil

```console
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```

```console
$ python -m pretty_errors
```

## Install Javascript Related Tools

```console
$ npm install eslint
$ npm install --save-dev --save-exact prettier
$ npm install --save-dev eslint-plugin-prettier
$ npm install --save-dev eslint-config-prettier
```

Then you need to add plugin:prettier/recommended as the last extension in your .eslintrc.json:

```json
{
  "plugins": ["prettier"],
  "extends": ["plugin:prettier/recommended"]
}
```
