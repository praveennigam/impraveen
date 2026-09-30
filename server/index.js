import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createChatHandler } from "./chatApi.js";
import { createFeedbackHandler } from "./feedbackApi.js";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const port = Number(process.env.PORT) || 4173;

const chat = createChatHandler(process.env.OPENAI_API_KEY);
const feedback = createFeedbackHandler({
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
  to: process.env.FEEDBACK_TO || "praveennigam1999@gmail.com",
});

const types = {
  ".css": "text/css",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendFile(res, filePath) {
  res.setHeader("Content-Type", types[path.extname(filePath)] || "application/octet-stream");
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", "http://localhost");

  if (url.pathname === "/api/chat") {
    chat(req, res);
    return;
  }

  if (url.pathname === "/api/feedback") {
    feedback(req, res);
    return;
  }

  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  let filePath = path.resolve(dist, relative);
  if (filePath !== dist && !filePath.startsWith(dist + path.sep)) {
    res.statusCode = 400;
    res.end("Bad path");
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(dist, "index.html");
  }

  sendFile(res, filePath);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Portfolio server listening on ${port}`);
});
