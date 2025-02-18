import { styleText } from "node:util"

/**
 * Logger utility class to handle different log levels with styled messages.
 *
 * This class provides static methods to log messages with various styles,
 * including success (green), warning (yellow), and error (red), using icons
 * for better visibility in console output.
 *
 * @class Logger
 */
class Logger {
  /**
   * Logs a success message with a green checkmark.
   *
   * @param {any} input The message or value to log.
   * @static
   * @returns {void}
   */
  static log(input: unknown): void {
    console.log(`${styleText("green", `✔ | ${input}`)}`)
  }

  /**
   * Logs a warning message with a yellow warning sign.
   *
   * @param {any} input The message or value to log.
   * @static
   * @returns {void}
   */
  static info(input: unknown): void {
    console.info(`${styleText("yellow", `⚠ | ${input}`)}`)
  }

  /**
   * Logs an error message with a red emergency sign.
   *
   * @param {any} input The message or value to log.
   * @static
   * @returns {void}
   */
  static error(input: unknown): void {
    console.info(`${styleText("red", `🚨 | ${input}`)}`)
  }
}

export default Logger
