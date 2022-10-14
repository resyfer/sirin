import { initializeArgs } from "./args.js";
import { setIP } from "./ip.js";
import { setPort } from "./port.js";
import { createServer } from "./server.js";

//! Use pnpm check if using args

(async () => {
  initializeArgs();
  setIP();
  await setPort();
  createServer();
})();
