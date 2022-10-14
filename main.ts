#! /usr/bin/env node
import { setArgs } from "./args.js";
import { setIP } from "./ip.js";
import { setPort } from "./port.js";
import { createServer } from "./server.js";
import { infoChecker } from "./cli.js";

//! Use pnpm check if using args

(async () => {
  setArgs();
  setIP();
  infoChecker();
  await setPort();
  createServer();
})();
