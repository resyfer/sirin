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
${chalk.yellow("USAGE")}:  ${chalk.rgb(160, 32, 240)(manifest.name)} [OPTIONS]

${chalk.yellow("OPTIONS")}:
  -h, --help                Show this helpful message and exit
  -v, --version             Show the version
  -d, --dir  PATH           Provide the relative path of the directory to expose from the PWD
  -p, --port PORT           Provide the preferable PORT
  -t, --text                Get all the files except media as text (no prompt to download them when visiting URL)

${chalk.yellow("EXAMPLES")}:

  sirin
  sirin -h
  sirin --help
  sirin --text
  sirin -t
  sirin --dir="../hello"
  sirin -d ../hello
  sirin --port 9876
  sirin -p 9876
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
    console.log(
      chalk.rgb(160, 32, 240)(manifest.name) +
        " " +
        chalk.green(`v${manifest.version}`)
    );
    exit(0);
  }
}

export { infoChecker };
