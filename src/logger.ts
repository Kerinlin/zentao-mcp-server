import pino from "pino";
import { config } from "./config.js";

/**
 * MCP stdio 协议占用 stdout；日志必须全部走 stderr，否则会污染 JSON-RPC 流导致客户端握手失败。
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
    transport:
      process.env.NODE_ENV === "production"
        ? undefined
        : {
            target: "pino-pretty",
            options: {
              colorize: true,
              translateTime: "SYS:standard",
              destination: 2, // stderr
            },
          },
  },
  // 无 transport 时的默认 destination 也必须是 stderr
  process.env.NODE_ENV === "production" ? pino.destination(2) : undefined,
);
