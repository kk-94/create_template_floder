import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import initTemplate from "../commands/init_template";

const { workspaceFolders } = vscode.workspace;

const workspacePath = workspaceFolders
  ? workspaceFolders[0].uri.fsPath.replace(/\\/g, "/")
  : undefined;

/**
 * 选择模版的列表
 */
function showConfigList() {
  console.log("1");
}

/**
 * 模版列表配置
 */
function templateConfig(): Utils.TemplateconfigType {
  let initTemplatePath: string = "../commands/init_template.js";
  if (!workspacePath) {
    // return vscode.window.showErrorMessage("workspace path is undefined");
    return { configPath: "", initPath: initTemplate };
  }
  let configTemplatePath: string = path.join(
    workspacePath,
    ".vscode/create_template_floder.ts"
  );
  return {
    configPath: configTemplatePath,
    initPath: initTemplate
  };
}

/**
 * 读文件异步
 */
function readFiles(path: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error: any, res: string) => {
      if (error) {
        reject(error);
      } else {
        resolve(res);
      }
    });
  });
}

/**
 * 同步读取文件
 */

export default {
  showConfigList,
  templateConfig,
  readFiles
};
