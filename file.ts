import http from "node:http";
import fs from "node:fs";
import mime from "mime";

import { args } from "./args.js";

function sendFile(
  res: http.ServerResponse<http.IncomingMessage>,
  fullPath: string
) {
  const stats = fs.statSync(fullPath);

  res.writeHead(200, {
    "Content-Type": args["text"] ? "text/plain" : mime.getType(fullPath)!,
    "Content-Length": stats.size,
  });

  fs.createReadStream(fullPath).pipe(res);
}

export { sendFile };
