import { Response } from "express";
import Long from "long";
import { Writer } from "protobufjs";

// sendResponse(message, res): Void
// Sends the server response to the client
export function sendResponse(message: Writer, res: Response) {
  // Get the end of the message
  let end = message.finish();

  // Built the response data
  let r = res
        .header('Server', 'V388 Server')
        .header('cache-control', 'max-age=86400')
        .header('keep-alive', '300')
        .header('Content-Type', 'application/x-protobuf; revision=5112')
        .header('Content-Length', end.length.toString())
        .status(200);

  // Send the response to the client
  r.send(Buffer.from(end));
}

// getBigIntFromLong(n: Long): BigInt
// Given a Long data object, converts
// it into a BigInt and returns it.
export function getBigIntFromLong(n: Long) {
  // Create the default value
  let bigInt = BigInt(0);

  // If 'n' is a long data type
  if (n instanceof Long) {
    // Perform the  bit-wise operations
    bigInt = bigInt | BigInt(n.high);
    bigInt = bigInt << BigInt(32);
    bigInt = bigInt | BigInt(n.low);
  }

  // Return the finished value
  return Number(bigInt);
}

export function sanitizeInput(value: any) {
  return value == null || value == undefined ? undefined : value;
}

export function sanitizeInputNotZero(value: any) {
  return value !== null && value !== undefined && value !== 0
    ? value
    : undefined;
}

export function getTimeStamp(date: Date = new Date()) {
  // Return a timestamp string for the current / provided time
  return String("[" + date.toLocaleString() + "]");
}

/**
 * 将 TimeStamp 转为数据库 DateTime 格式
 * @param timestamp 时间戳 (秒级或毫秒级)
 * @returns 数据库 DateTime 格式字符串 (YYYY-MM-DD HH:mm:ss)
 */
export function ts2dt(timestamp: number): string {
  // 如果时间戳是秒级，转为毫秒级
  if (timestamp.toString().length === 10) {
    timestamp *= 1000;
  }

  const date = new Date(timestamp);

  // 格式化为 YYYY-MM-DD HH:mm:ss
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从 0 开始
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * 将 Date 对象 转为时间戳
 * @param date Date 对象
 * @param isMilliseconds 是否返回毫秒级时间戳 (默认 false: 返回秒级)
 * @returns 时间戳 (秒级或毫秒级)
 */
export function dt2ts(date: Date, isMilliseconds = false): number {
    // 获取时间戳 (毫秒级)
    const timestamp = date.getTime();
  
    // 返回秒级或毫秒级时间戳
    return isMilliseconds ? timestamp : Math.floor(timestamp / 1000);
}
