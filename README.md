# Literature Language — VS Code Extension

Official extension for the **Literature Language** programming language.

## What is this?

Literature Language is an esoteric programming language where a program is written as a theatrical play. It features heroes (variables), scenes, and a Director (the user).

This extension turns VS Code into a development environment for Literature Language:
- **Syntax highlighting** (TextMate).
- **Real-time syntax checking** (LSP server in Python, packaged as an `.exe`).
- **Run programs with Ctrl+Shift+B**.
- **Snippets** for quickly writing scenes and replicas.
- **Standalone** — no Python installation is required for the extension to work.

## Installation

1. Download the `literature-language-0.0.1.vsix` file.
2. Open VS Code and go to the Extensions panel (`Ctrl+Shift+X`).
3. Click the three dots `...` in the top right corner and select **Install from VSIX...**.
4. Select the downloaded file.

## Features

### 1. Syntax Highlighting
Files with the `.litl` extension are automatically recognized as Literature. Keywords, scenes, listeners, branches, and strings are highlighted.

### 2. Error Checking (LSP)
The extension runs a background server (`litl-server.exe`) that checks your code as you type. If you make a syntax error, it will be immediately underlined in red, and a description will appear in the "Problems" panel (`Ctrl+Shift+M`).

### 3. Running Programs
- **Ctrl+Shift+B** — runs the currently open `.litl` file (after `litl init` has been executed).
- Alternatively, run `litl run <file>` in the terminal.

### 4. Snippets
Abbreviations work in `.litl` files. Type `scene` and press `Tab` to create a scene skeleton. Available: `scene`, `heroes`, `ask`, `if`, `compare`, `enter`, `listen`, `quiet`, `plus`.

## Command Line Interface (CLI)

The extension comes with a CLI tool `litl.exe` (located in the `core/dist` folder), which allows you to work with the language from the terminal:

- `litl run <file>` — run a program.
- `litl check <file>` — check syntax without running.
- `litl cast <file>` — list heroes.
- `litl scenes <file>` — list scenes.
- `litl new [name]` — create a new template file.
- `litl -init` — initialize VS Code workspace (creates `.vscode/settings.json` and `.vscode/tasks.json`).
- `litl help` — show language help.
- `litl -version` — show version.

## Extension Structure

literature-language/
  package.json
  language-configuration.json
  icon.png
  syntaxes/          # Syntax highlighting grammar
  snippets/          # Code snippets
  client/            # VS Code client (extension.js)
  core/
    dist/            # Compiled litl.exe and litl-server.exe
    help.txt         # Help file

## License

MIT
