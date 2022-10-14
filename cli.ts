import { exit } from "process";
import chalk from "chalk";

import { args } from "./args.js";

import manifest from "./package.json" assert { type: "json" };

/**
 * @description Check for information flags
 */
function infoChecker() {
  helpChecker();
  versionChecker();
}

/**
 * @description Check for -h or --help arg
 */
function helpChecker() {
  if (args["help"]) {
    console.log(`
${chalk.yellow("Usage")}:  ${chalk.rgb(160, 32, 240)(manifest.name)} [options]

${chalk.yellow("Options")}:
  -h, --help                Show this helpful message and exit
  -v, --version             Show the version
  -d, --dir  PATH           Provide the relative path of the directory to expose from the PWD
  -p, --port PORT           Provide the preferable PORT
  -t, --text                Get all the files except media as text (no prompt to download them when visiting URL)

${chalk.yellow("Example")}:

sirin
sirin -h ${chalk.gray("or,")} sirin --help
sirin --text ${chalk.gray("or,")} sirin -t
sirin --dir=. ${chalk.gray("or,")} sirin -d .
sirin --port 9876 ${chalk.gray("or,")} sirin -p 9876

sirin -d . -p 9876 -t
`);
    exit(0);
  }
}

/**
 * @description Check for -v or --version arg
 */
function versionChecker() {
  if (args["version"]) {
    console.log(chalk.green(`v${manifest.version}`));
    exit(0);
  }
}

export { infoChecker };
