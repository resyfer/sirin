import minimist from "minimist";

let args: minimist.ParsedArgs;

function setArgs() {
  args = minimist(process.argv.slice(2));
}

function sanitize(path: string) {}

export { args, setArgs, sanitize };
