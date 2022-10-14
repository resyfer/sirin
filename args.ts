import minimist from "minimist";
import { exit } from "process";

let args: minimist.ParsedArgs;

function initializeArgs() {
  args = minimist(process.argv.slice(2), {
    string: ["dir", "version"],
    boolean: ["text", "help"],
    // number: ["port"]
    //* IDK why, but minimist doesn't have numbers in options
    //* even though it supports them
    alias: {
      d: "dir",
      v: "version",
      t: "text",
      p: "port",
      h: "help",
    },
    default: {
      dir: ".",
      text: false,
    },
  });
}

export { args, initializeArgs };
