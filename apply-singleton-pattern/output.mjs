class Logger {
  log = [];

  output(value) {
    this.log.push(value);
    return console.log(this.log);
  }
}

export const Outputter = new Logger();
