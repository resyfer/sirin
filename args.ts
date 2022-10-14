import minimist from "minimist";
import { exit } from "process";

let args: minimist.ParsedArgs;

function setArgs() {
  args = minimist(process.argv.slice(2), {
    string: ["dir"],
    boolean: ["text", "help", "version"],

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
      help: false,
      version: false,
    },
  });
}

export { args, setArgs };
