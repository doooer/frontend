const config = {
  isDevelop: process.env.REACT_APP_ENV !== 'production',
  appname: process.env.REACT_APP_NAME || 'myapp',
};

const color = {
  success: 'Green',
  info: 'DodgerBlue',
  error: 'Red',
  warning: 'Tomato',
  log: 'Black',
  debug: 'Orange',
} as const;

export enum LogLevel {
  verbose,
  debug,
  info,
  warning,
  error,
  success,
}

export class Logger {
  protected loglevel: LogLevel;

  private appname: string;

  constructor({ appname }: { appname: string; loglevel: LogLevel }) {
    this.appname = appname;
    this.loglevel = LogLevel.info;
  }

  private getLoggerStyle(fontColor: string, backgroundColor: string = '#ffffff', fontWeight: string = 'bold') {
    return `color: ${fontColor}; background-color: ${backgroundColor}; font-weight: ${fontWeight};`;
  }

  private print(allowLogLevels: LogLevel[], fontColor: string, tag: string, message: any, ...optionalParams: any[]) {
    if (allowLogLevels.includes(this.loglevel)) {
      console.log(`%${this.appname} :: [${tag}]`, this.getLoggerStyle(fontColor), message, ...optionalParams);
    }
  }

  public setLogLevel(loglevel: LogLevel) {
    this.loglevel = loglevel;
  }

  public success(message: any, ...optionalParams: any[]) {
    this.print([LogLevel.verbose, LogLevel.success], color.success, 'success', message, ...optionalParams);
  }

  public error(message: any, ...optionalParams: any[]) {
    this.print([LogLevel.verbose, LogLevel.error], color.error, 'error', message, ...optionalParams);
  }

  public warning(message: any, ...optionalParams: any[]) {
    this.print([LogLevel.verbose, LogLevel.warning], color.warning, 'warning', message, ...optionalParams);
  }

  public info(message: any, ...optionalParams: any[]) {
    this.print([LogLevel.verbose, LogLevel.info], color.info, 'info', message, ...optionalParams);
  }

  public debug(message: any, ...optionalParams: any[]) {
    this.print([LogLevel.verbose, LogLevel.debug], color.debug, 'debug', message, ...optionalParams);
  }

  public log(message: any, ...optionalParams: any[]) {
    this.print([LogLevel.verbose], color.log, 'log', message, ...optionalParams);
  }
}

export const logger = new Logger({
  appname: config.appname,
  loglevel: config.isDevelop ? LogLevel.verbose : LogLevel.error,
});
