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
    return {
      configPath: { floder: "", file: "", path: "" },
      initPath: initTemplate
    };
  }
  let configTemplateFloder: string = path.join(workspacePath, ".vscode");
  return {
    configPath: {
      floder: configTemplateFloder,
      file: "create_template_floder_config.ts",
      path: `${configTemplateFloder}/create_template_floder_config.ts`
    },
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
 * 检查配置目录
 */
function checkFloder(configPath: Utils.ConfigPath) {
  try {
    if (!fs.existsSync(configPath.floder)) {
      fs.mkdir(configPath.floder, err => {
        if (err) {
          console.log(err);
          return;
        }
        initJS(configPath.path);
      });

      console.log(configPath);
    } else {
      if (!fs.existsSync(configPath.path)) {
        initJS(configPath.path);
      }
    }
  } catch (err) {
    console.log("err1", err);
  }
}

/**
 * 初始化配置文件
 */
function initJS(path: string) {
  fs.writeFile(path, initTemplate, err => {
    console.log("err2", err);
  });
}


export default {
  showConfigList,
  templateConfig,
  readFiles,
  checkFloder
};
