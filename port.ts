import chalk from "chalk";
import getPort from "get-port";
import { exit } from "node:process";

import { args } from "./args.js";

let port: number;
const DEFAULT_PORTS = [3000, 3001, 3002, 5000, 8000, 8080];

async function setPort() {
  if (args["port"] && typeof args["port"] !== "number") {
    console.error(chalk.red("Invalid Port Specified."));
    exit(1);
  }

  if (args["port"]) {
    // Preference is port provided if available
    port = await getPort({ port: args["port"] });

    if (port !== args["port"]) {
      console.log(chalk.yellow.italic(`Port ${args["port"]} is unavailable.`));
    }
  } else {
    // Preference is DEFAULT_PORTS if available
    port = await getPort({ port: DEFAULT_PORTS });
  }
}

export { port, setPort };
