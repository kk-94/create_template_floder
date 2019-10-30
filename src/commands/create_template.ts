import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import utils from "../utils";
import { promises } from "dns";

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
  utils.checkFloder(configPath);
  let initData = initPath;
  // console.log("importData", configData);
  console.log("initData", Object.keys(initData)[0]);

  return [];
}

export default {
  disposable,
  showCreateList
};
