const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    const content = await fs.readFile(path.join(basePath, "index.html"));
    // res.setHeader("Content-Type", "text/html");
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(content);
  } else if (req.method === "POST") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    const body = [];

    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });

    req.on("end", () => {
      const title = body.toString().split("=")[1].replaceAll("+", " ");
      addNote(title);
      res.end(`Title = ${title}`);
    });
  }
});
