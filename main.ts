import { initializeArgs } from "./args.js";
import { createServer } from "./server.js";
import { args } from "./args.js";

// Use pnpm check if using args

initializeArgs();

// Set Required Arguments
args["d"] ?? (args["d"] = ".");
args["t"] ?? (args["t"] = false);

createServer();
