import { initializeArgs } from "./args.js";
import { setIP } from "./ip.js";
import { setPort } from "./port.js";
import { createServer } from "./server.js";
import { args } from "./args.js";

//! Use pnpm check if using args

(async () => {
  initializeArgs();

  // Set Required Arguments
  args["d"] ?? (args["d"] = ".");
  args["t"] ?? (args["t"] = false);

  setIP();
  await setPort();
  createServer();
})();
