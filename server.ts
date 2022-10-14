import http from "node:http";
import { cwd as getPwd } from "node:process";
import path from "node:path";
import fs from "node:fs";

import chalk from "chalk";
import boxen from "boxen";
import clipboard from "clipboardy";
import urlencode from "urlencode";

import { ip } from "./ip.js";
import { port } from "./port.js";
import { sendDirectory } from "./directory.js";
import { sendFile } from "./file.js";
import { args } from "./args.js";

// https://stackoverflow.com/a/70106896
import manifest from "./package.json" assert { type: "json" };

let server;

function createServer() {
  server = http.createServer((req, res) => {
    const basePath = getPwd();

    if (!req.url) {
      req.url = "/";
    }

    req.url = urlencode.decode(req.url);

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

  server.listen(port, ip, () => {
    const url = `http://${ip}:${port}`;

    clipboard.writeSync(url);

    console.log(
      boxen(
        chalk.yellow("Server started on: ") +
          chalk.bold.underline.green(url) +
          "\n" +
          "\n" +
          chalk.gray("URL copied to clipboard"),
        {
          title: `${chalk.bold.rgb(160, 32, 240)("Iris")} ${chalk.blue(
            `v${manifest.version}`
          )}`,
          textAlignment: "center",
          padding: 1,
          margin: 1,
          borderColor: "green",
        }
      ),
      "\n",
      chalk.rgb(
        218,
        52,
        80
      )(`
By Saurav Pal,
Cloud & DevOps Moderator,
GDSC NIT Silchar 2022-23`)
    );
  });

  server.on("error", () => {
    console.error("Error");
  });

  process.on("SIGINT", serverClose(server));
}

function serverClose(server: http.Server) {
  return () => {
    console.log(chalk.red("Closing Server..."));
    server.close();
    console.log(chalk.green("Server Closed!"));
  };
}

export { createServer };
