import fs from "node:fs";
import http from "node:http";

/**
 * @description Send the immediate children of directory
 *
 * @param res Response Object
 * @param fullPath Path to the directory
 */
function sendDirectory(
  res: http.ServerResponse<http.IncomingMessage>,
  fullPath: string
) {
  const dirContents = fs.readdirSync(fullPath);
  res.end(dirContents.join("\n"));
}

export { sendDirectory };
