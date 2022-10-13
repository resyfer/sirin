import http from "node:http";
import { cwd as getPwd } from "node:process";
import path from "node:path";
import fs from "node:fs";

import { getIP } from "./ip";
import { sendDirectory } from "./directory";
import { sendFile } from "./file";
import { args } from "./args";

let server;

function createServer() {
  const host = getIP();
  const port = 3000;

  server = http.createServer((req, res) => {
    const basePath = getPwd();

    if (!req.url) {
      req.url = "/";
    }

    const fullPath = path.join(
      basePath,
      args["d"] as string,
      ...req.url!.split("/")
    );

    if (!fs.existsSync(fullPath)) {
      return res.end("Invalid File Path");
    }

    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      return sendDirectory(res, fullPath);
    } else if (stats.isFile()) {
      return sendFile(res, fullPath);
    } else {
      return res.end("Invalid Path");
    }
  });

  server.listen(port, host, () => {
    console.log(`Server Started on: http://${host}:${port}`);
  });

  server.on("error", () => {
    console.error("Error");
  });
}

export { createServer };
