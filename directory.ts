import fs from "node:fs";
import http from "node:http";

function sendDirectory(
  res: http.ServerResponse<http.IncomingMessage>,
  fullPath: string
) {
  const dirContents = fs.readdirSync(fullPath);
  res.end(dirContents.join("\n"));
}

export { sendDirectory };
