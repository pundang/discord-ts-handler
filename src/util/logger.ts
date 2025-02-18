import { styleText } from "node:util"

class Logger {
  static log(input: any) {
    console.log(`${styleText("green", `✔ | ${input}`)}`)
  }

  static info(input: any) {
    console.info(`${styleText("yellow", `⚠ | ${input}`)}`)
  }

  static error(input: any) {
    console.info(`${styleText("red", `🚨 | ${input}`)}`)
  }
}

export default Logger
