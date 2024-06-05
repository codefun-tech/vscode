# Visual Studio Code Setup

## Extensions

### General Editing Extensions

- Vim
- EditorConfig for VS Code
- Code Spell Checker
- Path Intellisense
- YAML

### Python

- Python (Pylance, Python Debugger)
- Flake8 (or Pylint)
- Black Formatter (or autopep8)
- Mypy Type Checker
- isort
- Jupyter (Jupyter Keymap, Jupyter Slide Show, Jupyter Cell Tags, Jupyter Notebook Renderers)
- Github Copilot (Github Copilot Chat)
- VS Code Speech
- IntelliCode (IntelliCode API Usage Examples)
- IntelliCode Completions (If you installed Copilot, this will not work)

### Data Analysis

- Excel Viewer
- SandDance for VSCode
- Data Wrangler

### Others

- Thunder Client
- CodeSnap
- Power Mode

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

requiremets.txt file contains the following packages:

- ipykernel
- rope
- bandit
- pytest

```console
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```
