declare namespace Utils {
  interface TemplateconfigType {
    configPath: ConfigPath;
    initPath: any;
  }

  interface ConfigPath {
    floder: string;
    file: string;
    path: string;
  }

  function readFiles(path: string): Promise<any>;
}
