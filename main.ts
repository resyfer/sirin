import { setArgs } from "./args";
import { createServer } from "./server";
import { args } from "./args";

setArgs();

// Set Required Headers
args["d"] ?? (args["d"] = ".");
args["t"] ?? (args["t"] = false);

// console.log(args);

createServer();
