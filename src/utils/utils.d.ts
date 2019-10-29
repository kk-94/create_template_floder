declare namespace Utils {
  interface TemplateconfigType {
    configPath: string;
    initPath: string;
  }

  function readFiles(path: string): Promise<any>;
}
