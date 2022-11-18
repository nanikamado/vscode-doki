"use strict";
const vscode = require("vscode");
const languageclient = require("vscode-languageclient");

let client;

function activate(context) {
    try {
        const serverOptions = {
            command: "cotton",
            args: [
                "--language-server",
            ]
        };
        const clientOptions = {
            documentSelector: [
                {
                    scheme: "file",
                    language: "cotton",
                }
            ],
        };
        client = new languageclient.LanguageClient("cotton-language-server", serverOptions, clientOptions);
        context.subscriptions.push(client.start());
    } catch (e) {
        vscode.window.showErrorMessage(`${e}`);
    }
}

function deactivate() {
    if (client) return client.stop();
}

module.exports = { activate, deactivate }