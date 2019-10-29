import * as vscode from "vscode";
import commands from "./commands";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.concat(commands);
}

export function deactivate() {}
