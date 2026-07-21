import pino from "pino";
import { config } from "./config.js";

/**
 * MCP stdio 协议占用 stdout；日志必须全部走 stderr，否则会污染 JSON-RPC 流导致客户端握手失败。
 *
 * 注意：不使用 pino-pretty transport（依赖 worker thread 和 thread-stream，
 * Bun compile 打包成单二进制时会找不到 real-require 包）。
 * 如需美化日志，可在运行时设置 LOG_LEVEL=debug 并用外部工具格式化 stderr。
 */
export const logger = pino(
  {
    level: config.LOG_LEVEL,
    redact: {
      paths: [
        "*.password",
        "*.token",
        "*.authorization",
        "req.headers.authorization",
        "response.config.headers.Authorization",
      ],
      remove: true,
    },
  },
  pino.destination(2), // stderr
);
