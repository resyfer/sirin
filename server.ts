import http from "node:http";
import { cwd as getPwd } from "node:process";
import path from "node:path";
import fs from "node:fs";

import chalk from "chalk";
import boxen from "boxen";

import { getIP } from "./ip.js";
import { sendDirectory } from "./directory.js";
import { sendFile } from "./file.js";
import { args } from "./args.js";

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
    console.log(
      boxen(
        chalk.yellow("Server started on: ") +
          chalk.bold.underline.green(`http://${host}:${port}`),
        {
          title: chalk.bold.rgb(160, 32, 240)("Iris"),
          textAlignment: "center",
          padding: 1,
          margin: 1,
        }
      )
    );
  });

  server.on("error", () => {
    console.error("Error");
  });
}

export { createServer };
