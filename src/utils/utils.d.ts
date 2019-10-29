declare namespace Utils {
  interface TemplateconfigType {
    configPath: string;
    initPath: any;
  }

  function readFiles(path: string): Promise<any>;
}
