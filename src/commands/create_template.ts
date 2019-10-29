import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import utils from "../utils";

let disposable = vscode.commands.registerCommand(
  "extension.create_template",
  () => {
    // vscode.window.showQuickPick(["1", "2"], { placeHolder: "请选择你的模版" });
    showCreateList();
    // let file = utils.readFiles(configPath);
    // console.log(file);
  }
);

function showCreateList() {
  let initMenu: Array<string>;
  let importMenu: Array<string>;
  let Menu: Array<string>;
  let { configPath, initPath } = utils.templateConfig();
  // let configData = fs.readFileSync(require.resolve(configPath)).toString();
  let initData = require(initPath);
  // console.log("importData", configData);
  console.log("initData", initData);
  return [];
}

export default {
  disposable,
  showCreateList
};
