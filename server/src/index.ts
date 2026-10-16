import { createServer } from "node:http";

const server = createServer((_req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  });

  res.end("Sales Simulator Server is running!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});