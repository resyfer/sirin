import chalk from "chalk";
import getPort from "get-port";
import { exit } from "node:process";

import { args } from "./args.js";

let port: number;
const DEFAULT_PORT = 3000;

async function setPort() {
  if (args["p"] && typeof args["p"] !== "number") {
    console.error(chalk.red("Invalid Port Specified."));
    exit(1);
  }

  if (args["p"]) {
    // Preference is port provided if available
    port = await getPort({ port: args["p"] });

    if (port !== args["p"]) {
      console.log(chalk.yellow.italic(`Port ${args["p"]} is unavailable.`));
    }
  } else {
    // Preference is DEFAULT_PORT if available
    port = await getPort({ port: DEFAULT_PORT });
  }
}

export { port, setPort };
