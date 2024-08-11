# Visual Studio Code Setup

This repository contains VS Code setup for beginners in Python. It includes extensions, must-have or optional, recommended themes, and fonts.

You can utilize this repository to configure your VS Code environment to start a new Python project.

If you need to learn how to install and set up VS Code, you can follow the tutorial [Visual Studio Code Setup for Python Beginners](https://codefun.tech/visual-studio-code-setup-for-python-beginners/).

## Extensions

### Python

- Python (Pylance, Python Debugger)
- Flake8 (or Pylint)
- Black Formatter (or autopep8)
- Mypy Type Checker
- isort
- Jupyter (Jupyter Keymap, Jupyter Slide Show, Jupyter Cell Tags, Jupyter Notebook Renderers)
- Github Copilot (Github Copilot Chat)
- VS Code Speech (Optional, but recommended)
- IntelliCode (IntelliCode API Usage Examples)
- IntelliCode Completions (If you installed Copilot, this will not work)

Except for the VS Code Speech extension, the above extensions are must-haves for Python development, while the following are optional:

### General Editing Extensions

- Vim
- EditorConfig for VS Code
- Code Spell Checker
- Path Intellisense
- YAML

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

Please follow the tutorials [Choosing The Best Programming Fonts](https://codefun.tech/choosing-the-best-programming-fonts/) and [Free Best Programming Fonts for All Time](https://codefun.tech/free-best-programming-fonts-for-all-time/) to choose your favorite fonts.

- [Cascadia Code](https://github.com/microsoft/cascadia-code)
- [Courier Prime](https://quoteunquoteapps.com/courierprime/)
- [Fira Code](https://github.com/tonsky/FiraCode)
- [Hasklig](https://github.com/i-tu/Hasklig/)
- [IBM Plex](https://github.com/IBM/plex)
- [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)

## Install Python Requirements

For Python beginners, at least install the following packages.

- ipykernel (for Jupyter)
- rope (for VS Code Refactor)
- bandit (a security linter)
- pytest (for testing)

Include them in the requiremets.txt file, and install them using the following commands:

```console
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```
