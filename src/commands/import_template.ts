import * as vscode from "vscode";
import init_template from "./init_template";
// import utils_method from "../utils";

let disposable = vscode.commands.registerCommand(
  "extension.import_template",
  () => {
    vscode.window.showInformationMessage("Hello 11!");
    // console.log(utils_method.templateConfig());
  }
);

export default {
  disposable
};
