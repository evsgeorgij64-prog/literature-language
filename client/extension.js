const vscode = require('vscode');
const { LanguageClient } = require('vscode-languageclient/node');
const path = require('path');

let client;

function activate(context) {
    // 1. Запуск LSP (теперь через скомпилированный .exe)
    const serverOptions = {
        command: path.join(context.extensionPath, 'core', 'dist', 'litl-server.exe')
    };

    const clientOptions = {
        documentSelector: [{ scheme: 'file', language: 'literature' }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/*.litl')
        }
    };

    client = new LanguageClient(
        'literature-server',
        'Literature Language Server',
        serverOptions,
        clientOptions
    );

    client.start();

    // 2. Команда запуска (тоже через .exe)
    let disposable = vscode.commands.registerCommand('litlang.runFile', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const filePath = editor.document.fileName;
        const exePath = path.join(context.extensionPath, 'core', 'dist', 'litl.exe');

        const terminal = vscode.window.createTerminal('Literature Run');
        terminal.show();
        terminal.sendText(`"${exePath}" run "${filePath}"`);
    });

    context.subscriptions.push(disposable);
}

function deactivate() {
    if (!client) return undefined;
    return client.stop();
}

module.exports = { activate, deactivate };