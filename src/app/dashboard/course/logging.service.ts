export class LoggingService {

  constructor() { }

  log(msg){
    console.log(msg);
  }

  warn(msg){
    console.warn(msg)
  }

  error(msg){
    console.error(msg)
  }

}
